import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-b border-rose-400/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-300" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2F0ae509ce36f74a448d3e1cd12c31934e?format=webp&width=800"
              alt="Pidatec Logo"
              className="relative h-14 w-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ color: "#fb7185" }}
              className="text-gray-200 font-poppins font-medium text-sm transition-colors duration-300 hover:text-rose-400"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 113, 133, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex px-6 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
