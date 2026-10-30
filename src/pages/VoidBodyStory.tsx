import { useEffect } from "react";
import FadeInView from "@/components/FadeInView";
import JustifiedGallery from "@/components/JustifiedGallery";
import { voidSeries, voidMedium } from "@/data/voidSeries";
import eye01 from "@/assets/process-eye-01.webp";
import eyeDetail from "@/assets/process-eye-detail.webp";
import bareDetail from "@/assets/process-bare-detail.webp";

/**
 * Void Body — submission page for the .ART Award.
 * Standalone (no site menu). lilianalkaff.art points here.
 * Holds the three required elements: the work, the story, the artist.
 */

const story: React.ReactNode[] = [
  <>
    In 2023 I felt connections with people more intense than anything I had known: vivid, total, at the level of
    the soul. For a while everything looked perfect, as if I had finally found what I had been looking for. Then
    the ground was pulled out from under me and I was back at zero. Void Body is what I made inside that: thirteen
    series of drawings, each one a state I was living in.
  </>,
  <>
    I know this cycle. I started drawing at seventeen, on a school night in Aden, as the war was beginning, and my
    life has moved this way ever since. Something builds until it feels like the answer, then it falls away, and I
    begin again.
  </>,
  <>
    The faces had been leaving my work for years. In 2019 I drew my own right eye, my first digital line drawing,
    with strokes I made myself: short marks joined end to end, in different weights. I have drawn every line since
    with those same strokes. After the eye came bodies without heads, then flowers where the heads should be, then only lips. In
    Void Body the face is gone. I could not draw the people I felt this for, so I drew bodies that could belong to
    anyone.
  </>,
  <>
    Each began as a photograph of a stranger found online. I took away everything that made them someone
    (the face, the skin, the setting, the photograph itself), kept only the outline, redrew it with my own strokes in
    Adobe Illustrator and filled it with black. What the face would have said, I gave to the colour: oxblood when
    the heat had nowhere to go, navy when it turned cold, ice-blue for the calm after it.
  </>,
  <>
    Sometimes the work understood things before I did. While making the twelfth series I was reading David
    Hawkins's <em>Power vs. Force</em>: power moves through things, while force pushes on them from outside, and
    what force holds together eventually breaks. I meant to call the series Power. The word that kept coming was
    Force, and I let it stand: <em>A Force, Unbreakable</em>. Months later the bond ended, and I understood both
    words. What held us together was force, so it broke. What could not break was the split between us. I had
    already drawn it: two bodies holding each other across a ground cut in two.
  </>,
  <>
    <em>Stuck</em> was the last series. While drawing it I knew the figure fixed at the edge of every frame was the
    other person, and the one moving through the centre, trying every position until it was gone, was me. I didn't
    know why. We had met in a place that was harming us both, left it together, and planned what we would build.
    Then the other person got scared. Two years after I made <em>Stuck</em>, a friend told me they had gone back to
    that same place and were doing exactly what they had done before, as if nothing had happened. That was the why.
    One of us was stuck in place. The other was stuck in motion, trying alone to do what was meant to be done by
    two.
  </>,
];

const bio =
  "Lilian Alkaff (b. 1998, Aden, Yemen) is a Yemeni–Ukrainian artist based in Riyadh, Saudi Arabia. Born to a Yemeni father and a Ukrainian mother, she was raised in Aden, studied Visual Communication in Malaysia, lived in Egypt, and has lived in Saudi Arabia since 2022. Trained in design rather than fine art, she began drawing in 2015, at seventeen, and built her visual language on her own. Since 2019 she has worked digitally, drawing every line with strokes she made herself and first used in 2019, to draw her own right eye. Her series include Headless People (2019), Flower People (2020), Close Up (2022), Lines (2022–2023), Void Body (2023–2024) and All Seeing Eyes (2026, in progress). She also writes poetry.";

const pad = (n: number) => String(n).padStart(2, "0");

const VoidBodyStory = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "Void Body · Lilian Alkaff";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Title */}
      <header className="page-padding pt-12 md:pt-16">
        <p className="text-editorial-sm tracking-widest text-foreground">LILIAN ALKAFF</p>
      </header>

      <section className="page-padding pt-24 md:pt-36 pb-16 md:pb-24">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground font-medium">Void Body</h1>
          <p className="text-editorial-sm text-muted-foreground mt-4">
            2023–2024 · Thirteen series · Vector drawings, Adobe Illustrator
          </p>
        </FadeInView>
      </section>

      {/* The thirteen series at a glance */}
      <section className="page-padding pb-20 md:pb-32">
        <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
          {voidSeries.map((series, i) => (
            <li key={series.slug}>
              <FadeInView>
                <a href={`#${series.slug}`} className="block group no-underline">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={series.cover}
                      alt={`${series.title}, ${series.ground.toLowerCase()} ground`}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-editorial-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    <span className="text-muted-foreground/60 mr-2">{pad(i + 1)}</span>
                    {series.title.toUpperCase()}
                  </p>
                  <p className="mt-1 text-editorial-sm text-muted-foreground/60">
                    {series.ground} · {series.year}
                  </p>
                </a>
              </FadeInView>
            </li>
          ))}
        </ol>
      </section>

      {/* The story behind the work */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">THE STORY BEHIND THE WORK</h2>
          <div className="max-w-2xl text-editorial-body text-foreground space-y-8" style={{ lineHeight: 1.9 }}>
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInView>
      </section>

      {/* Where the line comes from */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">WHERE THE LINE COMES FROM</h2>
        </FadeInView>
        <div className="max-w-3xl space-y-10 md:space-y-14">
          <div className="max-w-xl">
          <JustifiedGallery
            title="Eye 01"
            items={[
              {
                src: eye01,
                ratio: 1,
                caption: "Eye 01, 2019. My right eye, my first digital line drawing.",
                alt: "Eye 01, a line drawing of the artist's right eye, 2019",
              },
            ]}
          />
          </div>
          <p className="max-w-2xl text-editorial-body text-foreground" style={{ lineHeight: 1.9 }}>
            The strokes in this eye are ones I made myself in Illustrator: short marks, tapered at both ends, joined
            one after another, in different weights. Every line in Void Body is drawn with them.
          </p>
          <JustifiedGallery
            title="The strokes"
            items={[
              {
                src: eyeDetail,
                ratio: 1.281,
                caption: "Strokes in Eye 01 (detail)",
                alt: "Detail of the tapered strokes in Eye 01",
              },
              {
                src: bareDetail,
                ratio: 1.286,
                caption: "The same strokes in Bare, 2023 (detail)",
                alt: "Detail of the white lines in Bare",
              },
            ]}
          />
        </div>
      </section>

      {/* Each series */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-16 md:mb-24">THE THIRTEEN SERIES</h2>
        </FadeInView>
        <div className="space-y-28 md:space-y-40">
          {voidSeries.map((series, i) => (
            <article key={series.slug} id={series.slug} className="scroll-mt-12">
              <FadeInView>
                <p className="text-editorial-sm text-muted-foreground/60">
                  {pad(i + 1)} / {voidSeries.length}
                </p>
                <h3 className="text-editorial-title text-foreground font-medium mt-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                  {series.title}
                </h3>
                <div className="max-w-2xl mt-6 space-y-3">
                  {series.caption && (
                    <p className="text-editorial-body text-foreground" style={{ lineHeight: 1.7 }}>
                      {series.caption}
                    </p>
                  )}
                  <p className="text-editorial-sm text-muted-foreground">
                    {series.year} · Ground: {series.ground} · {voidMedium}
                  </p>
                  <p className="text-editorial-sm text-muted-foreground/60">
                    {series.works.length} of {series.total} drawings
                  </p>
                </div>
              </FadeInView>
              <div className="mt-10 md:mt-14">
                <JustifiedGallery
                  title={series.title}
                  items={series.works.map((work) => ({
                    src: work.src,
                    ratio: work.ratio,
                    caption: work.caption,
                    alt: `${series.title}${work.caption ? `, ${work.caption}` : ""}`,
                    details: `${series.title} ${work.caption ?? ""}, ${series.year} · Ground: ${series.ground} · ${voidMedium}`,
                  }))}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The artist */}
      <section className="page-padding pb-20 md:pb-32">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">THE ARTIST</h2>
          <p className="max-w-2xl text-editorial-body text-foreground" style={{ lineHeight: 1.9 }}>
            {bio}
          </p>
        </FadeInView>
      </section>

      {/* Onward */}
      <footer className="page-padding pb-20 md:pb-28 space-y-6">
        <FadeInView>
          <a
            href="https://lilianalkaff.com/void-body"
            className="text-editorial-body text-foreground hover:text-muted-foreground transition-colors duration-500 no-underline"
          >
            See all my work at lilianalkaff.com →
          </a>
          <p className="mt-6">
            <a
              href="mailto:liliankaff@gmail.com"
              className="text-editorial-sm text-muted-foreground hover:text-foreground no-underline transition-colors duration-500"
            >
              liliankaff@gmail.com
            </a>
          </p>
        </FadeInView>
      </footer>
    </div>
  );
};

export default VoidBodyStory;
