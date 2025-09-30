import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Flex from "../common/Flex";
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
      className="py-20 bg-gradient-to-r from-[#141e34] via-[#121c33] to-[#0f172a] text-white"
    >
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold font-fahim mb-4">
            ABOUT <span className="text-purple-700">ME</span>
          </h3>
          <p className="text-[16px] text-gray-400 font-munna">
            Discover more about my skills and dedication to frontend
            development.
          </p>
        </div>

        {/* Flex Layout */}
        <Flex className="flex-col md:flex-row items-center md:items-start gap-10 mt-12">
          {/* Left Side Content */}
          <div className="md:w-1/2 flex flex-col items-start">
            <h3 className="text-[28px] md:text-[34px] lg:text-[38px] font-extrabold font-fahim ml-8 leading-snug">
              MY JOURNEY TO{" "}
              <span className="text-[#8A38EE]">Frontend Developer</span>
            </h3>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 ml-8 bg-[#181818] rounded-2xl w-[420px] hover:shadow-[0_0_25px_#38bdf8]"
              >
                <Image imgSrc={fOne} />
                <h3 className="text-[20px] font-extrabold font-fahim py-3">
                  Learning & Growth
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px]">
                  Started with curiosity about the web and gradually built a
                  solid base in frontend development by learning core
                  technologies and coding regularly.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 ml-35 bg-[#181818] rounded-2xl w-[420px] hover:shadow-[0_0_25px_#34d399]"
              >
                <Image imgSrc={fTwo} />
                <h3 className="text-[20px] font-extrabold font-fahim py-3">
                  Hands-on Practice
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px]">
                  Improved my skills through real-world projects, gaining
                  experience with modern frameworks and tools while solving
                  practical challenges.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 ml-8 bg-[#181818] rounded-2xl w-[420px] hover:shadow-[0_0_25px_#facc15]"
              >
                <Image imgSrc={fthree} />
                <h3 className="text-[20px] font-extrabold font-fahim py-3">
                  Creative Exploration
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px]">
                  Enjoy creating clean, responsive, and user-friendly designs
                  with smooth UI/UX that enhance both visuals and usability.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 ml-35 bg-[#181818] rounded-2xl w-[420px] hover:shadow-[0_0_25px_#8b5cf6]"
              >
                <Image imgSrc={ffour} />
                <h3 className="text-[20px] font-extrabold font-fahim py-3">
                  Future Goals
                </h3>
                <p className="text-[15px] text-gray-300 leading-[28px]">
                  Aiming to become a skilled full-stack developer and build
                  impactful applications that solve real-world problems.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-end">
            <motion.img
              src={Fahimm}
              alt="Fahim"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[450px] h-auto rounded-2xl object-cover shadow-lg mt-5"
            />
          </div>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default About;
