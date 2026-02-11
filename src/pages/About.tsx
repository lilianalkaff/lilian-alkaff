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

              alt="Artist portrait"
              className="w-full max-w-sm"
              loading="lazy" src="/lovable-uploads/eceed8eb-9786-4a00-a742-6b07eb3117e3.jpg" />

          </FadeInView>

          <FadeInView delay={0.2} className="md:col-span-3 max-w-lg">
            <div className="space-y-6 text-editorial-body text-foreground">
              <p>Lilian Alkaff is a visual artist whose practice follows a fixed internal sequence: feeling, seeing, making.

              </p>
              <p>The work does not begin with concept or intention. It begins with an internal shift — a moment when perception no longer aligns with expectation. From that rupture, images become visible. Only then are they made.

              </p>
              <p>Across bodies of work, the human figure often appears through absence rather than representation. Identity dissolves; presence remains.

              </p>
              <p className="text-muted-foreground text-editorial-sm pt-4">
                The practice is ongoing.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>);

};

export default About;