import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { eyesSeries } from "@/data/eyesSeries";

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
            {series.year}
          </p>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
          {series.works.map((work, i) => (
            <FadeInView key={i} delay={i === 0 ? 0.1 : 0}>
              <figure>
                {work.video ? (
                  <video
                    src={work.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full aspect-square object-cover"
                  />
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
