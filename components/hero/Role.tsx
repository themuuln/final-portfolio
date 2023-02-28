import { motion } from "framer-motion";

type Props = {
  role: String;
};

const Role = ({ role }: Props) => {
  return (
    <>
      <div className="h-40 w-full bg-brand_bg-500">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-3xl "
        >
          Front-end Developer & UI/UX Designer
        </motion.p>
      </div>
    </>
  );
};

export default Role;
