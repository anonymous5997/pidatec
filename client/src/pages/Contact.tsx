import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0712] via-[#1B0F2A] to-[#160B23]">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
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
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@pidatec.com",
                  link: "mailto:hello@pidatec.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91-674-2345678",
                  link: "tel:+91-674-2345678",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Bhubaneswar, Odisha, India",
                  link: "#",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-6 border border-[#2A1538] hover:border-rose-400/50 transition-colors block group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-rose-400/20 group-hover:bg-rose-400/30 transition-colors">
                        <Icon className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat mb-1 text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 font-poppins">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl p-8 border border-[#2A1538]"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat mb-2 text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 font-poppins">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-poppins font-semibold text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#160B23] border border-[#2A1538] rounded-lg text-white font-poppins focus:border-rose-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-poppins font-semibold text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#160B23] border border-[#2A1538] rounded-lg text-white font-poppins focus:border-rose-400 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-poppins font-semibold text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#160B23] border border-[#2A1538] rounded-lg text-white font-poppins focus:border-rose-400 focus:outline-none transition-colors"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-poppins font-semibold text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#160B23] border border-[#2A1538] rounded-lg text-white font-poppins focus:border-rose-400 focus:outline-none transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-poppins font-semibold text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#160B23] border border-[#2A1538] rounded-lg text-white font-poppins focus:border-rose-400 focus:outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    {!isLoading && <Send className="w-4 h-4" />}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
