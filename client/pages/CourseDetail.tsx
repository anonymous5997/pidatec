import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen } from "lucide-react";

const courseDetails: Record<number, any> = {
  1: {
    id: 1,
    title: "Data Analytics",
    description: "Master data visualization, statistics, and business intelligence tools.",
    icon: "📊",
    duration: "12 weeks",
    level: "Intermediate",
    students: 1250,
    rating: 4.8,
    instructor: "Sarah Chen",
    price: "$499",
    fullDescription: `Transform raw data into actionable insights with our comprehensive Data Analytics course. You'll learn to analyze complex datasets, create compelling visualizations, and drive business decisions with data-driven strategies. This course covers statistical methods, data manipulation, visualization tools, and real-world case studies.`,
    modules: [
      {
        title: "Data Fundamentals",
        topics: ["Data types and structures", "Data cleaning", "Data validation", "Data quality assessment"]
      },
      {
        title: "Statistical Analysis",
        topics: ["Descriptive statistics", "Inferential statistics", "Hypothesis testing", "Regression analysis"]
      },
      {
        title: "Visualization & Tools",
        topics: ["Excel & Tableau", "Power BI", "Python visualization", "Interactive dashboards"]
      },
      {
        title: "Business Intelligence",
        topics: ["Data modeling", "ETL processes", "Business metrics", "KPI tracking"]
      }
    ],
    skills: ["Data Analysis", "Statistical Thinking", "Tableau", "Python", "Business Intelligence", "Dashboard Creation"]
  },
  2: {
    id: 2,
    title: "Cloud Computing",
    description: "Learn AWS, Azure, and Google Cloud for scalable infrastructure.",
    icon: "☁️",
    duration: "10 weeks",
    level: "Intermediate",
    students: 980,
    rating: 4.9,
    instructor: "Michael Rodriguez",
    price: "$599",
    fullDescription: `Master cloud infrastructure and deployment with our Cloud Computing course. Learn to design, deploy, and manage scalable applications across AWS, Azure, and Google Cloud. This course covers cloud architecture, serverless computing, containerization, and production deployment strategies.`,
    modules: [
      {
        title: "Cloud Fundamentals",
        topics: ["Cloud computing basics", "AWS overview", "Azure basics", "Google Cloud Platform"]
      },
      {
        title: "Core Cloud Services",
        topics: ["Compute services", "Storage solutions", "Networking", "Databases"]
      },
      {
        title: "DevOps & Containerization",
        topics: ["Docker", "Kubernetes", "CI/CD pipelines", "Infrastructure as Code"]
      },
      {
        title: "Advanced Deployment",
        topics: ["Serverless architecture", "Auto-scaling", "Monitoring", "Cost optimization"]
      }
    ],
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps", "Cloud Architecture"]
  },
  3: {
    id: 3,
    title: "AI & Machine Learning",
    description: "Dive into deep learning, neural networks, and AI applications.",
    icon: "🤖",
    duration: "14 weeks",
    level: "Advanced",
    students: 750,
    rating: 4.7,
    instructor: "Dr. Priya Patel",
    price: "$699",
    fullDescription: `Explore the cutting-edge world of Artificial Intelligence and Machine Learning. Build neural networks, implement deep learning models, and create intelligent applications. This comprehensive course covers supervised learning, unsupervised learning, deep learning, and real-world AI applications.`,
    modules: [
      {
        title: "Machine Learning Basics",
        topics: ["ML concepts", "Supervised learning", "Unsupervised learning", "Model evaluation"]
      },
      {
        title: "Deep Learning",
        topics: ["Neural networks", "CNNs", "RNNs", "Transfer learning"]
      },
      {
        title: "Advanced Techniques",
        topics: ["NLP processing", "Computer vision", "Reinforcement learning", "Generative models"]
      },
      {
        title: "Production ML",
        topics: ["Model deployment", "MLOps", "Ethics in AI", "Real-world projects"]
      }
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "NLP", "Computer Vision"]
  },
  4: {
    id: 4,
    title: "Cybersecurity",
    description: "Protect systems and networks with advanced security techniques.",
    icon: "🔒",
    duration: "11 weeks",
    level: "Intermediate",
    students: 860,
    rating: 4.8,
    instructor: "James Wilson",
    price: "$549",
    fullDescription: `Secure your organization against threats with our comprehensive Cybersecurity course. Learn network security, cryptography, threat detection, and incident response. This course provides hands-on training in protecting systems, networks, and data from cyber attacks.`,
    modules: [
      {
        title: "Security Fundamentals",
        topics: ["CIA triad", "Threat landscape", "Security frameworks", "Compliance standards"]
      },
      {
        title: "Network Security",
        topics: ["Firewalls", "VPNs", "Intrusion detection", "Network monitoring"]
      },
      {
        title: "Application Security",
        topics: ["Secure coding", "Authentication", "Encryption", "Web vulnerabilities"]
      },
      {
        title: "Incident Response",
        topics: ["Threat detection", "Incident handling", "Forensics", "Recovery"]
      }
    ],
    skills: ["Network Security", "Cryptography", "Ethical Hacking", "Threat Analysis", "Compliance", "Incident Response"]
  },
  5: {
    id: 5,
    title: "Full-Stack Development",
    description: "Build complete web applications from frontend to backend.",
    icon: "⚙️",
    duration: "16 weeks",
    level: "Beginner to Intermediate",
    students: 2100,
    rating: 4.9,
    instructor: "Alex Kim",
    price: "$449",
    fullDescription: `Become a full-stack developer by mastering both frontend and backend technologies. Learn to build responsive web applications, create robust APIs, and deploy production-ready software. This course covers modern frameworks, databases, and deployment strategies.`,
    modules: [
      {
        title: "Frontend Fundamentals",
        topics: ["HTML & CSS", "JavaScript", "React basics", "State management"]
      },
      {
        title: "Advanced Frontend",
        topics: ["Component libraries", "Routing", "API integration", "Performance optimization"]
      },
      {
        title: "Backend Development",
        topics: ["Node.js", "Express.js", "RESTful APIs", "Database design"]
      },
      {
        title: "Deployment & DevOps",
        topics: ["Version control", "CI/CD", "Cloud deployment", "Monitoring"]
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  6: {
    id: 6,
    title: "Mobile Development",
    description: "Create powerful iOS and Android applications.",
    icon: "📱",
    duration: "13 weeks",
    level: "Intermediate",
    students: 640,
    rating: 4.7,
    instructor: "Emma Thompson",
    price: "$599",
    fullDescription: `Build native and cross-platform mobile applications for iOS and Android. Learn mobile UI/UX design, native development, and popular frameworks. This course provides hands-on experience building apps from concept to deployment on app stores.`,
    modules: [
      {
        title: "Mobile Basics",
        topics: ["Mobile platforms", "UI/UX design", "App architecture", "Performance"]
      },
      {
        title: "Native Development",
        topics: ["Swift & iOS", "Kotlin & Android", "Native APIs", "Platform features"]
      },
      {
        title: "Cross-platform Development",
        topics: ["React Native", "Flutter", "Code sharing", "Performance optimization"]
      },
      {
        title: "App Deployment",
        topics: ["App store submission", "Testing", "Release management", "Monetization"]
      }
    ],
    skills: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UI/UX", "App Deployment"]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDetails[parseInt(courseId || "1")];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-rose-400 hover:text-rose-300 mb-6 font-poppins font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </motion.button>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">{course.icon}</div>
              <h1 className="text-5xl font-bold font-montserrat mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 font-poppins mb-6">
                {course.fullDescription}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg hover:shadow-lg transition-all"
              >
                Enroll Now - {course.price}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-600 font-poppins">Duration</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 font-montserrat">
                  {course.duration}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-600 font-poppins">Level</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 font-montserrat">
                  {course.level}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-600 font-poppins">Students</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 font-montserrat">
                  {course.students.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-gray-600 font-poppins">Rating</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 font-montserrat">
                  {course.rating}/5
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold font-montserrat text-gray-900 mb-8"
          >
            Skills You'll Learn
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-4"
          >
            {course.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose-400"
              >
                <p className="text-lg font-bold text-gray-900 font-montserrat">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Course Modules */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold font-montserrat text-gray-900 mb-8"
          >
            Course Modules
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {course.modules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-rose-400" />
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat">
                    {module.title}
                  </h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center gap-2 text-gray-700 font-poppins"
                    >
                      <span className="w-2 h-2 bg-rose-400 rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Instructor Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold font-montserrat mb-2">
            Taught by {course.instructor}
          </h3>
          <p className="text-gray-300 font-poppins mb-8">
            Expert instructor with years of industry experience
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold font-poppins rounded-lg hover:shadow-lg transition-all"
          >
            Enroll Now - {course.price}
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
