import { motion } from "framer-motion";

export default function CTA({ onBookClick }) {
  return (
    <section id="cta" className="h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <h2 className="text-[20rem] font-black text-white select-none">MALL</h2>
      </div>

      <div className="relative z-10 text-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-10 text-white tracking-tighter">
            Be Part of <br /> the <span className="text-gold">Future</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onBookClick("Membership")}
            className="px-12 py-5 bg-gold text-white font-bold rounded-full uppercase tracking-[0.3em] text-sm transition-shadow shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>

      <footer className="absolute bottom-10 left-0 w-full flex justify-between px-20 text-[10px] uppercase tracking-[0.5em] text-gray-500">
        <span>Dubai Mall © 2024</span>
        <span>The Future of Retail</span>
      </footer>
    </section>
  );
}
