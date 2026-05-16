import eyesStill01 from "@/assets/eyes-still-01.jpg";
import eyesStill04 from "@/assets/eyes-still-04.jpg";
import eyesStill09 from "@/assets/eyes-still-09.jpg";
import eyesStill11 from "@/assets/eyes-still-11.jpg";
import eyesStill01New from "@/assets/eyes-still-01-new.jpg";
import eyesStill04New from "@/assets/eyes-still-04-new.jpg";
import eyesStill10 from "@/assets/eyes-still-10.jpg";

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
  works: EyesWork[];
}

export interface EyesFeatured {
  src: string;
  title: string;
  year: string;
  slug: string;
}

export const eyesFeatured: EyesFeatured[] = [
  { src: eyesStill01, title: "Still 01 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill04, title: "Still 04 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill09, title: "Still 09 · Eye 01", year: "2026", slug: "eye-01" },
  { src: eyesStill11, title: "Still 11 · Eye 01", year: "2026", slug: "eye-01" },
];

export const eyesSeries: EyesSeriesData[] = [
  {
    slug: "eye-01",
    title: "Eye 01 · Stills and Dreams",
    year: "2026",
    cover: eyesStill01,
    works: [
      { src: eyesStill01New, caption: "Still 01 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778868256/AllSeeingEyes_Eye01_Dream01_v1cwwt.mp4", caption: "Dream 01 · 1/1" },
      { src: eyesStill04New, caption: "Still 04 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778874854/AllSeeingEyes_Eye01_Dream04_wsvuai.mp4", caption: "Dream 04 · 1/1" },
      { src: eyesStill10, caption: "Still 10 · 1/1" },
      { video: "https://res.cloudinary.com/dvsrtp8m2/video/upload/v1778875010/AllSeeingEyes_Eye01_Dream10_zs18ee.mp4", caption: "Dream 10 · 1/1" },
    ],
  },
];
