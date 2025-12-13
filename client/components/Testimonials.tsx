import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Data Analyst",
    company: "Tech Corp",
    content:
      "Pidatec's data analytics course transformed my career. The hands-on projects and expert guidance helped me land my dream job within 3 months!",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Cloud Architect",
    company: "Cloud Solutions Inc",
    content:
      "The cloud computing curriculum is world-class. I got certified and doubled my salary. Best investment in my career!",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Full-Stack Developer",
    company: "StartUp Hub",
    content:
      "From zero to full-stack developer in 6 months. Pidatec's instructors were amazing and the real projects were invaluable.",
    rating: 5,
    image: "👩‍💻",
  },
  {
    id: 4,
    name: "Alex Rivera",
    role: "Cybersecurity Specialist",
    company: "Security First",
    content:
      "The cybersecurity course gave me the skills and confidence to protect critical systems. Highly recommended!",
    rating: 5,
    image: "👨‍🔧",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Hear from our successful graduates
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-pidatec-turquoise">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[current].rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-pidatec-yellow text-pidatec-yellow"
                      />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-gray-700 font-poppins mb-8 italic leading-relaxed">
                  "{testimonials[current].content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {testimonials[current].image}
                  </div>
                  <div>
                    <p className="font-bold font-montserrat text-pidatec-purple">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-600 font-poppins text-sm">
                      {testimonials[current].role} at{" "}
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>

                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pidatec-purple/5 to-pidatec-pink/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 rounded-full bg-gradient-to-br from-pidatec-turquoise to-pidatec-purple text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-pidatec-purple w-8"
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 rounded-full bg-gradient-to-br from-pidatec-orange to-pidatec-yellow text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
