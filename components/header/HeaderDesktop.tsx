import Link from "next/link";
import Buttons from "./Buttons";
import { useTranslation } from "react-i18next";

const HeaderDesktop = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-5 text-2xl font-bold ">
        <Link href={"#home"}>
          <Buttons context={t("home")} />
        </Link>
        <Link href={"#experience"}>
          <Buttons context={t("experience")} />
        </Link>
        <Link href={"#project"}>
          <Buttons context={t("project")} />
        </Link>
        <Link href={"/blog"}>
          <Buttons context={t("blog")} />
        </Link>
        <Link href={"#contact"}>
          <Buttons context={"contact"} />
        </Link>
      </div>
    </>
  );
};

export default HeaderDesktop;
