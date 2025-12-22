import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  "Data Analytics",
  "Cloud Computing",
  "AI & Machine Learning",
  "Cybersecurity",
  "Full-Stack Development",
  "Mobile Development",
];

export default function GetStarted() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-montserrat mb-4"
          >
            Get Started Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 font-poppins"
          >
            Fill out the form below and let us help you find the perfect course
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-slate-900">
                    Address
                  </h3>
                </div>
                <p className="text-gray-600 font-poppins leading-relaxed">
                  Pidatec Training Center<br />
                  Bhubaneswar, Odisha<br />
                  India
                </p>
              </motion.div>

              {/* Contact Number */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-slate-900">
                    Phone
                  </h3>
                </div>
                <p className="text-gray-600 font-poppins">
                  <a href="tel:+91-674-2345678" className="hover:text-rose-400 transition-colors">
                    +91-674-2345678
                  </a>
                </p>
                <p className="text-gray-600 font-poppins">
                  <a href="tel:+91-9876543210" className="hover:text-rose-400 transition-colors">
                    +91-9876543210
                  </a>
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-slate-900">
                    Email
                  </h3>
                </div>
                <p className="text-gray-600 font-poppins">
                  <a href="mailto:info@pidatec.com" className="hover:text-rose-400 transition-colors">
                    info@pidatec.com
                  </a>
                </p>
                <p className="text-gray-600 font-poppins">
                  <a href="mailto:support@pidatec.com" className="hover:text-rose-400 transition-colors">
                    support@pidatec.com
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="text-3xl font-bold font-montserrat text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-xl text-gray-600 font-poppins text-center mb-8">
                    Thank you for submitting your query. We will get back to you soon!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = "/"}
                    className="px-8 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg hover:shadow-lg transition-all"
                  >
                    Back to Home
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-sm font-bold font-montserrat text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors font-poppins"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-bold font-montserrat text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors font-poppins"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-bold font-montserrat text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors font-poppins"
                    />
                  </motion.div>

                  {/* Course Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-bold font-montserrat text-slate-900 mb-2">
                      Select Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors font-poppins appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Choose a course...</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-sm font-bold font-montserrat text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interest or any questions you have..."
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors font-poppins resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send"}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
