import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  items: LightboxItem[];
  index: number;
  title?: string;
  onClose: () => void;
  onIndex: (i: number) => void;
}

/** Full-screen view of one image at a time, with previous/next. */
const Lightbox = ({ items, index, title, onClose, onIndex }: Props) => {
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onIndex(index - 1);
      if (e.key === "ArrowRight" && hasNext) onIndex(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, hasPrev, hasNext, onClose, onIndex]);

  // Keep the page behind from scrolling while the image is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  if (!item) return null;

  const navButton =
    "hidden md:block absolute top-1/2 -translate-y-1/2 p-4 text-3xl leading-none text-muted-foreground hover:text-foreground transition-colors duration-300";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[100] bg-background flex flex-col"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (dx > 50 && hasPrev) onIndex(index - 1);
        if (dx < -50 && hasNext) onIndex(index + 1);
      }}
    >
      <div className="flex items-center justify-between page-padding py-5 md:py-6">
        <p className="text-editorial-sm text-muted-foreground">
          {title ? `${title.toUpperCase()} · ` : ""}
          {item.caption ?? ""}
          <span className="ml-3 text-muted-foreground/60">
            {index + 1} / {items.length}
          </span>
          {items.length > 1 && <span className="md:hidden ml-3 text-muted-foreground/60">· SWIPE</span>}
        </p>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          CLOSE ✕
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-20 pb-6 md:pb-10">
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        {hasPrev && (
          <button
            type="button"
            aria-label="Previous image"
            className={`${navButton} left-4`}
            onClick={(e) => {
              e.stopPropagation();
              onIndex(index - 1);
            }}
          >
            ←
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            aria-label="Next image"
            className={`${navButton} right-4`}
            onClick={(e) => {
              e.stopPropagation();
              onIndex(index + 1);
            }}
          >
            →
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default Lightbox;
