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
          {/* Portrait */}
          <FadeInView className="md:col-span-2">
            <img
              src={portrait}
              alt="Artist portrait"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </FadeInView>

          {/* Bio */}
          <FadeInView delay={0.2} className="md:col-span-3 max-w-lg">
            <div className="space-y-6 text-editorial-body text-foreground/80">
              <p>
                The work emerges from a sustained engagement with absence, silence, and the thresholds between visibility and disappearance. Over the past decade, the practice has centered on <em className="font-serif">Void</em> — a body of work that resists fixed interpretation and instead asks the viewer to remain in the space of not-knowing.
              </p>
              <p>
                Working across photography, digital media, and text, the approach is deliberately slow. Each piece is the result of extended observation rather than production. The interest is not in creating images, but in discovering what an image can hold when it is stripped to its most essential form.
              </p>
              <p>
                The practice draws from traditions of contemplative art, land art, and minimalism — not as stylistic references but as ethical commitments to attention, duration, and restraint.
              </p>
              <p className="text-muted-foreground text-editorial-sm pt-4">
                Based between studios. Working continuously.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default About;
