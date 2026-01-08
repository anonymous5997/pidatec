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
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2F0ae509ce36f74a448d3e1cd12c31934e?format=webp&width=800"
                alt="Pidatec Logo"
                className="w-full h-full object-cover"
              />
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
