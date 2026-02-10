import FadeInView from "@/components/FadeInView";

interface Note {
  title: string;
  date: string;
  body: string[];
  type: "poem" | "text";
}

const notes: Note[] = [
  {
    title: "On Disappearance",
    date: "Winter 2024",
    type: "poem",
    body: [
      "The light did not arrive.",
      "It was already there,",
      "waiting beneath the surface",
      "of everything we chose not to see.",
      "",
      "I held my breath",
      "and the room held me.",
      "What remained was not silence —",
      "it was the shape of listening.",
    ],
  },
  {
    title: "Notes Toward a Practice",
    date: "Autumn 2023",
    type: "text",
    body: [
      "I am less interested in making things than in uncovering what is already present. The act of looking, held long enough, becomes a form of making. The work does not begin with an idea. It begins with attention.",
      "There is always more in the periphery than at the center. I trust the edges.",
    ],
  },
  {
    title: "Still",
    date: "Spring 2023",
    type: "poem",
    body: [
      "A field. A line.",
      "The place where ground",
      "forgets itself",
      "and becomes sky.",
    ],
  },
];

const Writing = () => {
  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">Writing</h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-10 max-w-2xl space-y-6 text-editorial-body text-foreground">
            <p>
              A space for text that exists alongside the visual work.
            </p>
            <p>
              These writings are not explanations, but traces — fragments that emerge from the same process as the artworks themselves.
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32 max-w-2xl">
        <div className="space-y-20 md:space-y-28">
          {notes.map((note) => (
            <FadeInView key={note.title} delay={0.1}>
              <article>
                <header className="mb-8">
                  <h2 className="text-editorial-section text-foreground">
                    {note.title}
                  </h2>
                  <p className="text-editorial-sm text-muted-foreground mt-2">{note.date}</p>
                </header>
                <div className={note.type === "poem" ? "space-y-1" : "space-y-5"}>
                  {note.body.map((line, li) => (
                    <p
                      key={li}
                      className={`${
                        note.type === "poem"
                          ? "text-lg md:text-xl text-foreground leading-relaxed"
                          : "text-editorial-body text-foreground"
                      } ${line === "" ? "h-4" : ""}`}
                    >
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Writing;
