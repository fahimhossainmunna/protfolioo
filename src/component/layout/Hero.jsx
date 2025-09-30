import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import fahim from "/src/assets/favatar.png";

// Reusable button
const CustomButton = ({ text, href, onClick, className }) => {
  const baseClasses = `py-[12px] px-[25px] rounded-[54px] font-fahim font-medium 
    text-[#121212] py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-[#141e34]
      transition-all duration-300
      hover:bg-[#141e34] 
      hover:text-white 
      hover:border-cyan-400 
      hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]`;

  if (href) {
    return (
      <a href={href} download className={`${baseClasses} ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
    </button>
  );
};

const Hero = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-r from-[#4d3259] via-[#141e34] to-[#121c33] py-16"
      >
        <div className="w-full px-4 md:px-12 lg:px-20">
          <Flex className="flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10">
            {/* Left side text */}
            <div className="text-left text-white w-full lg:w-1/2">
              <h1 className="text-[40px] md:text-[60px] font-bold font-fahim leading-tight mb-4">
                Hi I'm <span className="text-purple-600">FAHIM HOSSAIN</span>
              </h1>

              <h2 className="text-xl md:text-3xl font-semibold font-fahim mb-6 typewriter">
                Frontend Developer.
              </h2>

              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl font-munna">
                Passionate about delivering stunning web experiences through
                technology and design innovation.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <CustomButton
                  text="Contact Me"
                  onClick={() => console.log("Contact Clicked")}
                />
                <CustomButton
                  text="Download CV"
                  href="/Fahim-CV.pdf" // এখানে তোমার CV ফাইল path দাও
                />
              </div>
            </div>

            {/* Right side image */}
            <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] flex justify-center lg:justify-end">
              <Image imgSrc={fahim} className="w-full object-contain" />
            </div>
          </Flex>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
