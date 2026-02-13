import worksHeadless from "@/assets/works-headless.jpg";
import worksFlower from "@/assets/works-flower.jpg";
import worksLips from "@/assets/works-lips.jpg";
import worksLines from "@/assets/works-lines.jpg";
import worksGraycity from "@/assets/works-graycity.jpg";

export interface WorksSeriesItem {
  slug: string;
  title: string;
  medium: string;
  year: string;
  cover: string;
  works: { src: string }[];
}

export const worksSeries: WorksSeriesItem[] = [
  {
    slug: "headless-people",
    title: "Headless People",
    medium: "Digital",
    year: "2019",
    cover: worksHeadless,
    works: [],
  },
  {
    slug: "flower-people",
    title: "Flower People",
    medium: "Digital",
    year: "2020",
    cover: worksFlower,
    works: [],
  },
  {
    slug: "close-up",
    title: "Close Up",
    medium: "Digital",
    year: "2022",
    cover: worksLips,
    works: [],
  },
  {
    slug: "lines",
    title: "Lines",
    medium: "Digital",
    year: "2022–23",
    cover: worksLines,
    works: [],
  },
  {
    slug: "gray-city",
    title: "Gray City",
    medium: "Photography",
    year: "2024",
    cover: worksGraycity,
    works: [],
  },
];
