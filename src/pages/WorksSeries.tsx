import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { worksSeries } from "@/data/worksSeries";

const WorksSeries = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = worksSeries.findIndex((s) => s.slug === slug);
  const series = index >= 0 ? worksSeries[index] : undefined;
  const prev = index > 0 ? worksSeries[index - 1] : undefined;
  const next = index >= 0 && index < worksSeries.length - 1 ? worksSeries[index + 1] : undefined;

  if (!series) {
    return (
      <div className="page-padding section-spacing">
        <p className="text-editorial-body text-muted-foreground">
          Series not found.
        </p>
        <Link
          to="/works"
          className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 mt-8 inline-block"
        >
          ← BACK TO OTHER WORKS
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <Link
            to="/works"
            className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            OTHER WORKS
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
            to={`/works/${prev.slug}`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            ← {prev.title.toUpperCase()}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/works/${next.slug}`}
            className="text-right text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            {next.title.toUpperCase()} →
          </Link>
        ) : (
          <Link
            to="/works"
            className="text-right text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            BACK TO OTHER WORKS
          </Link>
        )}
      </nav>
    </div>
  );
};

export default WorksSeries;
