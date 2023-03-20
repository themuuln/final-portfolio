import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-gray-800 rounded-full animate-spin"></div>
        <p className="font-medium text-gray-800">Loading...</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
