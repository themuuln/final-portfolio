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
        name: "JavaScript (ES6+)",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <TbBrandNextjs />, // replace with actual library component
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <SiTypescript />,
      },
      {
        name: "TailwindCSS",
        href: "https://tailwindcss.com/",
        icon: <SiTailwindCSS />,
      },
      {
        name: "SASS / SCSS",
        href: "https://sass-lang.com/",
        icon: <FaSass />,
      },
      {
        name: "ChakraUI",
        href: "https://chakra-ui.com/",
        icon: <SiChakraui />,
      },
      {
        name: "Framer-Motion",
        href: "https://www.framer.com/motion/",
        icon: <RxFramerLogo />, // replace with actual library component
      },
      { name: "Neovim", href: "https://neovim.io/", icon: <SiNeovim /> },
      { name: "Git", href: "https://git-scm.com/", icon: <FaGitAlt /> },
    ],
  },
];