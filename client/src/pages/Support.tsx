import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  BookOpen,
  Headphones,
} from "lucide-react";

export default function Support() {
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

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries and we'll respond within 24 hours",
      contact: "ceo@pidatec.in",
      link: "mailto:ceo@pidatec.in",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance during business hours",
      contact: "+91 9692595734",
      link: "tel:+91 9692595734",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team on the website",
      contact: "Available 9 AM - 6 PM IST",
      link: "#",
    },
    {
      icon: Headphones,
      title: "Course Support",
      description: "Dedicated support for course-related technical issues",
      contact: "ceo@pidatec.in",
      link: "mailto:ceo@pidatec.in",
    },
  ];

  const supportTopics = [
    {
      icon: BookOpen,
      title: "Course Resources",
      description: "Access course materials, assignments, and project guides",
    },
    {
      icon: Clock,
      title: "Technical Help",
      description: "Troubleshoot platform issues and access problems",
    },
    {
      icon: Mail,
      title: "Account Help",
      description: "Manage your profile, password, and enrollment details",
    },
    {
      icon: Headphones,
      title: "Career Guidance",
      description:
        "Get help with placement assistance and career development",
    },
  ];

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #fb7185, #ffffff, #fb7185)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Help & Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              We're here to help you succeed. Choose your preferred way to reach
              out to us.
            </p>
          </motion.div>

          {/* Support Channels */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.link}
                  className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538] hover:border-rose-400/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-rose-400/20 group-hover:bg-rose-400/30 w-fit mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2 text-white">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 font-poppins text-sm mb-3">
                    {channel.description}
                  </p>
                  <p className="text-rose-400 font-poppins font-semibold text-sm">
                    {channel.contact}
                  </p>
                </a>
              );
            })}
          </motion.div>

          {/* Support Topics */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold font-montserrat text-center mb-8">
              How Can We Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    whileHover={{ translateY: -5 }}
                    className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538] hover:border-rose-400/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-rose-400/20">
                        <Icon className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat mb-2 text-white">
                          {topic.title}
                        </h3>
                        <p className="text-gray-300 font-poppins text-sm">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Response Time Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-8 border border-[#2A1538] text-center"
          >
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">
              Response Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { channel: "Email", time: "Within 24 hours" },
                { channel: "Phone", time: "Immediate (during business hours)" },
                { channel: "Live Chat", time: "Instant (9 AM - 6 PM IST)" },
              ].map((item) => (
                <div key={item.channel}>
                  <p className="text-gray-400 font-poppins mb-1">
                    {item.channel}
                  </p>
                  <p className="text-rose-400 font-bold font-montserrat">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Link */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-300 font-poppins mb-4">
              Check out our FAQ section for quick answers
            </p>
            <motion.button
              onClick={() => navigate("/faqs")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View FAQs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
