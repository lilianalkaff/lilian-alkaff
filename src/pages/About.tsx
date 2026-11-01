import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";

const linkClass = "text-muted-foreground hover:text-foreground transition-colors duration-500";

const groups: React.ReactNode[][] = [
  [
    "It began on a school night in Aden, Yemen, in 2015. She was seventeen, in bed, trying to sleep. Something got her up to draw. She didn't choose it.",
    "She had never liked art. She was sporty, and art class was the worst part of school. That night she drew Squidward, from SpongeBob. Then she couldn't stop. Soon after, the war reached the city. She kept drawing.",
    "She draws because she has to. First a feeling comes. Then she sees the work, whole or in pieces, before she makes a mark. Then she makes it.",
  ],
  [
    "Lilian Alkaff was born in 1998 in Aden, to a Yemeni father and a Ukrainian mother. She studied Visual Communication in Malaysia, lived in Egypt, and has lived in Riyadh since 2022. Four countries, and she hasn't landed in any of them.",
    "She trained in design, not fine art. For years she kept away from the art world on purpose, so her work would form on its own. She began looking at other artists only once she was sure of her own voice.",
  ],
  [
    "Her early work, from 2015 to 2018, was colour and line: abstract, spirals and rivers, no bodies yet.",
    "In 2019 she drew her own right eye, her first digital line drawing, with strokes she made herself in Illustrator. She has used those strokes for every line since.",
    "Then the faces began to leave. Headless People (2019): bodies without heads. Flower People (2020): flowers where the heads should be. Close Up (2022): only lips. Lines (2022–2023): heads made of tangled lines. In Void Body (2023–2024) the face is gone.",
  ],
  [
    "Void Body is thirteen series of bodies drawn from photos of strangers. The face is taken away, and the ground colour holds the state she was in.",
    <Link to="/void-body-story" className={linkClass}>
      The story behind Void Body →
    </Link>,
  ],
  [
    "All Seeing Eyes (2026, in progress) goes back to the eye: nine eyes she drew in 2019 and 2020, the first her own. Each becomes thirteen Stills and thirteen Dreams, 234 works in all. Eye 01 is finished.",
  ],
  [
    "She also writes poems. They come the way the drawings do: on walks, in the middle of the night.",
  ],
];

const About = () => {
  return (
    <div>
      <section className="page-padding section-spacing pb-20 md:pb-32">
        <FadeInView>
          <div
            className="max-w-2xl mx-auto text-editorial-body text-foreground text-left font-normal not-italic"
            style={{ lineHeight: 1.9 }}
          >
            {groups.map((group, gi) => (
              <div
                key={gi}
                className="space-y-8"
                style={{ marginTop: gi === 0 ? 0 : "5rem" }}
              >
                {group.map((p, i) => (
                  <p key={i} className="font-normal not-italic">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </FadeInView>
      </section>
    </div>
  );
};

export default About;
