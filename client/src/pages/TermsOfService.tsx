import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-gray-400 font-poppins">
              Last updated: January 2024
            </p>
          </motion.div>

          {/* Content Sections */}
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing and using Pidatec's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
            },
            {
              title: "2. Use License",
              content:
                "Permission is granted to temporarily download one copy of the materials (information or software) on Pidatec's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or \"mirror\" the materials on any other server",
            },
            {
              title: "3. Disclaimer",
              content:
                "The materials on Pidatec's website are provided on an 'as is' basis. Pidatec makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
            },
            {
              title: "4. Limitations",
              content:
                "In no event shall Pidatec or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pidatec's website.",
            },
            {
              title: "5. Course Enrollment and Policies",
              content:
                "• Enrollment in courses is subject to acceptance and payment of course fees\n• Course materials are provided for personal educational use only\n• Reproduction or distribution of course materials without permission is prohibited\n• Attendance and assignment completion may be required\n• Refund policy is determined per course and will be communicated at enrollment",
            },
            {
              title: "6. User Conduct",
              content:
                "You agree not to:\n\n• Harass or cause distress or inconvenience to any person\n• Transmit content that is obscene, offensive, or abusive\n• Disrupt the normal flow of dialogue within our website or courses\n• Attempt to gain unauthorized access to our systems\n• Interfere with the proper working of the website or courses",
            },
            {
              title: "7. Modifications to Terms",
              content:
                "Pidatec may revise these terms at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
            },
            {
              title: "8. Contact Information",
              content:
                "If you have any questions about these Terms of Service, please contact us at:\n\nEmail: support@pidatec.com\nPhone: +91-674-2345678\nAddress: Bhubaneswar, Odisha, India",
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
