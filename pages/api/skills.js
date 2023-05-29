import { SiJavascript } from "react-icons/si";
import { FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindCSS,
  SiChakraui,
  SiNeovim,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RxFramerLogo } from "react-icons/rx";

export const skills = [
  {
    languages: [
      {
        name: "HTML5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: "",
      },
      {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: "",
      },
      {
        name: "JavaScript (ES6+)",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <SiTypescript />,
      },
    ],
    frameworks_libraries_platforms: [
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <TbBrandNextjs />,
      },
      {
        name: "TailwindCSS",
        href: "https://tailwindcss.com/",
        icon: <SiTailwindCSS />,
      },
      {
        name: "ChakraUI",
        href: "https://chakra-ui.com/",
        icon: <SiChakraui />,
      },
      {
        name: "SASS / SCSS",
        href: "https://sass-lang.com/",
        icon: <FaSass />,
      },
      {
        name: "Framer-Motion",
        href: "https://www.framer.com/motion/",
        icon: <RxFramerLogo />,
      },
      // {
      //   name: "ExpressJS",
      //   href: "https://expressjs.com/",
      //   icon: "",
      // },
      // {
      //   name: "MaterialUI",
      //   href: "https://mui.com/",
      //   icon: "",
      // },
      // {
      //   name: "NodeJS",
      //   href: "https://nodejs.org/",
      //   icon: "",
      // },
      {
        name: "Styled-components",
        href: "https://styled-components.com/",
        icon: "",
      },
    ],
    hosting: [
      // {
      //   name: "AWS",
      //   href: "https://aws.amazon.com/",
      //   icon: "",
      // },
      {
        name: "Firebase",
        href: "https://firebase.google.com/",
        icon: "",
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: "",
      },
    ],
    design: [
      {
        name: "Figma",
        href: "https://www.figma.com/",
        icon: "",
      },
    ],
    other: [
      { name: "Neovim", href: "https://neovim.io/", icon: <SiNeovim /> },
      {
        name: "ESLint",
        href: "https://eslint.org/",
        icon: "",
      },
      { name: "Git", href: "https://git-scm.com/", icon: <FaGitAlt /> },
    ],
  },
];
