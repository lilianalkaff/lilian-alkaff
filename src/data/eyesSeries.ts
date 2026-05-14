import eyesStill01 from "@/assets/eyes-still-01.jpg";
import eyesStill04 from "@/assets/eyes-still-04.jpg";
import eyesStill09 from "@/assets/eyes-still-09.jpg";
import eyesStill11 from "@/assets/eyes-still-11.jpg";

export interface EyesWork {
  src?: string;
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
      { caption: "Still 01" },
      { caption: "Still 02" },
      { caption: "Still 03" },
      { caption: "Still 04" },
      { caption: "Still 05" },
      { caption: "Still 06" },
    ],
  },
];
