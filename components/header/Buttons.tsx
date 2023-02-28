import { Fira_Code } from "@next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-firacode",
});

type Props = {
  context: String;
};
const Buttons = ({ context }: Props) => {
  return (
    <>
      <div
        className={`${firacode.className} cursor-pointer font-sans transition ease-linear hover:text-brand_main-300`}
      >
        \\ {context}
      </div>
    </>
  );
};

export default Buttons;
