import FadeInView from "@/components/FadeInView";
import portrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">About</h1>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-24">
          <FadeInView className="md:col-span-2">
            <img
              src={portrait}
              alt="Artist portrait"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </FadeInView>

          <FadeInView delay={0.2} className="md:col-span-3 max-w-lg">
            <div className="space-y-6 text-editorial-body text-foreground">
              <p>
                I am a visual artist whose practice follows a fixed internal sequence: I feel, I see, then I create. There is no logic, concept, or meaning guiding the work in advance. Meaning comes only after the act of making.
              </p>
              <p>
                My work often centers on the human figure, not as representation, but as absence — a trace left behind when identity dissolves. The process requires entering a state I refer to as the void: a condition in which perception fractures and the familiar self temporarily disappears.
              </p>
              <p>
                Creation begins only after this internal rupture. Emotion precedes form, and feeling determines what becomes visible. Across bodies of work, this process remains constant, even as materials, subjects, and forms shift.
              </p>
              <p className="text-muted-foreground text-editorial-sm pt-4">
                The practice is ongoing.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default About;
