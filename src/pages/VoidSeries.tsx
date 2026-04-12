import { useParams, Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import { voidSeries } from "@/data/voidSeries";

const VoidSeries = () => {
  const { slug } = useParams<{slug: string;}>();
  const series = voidSeries.find((s) => s.slug === slug);

  if (!series) {
    return (
      <div className="page-padding section-spacing">
        <p className="text-editorial-body text-muted-foreground">
          Series not found.
        </p>
        <Link
          to="/void"
          className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 mt-8 inline-block">

          ← BACK TO VOID
        </Link>
      </div>);

  }

  const hasWorks = series.works.length > 0;

  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <Link
            to="/void"
            className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500">

            VOID
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
          {hasWorks ? (
            <>
              {series.works.map((work, i) => (
                <FadeInView key={i} delay={i === 0 ? 0.1 : 0}>
                  <img
                    src={work.src}
                    alt={`${series.title} — ${i + 1}`}
                    className="w-full md:max-h-[85vh] md:w-auto md:object-contain"
                    loading="lazy"
                  />
                </FadeInView>
              ))}
              {/* Cover shown last */}
              <FadeInView delay={0}>
                <img
                  src={series.cover}
                  alt={`${series.title} — ${series.works.length + 1}`}
                   className="w-full md:max-h-[85vh] md:w-auto md:object-contain"
                  loading="lazy"
                />
              </FadeInView>
            </>
          ) : (
            <FadeInView delay={0.1}>
              <img
                src={series.cover}
                alt={`${series.title} — 1`}
                className="w-full md:max-h-[85vh] md:w-auto md:object-contain"
                loading="lazy"
              />
            </FadeInView>
          )}
        </div>
      </section>
    </div>);

};

export default VoidSeries;