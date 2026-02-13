import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { worksSeries } from "@/data/worksSeries";

const WorksSeries = () => {
  const { slug } = useParams<{ slug: string }>();
  const series = worksSeries.find((s) => s.slug === slug);

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
          ← BACK TO WORKS
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
            WORKS
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
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          <FadeInView delay={0.1}>
            <img
              src={series.cover}
              alt={series.title}
              className="w-full"
              loading="lazy"
            />
          </FadeInView>

          {series.works.map((work, i) => (
            <FadeInView key={i} delay={0}>
              <img
                src={work.src}
                alt={`${series.title} — ${i + 2}`}
                className="w-full"
                loading="lazy"
              />
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorksSeries;
