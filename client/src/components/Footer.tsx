import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
  ];

  // ✅ Step 1: Updated structure for Smart Navigation
  const quickLinks = [
    { label: "About Us", type: "route", path: "/about" },
    { label: "Courses", type: "scroll", target: "#featured-courses" },
    { label: "Instructors", type: "route", path: "/instructors" },
    { label: "Testimonials", type: "scroll", target: "#testimonials" },
    { label: "Blog", type: "route", path: "/blog" },
    { label: "Contact", type: "route", path: "/get-started" },
  ];

  const policies = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-of-service" },
    { label: "FAQs", path: "/faqs" },
    { label: "Support", path: "/support" },
  ];

  // ✅ Step 2: Smart Handler for Routes vs Scrolling
  const handleFooterNav = (link: any) => {
    // 1. Handle regular page routes
    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    // 2. Handle scroll anchors
    if (link.type === "scroll") {
      const el = document.querySelector(link.target);
      
      // If element exists on current page, scroll to it
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element doesn't exist (we are on another page), go Home first
        navigate("/");
        // Wait for Home to mount, then find and scroll
        setTimeout(() => {
          const target = document.querySelector(link.target);
          target?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-[#1B0F2A] via-[#23112F] to-[#2A1538] text-white py-16 px-6 md:px-12 border-t border-[#2A1538]">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2F0ae509ce36f74a448d3e1cd12c31934e?format=webp&width=800"
                alt="Pidatec Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 font-poppins mb-6">
              Empowering the next generation of tech professionals with
              industry-leading training.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-2 rounded-full bg-rose-400/20 hover:bg-rose-400 text-rose-400 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold font-montserrat mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    // ✅ Step 3: Using the smart handler
                    onClick={() => handleFooterNav(link)}
                    whileHover={{ x: 5, color: "#fb7185" }}
                    className="text-gray-300 hover:text-rose-400 font-poppins transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold font-montserrat mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <motion.button
                    onClick={() => navigate(policy.path)}
                    whileHover={{ x: 5, color: "#fb7185" }}
                    className="text-gray-300 hover:text-rose-400 font-poppins transition-colors duration-300 text-left"
                  >
                    {policy.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold font-montserrat mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors duration-300 cursor-pointer"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-rose-400" />
                <span className="font-poppins">ceo@pidatec.in</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-rose-400" />
                <span className="font-poppins">+91 96925 95734</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300 hover:text-rose-400 transition-colors duration-300 cursor-pointer"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 text-rose-400 mt-1" />
                <span className="font-poppins">
                  E/4 , srashtha homes , Raghunathpur , Bhubaneswar , 751024
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mb-8" />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-poppins"
        >
          <p>
            © 2026 Pidatec. All rights reserved. Building the future, one skill
            at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}