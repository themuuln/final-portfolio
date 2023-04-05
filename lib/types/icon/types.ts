export type IconMapping = {
  Neovim: JSX.Element;
  React: JSX.Element;
  Tips: JSX.Element;
  Javascript: JSX.Element;
  Typescript: JSX.Element;
  TailwindCSS: JSX.Element;
  ChakraUI: JSX.Element;
  NextJS: JSX.Element;
  "SASS/SCSS": JSX.Element;
  Git: JSX.Element;
  "Framer-motion": JSX.Element;
};

export type IconMappingProps = {
  context: keyof IconMapping;
};
