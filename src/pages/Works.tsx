import FadeInView from "@/components/FadeInView";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";

interface WorkSeries {
  title: string;
  medium: string;
  works: { src: string; caption: string }[];
}

const series: WorkSeries[] = [
  {
    title: "Threshold",
    medium: "Photography",
    works: [
      { src: work01, caption: "Threshold I, 2023" },
      { src: work02, caption: "Threshold II, 2024" },
    ],
  },
  {
    title: "Still Room",
    medium: "Digital",
    works: [
      { src: work01, caption: "Still Room I, 2024" },
    ],
  },
];

const Works = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">Works</h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="text-editorial-body text-muted-foreground mt-6 max-w-lg">
            Selected works across photography, digital, and other media.
          </p>
        </FadeInView>
      </section>

      {series.map((s, si) => (
        <section key={s.title} className="page-padding pb-20 md:pb-32">
          <FadeInView>
            <div className="flex items-baseline gap-4 mb-10 md:mb-14 border-b border-border pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">{s.title}</h2>
              <span className="text-editorial-sm text-muted-foreground">{s.medium}</span>
            </div>
          </FadeInView>

          <div className={`grid gap-8 md:gap-12 ${s.works.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
            {s.works.map((work, wi) => (
              <FadeInView key={work.caption} delay={wi * 0.1}>
                <figure>
                  <img
                    src={work.src}
                    alt={work.caption}
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-editorial-sm text-muted-foreground">
                    {work.caption}
                  </figcaption>
                </figure>
              </FadeInView>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Works;
