import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function Blog() {
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

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Data Analytics in 2024",
      excerpt:
        "Learn the fundamentals of data analytics and discover why it's one of the most in-demand skills in tech.",
      author: "Rajesh Kumar",
      date: "January 5, 2024",
      category: "Data Analytics",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "AWS Cloud Services: A Beginner's Guide",
      excerpt:
        "Explore the essential AWS services and how to leverage them for building scalable cloud applications.",
      author: "Priya Sharma",
      date: "January 3, 2024",
      category: "Cloud Computing",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Future of AI and Machine Learning",
      excerpt:
        "Discover emerging trends in AI and ML, and what they mean for the future of technology.",
      author: "Vikram Desai",
      date: "December 28, 2023",
      category: "AI & ML",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "Web Security Best Practices",
      excerpt:
        "Essential security practices every full-stack developer should know to protect their applications.",
      author: "Neha Singh",
      date: "December 25, 2023",
      category: "Cybersecurity",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "React vs Vue: Choosing the Right Framework",
      excerpt:
        "A comprehensive comparison of React and Vue to help you choose the best framework for your project.",
      author: "Amit Patel",
      date: "December 20, 2023",
      category: "Web Development",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Mobile Development Trends in 2024",
      excerpt:
        "Explore the latest trends in mobile development and tools that every mobile developer should know.",
      author: "Anjali Verma",
      date: "December 15, 2023",
      category: "Mobile Development",
      readTime: "7 min read",
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
          className="space-y-12"
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
                Pidatec Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Insights, tips, and stories from our expert instructors and the
              tech community.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ translateY: -5 }}
                className="bg-gradient-to-br from-[#1B0F2A] to-[#2A1538] rounded-xl overflow-hidden border border-[#2A1538] hover:border-rose-400/50 transition-colors cursor-pointer group"
              >
                {/* Featured Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-rose-400/20 to-rose-500/20 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-rose-400/20 text-rose-400 text-xs font-semibold rounded-full font-poppins">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-poppins">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-montserrat mb-3 text-white group-hover:text-rose-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 font-poppins text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#2A1538] text-xs text-gray-400 font-poppins">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
