import { useMediaQuery } from "react-responsive";

export const useIsBigScreen = () => {
  return useMediaQuery({ query: "(min-width: 1824px)" });
};

export const useIsTabletOrMobile = () => {
  return useMediaQuery({ query: "(max-width: 1224px)" });
};

export const useIsPortrait = () => {
  return useMediaQuery({ query: "(orientation: portrait)" });
};

export const useIsRetina = () => {
  return useMediaQuery({ query: "(min-resolution: 2dppx)" });
};
