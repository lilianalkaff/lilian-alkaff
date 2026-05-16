import FadeInView from "@/components/FadeInView";

const groups: string[][] = [
  [
    "It began on a school night in Aden, Yemen, 2015. She was already in bed, trying to sleep. Something made her get up and draw. She didn't choose to start. She was started.",
    "She had never liked art. She was sporty. Art class was the worst part of school. The war hadn't reached the city yet — or it had just begun, somewhere still distant. But something moved in her before the catastrophe arrived. As if the vessel was being prepared before it was needed. She drew Squidward from SpongeBob. Then she couldn't stop.",
    "When the war did arrive and the city went quiet in the way cities go quiet when everything collapses, the vessel was already open.",
  ],
  [
    "Lilian Alkaff was born in 1998 to a Yemeni father and a Ukrainian mother, raised in Aden, educated in Malaysia, passed through Egypt, and has been living in Saudi Arabia since 2022. She has never fully arrived anywhere. The work knows this.",
    "Her practice follows a fixed internal sequence: something triggers a feeling. The feeling produces a vision — the work appears whole in the mind's eye before it exists anywhere else. Then she makes it. The making is almost mechanical. An obligation. The act of materializing what has already been seen.",
    "She does not direct the work. She receives it. She is the vessel, not the author.",
  ],
  [
    "The early work was color and energy — abstract, physical, geological. Spirals, rivers, raw pigment, lines that moved like weather. The body hadn't appeared yet.",
    "Then came the eye.",
    "In 2019, she drew her own eye. It was the first digital line work she ever made. It was also, though she didn't know it yet, the source of everything that would follow: Headless People, Flower People, Close Up, and finally the work that named what had always been true — Void Body.",
  ],
  [
    "Void Body is a practice centered on the body as absence. The silhouette is there but not there. It is the void made visible — not as symbol, not as metaphor, but as operative state. The void is what happens when everything believed to be true collapses and nothing has come to replace it yet. The dark night of the soul. She has been there more than once. Each time, a new series comes through.",
    "The color is the emotional state. The body is universal — no face, no location, no fixed identity. It could be anyone. It is everyone who has been undone and had to wait in the dark for what comes next.",
    "The titles name the states, not the images: Bare. Soft. Blue. Embracing the Void. A Force, Unbreakable — she wanted to name it Power, something told her to write Force instead. She obeyed. It broke, as force does. She had been told before she knew.",
  ],
  [
    "All Seeing Eyes is the return to the origin.",
    "Nine source eyes, created 2019–20. The first is her own eye — the line that started everything, the observer that precedes all creation. Each eye yields twenty-six works across two movements.",
    "First, she moves through the eye looking for the right fragment — a piece of the iris, the edge, the pupil, the surround. This is not a technical decision. It is an act of attention. She is reading her own eye, choosing what to extract, deciding where to look. Each Still begins here: the same eye, a different region, a different world. Thirteen Stills are thirteen acts of attention — thirteen realities from one source.",
    "Then she surrenders. Each Still is handed to a process she does not control, which animates it without her direction. Thirteen Dreams. She watches each grow as it wants. What emerges is unpredictable and unrepeatable. The Still and the Dream are distinct works — two separate pieces from one moment of looking.",
    "The Dreams do not loop. They cut off — unresolved, mid-motion, the way a dream ends before you understand it. You are left with more questions than answers. That is not incidental. That is the work.",
    "Twenty-six works per eye. Two hundred and thirty-four total across all nine.",
    "The numbers mean something. They always do.",
    "2+3+4 = 9. The full cycle, the number that structures the entire series. The Dreams run for exactly 2 minutes and 34 seconds. The format is square — matter, the physical world, the screen. The eye is a circle. The square is where it lands.",
    "Nine cycles. Thirteen Dreams per cycle. The thirteenth is what comes after completion: the new perception, the new reality. You don't know what you'll get. Neither does she. That's the point.",
  ],
  [
    "She kept the outside world out deliberately for years. No art history. No influences. No permission sought or given. She wanted the work to form from the inside out, not the outside in. Only when she was certain enough of her own voice did she begin to learn — not to absorb, but to recognize what had already arrived.",
    "She learned she was already working with things that had always existed. The void. The vessel. The eye that sees before anything can be made.",
    "She writes too. Poems arrive on walks, in the middle of the night. They are part of the same process, not separate from it. Fragments of the same interior weather.",
  ],
  [
    "The practice is ongoing. It goes where it goes. She follows.",
  ],
    [
    "She has been making since 2015.",
  ],
  [
    "Work is not currently available for commercial sale. Institutional inquiries — exhibitions, residencies, representation — are welcome.",
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
