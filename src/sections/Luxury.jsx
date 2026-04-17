import { motion } from "framer-motion";

export default function Luxury() {
  return (
    <section id="luxury" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* AI Generated Luxury Background */}
      <img
        src="https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80"
        className="absolute w-full h-full object-cover scale-105"
        style={{ backgroundAttachment: "fixed" }}
        alt="Luxury Environment"
      />

      {/* Luxury Overlay - Deep & Premium */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] mb-6 block">Exclusivity Defined</span>
          <h2 className="text-6xl md:text-8xl font-serif italic mb-8 text-white">
            Redefining <span className="text-gold">Luxury</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            A curated collection of the world’s most prestigious brands in an 
            environment designed for absolute elegance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
