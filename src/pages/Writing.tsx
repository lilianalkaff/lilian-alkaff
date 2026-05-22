import FadeInView from "@/components/FadeInView";

interface Note {
  title: string;
  date: string;
  body: string[];
  type: "poem" | "text";
}

const notes: Note[] = [
  {
    title: "It Was Always You",
    date: "2025",
    type: "poem",
    body: [
      "Was it always you?",
      "",
      "It was something you said",
      "oh wait, that's them",
      "or were they always you?",
      "",
      "It was something you did",
      "oh wait, that's them",
      "or were they always you?",
      "",
      "It was something you saw",
      "oh wait, that's them",
      "or were they always you?",
      "",
      "It was something I asked",
      "oh wait, that's them",
      "or were they always me?",
      "",
      "Full circle back to you",
      "",
      "Was it always you?",
    ],
  },
  {
    title: "Home",
    date: "2024",
    type: "poem",
    body: [
      "Yearning for a home that was never mine.",
      "",
      "Longing for a home that could be mine.",
      "",
      "Grieving the space and time that cut short",
      "a home I was beginning to call mine.",
      "",
      "Aching to reach a hand",
      "and claim a home that's mine.",
      "",
      "Tormentingly bidding time,",
      "waiting to reunite with a you that's mine.",
    ],
  },
  {
    title: "Us",
    date: "2024",
    type: "poem",
    body: [
      "Us.",
      "Watching us,",
      "Laughing at us,",
      "Guiding us,",
      "Applauding us,",
      "Shaking heads at us,",
      "Loving us,",
      "Choosing us.",
      "",
      "Wanting to help us,",
      "yet letting us help us.",
      "",
      "Bringing us together when we choose us,",
      "and pulling us apart when we choose us over us.",
      "",
      "Us is love.",
      "Us is also fear.",
      "",
      "And like we do,",
      "I choose us.",
    ],
  },
  {
    title: "Your Eyes",
    date: "2023",
    type: "poem",
    body: [
      "Your eyes,",
      "catching mine—",
      "sometimes soft,",
      "often amused,",
      "usually curious.",
      "",
      "Your eyes,",
      "catching mine—",
      "sometimes shy,",
      "normally waiting,",
      "lately proud.",
      "",
      "Your eyes,",
      "catching mine—",
      "sometimes confused,",
      "rarely surprised",
      "that I'm looking back.",
      "",
      "Your eyes,",
      "like a magnet,",
      "always catching mine.",
    ],
  },
  {
    title: "Numbers, Numbers, Numbers",
    date: "2023",
    type: "poem",
    body: [
      "248",
      "369\\n\\n",
      "\\n\\nA circle,",
      "and a triangle.",
      "Perfect fit—",
      "or complete insanity?",
      "Opposites attract—",
      "or not even a chance?",
      "Fate having fun—",
      "or me losing my mind?",
      "",
      "I soften you,",
      "you sharpen me.",
      "",
      "248",
      "369",
    ],
  },
  {
    title: "Who is (Me)?",
    date: "2023",
    type: "poem",
    body: [
      "I am everything—",
      "and nothing at all.",
      "All of the above,",
      "and none of them.",
      "",
      "Could be your heaven,",
      "also your hell.",
      "Your whole world,",
      "and an alien.",
      "",
      "You think you know me,",
      "I think I do too.",
      "But I don't know me,",
      "and neither do you.",
    ],
  },
  {
    title: "Flames",
    date: "2023",
    type: "poem",
    body: [
      "The first time I saw you—me—",
      "I knew.",
      "Even when I didn't,",
      "I knew.",
      "",
      "One soul,",
      "Two bodies,",
      "One embrace,",
      "Aflame.",
      "Our soul was set aflame.",
    ],
  },
];

const Writing = () => {
  return (
    <div>
      <section className="page-padding section-spacing pb-20 md:pb-32 max-w-2xl">
        <FadeInView>
          <h2 className="text-editorial-sm text-muted-foreground mb-10 md:mb-14">WRITING</h2>
          <p className="text-editorial-body text-foreground mb-40 md:mb-56 lg:mb-64" style={{ lineHeight: 1.9 }}>
            Writing arrives the same way the images do — on walks, in the middle of the night, without warning. The poems are not commentary on the visual work, but another form the same interior weather takes.
          </p>
        </FadeInView>
        <div className="space-y-20 md:space-y-28">
          {notes.map((note, ni) => (
            <FadeInView key={note.title} delay={0.1}>
              <article>
                <header className="mb-8">
                  <h2 className="text-editorial-section text-foreground">
                    {note.title}
                  </h2>
                  <p className="text-editorial-sm text-muted-foreground mt-2">
                    {note.date}
                  </p>
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
