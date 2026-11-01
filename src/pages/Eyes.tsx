import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { eyesFeatured, eyesSeries } from "@/data/eyesSeries";

const Eyes = () => {
  return (
    <div>
      {/* Series Statement */}
      <section className="page-padding section-spacing pb-0">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">ALL SEEING EYES</h2>
          <div className="max-w-2xl text-editorial-body text-foreground space-y-8" style={{ lineHeight: 1.9 }}>
            <p>All Seeing Eyes starts from nine eyes she drew in 2019 and 2020. The first is her own right eye.</p>
            <p>She moves through each eye slowly and cuts out thirteen fragments: a piece of the iris, the edge of the pupil, the lashes at the corner. Each fragment is a Still.</p>
            <p>Then she lets each Still go. She gives it to Repper's Dream Mode, a program that animates an image on its own, and does not set it or steer it. She watches. At 2 minutes 34 seconds she stops the recording, mid-motion, the way a dream ends before you understand it. That is a Dream. The program saves nothing, so each Dream happened once.</p>
            <p>Thirteen Stills and thirteen Dreams per eye, nine eyes: 234 works, and 2 + 3 + 4 = 9. Eye 01 is finished. Eight are still to come.</p>
          </div>
        </FadeInView>
      </section>

      <section className="page-padding section-spacing pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">
            FEATURED WORKS
          </h2>
        </FadeInView>
        <div className="mx-auto max-w-3xl space-y-20 md:space-y-32 lg:space-y-40">
          {eyesFeatured.map((work, i) => (
            <FadeInView key={i}>
              <Link to={`/all-seeing-eyes/${work.slug}`} className="block group">
                <figure>
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-4 flex justify-between text-editorial-sm text-muted-foreground">
                    <span>{work.title.toUpperCase()}</span>
                    <span className="text-muted-foreground/60">{work.year}</span>
                  </figcaption>
                </figure>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <ul className="mx-auto max-w-3xl space-y-4">
          {eyesSeries.map((series) => (
            <li key={series.slug}>
              <FadeInView>
                <Link
                  to={`/all-seeing-eyes/${series.slug}`}
                  className="text-editorial-body text-foreground hover:text-muted-foreground transition-colors duration-500"
                >
                  {series.title.split(" · ")[0]}: all Stills and Dreams →
                </Link>
              </FadeInView>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Eyes;
