import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Structured Navigation Data (Distinguish Route vs Scroll)
  const navLinks = [
    { label: "About Us", type: "route", path: "/about" },
    { label: "Courses", type: "scroll", target: "#courses" },
    { label: "Why Us", type: "scroll", target: "#why-us" },
    { label: "Testimonials", type: "scroll", target: "#testimonials" },
  ];

  // ✅ Smart Handler for both Routes and Anchors
  const handleNavClick = (link: any) => {
    setIsMenuOpen(false);

    // Handle Page Navigation
    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    // Handle Smooth Scrolling
    if (link.type === "scroll") {
      const element = document.querySelector(link.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Optional: Navigate home first if not on home page
        navigate("/");
        // Note: For seamless scroll after nav, a useEffect on the Home page would be needed
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1B0F2A] via-[#23112F] to-[#2A1538] backdrop-blur-xl border-b border-[#2A1538] shadow-lg">
      {/* ✅ Updated Padding: py-2 on mobile (tight), py-3 on desktop (roomy) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2 sm:py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          // ✅ Added flex-shrink-0 so logo never squashes
          className="flex items-center gap-2 py-1 flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-300" />
            
            {/* ✅ Updated Logo Size: h-16 on mobile (bigger), h-20 on desktop */}
            {/* ✅ Added drop-shadow-lg for visual lift */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2F0ae509ce36f74a448d3e1cd12c31934e?format=webp&width=800"
              alt="Pidatec Logo"
              className="relative h-16 sm:h-16 md:h-20 w-auto rounded-lg drop-shadow-lg"
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
              onClick={() => handleNavClick(link)}
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

      {/* Mobile Menu Dropdown */}
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
              onClick={() => handleNavClick(link)}
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