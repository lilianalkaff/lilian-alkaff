import FadeInView from "@/components/FadeInView";

const About = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">About</h1>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <FadeInView delay={0.2}>
          <div className="max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>
              Lilian Alkaff is a visual artist whose practice follows a fixed internal sequence: she feels, she sees, then she creates. There is no predetermined concept or meaning guiding the work. Meaning emerges only after the act of making.
            </p>
            <p>
              Her work approaches the human figure as absence rather than representation — a trace of dissolution rather than a stable identity. The void refers to a specific internal condition entered before creation begins.
            </p>
            <p>
              Creation begins only after this internal rupture. Emotion precedes form. Across bodies of work, the process remains constant, even as materials and forms change.
            </p>
            <p className="text-muted-foreground text-editorial-sm pt-4">
              The practice is ongoing.
            </p>
          </div>
        </FadeInView>
      </section>
    </div>
  );
};

export default About;
