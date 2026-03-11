import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaServer,
  FaGithub,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      color: "#ec4899", // Pink
      title: "Frontend Development",
      desc: "Building responsive, dynamic, and user-friendly interfaces using React and modern JavaScript.",
    },
    {
      icon: <FaPaintBrush />,
      color: "#3b82f6", // Blue
      title: "UI/UX Design",
      desc: "Crafting visually appealing and user-friendly layouts with smooth animations and clean design.",
    },
    {
      icon: <FaMobileAlt />,
      color: "#06b6d4", // Cyan
      title: "Responsive Design",
      desc: "Ensuring seamless user experience across desktops, tablets, and mobile devices.",
    },
    {
      icon: <FaRocket />,
      color: "#22c55e", // Green
      title: "Performance Optimization",
      desc: "Optimizing web apps for speed, SEO, and better Core Web Vitals to ensure top performance.",
    },
    {
      icon: <FaServer />,
      color: "#f97316", // Orange
      title: "API Integration",
      desc: "Connecting applications with RESTful APIs and GraphQL for smooth data flow and scalability.",
    },
    {
      icon: <FaGithub />,
      color: "#a855f7", // Purple
      title: "Version Control",
      desc: "Managing projects with Git & GitHub for collaboration, tracking changes, and teamwork efficiency.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#020617] text-white relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaLaptopCode className="text-pink-500 text-3xl md:text-4xl" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="text-pink-500">Services</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I leverage modern technologies to build high-performance web experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              {/* Box Content */}
              <div className="relative z-10 p-8 rounded-[2rem] bg-[#0f172a]/40 border border-white/5 backdrop-blur-md h-full flex flex-col transition-all duration-500 group-hover:border-white/20">
                
                {/* Neon Shadow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl rounded-[2rem]"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon Section */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-900/50 border border-white/10 shadow-xl"
                  style={{ color: service.color }}
                >
                  <span className="text-3xl">{service.icon}</span>
                </motion.div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Small Accent Line */}
                <div 
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;