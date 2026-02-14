import voidStuck from "@/assets/void-stuck.jpg";
import voidStuck02 from "@/assets/void-stuck-02.jpg";
import voidStuck03 from "@/assets/void-stuck-03.jpg";
import voidStuck04 from "@/assets/void-stuck-04.jpg";
import voidStuck05 from "@/assets/void-stuck-05.jpg";
import voidStuck06 from "@/assets/void-stuck-06.jpg";
import voidStuck07 from "@/assets/void-stuck-07.jpg";
import voidStuck08 from "@/assets/void-stuck-08.jpg";
import voidStuck09 from "@/assets/void-stuck-09.jpg";
import voidForce from "@/assets/void-force.jpg";
import voidForce02 from "@/assets/void-force-02.jpg";
import voidForce03 from "@/assets/void-force-03.jpg";
import voidForce04 from "@/assets/void-force-04.jpg";
import voidForce05 from "@/assets/void-force-05.jpg";
import voidForce06 from "@/assets/void-force-06.jpg";
import voidForce07 from "@/assets/void-force-07.jpg";
import voidForce08 from "@/assets/void-force-08.jpg";
import voidYours from "@/assets/void-yours.jpg";
import voidPiece from "@/assets/void-piece.jpg";
import voidTakeMeHome from "@/assets/void-takemehome.jpg";
import voidNutritious from "@/assets/void-nutritious.jpg";
import voidLife from "@/assets/void-life.jpg";
import voidLighter from "@/assets/void-lighter.jpg";
import voidBare from "@/assets/void-bare.jpg";
import voidSoft from "@/assets/void-soft.jpg";
import voidEmbracing from "@/assets/void-embracing.jpg";
import voidBlue from "@/assets/void-blue.jpg";
import voidRedPeriod from "@/assets/void-redperiod.jpg";

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
    works: [
      { src: voidStuck02 },
      { src: voidStuck03 },
      { src: voidStuck04 },
      { src: voidStuck05 },
      { src: voidStuck06 },
      { src: voidStuck07 },
      { src: voidStuck08 },
      { src: voidStuck09 },
    ],
  },
  {
    slug: "a-force-unbreakable",
    title: "A Force, Unbreakable",
    year: "2024",
    cover: voidForce,
    works: [
      { src: voidForce02 },
      { src: voidForce03 },
      { src: voidForce04 },
      { src: voidForce05 },
      { src: voidForce06 },
      { src: voidForce07 },
      { src: voidForce08 },
    ],
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
    cover: voidEmbracing,
    works: [],
  },
  {
    slug: "blue",
    title: "Blue",
    year: "2023",
    cover: voidBlue,
    works: [],
  },
  {
    slug: "red-period",
    title: "Red Period",
    year: "2023",
    cover: voidRedPeriod,
    works: [],
  },
];
