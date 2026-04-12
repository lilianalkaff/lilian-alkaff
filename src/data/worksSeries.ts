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
import worksLips02 from "@/assets/works-lips-02.jpg";
import worksLips03 from "@/assets/works-lips-03.jpg";
import worksLips04 from "@/assets/works-lips-04.jpg";
import worksLips05 from "@/assets/works-lips-05.jpg";
import worksLips06 from "@/assets/works-lips-06.jpg";
import worksLines from "@/assets/works-lines.jpg";
import worksLines02 from "@/assets/works-lines-02.jpg";
import worksLines03 from "@/assets/works-lines-03.jpg";
import worksLines04 from "@/assets/works-lines-04.jpg";
import worksLines05 from "@/assets/works-lines-05.jpg";
import worksLines06 from "@/assets/works-lines-06.jpg";
import worksGraycity from "@/assets/works-graycity.jpg";
import worksGraycity02 from "@/assets/works-graycity-02.jpg";
import worksGraycity03 from "@/assets/works-graycity-03.jpg";
import worksGraycity04 from "@/assets/works-graycity-04.jpg";
import worksGraycity05 from "@/assets/works-graycity-05.jpg";
import worksGraycity06 from "@/assets/works-graycity-06.jpg";
import worksGraycity07 from "@/assets/works-graycity-07.jpg";
import worksGraycity08 from "@/assets/works-graycity-08.jpg";
import worksGraycity09 from "@/assets/works-graycity-09.jpg";
import worksGraycity10 from "@/assets/works-graycity-10.jpg";

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
    works: [
      { src: worksHeadless02 },
      { src: worksHeadless03 },
      { src: worksHeadless04 },
      { src: worksHeadless05 },
      { src: worksHeadless06 },
    ],
  },
  {
    slug: "flower-people",
    title: "Flower People",
    medium: "Digital",
    year: "2020",
    cover: worksFlower,
    works: [
      { src: worksFlower02 },
      { src: worksFlower03 },
      { src: worksFlower04 },
      { src: worksFlower05 },
      { src: worksFlower06 },
    ],
  },
  {
    slug: "close-up",
    title: "Close Up",
    medium: "Digital",
    year: "2022",
    cover: worksLips,
    works: [
      { src: worksLips02 },
      { src: worksLips03 },
      { src: worksLips04 },
      { src: worksLips05 },
      { src: worksLips06 },
    ],
  },
  {
    slug: "lines",
    title: "Lines",
    medium: "Digital",
    year: "2022–23",
    cover: worksLines,
    works: [
      { src: worksLines02 },
      { src: worksLines03 },
      { src: worksLines04 },
      { src: worksLines05 },
      { src: worksLines06 },
    ],
  },
  {
    slug: "gray-city",
    title: "Gray City",
    medium: "Photography",
    year: "2024",
    cover: worksGraycity,
    works: [
      { src: worksGraycity02 },
      { src: worksGraycity03 },
      { src: worksGraycity04 },
      { src: worksGraycity05 },
      { src: worksGraycity06 },
      { src: worksGraycity07 },
      { src: worksGraycity08 },
      { src: worksGraycity09 },
      { src: worksGraycity10 },
    ],
  },
];
