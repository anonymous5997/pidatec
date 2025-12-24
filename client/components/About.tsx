import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT: LOGO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pidatec-turquoise to-pidatec-purple">
              <motion.img
                src="/assets/pidatec-logo.jpg"
                alt="Pidatec Logo"
                animate={{ opacity: [0.94, 1, 0.94] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-3 left-0 h-2 rounded bg-gradient-to-r from-pidatec-turquoise via-pidatec-pink to-pidatec-orange"
            />
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* ✅ GRADIENT HEADING */}
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold font-montserrat leading-tight
                         bg-gradient-to-r from-pidatec-purple via-pidatec-pink to-pidatec-orange
                         bg-clip-text text-transparent"
            >
              Empowering careers through hands-on tech education
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg font-poppins text-slate-600 leading-relaxed"
            >
              At Pidatec, we believe in the power of education to transform careers
              and communities. Our mission is to provide industry-relevant training
              that bridges the gap between academic knowledge and real-world
              application.
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg font-poppins text-slate-600 leading-relaxed"
            >
              With expert instructors, cutting-edge curriculum, and hands-on
              projects, we prepare you for the challenges and opportunities of
              tomorrow&apos;s tech landscape.
            </motion.p>

            <motion.div variants={item} className="flex gap-12 pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-1 rounded bg-gradient-to-b from-pidatec-turquoise to-pidatec-pink" />
                <div>
                  <p className="text-2xl font-bold text-pidatec-purple">10,000+</p>
                  <p className="text-sm text-gray-600">Students Trained</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-1 rounded bg-gradient-to-b from-pidatec-orange to-pidatec-yellow" />
                <div>
                  <p className="text-2xl font-bold text-pidatec-purple">95%</p>
                  <p className="text-sm text-gray-600">Job Placement Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
