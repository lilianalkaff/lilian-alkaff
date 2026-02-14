import FadeInView from "@/components/FadeInView";
import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">About</h1>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <FadeInView delay={0.2}>
            <div className="space-y-6 text-editorial-body text-foreground">
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
          <FadeInView delay={0.3}>
            <img

              alt="Lilian Alkaff"
              className="w-full"
              loading="lazy" src="/lovable-uploads/1e64b4a0-91bb-417a-959a-e56584512df7.jpg" />

          </FadeInView>
        </div>
      </section>
    </div>);

};

export default About;