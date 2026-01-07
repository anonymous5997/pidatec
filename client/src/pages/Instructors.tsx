import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react";

export default function Instructors() {
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

  const instructors = [
    {
      name: "Rajesh Kumar",
      specialty: "Data Analytics & Python",
      experience: "10+ years",
      bio: "Expert in data science and machine learning with proven track record in enterprise solutions.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Priya Sharma",
      specialty: "Cloud Computing & AWS",
      experience: "8+ years",
      bio: "AWS Certified Solutions Architect with extensive experience in cloud infrastructure design.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Amit Patel",
      specialty: "Full-Stack Development",
      experience: "9+ years",
      bio: "Full-stack developer passionate about modern web technologies and mentoring junior developers.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Neha Singh",
      specialty: "Cybersecurity",
      experience: "7+ years",
      bio: "Certified ethical hacker specializing in network security and penetration testing.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Vikram Desai",
      specialty: "AI & Machine Learning",
      experience: "6+ years",
      bio: "AI researcher and practitioner with focus on deep learning and neural networks.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Anjali Verma",
      specialty: "Mobile Development",
      experience: "5+ years",
      bio: "React Native and Flutter expert building production-grade mobile applications.",
      socials: { linkedin: "#", twitter: "#", email: "#" },
    },
  ];

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
                Expert Instructors
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Meet our experienced team of industry professionals dedicated to
              your success.
            </p>
          </motion.div>

          {/* Instructors Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {instructors.map((instructor) => (
              <motion.div
                key={instructor.name}
                whileHover={{ translateY: -5 }}
                className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538] hover:border-rose-400/50 transition-colors"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {instructor.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-montserrat mb-1 text-white">
                  {instructor.name}
                </h3>
                <p className="text-rose-400 font-poppins font-semibold mb-1">
                  {instructor.specialty}
                </p>
                <p className="text-sm text-gray-400 font-poppins mb-3">
                  {instructor.experience}
                </p>

                <p className="text-gray-300 font-poppins text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-[#2A1538]">
                  <motion.a
                    href={instructor.socials.linkedin}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-rose-400/20 hover:bg-rose-400 text-rose-400 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={instructor.socials.twitter}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-rose-400/20 hover:bg-rose-400 text-rose-400 hover:text-white transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={instructor.socials.email}
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-rose-400/20 hover:bg-rose-400 text-rose-400 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
