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
import voidYours02 from "@/assets/void-yours-02.jpg";
import voidYours03 from "@/assets/void-yours-03.jpg";
import voidYours04 from "@/assets/void-yours-04.jpg";
import voidYours05 from "@/assets/void-yours-05.jpg";
import voidYours06 from "@/assets/void-yours-06.jpg";
import voidYours07 from "@/assets/void-yours-07.jpg";
import voidYours08 from "@/assets/void-yours-08.jpg";
import voidPiece from "@/assets/void-piece.jpg";
import voidPiece02 from "@/assets/void-piece-02.jpg";
import voidPiece03 from "@/assets/void-piece-03.jpg";
import voidPiece04 from "@/assets/void-piece-04.jpg";
import voidPiece05 from "@/assets/void-piece-05.jpg";
import voidPiece06 from "@/assets/void-piece-06.jpg";
import voidPiece07 from "@/assets/void-piece-07.jpg";
import voidPiece08 from "@/assets/void-piece-08.jpg";
import voidPiece09 from "@/assets/void-piece-09.jpg";
import voidTakeMeHome from "@/assets/void-takemehome.jpg";
import voidTakeMeHome02 from "@/assets/void-takemehome-02.jpg";
import voidTakeMeHome03 from "@/assets/void-takemehome-03.jpg";
import voidTakeMeHome04 from "@/assets/void-takemehome-04.jpg";
import voidTakeMeHome05 from "@/assets/void-takemehome-05.jpg";
import voidTakeMeHome06 from "@/assets/void-takemehome-06.jpg";
import voidTakeMeHome07 from "@/assets/void-takemehome-07.jpg";
import voidTakeMeHome08 from "@/assets/void-takemehome-08.jpg";
import voidNutritious from "@/assets/void-nutritious.jpg";
import voidNutritious02 from "@/assets/void-nutritious-02.jpg";
import voidNutritious03 from "@/assets/void-nutritious-03.jpg";
import voidNutritious04 from "@/assets/void-nutritious-04.jpg";
import voidNutritious05 from "@/assets/void-nutritious-05.jpg";
import voidNutritious06 from "@/assets/void-nutritious-06.jpg";
import voidNutritious07 from "@/assets/void-nutritious-07.jpg";
import voidNutritious08 from "@/assets/void-nutritious-08.jpg";
import voidLife from "@/assets/void-life.jpg";
import voidLife02 from "@/assets/void-life-02.jpg";
import voidLife03 from "@/assets/void-life-03.jpg";
import voidLife04 from "@/assets/void-life-04.jpg";
import voidLife05 from "@/assets/void-life-05.jpg";
import voidLife06 from "@/assets/void-life-06.jpg";
import voidLife07 from "@/assets/void-life-07.jpg";
import voidLighter from "@/assets/void-lighter.jpg";
import voidLighter02 from "@/assets/void-lighter-02.jpg";
import voidLighter03 from "@/assets/void-lighter-03.jpg";
import voidLighter04 from "@/assets/void-lighter-04.jpg";
import voidLighter05 from "@/assets/void-lighter-05.jpg";
import voidLighter06 from "@/assets/void-lighter-06.jpg";
import voidBare from "@/assets/void-bare.jpg";
import voidBare02 from "@/assets/void-bare-02.jpg";
import voidBare03 from "@/assets/void-bare-03.jpg";
import voidBare04 from "@/assets/void-bare-04.jpg";
import voidBare05 from "@/assets/void-bare-05.jpg";
import voidBare06 from "@/assets/void-bare-06.jpg";
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
      { src: voidForce08 },
      { src: voidForce02 },
      { src: voidForce03 },
      { src: voidForce04 },
      { src: voidForce05 },
      { src: voidForce06 },
      { src: voidForce07 },
    ],
  },
  {
    slug: "yours",
    title: "Yours",
    year: "2024",
    cover: voidYours,
    works: [
      { src: voidYours08 },
      { src: voidYours02 },
      { src: voidYours03 },
      { src: voidYours04 },
      { src: voidYours05 },
      { src: voidYours06 },
      { src: voidYours07 },
    ],
  },
  {
    slug: "a-piece-missing",
    title: "A Piece, Missing",
    year: "2024",
    cover: voidPiece,
    works: [
      { src: voidPiece02 },
      { src: voidPiece03 },
      { src: voidPiece04 },
      { src: voidPiece05 },
      { src: voidPiece09 },
      { src: voidPiece07 },
      { src: voidPiece08 },
    ],
  },
  {
    slug: "take-me-home",
    title: "Take Me Home",
    year: "2024",
    cover: voidTakeMeHome,
    works: [
      { src: voidTakeMeHome08 },
      { src: voidTakeMeHome02 },
      { src: voidTakeMeHome03 },
      { src: voidTakeMeHome04 },
      { src: voidTakeMeHome05 },
      { src: voidTakeMeHome06 },
      { src: voidTakeMeHome07 },
    ],
  },
  {
    slug: "nutritious",
    title: "Nutritious",
    year: "2023",
    cover: voidNutritious,
    works: [
      { src: voidNutritious04 },
      { src: voidNutritious02 },
      { src: voidNutritious03 },
      { src: voidNutritious05 },
      { src: voidNutritious06 },
      { src: voidNutritious07 },
      { src: voidNutritious08 },
    ],
  },
  {
    slug: "life",
    title: "Life",
    year: "2023",
    cover: voidLife,
    works: [
      { src: voidLife02 },
      { src: voidLife03 },
      { src: voidLife04 },
      { src: voidLife05 },
      { src: voidLife06 },
      { src: voidLife07 },
    ],
  },
  {
    slug: "lighter",
    title: "Lighter",
    year: "2023",
    cover: voidLighter,
    works: [
      { src: voidLighter02 },
      { src: voidLighter03 },
      { src: voidLighter04 },
      { src: voidLighter05 },
      { src: voidLighter06 },
    ],
  },
  {
    slug: "bare",
    title: "Bare",
    year: "2023",
    cover: voidBare,
    works: [
      { src: voidBare02 },
      { src: voidBare03 },
      { src: voidBare04 },
      { src: voidBare05 },
      { src: voidBare06 },
    ],
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
