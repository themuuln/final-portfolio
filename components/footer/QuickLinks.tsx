import Link from "next/link";
import { AiOutlineExperiment } from "react-icons/ai";
import { HiOutlineHome, HiOutlineAnnotation } from "react-icons/hi";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import Buttons from "../header/Buttons";

const QuickLinksData = [
  {
    href: "#home",
    icon: <HiOutlineHome />,
    context: "Home",
  },
  {
    href: "#qna",
    icon: <AiOutlineExperiment />,
    context: "Q&A",
  },
  {
    href: "#skills",
    icon: <AiOutlineExperiment />,
    context: "Skills",
  },
  {
    href: "#timeline",
    icon: <RiLayout2Line />,
    context: "Timeline",
  },
  {
    href: "#seemore",
    icon: <RiContactsBook2Line />,
    context: "See More",
  },
  {
    href: "#contact",
    icon: <RiContactsBook2Line />,
    context: "Contact",
  },
  {
    href: "#madewith",
    icon: <RiContactsBook2Line />,
    context: "Made with",
  },
  {
    href: "https://medium.com/@themuuln",
    icon: <HiOutlineAnnotation />,
    context: "blog",
  },
];

const QuickLinks = () => {
  return (
    <div className="mb-4 space-y-1 text-xl">
      <h2 className="text-2xl font-bold">Quick Links</h2>
      <ul>
        {QuickLinksData.map((link, index) => (
          <Link key={index} href={link.href}>
            <Buttons icon={link.icon} context={link.context} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
