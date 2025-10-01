import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 25px #9333ea" },
  };

  return (
    <>
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="about"
        className="py-10 bg-[#0f172a] text-white"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            My <span className="text-purple-600">Skills</span>
          </h3>
          <p className="text-[16px] text-gray-300">
            The frontend tools and technologies I work with.
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <Container className={'pb-10'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1 - HTML */}
          <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <FaHtml5 size={28} className="text-orange-500" />
              <h3 className="text-xl font-bold text-white">HTML5</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Structuring content with semantic and accessible markup.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Forms</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Canvas</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">SEO</span>
            </div>
          </motion.div>

          {/* Card 2 - CSS */}
          <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <FaCss3Alt size={28} className="text-blue-500" />
              <h3 className="text-xl font-bold text-white">CSS3</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Styling with Flexbox, Grid, animations, and responsive design.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Flexbox</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Grid</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Animations</span>
            </div>
          </motion.div>

          {/* Card 3 - JavaScript */}
          <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <SiJavascript size={28} className="text-yellow-400" />
              <h3 className="text-xl font-bold text-white">JavaScript</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Core language powering interactivity and dynamic web apps.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">ES6+</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Async</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">DOM</span>
            </div>
          </motion.div>

          {/* Card 4 - React */}
          <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <SiTailwindcss size={28} className="text-sky-400" />
              <h3 className="text-xl font-bold text-white">Styling Tools</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Utility-first and component-based styling frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Tailwind</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Bootstrap</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Sass</span>
            </div>
          </motion.div>
          

          {/* Card 5 - Next.js */}
          <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <FaReact size={28} className="text-cyan-400" />
              <h3 className="text-xl font-bold text-white">React.js</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Component-based UI development with hooks and state management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Hooks</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Context API</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">SPA</span>
            </div>
          </motion.div>
        

          {/* Card 6 - Styling Tools */}
            <motion.div whileHover="hover" variants={cardVariants} className="p-6 bg-[#181818] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <SiNextdotjs size={28} className="text-white" />
              <h3 className="text-xl font-bold text-white">Next.js</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Hybrid framework with SSR, SSG, API routes and fast routing.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">SSR</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">SSG</span>
              <span className="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm text-white">Routing</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Skills;
