import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";

export interface GalleryItem {
  src: string;
  /** width / height */
  ratio?: number;
  caption?: string;
  alt: string;
}

interface Props {
  items: GalleryItem[];
  /** Shown in the full-screen view, e.g. the series title */
  title?: string;
}

/**
 * Lays images out in rows that each fill the full width. Images in a row share one height,
 * every image is shown whole (no cropping), and the original order is kept.
 */
const JustifiedGallery = ({ items, title }: Props) => {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const gap = width < 640 ? 12 : 24;
  const target = width < 640 ? 230 : 340;
  const maxPerRow = width < 640 ? 2 : 4;

  // Split the images (in order) into rows that each fill the full width,
  // choosing the split whose row heights stay closest to the target height.
  const rows: { items: GalleryItem[]; height: number }[] = [];
  if (width > 0 && items.length) {
    const n = items.length;
    const ratios = items.map((it) => it.ratio ?? 1);
    const rowHeight = (i: number, j: number) => {
      let sum = 0;
      for (let k = i; k < j; k++) sum += ratios[k];
      return (width - gap * (j - i - 1)) / sum;
    };
    const best = new Array(n + 1).fill(Infinity);
    const from = new Array(n + 1).fill(0);
    best[0] = 0;
    for (let j = 1; j <= n; j++) {
      for (let i = Math.max(0, j - maxPerRow); i < j; i++) {
        const h = rowHeight(i, j);
        const cost = best[i] + (h - target) ** 2;
        if (cost < best[j]) {
          best[j] = cost;
          from[j] = i;
        }
      }
    }
    const breaks: [number, number][] = [];
    for (let j = n; j > 0; j = from[j]) breaks.unshift([from[j], j]);
    for (const [i, j] of breaks) rows.push({ items: items.slice(i, j), height: rowHeight(i, j) });
  }

  return (
    <div ref={ref} className="w-full">
      {rows.map((row, i) => (
        <div key={i} className="flex" style={{ gap, marginBottom: gap * 1.5 }}>
          {row.items.map((item, j) => {
            const w = (item.ratio ?? 1) * row.height;
            return (
              <figure key={j} style={{ width: w, flex: "none" }}>
                <button
                  type="button"
                  onClick={() => setOpen(items.indexOf(item))}
                  aria-label={`View ${item.alt} large`}
                  className="block cursor-zoom-in group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={Math.round(w)}
                    height={Math.round(row.height)}
                    style={{ width: w, height: row.height }}
                    className="block transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                  />
                </button>
                {item.caption && (
                  <figcaption className="mt-2 text-editorial-sm text-muted-foreground/60">{item.caption}</figcaption>
                )}
              </figure>
            );
          })}
        </div>
      ))}
      {open !== null && (
        <Lightbox items={items} index={open} title={title} onClose={close} onIndex={setOpen} />
      )}
    </div>
  );
};

export default JustifiedGallery;
