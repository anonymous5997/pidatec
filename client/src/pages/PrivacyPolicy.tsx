import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0712] via-[#1B0F2A] to-[#160B23]">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[#1B0F2A] via-[#23112F] to-[#2A1538] border-b border-[#2A1538] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-4">
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-poppins font-medium">Back to Home</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-400 font-poppins">
              Last updated: January 2026
            </p>
          </motion.div>

          {/* Content Sections */}
          {[
            {
              title: "1. Introduction",
              content:
                "Pidatec (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
            },
            {
              title: "2. Information We Collect",
              content:
                "We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal Data: Name, email address, phone number, course preferences, and any other information you voluntarily provide when contacting us or signing up for our courses.\n\n• Device Information: Information about your browser, IP address, and browsing patterns through cookies and similar technologies.",
            },
            {
              title: "3. Use of Your Information",
              content:
                "We use the information we collect to:\n\n• Provide and improve our services\n• Send promotional communications (with your consent)\n• Respond to your inquiries\n• Analyze usage patterns and improve user experience\n• Comply with legal obligations\n• Prevent fraudulent activities",
            },
            {
              title: "4. Data Security",
              content:
                "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
            },
            {
              title: "5. Third-Party Links",
              content:
                "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
            },
            {
              title: "6. Your Rights",
              content:
                "You have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Opt-out of marketing communications\n• Request a copy of your data in a portable format",
            },
            {
              title: "7. Contact Us",
              content:
                "If you have questions about this Privacy Policy or our privacy practices, please contact us at:\n\nEmail: privacy@pidatec.com\nPhone: +91-674-2345678\nAddress: Bhubaneswar, Odisha, India",
            },
          ].map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h2 className="text-2xl font-bold font-montserrat mb-4 text-rose-400">
                {section.title}
              </h2>
              <div className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538]">
                <p className="text-gray-300 font-poppins leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
