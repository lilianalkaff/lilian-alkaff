import void01 from "@/assets/void-01.jpg";
import void02 from "@/assets/void-02.jpg";
import void03 from "@/assets/void-03.jpg";
import voidHero from "@/assets/void-hero.jpg";

export interface VoidWork {
  src: string;
}

export interface VoidSeriesData {
  slug: string;
  title: string;
  year: string;
  cover: string;
  works: VoidWork[];
}

// Series ordered most recent → oldest
// Cover images use available assets; works arrays are placeholders for now
export const voidSeries: VoidSeriesData[] = [
  {
    slug: "stuck",
    title: "Stuck",
    year: "2024",
    cover: void01,
    works: [],
  },
  {
    slug: "a-force-unbreakable",
    title: "A Force, Unbreakable",
    year: "2024",
    cover: void02,
    works: [],
  },
  {
    slug: "yours",
    title: "Yours",
    year: "2024",
    cover: void03,
    works: [],
  },
  {
    slug: "a-piece-missing",
    title: "A Piece, Missing",
    year: "2024",
    cover: voidHero,
    works: [],
  },
  {
    slug: "take-me-home",
    title: "Take Me Home",
    year: "2024",
    cover: void01,
    works: [],
  },
  {
    slug: "nutritious",
    title: "Nutritious",
    year: "2023",
    cover: void02,
    works: [],
  },
  {
    slug: "life",
    title: "Life",
    year: "2023",
    cover: void03,
    works: [],
  },
  {
    slug: "lighter",
    title: "Lighter",
    year: "2023",
    cover: voidHero,
    works: [],
  },
  {
    slug: "bare",
    title: "Bare",
    year: "2023",
    cover: void01,
    works: [],
  },
  {
    slug: "soft",
    title: "Soft",
    year: "2023",
    cover: void02,
    works: [],
  },
  {
    slug: "embracing-the-void",
    title: "Embracing The Void",
    year: "2023",
    cover: void03,
    works: [],
  },
  {
    slug: "blue",
    title: "Blue",
    year: "2023",
    cover: voidHero,
    works: [],
  },
  {
    slug: "red-period",
    title: "Red Period",
    year: "2023",
    cover: void01,
    works: [],
  },
];
