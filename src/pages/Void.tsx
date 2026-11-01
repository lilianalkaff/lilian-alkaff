import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

const featuredSlugs = ["a-force-unbreakable", "a-piece-missing", "nutritious", "embracing-the-void"];
const featured = voidSeries.filter((s) => featuredSlugs.includes(s.slug));

const Void = () => {
  return (
    <div>
      {/* Series Statement */}
      <section className="page-padding section-spacing pb-0">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">VOID BODY</h2>
          <div className="max-w-2xl text-editorial-body text-foreground space-y-8" style={{ lineHeight: 1.9 }}>
            <p>Thirteen series of drawings, made in 2023 and 2024. Each series is a state she was in, and the ground colour says which: oxblood when the heat had nowhere to go, navy when it went cold, ice-blue for the calm after.</p>
            <p>Every body starts as a photo of a stranger. She takes away the face, the skin and the setting, keeps the outline, redraws it with her own strokes and fills it black. What is left could be anyone.</p>
            <p>The void is not a symbol. It is what she lived in when everything she believed fell apart and nothing had come to replace it yet.</p>
            <p>
              <Link to="/void-body-story" className="text-muted-foreground hover:text-foreground transition-colors duration-500">
                The story behind the work →
              </Link>
            </p>
          </div>
        </FadeInView>
      </section>

      {/* Featured Series */}
      <section className="page-padding section-spacing pb-0">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">
            FEATURED SERIES
          </h2>
        </FadeInView>
        <div className="mx-auto max-w-3xl space-y-20 md:space-y-32 lg:space-y-40">
          {featured.map((series) => (
            <FadeInView key={series.slug}>
              <Link to={`/void-body/${series.slug}`} className="block group">
                <figure>
                  <img
                    src={series.cover}
                    alt={series.title}
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-4 flex justify-between text-editorial-sm text-muted-foreground">
                    <span>{series.title.toUpperCase()}</span>
                    <span className="text-muted-foreground/60">{series.year}</span>
                  </figcaption>
                </figure>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>
      {/* The thirteen series, in order of creation */}
      <section className="page-padding section-spacing pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">
            THIRTEEN SERIES, IN THE ORDER THEY WERE MADE
          </h2>
        </FadeInView>
        <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
          {voidSeries.map((series, i) => (
            <li key={series.slug}>
              <FadeInView>
                <Link to={`/void-body/${series.slug}`} className="block group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={series.cover}
                      alt={`${series.title}, ${series.ground.toLowerCase()} ground`}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-editorial-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    <span className="text-muted-foreground/60 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {series.title.toUpperCase()}
                  </p>
                  <p className="mt-1 text-editorial-sm text-muted-foreground/60">
                    {series.ground} · {series.year}
                  </p>
                </Link>
              </FadeInView>
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
};

export default Void;
