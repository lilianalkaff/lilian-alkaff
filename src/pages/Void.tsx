import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

const featuredSlugs = ["a-force-unbreakable", "a-piece-missing", "nutritious", "embracing-the-void"];
const featured = voidSeries.filter((s) => featuredSlugs.includes(s.slug));

const Void = () => {
  return (
    <div>
      {/* The story behind the work */}
      <section className="page-padding section-spacing pb-0">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">VOID BODY · 2023–2024</h2>
          <div className="max-w-2xl text-editorial-body text-foreground space-y-8" style={{ lineHeight: 1.9 }}>
            <p>
              In 2023 I felt connections with people more intense than anything I had known: vivid, total, at
              the level of the soul. For a while everything looked perfect, as if I had finally found what I had
              been looking for. Then the ground was pulled out from under me and I was back at zero. Void Body is
              what I made inside that: thirteen series of drawings, each one a state I was living in.
            </p>
            <p>
              I know this cycle. I started drawing at seventeen, on a school night in Aden, as the war was
              beginning, and my life has moved this way ever since. Something builds until it feels like the
              answer, then it falls away, and I begin again.
            </p>
            <p>
              The faces had been leaving my work for years. In 2019 I drew my own right eye, my first digital
              line drawing, and turned its strokes into a custom brush: short marks joined end to end. Every line
              I have drawn since comes from that eye. After it came bodies without heads, then flowers where the
              heads should be, then only lips. In Void Body the face is gone. I could not draw the people I felt
              this for, so I drew bodies that could belong to anyone. Each began as a photograph of a stranger
              found online. I took away everything that made them someone (the face, the skin, the setting, the
              photograph itself), kept only the outline, redrew it with my brush in Adobe Illustrator and filled it
              with black. What the face would have said, I gave to the colour: oxblood when the heat had nowhere
              to go, navy when it turned cold, ice-blue for the calm after it.
            </p>
            <p>
              Sometimes the work understood things before I did. While making the twelfth series I was reading
              David Hawkins's <em>Power vs. Force</em>: power moves through things, while force pushes on them
              from outside, and what force holds together eventually breaks. I meant to call the series Power.
              The word that kept coming was Force, and I let it stand: <em>A Force, Unbreakable</em>. Months
              later the relationship ended, and I understood both words. What held us together was force, so it
              broke. What could not break was the split between us. I had already drawn it: two bodies holding
              each other across a ground cut in two.
            </p>
            <p>
              <em>Stuck</em> was the last series. While drawing it I knew the figure fixed at the edge of every
              frame was the other person, and the one moving through the centre, trying every position until it
              was gone, was me. I didn't know why. We had met in a place that was harming us both, left it
              together, and planned what we would build. Then the other person got scared. Two years after I made{" "}
              <em>Stuck</em>, a friend told me they had gone back to that same place and were doing exactly what
              they had done before, as if nothing had happened. That was the why. One of us was stuck in place.
              The other was stuck in motion, trying alone to do what was meant to be done by two.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* The thirteen series, in order of creation */}
      <section className="page-padding pt-20 md:pt-28 pb-0">
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

      {/* Featured Series */}
      <section className="page-padding section-spacing pb-20 md:pb-32">
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
    </div>
  );
};

export default Void;
