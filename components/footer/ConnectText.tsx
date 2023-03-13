import { RiArrowRightUpLine } from "react-icons/ri";

const ConnectText = ({ href, social }: any) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center justify-center gap-1 underline-offset-1 transition-all duration-500 hover:text-brand_main-700 hover:underline"
        target={"blank"}
      >
        {social}
        <RiArrowRightUpLine />
      </a>
    </li>
  );
};

export default ConnectText;
