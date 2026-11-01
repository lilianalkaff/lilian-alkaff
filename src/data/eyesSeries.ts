import eyesStill01 from "@/assets/eyes-still-01.webp";
import eyesStill04 from "@/assets/eyes-still-04.webp";
import eyesStill11 from "@/assets/eyes-still-11.webp";
import eyesStill01New from "@/assets/eyes-still-01-new.webp";
import eyesStill04New from "@/assets/eyes-still-04-new.webp";
import eyesStill10 from "@/assets/eyes-still-10.webp";
import eyesStill13 from "@/assets/eyes-still-13.webp";
import eye01Source from "@/assets/process-eye-01.webp";

export interface EyesWork {
  src?: string;
  video?: string;
  caption?: string;
}

export interface EyesSeriesData {
  slug: string;
  title: string;
  year: string;
  cover: string;
  /** Short note on dates, e.g. when the source eye was drawn */
  note?: string;
  /** Technical details, one line per type of work */
  details?: string[];
  works: EyesWork[];
}

export interface EyesFeatured {
  src: string;
  title: string;
  year: string;
  slug: string;
}

export const eyesFeatured: EyesFeatured[] = [
  { src: eye01Source, title: "Eye 01 · The source", year: "2019", slug: "eye-01" },
  { src: eyesStill01, title: "Still 01 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill04, title: "Still 04 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill10, title: "Still 10 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill13, title: "Still 13 · Eye 01", year: "2026", slug: "eye-01" },
];

export const eyesSeries: EyesSeriesData[] = [
  {
    slug: "eye-01",
    title: "Eye 01 · Stills and Dreams",
    year: "2026",
    note: "Source eye drawn 2019 · Stills and Dreams made 2026",
    details: [
      "Stills: digital, fragments extracted from the source eye in Repper · variable dimensions · each 1/1",
      "Dreams: single-channel generative video · 1600 × 1600 px · 2:34 · Repper (Dream Mode), OBS Studio, LosslessCut · each 1/1",
    ],
    cover: eyesStill01,
    works: [
      { src: eye01Source, caption: "Eye 01, 2019. The source." },
      { src: eyesStill01New, caption: "Still 01 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778868256/AllSeeingEyes_Eye01_Dream01_v1cwwt.mp4", caption: "Dream 01 · 1/1" },
      { src: eyesStill04New, caption: "Still 04 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778874854/AllSeeingEyes_Eye01_Dream04_wsvuai.mp4", caption: "Dream 04 · 1/1" },
      { src: eyesStill10, caption: "Still 10 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778875010/AllSeeingEyes_Eye01_Dream10_zs18ee.mp4", caption: "Dream 10 · 1/1" },
      { src: eyesStill13, caption: "Still 13 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1779094165/AllSeeingEyes_Eye01_Dream13_np3itc.mp4", caption: "Dream 13 · 1/1" },
    ],
  },
];
