import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-black">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-110 opacity-60"
          src="https://cdn.pixabay.com/video/2021/09/11/88166-604746682_large.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-gold text-xs uppercase tracking-[0.8em]">Premier Destination</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-8 leading-[0.85]"
          >
            THE FUTURE <br /> <span className="text-outline text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>OF RETAIL</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12">
              Where luxury meets legacy. Experience the world's most iconic destination redefined for a new era.
            </p>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8"
            >
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
