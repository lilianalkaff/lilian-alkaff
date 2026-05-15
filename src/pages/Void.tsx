import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

const featuredSlugs = ["a-force-unbreakable", "a-piece-missing", "nutritious", "embracing-the-void"];
const featured = voidSeries.filter((s) => featuredSlugs.includes(s.slug));

const Void = () => {
  return (
    <div>
      {/* Featured Series */}
      <section className="page-padding section-spacing pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">
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
                    className="max-h-[75vh] w-auto mx-auto block object-contain"
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
