import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Annual Visitors", value: 100, suffix: "M+" },
  { label: "Retail Stores", value: 1200, suffix: "+" },
];

export default function Why() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const countRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power4.out"
      });

      // Cards stagger reveal
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });

      // GSAP Number Counter Animation
      stats.forEach((stat, index) => {
        const target = { val: 0 };
        gsap.to(target, {
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
          onUpdate: () => {
            if (countRefs.current[index]) {
              countRefs.current[index].innerText = Math.round(target.val);
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="why" 
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center bg-[#0a0a0a] px-10 relative overflow-hidden text-center"
    >
      <div ref={titleRef}>
        <h2 className="text-4xl md:text-6xl font-semibold mb-20 tracking-tight text-white">
          A Destination Like No Other
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl">
        {stats.map((stat, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="group"
          >
            <h3 className="text-5xl md:text-7xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
              <span ref={el => countRefs.current[index] = el}>0</span>{stat.suffix}
            </h3>
            <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
    </section>
  );
}
