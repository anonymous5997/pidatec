import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1B0F2A] via-[#23112F] to-[#2A1538] backdrop-blur-xl border-b border-[#2A1538] shadow-lg">
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

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              whileHover={{ color: "#fb7185" }}
              className="text-gray-200 font-poppins font-medium text-sm transition-colors duration-300 hover:text-rose-400"
            >
              {link.label}
            </motion.button>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-gray-200 hover:text-rose-400 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden sm:flex items-center gap-4"
        >
          <motion.button
            onClick={() => navigate("/get-started")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(251, 113, 133, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isMenuOpen
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gradient-to-r from-[#23112F] to-[#2A1538] border-t border-[#2A1538]"
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              whileHover={{ x: 5, color: "#fb7185" }}
              className="block w-full text-left px-4 py-2 text-gray-200 font-poppins font-medium rounded-lg hover:bg-[#160B23] hover:text-rose-400 transition-all duration-300"
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/get-started");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-2 px-6 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}
