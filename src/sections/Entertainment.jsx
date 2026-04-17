import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <section id="entertainment" className="h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481326329074-85eaaed6af04?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="relative z-10 text-center px-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-white"
        >
          Beyond Shopping
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
        >
          Attractions that redefine engagement—turning visitors into lifelong customers through immersive experiences.
        </motion.p>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["VR Park", "Aquarium", "Ice Rink"].map((item, i) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="text-sm uppercase tracking-widest font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
