import React from "react";
import { motion } from "framer-motion";
import Flex from "../common/Flex";
import Image from "../common/Image";
import fmunna from "/src/assets/fahimh.jpg";
import { FaEnvelope, FaDownload } from "react-icons/fa";

// Reusable button
const CustomButton = ({ text, href, onClick, icon: Icon, className }) => {
  const baseClasses = `flex items-center justify-center gap-2 
    py-3 px-6 rounded-full font-fahim font-medium text-sm sm:text-base
    bg-white text-[#121212] border-2 border-[#141e34]
    transition-all duration-300
    hover:bg-[#141e34] 
    hover:text-white 
    hover:border-cyan-400 
    hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]`;

  if (href) {
    return (
      <a href={href} download className={`${baseClasses} ${className}`}>
        {Icon && <Icon className="text-sm sm:text-base" />} {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {Icon && <Icon className="text-sm sm:text-base" />} {text}
    </button>
  );
};

const Hero = () => {
  // Contact button click handler
  const scrollToFooter = () => {
    const footer = document.getElementById("footer"); // footer id dhorbo
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-r from-[#4d3259] via-[#141e34] to-[#121c33] py-10 sm:py-16"
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20">
          <Flex className="flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10">
            {/* Left side text */}
            <div className="text-center lg:text-left text-white w-full lg:w-1/2">
              <h1 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-bold font-fahim leading-tight mb-4">
                Hi I'm <span className="text-purple-600">FAHIM HOSSAIN</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-fahim mb-6 typewriter">
                Frontend Developer.
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 font-munna">
                Passionate about delivering stunning web experiences through
                technology and design innovation.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CustomButton
                  text="Contact Me"
                  icon={FaEnvelope}
                  onClick={scrollToFooter} // ✅ Footer e scroll hobe
                />
                <CustomButton
                  text="Download CV"
                  icon={FaDownload}
                  href="/Fahim_CV.pdf"
                />
              </div>
            </div>

            {/* Right side image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center items-center mt-8 lg:mt-0"
            >
              <div className="relative group w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_0_50px_rgba(124,58,237,0.6)] group-hover:scale-105 transition duration-500">
                  <Image 
  imgSrc={fmunna} 
  className="w-full h-full object-cover object-[center_15%]" 
/>
                </div>
              </div>
            </motion.div>
          </Flex>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
