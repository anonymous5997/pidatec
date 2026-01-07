import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "What courses does Pidatec offer?",
      answer:
        "Pidatec offers comprehensive training in Data Analytics, Cloud Computing, AI & Machine Learning, Cybersecurity, Full-Stack Development, and Mobile Development. Each course includes hands-on projects and industry best practices.",
    },
    {
      question: "What are the course duration and schedule?",
      answer:
        "Course durations vary from 4 weeks to 12 weeks depending on the curriculum. We offer flexible scheduling with options for weekday, weekend, and online batches to accommodate working professionals.",
    },
    {
      question: "Do I need prior experience to enroll?",
      answer:
        "Most of our courses are designed for beginners with little to no prior experience. We do offer advanced courses for experienced professionals. Check individual course requirements during enrollment.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day money-back guarantee if you're not satisfied with the course. After that, refunds are subject to specific conditions which are detailed during enrollment.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide career guidance, interview preparation, and placement assistance to successful course graduates. Our network includes partnerships with leading tech companies.",
    },
    {
      question: "Can I access course materials after completion?",
      answer:
        "Course materials remain accessible for 12 months after course completion. This allows you to review concepts and stay updated with industry practices.",
    },
    {
      question: "Are online courses live or recorded?",
      answer:
        "We offer both options. Live sessions provide real-time interaction with instructors, while recorded sessions give you flexibility to learn at your own pace.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, bank transfers, and digital wallets. We also offer installment payment options for select courses.",
    },
    {
      question: "How can I contact support if I face issues?",
      answer:
        "You can reach our support team via email at support@pidatec.com, phone at +91-674-2345678, or through the contact form on our website. We typically respond within 24 hours.",
    },
    {
      question: "Is there a certificate after completion?",
      answer:
        "Yes, all course completers receive a certificate of completion from Pidatec. Our certificates are recognized in the industry and showcase your skills on professional platforms.",
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
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
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
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Find answers to common questions about our courses, enrollment, and
              services.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={itemVariants} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl border border-[#2A1538] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#23112F] transition-colors"
                >
                  <h3 className="text-lg font-bold font-montserrat text-white text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-[#2A1538] bg-[#160B23]/50">
                    <p className="text-gray-300 font-poppins leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Still have questions section */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 mt-12 border-t border-[#2A1538]"
          >
            <p className="text-gray-300 font-poppins mb-4">
              Didn't find the answer you're looking for?
            </p>
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
