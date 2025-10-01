import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import { FaGraduationCap } from "react-icons/fa";
import Image from "../common/Image";
import fmunna from "/src/assets/fahimmm.jpg";

const Education = () => {
  const educationData = [
    {
      year: "2022 - Present",
      degree: "B.Sc in Computer Science",
      institution: "XYZ University",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science with a focus on frontend technologies and modern web development.",
    },
    {
      year: "2019 - 2021",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "ABC College",
      description:
        "Completed HSC in Science group with a strong emphasis on Mathematics and Computer studies.",
    },
    {
      year: "2017 - 2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "ABC High School",
      description:
        "Completed secondary education in Science stream with good academic performance.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-[#0f172a] text-white"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-bold font-fahim mb-4">
            My <span className="text-purple-700">Education</span>
          </h3>
          <p className="text-[16px] text-gray-400 font-munna">
            A timeline of my academic journey and achievements.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-items-center">
          {/* Timeline */}
          <div className="relative border-l border-gray-700 pl-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 relative"
              >
                {/* Circle Icon */}
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full">
                  <FaGraduationCap className="text-white text-lg" />
                </span>

                {/* Content Box */}
                <div className="bg-[#181818] p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_#7c3aed] transition">
                  <span className="text-sm text-purple-400 font-semibold">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold mt-1">{edu.degree}</h4>
                  <h5 className="text-gray-400 font-medium">
                    {edu.institution}
                  </h5>
                  <p className="text-gray-300 mt-2 text-sm">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group w-[90%] sm:w-[300px] md:w-[380px] lg:w-[430px]">
              {/* Animated Gradient Border */}
              <div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 
                  animate-gradient-x"
              ></div>

              {/* Image with Glow + Inner Border */}
              <div
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#8ccbff] 
                  shadow-[0_0_40px_rgba(124,58,237,0.6)] group-hover:scale-105 transition duration-500"
              >
                <Image imgSrc={fmunna} alt="Fahim" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
