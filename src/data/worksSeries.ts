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

export interface WorksWork {
  src: string;
  caption?: string;
}

export interface WorksSeriesItem {
  slug: string;
  title: string;
  medium: string;
  year: string;
  cover: string;
  works: WorksWork[];
}

export const worksSeries: WorksSeriesItem[] = [
  {
    slug: "headless-people",
    title: "Headless People",
    medium: "Digital",
    year: "2019",
    cover: worksHeadless,
    works: [
      { src: worksHeadless, caption: "Figure" },
      { src: worksHeadless02, caption: "Ballerina" },
      { src: worksHeadless03, caption: "Rope" },
      { src: worksHeadless04, caption: "Up & Beyond" },
      { src: worksHeadless05, caption: "Creation of Eve" },
      { src: worksHeadless06, caption: "Stop" },
    ],
  },
  {
    slug: "flower-people",
    title: "Flower People",
    medium: "Digital",
    year: "2020",
    cover: worksFlower,
    works: [
      { src: worksFlower, caption: "Up" },
      { src: worksFlower02, caption: "Falling" },
      { src: worksFlower03, caption: "Not Sure" },
      { src: worksFlower04, caption: "Free" },
      { src: worksFlower05, caption: "Hold on to Me" },
      { src: worksFlower06, caption: "Parallel" },
    ],
  },
  {
    slug: "close-up",
    title: "Close Up",
    medium: "Digital",
    year: "2022",
    cover: worksLips,
    works: [
      { src: worksLips, caption: "Lips #01" },
      { src: worksLips02, caption: "Lips #05" },
      { src: worksLips03, caption: "Lips #06" },
      { src: worksLips04, caption: "Lips #07" },
      { src: worksLips05, caption: "Lips #08" },
      { src: worksLips06, caption: "Lips #10" },
    ],
  },
  {
    slug: "lines",
    title: "Lines",
    medium: "Digital",
    year: "2022–23",
    cover: worksLines,
    works: [
      { src: worksLines, caption: "#04" },
      { src: worksLines02, caption: "#03" },
      { src: worksLines03, caption: "#07" },
      { src: worksLines04, caption: "#08" },
      { src: worksLines05, caption: "#09" },
      { src: worksLines06, caption: "#10" },
    ],
  },
  {
    slug: "gray-city",
    title: "Gray City",
    medium: "Photography",
    year: "2024",
    cover: worksGraycity,
    works: [
      { src: worksGraycity },
      { src: worksGraycity02 },
      { src: worksGraycity03 },
      { src: worksGraycity04 },
      { src: worksGraycity05 },
      { src: worksGraycity06 },
    ],
  },
];
