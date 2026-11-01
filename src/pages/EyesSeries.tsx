import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { eyesSeries } from "@/data/eyesSeries";

/** First frame of a Cloudinary video, as a still image. */
const firstFrame = (url: string) =>
  url.replace("/video/upload/", "/video/upload/so_0/").replace(/\.mp4$/, ".jpg");

/**
 * A Dream plays once, from the moment it is scrolled into view, and stops on its
 * last frame. It never loops: the Dreams end mid-motion, like a dream.
 */
const Dream = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.ended) video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={firstFrame(src)}
      muted
      playsInline
      controls
      preload="metadata"
      className="w-full aspect-square object-contain bg-black"
    />
  );
};

const EyesSeries = () => {
  const { slug } = useParams<{ slug: string }>();
  const series = eyesSeries.find((s) => s.slug === slug);

  if (!series) {
    return (
      <div className="page-padding section-spacing">
        <p className="text-editorial-body text-muted-foreground">
          Series not found.
        </p>
        <Link
          to="/all-seeing-eyes"
          className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 mt-8 inline-block"
        >
          ← BACK TO ALL SEEING EYES
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <Link
            to="/all-seeing-eyes"
            className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            ALL SEEING EYES
          </Link>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="text-editorial-title text-foreground font-medium mt-8">
            {series.title}
          </h1>
        </FadeInView>
        <FadeInView delay={0.15}>
          <p className="text-editorial-sm text-muted-foreground mt-4">
            {series.note ?? series.year}
          </p>
        </FadeInView>
        {series.details && (
          <FadeInView delay={0.2}>
            <div className="max-w-2xl mt-8 space-y-2">
              {series.details.map((d) => (
                <p key={d} className="text-editorial-sm text-muted-foreground">
                  {d}
                </p>
              ))}
            </div>
          </FadeInView>
        )}
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
          {series.works.map((work, i) => (
            <FadeInView key={i} delay={i === 0 ? 0.1 : 0}>
              <figure>
                {work.video ? (
                  <Dream src={work.video} />
                ) : work.src ? (
                  <img
                    src={work.src}
                    alt={`${series.title}${work.caption ? ` — ${work.caption}` : ""}`}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-square bg-muted/30" />
                )}
                {work.caption && (
                  <figcaption className="mt-4 text-editorial-sm text-muted-foreground">
                    {work.caption}
                  </figcaption>
                )}
              </figure>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EyesSeries;
