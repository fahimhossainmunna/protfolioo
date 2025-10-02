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
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white border-t border-gray-700"
      >
        <Container>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 flex items-center justify-center gap-2">
              <FaLaptopCode className="text-pink-500" /> My Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are the frontend services I provide to build modern web
              experiences.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <FaCode />,
                color: "text-pink-500",
                title: "Frontend Development",
                desc: "Building responsive, dynamic, and user-friendly interfaces using React and modern JavaScript.",
                hover:
                  "hover:shadow-[0_0_25px_#ec4899] hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-transparent",
              },
              {
                icon: <FaPaintBrush />,
                color: "text-blue-500",
                title: "UI/UX Design",
                desc: "Crafting visually appealing and user-friendly layouts with smooth animations and clean design.",
                hover:
                  "hover:shadow-[0_0_25px_#3b82f6] hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-transparent",
              },
              {
                icon: <FaMobileAlt />,
                color: "text-cyan-400",
                title: "Responsive Design",
                desc: "Ensuring seamless user experience across desktops, tablets, and mobile devices.",
                hover:
                  "hover:shadow-[0_0_25px_#06b6d4] hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-transparent",
              },
              {
                icon: <FaRocket />,
                color: "text-green-500",
                title: "Performance Optimization",
                desc: "Optimizing web apps for speed, SEO, and better Core Web Vitals to ensure top performance.",
                hover:
                  "hover:shadow-[0_0_25px_#22c55e] hover:bg-gradient-to-br hover:from-green-500/10 hover:to-transparent",
              },
              {
                icon: <FaServer />,
                color: "text-orange-500",
                title: "API Integration",
                desc: "Connecting applications with RESTful APIs and GraphQL for smooth data flow and scalability.",
                hover:
                  "hover:shadow-[0_0_25px_#f97316] hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-transparent",
              },
              {
                icon: <FaGithub />,
                color: "text-purple-500",
                title: "Version Control",
                desc: "Managing projects with Git & GitHub for collaboration, tracking changes, and teamwork efficiency.",
                hover:
                  "hover:shadow-[0_0_25px_#a855f7] hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-transparent",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }} // শুধু card বড় হবে hover এ
                className={`p-6 bg-[#181818] rounded-2xl shadow-lg transition-all duration-300 ease-out ${service.hover}`}
              >
                {/* শুধু icon hover এ move হবে */}
                <motion.div
                  whileHover={{ y: -6, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-4xl mb-4 ${service.color} inline-block cursor-pointer`}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
     
      </section>
    </>
  );
};

export default Services;
