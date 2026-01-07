import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AboutUs() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0712] via-[#1B0F2A] to-[#160B23]">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[#1B0F2A] via-[#23112F] to-[#2A1538] border-b border-[#2A1538] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-4">
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-poppins font-medium">Back to Home</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #fb7185, #ffffff, #fb7185)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Pidatec
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Empowering the next generation of tech professionals with
              industry-leading training and hands-on expertise.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-2xl p-8 md:p-12 border border-[#2A1538]"
          >
            <h2 className="text-3xl font-bold font-montserrat mb-4 text-rose-400">
              Our Mission
            </h2>
            <p className="text-gray-300 font-poppins leading-relaxed">
              At Pidatec, we believe that quality tech education should be
              accessible to everyone. Our mission is to bridge the gap between
              academic learning and industry demands by providing comprehensive,
              hands-on training in cutting-edge technologies. We're committed to
              nurturing skilled professionals who can drive innovation and
              success in their careers.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-2xl p-8 md:p-12 border border-[#2A1538]"
          >
            <h2 className="text-3xl font-bold font-montserrat mb-4 text-rose-400">
              Our Vision
            </h2>
            <p className="text-gray-300 font-poppins leading-relaxed">
              We envision a world where every aspiring tech professional has
              access to world-class training and mentorship. Pidatec aims to be
              the leading training institute in the region, known for producing
              skilled, confident, and innovative tech professionals who excel in
              their chosen fields.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold font-montserrat mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our training and service delivery.",
                },
                {
                  title: "Innovation",
                  description:
                    "We stay ahead of industry trends and incorporate the latest technologies in our curriculum.",
                },
                {
                  title: "Integrity",
                  description:
                    "We maintain the highest standards of honesty, transparency, and professionalism.",
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  whileHover={{ translateY: -5 }}
                  className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538] hover:border-rose-400/50 transition-colors"
                >
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-rose-400">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 font-poppins">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Pidatec */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-2xl p-8 md:p-12 border border-[#2A1538]"
          >
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-rose-400">
              Why Choose Pidatec?
            </h2>
            <ul className="space-y-4">
              {[
                "Expert instructors with industry experience",
                "Hands-on, practical training approach",
                "Comprehensive curriculum covering latest technologies",
                "Career guidance and placement assistance",
                "Flexible learning options (online and offline)",
                "Affordable pricing with multiple payment plans",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 font-poppins">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
