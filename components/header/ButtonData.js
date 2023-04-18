import {
  HiOutlineHome,
  AiOutlineExperiment,
  RiLayout2Line,
  RiContactsBook2Line,
  HiOutlineAnnotation,
} from "react-icons/all";

const ButtonData = [
  {
    href: "#home",
    icon: <HiOutlineHome />,
    context: "home",
  },
  {
    href: "#experience",
    icon: <AiOutlineExperiment />,
    context: "experience",
  },
  {
    href: "#project",
    icon: <RiLayout2Line />,
    context: "project",
  },
  {
    href: "#contact",
    icon: <RiContactsBook2Line />,
    context: "contact",
  },
  {
    href: "https://medium.com/@themuuln",
    icon: <HiOutlineAnnotation />,
    context: "blog",
  },
];

export default ButtonData;
