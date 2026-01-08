import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pidatec-orange to-pidatec-yellow py-16 px-6 md:px-12">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-5 left-10 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute bottom-5 right-10 w-60 h-60 rounded-full border-2 border-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl md:text-5xl font-bold font-montserrat text-pidatec-purple leading-tight">
            Start Your Tech Journey Today!
          </h2>

          <p className="mb-10 text-xl font-poppins text-pidatec-purple/80">
            Join thousands of successful graduates and transform your career with
            Pidatec
          </p>

          <motion.button
            onClick={() => navigate("/get-started")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-pidatec-pink px-10 py-4 font-poppins font-bold text-white shadow-lg transition-all duration-300 hover:bg-pidatec-purple hover:shadow-2xl"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
