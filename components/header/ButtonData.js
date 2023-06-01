import { AiOutlineExperiment } from "react-icons/ai";
import { HiOutlineHome, HiOutlineAnnotation } from "react-icons/hi";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";

const ButtonData = [
  {
    href: "#home",
    icon: <HiOutlineHome />,
    context: "home",
  },
  {
    href: "#skills",
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
