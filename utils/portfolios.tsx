import snippetMaster from "../public/images/portfolios/snippet.png";
import tcd from "../public/images/portfolios/tcd.png";
import codeToImage from "../public/images/portfolios/code-to-img.png";
import historicalMaps from "../public/images/portfolios/history.png";

interface Portfolio {
  id: number;
  title: string;
  image: object;
  subtitle?: string;
  description?: string;
  description2?: string;
  date?: string;
  client?: string;
  categories?: string[];
  url?: string;
  features?: string[];
  images?: object[];
}

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "TheCodeDealer Platform",
    image: tcd,
    subtitle: "Empowering developers through online education",
    description:
      "TheCodeDealer ELearning Platform is an online education platform focused on programming and software development. It offers a wide range of courses, tutorials, and coding challenges to help learners enhance their coding skills and advance their careers.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "20th December 2023",
    client: "TheCodeDealer",
    categories: ["E-Learning", "Web Development", "Programming"],
    url: "https://elearning.thecodedealer.com/",
    features: [
      "Diverse collection of coding courses",
      "Interactive coding challenges and quizzes",
      "Certification upon course completion",
      "Community forums for peer support",
    ],
  },
  {
    id: 2,
    title: "Snippet Master",
    image: snippetMaster,
    subtitle: "A code snippet manager",
    description:
      "Snippet Master is a code snippet manager built with React, Next.js, and Firebase. It allows users to create, edit, and delete code snippets. Users can also share their snippets with other users.",
    description2:
      "Snippet Master is a code snippet manager built with React, Next.js, and Firebase. It allows users to create, edit, and delete code snippets. Users can also share their snippets with other users.",
    date: "8th August 2023",
    client: "TheCodeDealer",
    categories: ["Fullstack", "Next.js", "Node.js"],
    url: "https://snippetmaster.vercel.app/",
    features: [
      "Create, edit, and delete code snippets",
      "Share code snippets with other users",
      "Search for code snippets",
      "Dark mode",
    ],
  },
  {
    id: 3,
    title: "Code To Image",
    image: codeToImage,
    subtitle: "Convert code to images",
    description:
      "Code To Image is a web application that allows developers to convert their source code into visually appealing images. It supports multiple programming languages and provides customization options for fonts, colors, and themes.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15th September 2023",
    client: "CodeArtists Inc.",
    categories: ["Web Development", "Frontend", "Design"],
    url: "https://codetoimageapp.com/",
    features: [
      "Convert code to images",
      "Choose from various programming languages",
      "Customize fonts, colors, and themes",
      "Download generated images",
    ],
  },
  {
    id: 4,
    title: "Interactive Maps for Historical Events",
    image: historicalMaps,
    subtitle: "Explore history through interactive maps",
    description:
      "This project showcases interactive maps that provide users with a dynamic way to explore historical events and their geographical context. Users can navigate through different time periods and access detailed information about each event.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "5th November 2023",
    client: "History Enthusiasts Association",
    categories: ["Web Development", "Geography", "History"],
    url: "https://historicalmaps.org/",
    features: [
      "Browse historical events on interactive maps",
      "Filter events by time period and location",
      "Access detailed event descriptions and media",
      "Educational resources for teachers and students",
    ],
  },
];
