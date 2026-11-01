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
    I started drawing at seventeen, on a school night in Aden. I was in bed, trying to sleep, when something got me
    up to draw. I had never liked art. I was sporty, and art class was the worst part of school. That night I drew
    Squidward. Then I couldn't stop. Soon after, the war reached the city. I kept drawing.
  </>,
  <>
    I didn't choose it, and I still don't. It always comes the same way. First a feeling. Then I see the work, whole
    or in pieces, before I make a mark. Then I make it. What it means, I find out later. Sometimes years later.
  </>,
  <>
    In 2019 I drew my own right eye, my first digital line drawing, with strokes I made myself in Illustrator. Every
    line I've drawn since is made of them. Then the faces started to go. First the heads came off. Then flowers grew
    where the heads had been. Then only the lips were left. Then the heads turned into tangles of line. By 2023 the
    face was gone.
  </>,
  <>
    That year I got closer to people than I had ever been to anyone. For a while it looked like the answer. Then it
    fell apart, as everything in my life does, and I was back at zero. I drew it as it built and as it broke.
    Thirteen series in two years. That is Void Body.
  </>,
  <>
    Each drawing starts with a photo of a stranger I found online. I take away everything that makes them someone:
    the face, the skin, the setting, the photo itself. I keep the outline and redraw it with my strokes. I couldn't draw the people, so I drew bodies that could be anyone. Whatever the face would have said, the
    colour says. Oxblood when the heat had nowhere to go. Navy when it went cold. Ice-blue for the calm after.
  </>,
  <>
    While I was making the twelfth series, I was reading David Hawkins's <em>Power vs. Force</em>. Power moves
    through things. Force pushes from outside, and what force holds together breaks. I meant to call the series
    Power. What came was <em>A Force, Unbreakable</em>. It made no sense: force breaks. I tried to change it, then
    let it stand. Months later the bond ended, and the title made sense. What held us was force, so it broke. What
    couldn't break was the split between us. I had already drawn it.
  </>,
  <>
    <em>Stuck</em> was the last series. I knew who was who the moment I drew them: the one at the edge was the other
    person, the one in the middle was me. I didn't know why. In 2026 a mutual friend said the sentence that turned
    the series into a record: they went back. They were stuck in place and time. I was stuck in motion, unable to
    stop, unable to land. I had drawn the separation two years before it happened.
  </>,
];

const bio =
  "Lilian Alkaff (b. 1998, Aden, Yemen) is an artist based in Riyadh, Saudi Arabia. Born to a Yemeni father and a Ukrainian mother, she grew up in Aden, studied Visual Communication in Malaysia, lived in Egypt, and moved to Riyadh in 2022. Trained in design rather than fine art, she began drawing in 2015, at seventeen, and built her visual language on her own. She draws because she has to. Since 2019, when she drew her own right eye, she has worked digitally, drawing every line with strokes she made herself. Her series include Headless People (2019), Flower People (2020), Close Up (2022), Lines (2022–2023), Void Body (2023–2024) and All Seeing Eyes (2026, in progress). She also writes poetry.";

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
            2023–2024 · Thirteen series · {voidMedium.replace("Vector drawing", "Vector drawings")}
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
                    {series.year} · Ground: {series.ground}
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
            href="/"
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
