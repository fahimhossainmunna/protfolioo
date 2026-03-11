import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Image from "../common/Image";
import Fahimm from "/src/assets/frr.png";
import fOne from "/src/assets/aone.png";
import fTwo from "/src/assets/atwo.png";
import fthree from "/src/assets/athree.png";
import ffour from "/src/assets/afour.png";

const cards = [
  {
    img: fOne,
    title: "Learning & Growth",
    desc: "Started with curiosity about the web and gradually built a solid base in frontend development by learning core technologies and coding regularly.",
    glow: "rgba(56,189,248,0.5)",
    accent: "from-cyan-400 to-blue-500",
    num: "01",
  },
  {
    img: fTwo,
    title: "Hands-on Practice",
    desc: "Improved my skills through real-world projects, gaining experience with modern frameworks and tools while solving practical challenges.",
    glow: "rgba(52,211,153,0.5)",
    accent: "from-emerald-400 to-teal-500",
    num: "02",
  },
  {
    img: fthree,
    title: "Creative Exploration",
    desc: "Enjoy creating clean, responsive, and user-friendly designs with smooth UI/UX that enhance both visuals and usability.",
    glow: "rgba(250,204,21,0.5)",
    accent: "from-yellow-400 to-orange-400",
    num: "03",
  },
  {
    img: ffour,
    title: "Future Goals",
    desc: "Aiming to become a skilled full-stack developer and build impactful applications that solve real-world problems.",
    glow: "rgba(139,92,246,0.5)",
    accent: "from-purple-400 to-pink-500",
    num: "04",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="relative pt-24 pb-24 overflow-hidden bg-[#080d1a] text-white"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#080d1a] to-cyan-900/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Section Header — no animation to avoid opacity bug */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50 animate-pulse" />
            Who I Am
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white/70">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Discover more about my skills and dedication to frontend development.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Cards */}
          <div className="w-full lg:w-1/2">
            {/* Heading — no animation */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug text-center lg:text-left mb-10 text-white/70 relative z-10">
              MY JOURNEY TO{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden cursor-default"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 40px ${card.glow}22, 0 0 30px ${card.glow}33`,
                      border: `1px solid ${card.glow}44`,
                    }}
                  />

                  {/* Number */}
                  <div
                    className={`absolute top-4 right-4 text-[11px] font-black tracking-widest bg-gradient-to-r ${card.accent} bg-clip-text text-transparent opacity-40 group-hover:opacity-80 transition-opacity`}
                  >
                    {card.num}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${card.accent} bg-opacity-10`}>
                      <Image imgSrc={card.img} className="w-8 h-8 object-contain" />
                    </div>
                  </motion.div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${card.accent} transition-all duration-500 rounded-full`}
                  />

                  <h4 className="text-[17px] font-bold mb-2 text-white">{card.title}</h4>
                  <p className="text-[13px] text-white/50 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 rounded-3xl blur-2xl" />

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/40 rounded-br-xl" />

              <motion.img
                src={Fahimm}
                alt="Fahim"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-[85%] max-w-[480px] md:w-[400px] lg:w-[460px] h-auto rounded-2xl object-cover shadow-2xl mx-auto border border-white/[0.06]"
              />

              {/* Floating stat — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="absolute -bottom-5 -left-5 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-[11px] text-white/40 uppercase tracking-wider">Years Exp.</div>
              </motion.div>

              {/* Floating stat — top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="absolute -top-5 -right-5 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-[11px] text-white/40 uppercase tracking-wider">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </Container>
    </div>
  );
};

export default About;