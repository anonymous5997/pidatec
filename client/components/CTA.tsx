import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-pidatec-orange to-pidatec-yellow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute bottom-5 right-10 w-60 h-60 rounded-full border-2 border-white" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple mb-6 leading-tight">
            Start Your Tech Journey Today!
          </h2>

          <p className="text-xl text-pidatec-purple/80 font-poppins mb-10">
            Join thousands of successful graduates and transform your career with
            Pidatec
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-pidatec-pink text-white font-bold font-poppins rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-pidatec-purple"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
