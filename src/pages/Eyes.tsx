import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { eyesFeatured, eyesSeries } from "@/data/eyesSeries";

const Eyes = () => {
  return (
    <div>
      <section className="page-padding section-spacing pb-20 md:pb-32">
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {eyesFeatured.map((work, i) => (
            <FadeInView key={i}>
              <Link to={`/all-seeing-eyes/${work.slug}`} className="block group">
                <figure>
                  <div className="overflow-hidden">
                    <img
                      src={work.src}
                      alt={work.title}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-between items-baseline">
                    <span className="text-editorial-sm text-muted-foreground">
                      {work.title.toUpperCase()}
                    </span>
                    <span className="text-editorial-sm text-muted-foreground">
                      {work.year}
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </FadeInView>
          ))}
        </div>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <ul className="space-y-4">
          {eyesSeries.map((series) => (
            <li key={series.slug}>
              <FadeInView>
                <Link
                  to={`/all-seeing-eyes/${series.slug}`}
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

export default Eyes;
