import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Image from "../common/Image";
import Fahimm from "/src/assets/frr.png";
import fOne from "/src/assets/aone.png";
import fTwo from "/src/assets/atwo.png";
import fthree from "/src/assets/athree.png";
import ffour from "/src/assets/afour.png";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="pt-20 pb-20 bg-gradient-to-r from-[#141e34] via-[#121c33] to-[#0f172a] text-white"
    >
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto px-4 max-md:px-3">
          <h3 className="text-3xl font-bold font-fahim mb-4 max-md:text-2xl">
            ABOUT <span className="text-purple-700">ME</span>
          </h3>
          <p className="text-[16px] text-gray-400 font-munna max-md:text-[14px]">
            Discover more about my skills and dedication to frontend
            development.
          </p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 lg:gap-28 mt-12 px-4 md:px-0">
          {/* Left Side Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start w-full">
            <h3 className="text-[28px] md:text-[34px] lg:text-[38px] font-extrabold font-fahim leading-snug text-center md:text-left mb-6 max-md:text-[24px]">
              MY JOURNEY TO{" "}
              <span className="text-[#8A38EE]">Frontend Developer</span>
            </h3>

            {/* Journey Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-4 w-full">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#38bdf8] shadow-md max-md:p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  <Image imgSrc={fOne} />
                </motion.div>

                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Learning & Growth
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px] max-md:text-[14px]">
                  Started with curiosity about the web and gradually built a
                  solid base in frontend development by learning core
                  technologies and coding regularly.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#34d399] shadow-md max-md:p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  <Image imgSrc={fTwo} />
                </motion.div>

                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Hands-on Practice
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px] max-md:text-[14px]">
                  Improved my skills through real-world projects, gaining
                  experience with modern frameworks and tools while solving
                  practical challenges.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#facc15] shadow-md max-md:p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  <Image imgSrc={fthree} />
                </motion.div>

                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Creative Exploration
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px] max-md:text-[14px]">
                  Enjoy creating clean, responsive, and user-friendly designs
                  with smooth UI/UX that enhance both visuals and usability.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#181818] rounded-2xl hover:shadow-[0_0_25px_#8b5cf6] shadow-md max-md:p-4"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  <Image imgSrc={ffour} />
                </motion.div>

                <h3 className="text-[20px] font-extrabold font-fahim py-3 max-md:text-[18px]">
                  Future Goals
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px] max-md:text-[14px]">
                  Aiming to become a skilled full-stack developer and build
                  impactful applications that solve real-world problems.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end w-full">
            <motion.img
              src={Fahimm}
              alt="Fahim"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-[90%] max-w-[520px] md:w-[420px] lg:w-[500px] h-auto rounded-2xl object-cover shadow-lg mt-8 max-md:w-[75%]"
            />
          </div>
        </div>

        <div className="border-b border-b-cyan-300 mt-16 w-full mx-auto"></div>
      </Container>
    </motion.div>
  );
};

export default About;
