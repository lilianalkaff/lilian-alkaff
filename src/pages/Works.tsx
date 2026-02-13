import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { worksSeries } from "@/data/worksSeries";

const Works = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">Works</h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-10 max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>Selected works outside the Void Body practice.</p>
            <p>
              These works move across forms and materials and are presented as part of an ongoing artistic life rather than a complete archive.
            </p>
          </div>
        </FadeInView>
      </section>

      {worksSeries.map((s, si) => (
        <section key={s.slug} className="page-padding pb-20 md:pb-32">
          <FadeInView>
            <div className="flex items-baseline gap-4 mb-10 md:mb-14 border-b border-border pb-4">
              <h2 className="text-editorial-section text-foreground">{s.title}</h2>
              <span className="text-editorial-sm text-muted-foreground">
                {s.medium}, {s.year}
              </span>
            </div>
          </FadeInView>

          <div className={`${si % 2 === 0 ? "max-w-sm" : "max-w-sm md:ml-auto"}`}>
            <FadeInView>
              <Link to={`/works/${s.slug}`} className="block group">
                <figure>
                  <img
                    src={s.cover}
                    alt={s.title}
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-editorial-sm text-muted-foreground">
                    {s.title}, {s.year}
                  </figcaption>
                </figure>
              </Link>
            </FadeInView>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Works;
