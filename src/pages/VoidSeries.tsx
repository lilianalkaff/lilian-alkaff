import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries, voidMedium } from "@/data/voidSeries";

const VoidSeries = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = voidSeries.findIndex((s) => s.slug === slug);
  const series = index >= 0 ? voidSeries[index] : undefined;
  const prev = index > 0 ? voidSeries[index - 1] : undefined;
  const next = index >= 0 && index < voidSeries.length - 1 ? voidSeries[index + 1] : undefined;

  if (!series) {
    return (
      <div className="page-padding section-spacing">
        <p className="text-editorial-body text-muted-foreground">
          Series not found.
        </p>
        <Link
          to="/void-body"
          className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 mt-8 inline-block"
        >
          ← BACK TO VOID BODY
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <Link
            to="/void-body"
            className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            VOID BODY
          </Link>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="text-editorial-title text-foreground font-medium mt-8">
            {series.title}
          </h1>
        </FadeInView>
        <FadeInView delay={0.15}>
          <p className="text-editorial-sm text-muted-foreground mt-4">
            {series.year} · SERIES {index + 1} OF {voidSeries.length}
          </p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="max-w-2xl mt-10 space-y-3">
            <p className="text-editorial-body text-foreground" style={{ lineHeight: 1.7 }}>
              {series.caption}
            </p>
            <p className="text-editorial-sm text-muted-foreground">
              Ground: {series.ground} · {voidMedium}
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
          {series.works.map((work, i) => (
            <FadeInView key={i} delay={i === 0 ? 0.1 : 0}>
              <figure>
                <img
                  src={work.src}
                  alt={`${series.title}${work.caption ? ` — ${work.caption}` : ""}`}
                  className="w-full"
                  loading="lazy"
                />
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

      <nav className="page-padding pb-20 md:pb-32 flex justify-between gap-6 text-editorial-sm">
        {prev ? (
          <Link
            to={`/void-body/${prev.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            ← {prev.title.toUpperCase()}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/void-body/${next.slug}`}
            className="text-right text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            {next.title.toUpperCase()} →
          </Link>
        ) : (
          <Link
            to="/void-body"
            className="text-right text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            BACK TO VOID BODY
          </Link>
        )}
      </nav>
    </div>
  );
};

export default VoidSeries;
