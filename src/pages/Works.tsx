import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { worksSeries } from "@/data/worksSeries";

const Works = () => {
  return (
    <div className="page-padding section-spacing">
      <div className="space-y-24 md:space-y-32">
        {worksSeries.map((s) => {
          const images = s.works.map((w) => w.src);
          return (
            <section key={s.slug}>
              <FadeInView>
                <header className="mb-8 md:mb-10">
                  <h2 className="text-editorial-section text-foreground">{s.title}</h2>
                  <p className="text-editorial-sm text-muted-foreground mt-1">{s.year}</p>
                </header>
              </FadeInView>

              <Link to={`/works/${s.slug}`} className="block">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {images.map((src, i) => (
                    <FadeInView key={i}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={src}
                          alt={`${s.title} — ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </FadeInView>
                  ))}
                </div>
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
