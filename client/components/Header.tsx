import { motion } from "framer-motion";

export default function Header() {
  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-pidatec-purple/5 backdrop-blur-xl border-b border-pidatec-turquoise/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pidatec-turquoise to-pidatec-purple rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2Fe25ac19c5d9a473897e40d7873f5ae20?format=webp&width=800"
              alt="Pidatec Logo"
              className="relative h-14 w-auto p-1 bg-white rounded-lg"
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
              whileHover={{ color: "#40Bf8A" }}
              className="text-gray-700 font-poppins font-medium text-sm transition-colors duration-300 hover:text-pidatec-turquoise"
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
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(64, 191, 138, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex px-6 py-2 bg-gradient-to-r from-pidatec-turquoise to-pidatec-purple text-white font-bold font-poppins rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
