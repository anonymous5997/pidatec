import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Zap,
  Award,
  Laptop,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Industry Experts as Trainers",
    description:
      "Learn from professionals with years of real-world experience in their fields.",
    icon: Users,
    gradient: "from-pidatec-turquoise to-pidatec-purple",
  },
  {
    id: 2,
    title: "Real Projects + Case Studies",
    description:
      "Work on actual industry projects and analyze real-world case studies.",
    icon: BookOpen,
    gradient: "from-pidatec-pink to-pidatec-orange",
  },
  {
    id: 3,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with 24/7 access to course materials and resources.",
    icon: Zap,
    gradient: "from-pidatec-orange to-pidatec-yellow",
  },
  {
    id: 4,
    title: "Job Assistance & Certification",
    description:
      "Get certified and receive dedicated job placement assistance upon completion.",
    icon: Award,
    gradient: "from-pidatec-purple to-pidatec-pink",
  },
  {
    id: 5,
    title: "Modern Smart Labs",
    description:
      "Access state-of-the-art labs with cloud-based environments and tools.",
    icon: Laptop,
    gradient: "from-pidatec-turquoise to-pidatec-orange",
  },
];

export default function WhyChoose() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple mb-4">
            Why Choose Pidatec?
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            We combine expertise, innovation, and dedication to your success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Circular icon background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold font-montserrat text-pidatec-purple mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-pidatec-turquoise to-pidatec-pink mt-6 rounded"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
