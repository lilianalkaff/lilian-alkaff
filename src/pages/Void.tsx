import FadeInView from "@/components/FadeInView";
import void01 from "@/assets/void-01.jpg";
import void02 from "@/assets/void-02.jpg";
import void03 from "@/assets/void-03.jpg";
import voidHero from "@/assets/void-hero.jpg";
const voidWorks = [{
  src: void01,
  title: "Stuck",
  year: "2022"
}, {
  src: void02,
  title: "Void II",
  year: "2023"
}, {
  src: voidHero,
  title: "Void III",
  year: "2023",
  wide: true
}, {
  src: void03,
  title: "Void IV",
  year: "2024"
}];
const Void = () => {
  return <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground font-medium">Void Body of Work </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-10 max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>Void Body is a process-driven artistic practice that investigates the body as absence, the self as dissolution, and emotion as environment.</p>
            <p>
              The work originates from a fixed internal sequence: feeling precedes seeing, and seeing precedes making. Creation begins only after this sequence has fully occurred.
            </p>
            <p className="text-muted-foreground">
              Within this practice, the void is not treated as a metaphor or aesthetic theme, but as an operative state — a condition entered when perception fractures and certainty dissolves. The body appears through absence rather than representation, registering the trace of disappearance rather than depicting form.
            </p>
            <p className="text-muted-foreground">
              Emotion functions as structure. Color and environment externalize internal states, situating the work without narrating it and allowing feeling to remain unresolved.
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {voidWorks.map(work => <FadeInView key={work.title} delay={0.1}>
              <figure className={`${work.wide ? "w-full" : "max-w-3xl mx-auto"}`}>
                <img src={work.src} alt={work.title} className="w-full" loading="lazy" />
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span className="text-editorial-sm text-muted-foreground">{work.title}</span>
                  <span className="text-editorial-sm text-muted-foreground">{work.year}</span>
                </figcaption>
              </figure>
            </FadeInView>)}
        </div>
      </section>
    </div>;
};
export default Void;