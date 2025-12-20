import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;

      const elements = containerRef.current.querySelectorAll(".particle");
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pidatec-purple via-pidatec-pink to-pidatec-orange opacity-90" />

      {/* Floating particles */}
      <motion.div
        className="particle absolute top-10 left-10 w-64 h-64 bg-pidatec-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="particle absolute -bottom-20 right-10 w-96 h-96 bg-pidatec-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.div
        className="particle absolute top-1/2 left-1/3 w-80 h-80 bg-pidatec-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight">
            Build the Future with Pidatec
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-2xl font-poppins mb-12 opacity-95 leading-relaxed">
            Industry-driven technology training for tomorrow's innovators.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-pidatec-yellow text-pidatec-purple font-bold font-poppins rounded-lg transition-all duration-300 hover:bg-pidatec-orange shadow-lg hover:shadow-2xl"
          >
            Start Learning
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={() => {
              const coursesSection = document.getElementById("courses");
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-pidatec-turquoise text-pidatec-turquoise font-bold font-poppins rounded-lg transition-all duration-300 hover:bg-pidatec-turquoise hover:text-pidatec-purple"
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white opacity-70">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
