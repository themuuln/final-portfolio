import { useMediaQuery } from "react-responsive";

const IsPhone = () => {
  const IsPhone = useMediaQuery({ query: "(max-width: 640px)" });
  return IsPhone;
};

export default IsPhone;
