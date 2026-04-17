import { motion } from "framer-motion";

export default function Retail() {
  return (
    <section id="retail" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* AI Generated Background */}
      <img
        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80"
        className="absolute w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
        alt="Luxury Retail"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs mb-4 block">A Retail Powerhouse</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter uppercase">
            Curated <br /> <span className="text-outline text-transparent font-light" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>Collections</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Home to the world’s most influential brands. Experience a retail sanctuary designed for those who seek the extraordinary.
          </p>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
    </section>
  );
}
