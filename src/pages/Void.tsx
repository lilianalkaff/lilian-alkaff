import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

const featuredSlugs = ["a-force-unbreakable", "a-piece-missing", "nutritious", "embracing-the-void"];
const featured = voidSeries.filter((s) => featuredSlugs.includes(s.slug));

const Void = () => {
  return (
    <div>

      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground font-medium">
            Void Body of Work
          </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-10 max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>
              Void Body is a process-driven practice centered on the body as absence, the self as dissolution, and emotion as environment.
            </p>
            <p>
              The work originates from a fixed internal sequence: feeling precedes seeing, and seeing precedes making. Creation begins only after this sequence has fully occurred.
            </p>
            <p className="text-muted-foreground">
              The void is not symbolic. It is an operative state entered when perception fractures and certainty dissolves. The body appears through absence rather than representation.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Featured Series */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-12 md:mb-16">
            FEATURED SERIES
          </h2>
        </FadeInView>
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {featured.map((series) => (
            <FadeInView key={series.slug}>
              <Link to={`/void/${series.slug}`} className="block group">
                <figure>
                  <div className="overflow-hidden">
                    <img
                      src={series.cover}
                      alt={series.title}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-between items-baseline">
                    <span className="text-editorial-sm text-muted-foreground">
                      {series.title.toUpperCase()}
                    </span>
                    <span className="text-editorial-sm text-muted-foreground">
                      {series.year}
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Void Archive */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">
            VOID ARCHIVE
          </h2>
        </FadeInView>
        <ul className="space-y-4">
          {voidSeries.map((series) => (
            <li key={series.slug}>
              <FadeInView>
                <Link
                  to={`/void/${series.slug}`}
                  className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  {series.title.toUpperCase()}
                  <span className="ml-4 text-muted-foreground/60">{series.year}</span>
                </Link>
              </FadeInView>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Void;
