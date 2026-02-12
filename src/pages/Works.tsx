import FadeInView from "@/components/FadeInView";
import worksHeadless from "@/assets/works-headless.jpg";
import worksFlower from "@/assets/works-flower.jpg";
import worksHands from "@/assets/works-hands.jpg";
import worksLips from "@/assets/works-lips.jpg";
import worksLines from "@/assets/works-lines.jpg";
import worksGraycity from "@/assets/works-graycity.jpg";

interface WorkSeries {
  title: string;
  medium: string;
  year: string;
  works: {src: string; caption: string;}[];
}

const series: WorkSeries[] = [
  {
    title: "Headless People",
    medium: "Digital",
    year: "2019",
    works: [{ src: worksHeadless, caption: "Headless People, 2019" }],
  },
  {
    title: "Flower People",
    medium: "Digital",
    year: "2020",
    works: [{ src: worksFlower, caption: "Flower People, 2020" }],
  },
  {
    title: "Close Up — Hands",
    medium: "Digital",
    year: "2022",
    works: [{ src: worksHands, caption: "Close Up — Hands, 2022" }],
  },
  {
    title: "Close Up — Lips",
    medium: "Digital",
    year: "2022",
    works: [{ src: worksLips, caption: "Close Up — Lips, 2022" }],
  },
  {
    title: "Lines",
    medium: "Digital",
    year: "2022–23",
    works: [{ src: worksLines, caption: "Lines, 2022–23" }],
  },
  {
    title: "Gray City",
    medium: "Photography",
    year: "2024",
    works: [{ src: worksGraycity, caption: "Gray City, 2024" }],
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
          <div className="mt-10 max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>This section gathers selected works outside the Void Body practice.

            </p>
            <p>
              These works move across forms, materials, and periods, and are shared as part of an ongoing artistic life rather than a complete archive.
            </p>
          </div>
        </FadeInView>
        <FadeInView delay={0.3}>
          <p className="text-editorial-sm text-muted-foreground mt-8 max-w-xl">
            Each body of work emerges through the same internal process, even as form and material change.
          </p>
        </FadeInView>
      </section>

      {series.map((s) =>
      <section key={s.title} className="page-padding pb-20 md:pb-32">
          <FadeInView>
            <div className="flex items-baseline gap-4 mb-10 md:mb-14 border-b border-border pb-4">
              <h2 className="text-editorial-section text-foreground">{s.title}</h2>
              <span className="text-editorial-sm text-muted-foreground">{s.medium}, {s.year}</span>
            </div>
          </FadeInView>

          <div className={`grid gap-8 md:gap-12 ${s.works.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
            {s.works.map((work, wi) =>
          <FadeInView key={work.caption} delay={wi * 0.1}>
                <figure>
                  <img
                src={work.src}
                alt={work.caption}
                className="w-full"
                loading="lazy" />

                  <figcaption className="mt-3 text-editorial-sm text-muted-foreground">
                    {work.caption}
                  </figcaption>
                </figure>
              </FadeInView>
          )}
          </div>
        </section>
      )}
    </div>);

};

export default Works;