import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

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
            <p>Void Body is a process-driven artistic practice that investigates the body as absence, the self as dissolution, and emotion as environment.</p>
            <p>
              The work originates from a fixed internal sequence: feeling precedes seeing, and seeing precedes making. Creation begins only after this sequence has fully occurred.
            </p>
            <p className="text-muted-foreground">The void is not symbolic. It is an operative state entered when perception fractures and certainty dissolves. The body appears through absence rather than representation.

            </p>
            <p className="text-muted-foreground">Color forms the emotional environment surrounding the void. It externalizes the internal condition that precedes seeing and making.

            </p>
          </div>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {voidSeries.map((series, i) =>
          <FadeInView key={series.slug} delay={i === 0 ? 0.1 : 0}>
              <Link
              to={`/void/${series.slug}`}
              className="block group">

                <figure>
                  <div className="overflow-hidden">
                    <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full transition-opacity duration-700 group-hover:opacity-90"
                    loading="lazy" />

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
          )}
        </div>
      </section>
    </div>);

};

export default Void;