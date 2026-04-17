import { motion } from "framer-motion";

export default function Dining() {
  return (
    <section id="dining" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* AI Generated Dining Background */}
      <img
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
        className="absolute w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
        alt="Fine Dining"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs mb-6 block">Culinary Excellence</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter">
            Dining as an <br /> <span className="text-gold">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-xl">
            From global fine dining to vibrant artisan cafes, every moment here 
            is crafted to elevate lifestyle and satisfy the most discerning palates.
          </p>
          <div className="flex gap-6">
            <span className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:border-gold hover:text-white transition-all">Fine Dining</span>
            <span className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:border-gold hover:text-white transition-all">Artisan Cafes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
             <img 
               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
               className="w-full h-full object-cover"
               alt="Gourmet Dish"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-gold text-xs uppercase tracking-widest mb-2 font-bold">Featured</p>
                <p className="text-xl font-medium tracking-tight">Michelin Star Excellence</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
