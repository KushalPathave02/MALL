import { motion } from "framer-motion";

export default function Events({ onBookClick }) {
  return (
    <section id="events" className="h-screen flex items-center justify-center bg-black relative overflow-hidden text-center px-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-blue-500/10" />
      
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-white"
        >
          A Global Stage
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
        >
          Host unforgettable events in one of the world’s most dynamic venues. 
          From fashion shows to product launches.
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onBookClick("Exclusive Event")}
          className="px-10 py-4 bg-white text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all hover:bg-gold hover:text-white"
        >
          Book Your Event
        </motion.button>
      </div>
    </section>
  );
}
