import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

const Skills = () => {
  // Animation configuration for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Protiti card ektur por ekta ashbe
      },
    },
  };

  // Animation for individual cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#f97316", desc: "Structuring content with semantic markup.", tags: ["Forms", "Canvas", "SEO"] },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#3b82f6", desc: "Styling with Flexbox, Grid, and animations.", tags: ["Flexbox", "Grid", "Animations"] },
    { name: "JavaScript", icon: <SiJavascript />, color: "#facc15", desc: "Core language for dynamic web interactivity.", tags: ["ES6+", "Async", "DOM"] },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", desc: "Utility-first CSS for rapid UI development.", tags: ["Tailwind", "Bootstrap", "Sass"] },
    { name: "React.js", icon: <FaReact />, color: "#06b6d4", desc: "Component-based UI with hooks & state.", tags: ["Hooks", "Context API", "SPA"] },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", desc: "Hybrid framework with SSR and fast routing.", tags: ["SSR", "SSG", "API Routes"] },
  ];

  return (
    <div className="bg-[#0b0f1a] py-20 overflow-hidden">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-4 mb-16"
      >
        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Specialized</span> Skills
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          I combine aesthetic design with high-performance code using the latest frontend technologies.
        </p>
      </motion.div>

      {/* Cards Section */}
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 rounded-3xl bg-[#161b2a] border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Abstract Background Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-900/50 group-hover:scale-110 transition-transform duration-300 text-3xl"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{skill.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {skill.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-lg bg-gray-900 text-gray-400 border border-gray-800 group-hover:border-gray-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom line accent */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Skills;