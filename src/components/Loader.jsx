import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-[2px] bg-gold mb-4 mx-auto"
        />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-xs uppercase tracking-[0.5em] font-light"
        >
          Initializing Experience
        </motion.h1>
      </div>
    </motion.div>
  );
}
