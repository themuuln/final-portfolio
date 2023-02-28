import { motion } from "framer-motion";

type Props = {
  greetings: String;
};
const HelloGreetings = ({ greetings }: Props) => {
  return (
    <>
      <motion.p className="text-3xl">{greetings}</motion.p>
    </>
  );
};

export default HelloGreetings;
