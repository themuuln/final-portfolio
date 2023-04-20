import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>EN</button>
      <button onClick={() => handleLanguageChange("mn")}>MN</button>
    </div>
  );
};

export default LanguageSwitcher;
