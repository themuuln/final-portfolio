import Link from "next/link";

const ProjectBanner = ({ name, href }: any) => {
  return (
    <Link
      href={href}
      className="w-full flex items-center justify-center text-2xl h-40 bg-dark_bg-500/50 border-b-[1px] border-white"
    >
      {name}
    </Link>
  );
};

export default ProjectBanner;
