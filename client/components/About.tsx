import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-pidatec-turquoise to-pidatec-purple rounded-2xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
              <div className="text-6xl text-white opacity-20">
                <svg
                  className="w-48 h-48"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pidatec-turquoise/20 to-pidatec-orange/20" />
            </div>

            {/* Decorative bars */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 h-2 bg-gradient-to-r from-pidatec-turquoise to-pidatec-pink rounded"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple mb-4">
                Empowering careers through hands-on tech education
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-600 text-lg font-poppins leading-relaxed">
                At Pidatec, we believe in the power of education to transform careers and communities. Our mission is to provide industry-relevant training that bridges the gap between academic knowledge and real-world application.
              </p>

              <p className="text-gray-600 text-lg font-poppins leading-relaxed">
                With expert instructors, cutting-edge curriculum, and hands-on projects, we prepare you for the challenges and opportunities of tomorrow's tech landscape.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-6"
            >
              <div className="w-1 h-12 bg-gradient-to-b from-pidatec-turquoise to-pidatec-pink rounded" />
              <div>
                <p className="font-bold text-2xl text-pidatec-purple font-montserrat">
                  10,000+
                </p>
                <p className="text-gray-600">Students Trained</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="w-1 h-12 bg-gradient-to-b from-pidatec-orange to-pidatec-yellow rounded" />
              <div>
                <p className="font-bold text-2xl text-pidatec-purple font-montserrat">
                  95%
                </p>
                <p className="text-gray-600">Job Placement Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
