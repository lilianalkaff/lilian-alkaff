import worksHeadless from "@/assets/works-headless.jpg";
import worksHeadless02 from "@/assets/works-headless-02.jpg";
import worksHeadless03 from "@/assets/works-headless-03.jpg";
import worksHeadless04 from "@/assets/works-headless-04.jpg";
import worksHeadless05 from "@/assets/works-headless-05.jpg";
import worksHeadless06 from "@/assets/works-headless-06.jpg";
import worksFlower from "@/assets/works-flower.jpg";
import worksFlower02 from "@/assets/works-flower-02.jpg";
import worksFlower03 from "@/assets/works-flower-03.jpg";
import worksFlower04 from "@/assets/works-flower-04.jpg";
import worksFlower05 from "@/assets/works-flower-05.jpg";
import worksFlower06 from "@/assets/works-flower-06.jpg";
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
