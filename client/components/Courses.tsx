import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Data Analytics",
    description: "Master data visualization, statistics, and business intelligence tools.",
    gradient: "from-pidatec-turquoise/20 to-pidatec-purple/20",
    icon: "📊",
  },
  {
    id: 2,
    title: "Cloud Computing",
    description: "Learn AWS, Azure, and Google Cloud for scalable infrastructure.",
    gradient: "from-pidatec-pink/20 to-pidatec-orange/20",
    icon: "☁️",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Dive into deep learning, neural networks, and AI applications.",
    gradient: "from-pidatec-orange/20 to-pidatec-yellow/20",
    icon: "🤖",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Protect systems and networks with advanced security techniques.",
    gradient: "from-pidatec-purple/20 to-pidatec-pink/20",
    icon: "🔒",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description: "Build complete web applications from frontend to backend.",
    gradient: "from-pidatec-turquoise/20 to-pidatec-orange/20",
    icon: "⚙️",
  },
  {
    id: 6,
    title: "Mobile Development",
    description: "Create powerful iOS and Android applications.",
    gradient: "from-pidatec-yellow/20 to-pidatec-pink/20",
    icon: "📱",
  },
];

export default function Courses() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="courses" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Choose from our comprehensive catalog of industry-leading courses
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg`}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4">{course.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-montserrat text-pidatec-purple mb-3 flex-grow">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-poppins mb-6 flex-grow">
                  {course.description}
                </p>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => navigate(`/course/${course.id}`)}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-rose-400 font-bold font-poppins hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pidatec-turquoise/0 via-transparent to-pidatec-pink/0 group-hover:from-pidatec-turquoise/10 group-hover:to-pidatec-pink/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
