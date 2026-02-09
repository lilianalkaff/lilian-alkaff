import FadeInView from "@/components/FadeInView";
import void01 from "@/assets/void-01.jpg";
import void02 from "@/assets/void-02.jpg";
import void03 from "@/assets/void-03.jpg";
import voidHero from "@/assets/void-hero.jpg";

const voidWorks = [
  { src: void01, title: "Void I", year: "2022" },
  { src: void02, title: "Void II", year: "2023" },
  { src: voidHero, title: "Void III", year: "2023", wide: true },
  { src: void03, title: "Void IV", year: "2024" },
];

const Void = () => {
  return (
    <div>
      {/* Header */}
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">Void</h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="text-editorial-subtitle text-muted-foreground mt-6 max-w-xl">
            An ongoing body of work. A sustained inquiry into absence, threshold, and what persists at the edge of perception.
          </p>
        </FadeInView>
      </section>

      {/* Works */}
      <section className="page-padding pb-20 md:pb-32">
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {voidWorks.map((work, i) => (
            <FadeInView key={work.title} delay={0.1}>
              <figure className={`${work.wide ? "w-full" : "max-w-3xl mx-auto"}`}>
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full"
                  loading="lazy"
                />
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span className="text-editorial-sm text-muted-foreground">{work.title}</span>
                  <span className="text-editorial-sm text-muted-foreground">{work.year}</span>
                </figcaption>
              </figure>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Void;
