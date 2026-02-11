import voidStuck from "@/assets/void-stuck.jpg";
import voidForce from "@/assets/void-force.jpg";
import voidYours from "@/assets/void-yours.jpg";
import voidPiece from "@/assets/void-piece.jpg";
import voidTakeMeHome from "@/assets/void-takemehome.jpg";
import voidNutritious from "@/assets/void-nutritious.jpg";
import voidLife from "@/assets/void-life.jpg";
import voidLighter from "@/assets/void-lighter.jpg";
import voidBare from "@/assets/void-bare.jpg";
import voidSoft from "@/assets/void-soft.jpg";
import void03 from "@/assets/void-03.jpg";
import voidHero from "@/assets/void-hero.jpg";
import void01 from "@/assets/void-01.jpg";

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

export const voidSeries: VoidSeriesData[] = [
  {
    slug: "stuck",
    title: "Stuck",
    year: "2024",
    cover: voidStuck,
    works: [],
  },
  {
    slug: "a-force-unbreakable",
    title: "A Force, Unbreakable",
    year: "2024",
    cover: voidForce,
    works: [],
  },
  {
    slug: "yours",
    title: "Yours",
    year: "2024",
    cover: voidYours,
    works: [],
  },
  {
    slug: "a-piece-missing",
    title: "A Piece, Missing",
    year: "2024",
    cover: voidPiece,
    works: [],
  },
  {
    slug: "take-me-home",
    title: "Take Me Home",
    year: "2024",
    cover: voidTakeMeHome,
    works: [],
  },
  {
    slug: "nutritious",
    title: "Nutritious",
    year: "2023",
    cover: voidNutritious,
    works: [],
  },
  {
    slug: "life",
    title: "Life",
    year: "2023",
    cover: voidLife,
    works: [],
  },
  {
    slug: "lighter",
    title: "Lighter",
    year: "2023",
    cover: voidLighter,
    works: [],
  },
  {
    slug: "bare",
    title: "Bare",
    year: "2023",
    cover: voidBare,
    works: [],
  },
  {
    slug: "soft",
    title: "Soft",
    year: "2023",
    cover: voidSoft,
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
