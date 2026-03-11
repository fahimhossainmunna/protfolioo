import React from "react";
import { motion } from "framer-motion";
import Flex from "../common/Flex";
import Image from "../common/Image";
import fmunna from "/src/assets/fahimh.jpg";
import { FaEnvelope, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const CustomButton = ({ text, href, onClick, icon: Icon, variant = "outline" }) => {
  const solidClass =
    "group relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-105";

  if (variant === "solid") {
    return href ? (
      <a href={href} download className={solidClass}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        {Icon && <Icon className="relative z-10 text-sm group-hover:-translate-y-0.5 transition-transform" />}
        <span className="relative z-10">{text}</span>
      </a>
    ) : (
      <button onClick={onClick} className={solidClass}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        {Icon && <Icon className="relative z-10 text-sm group-hover:-translate-y-0.5 transition-transform" />}
        <span className="relative z-10">{text}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:scale-105"
    >
      {Icon && <Icon className="text-sm group-hover:text-cyan-400 transition-colors" />}
      {text}
    </button>
  );
};

const Particle = ({ style }) => (
  <div className="absolute rounded-full bg-cyan-400/20 animate-pulse" style={style} />
);

const Hero = () => {
  const scrollToFooter = () => {
    const section = document.getElementById("get-in-touch");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const particles = [
    { width: 6, height: 6, top: "15%", left: "8%", animationDuration: "3s" },
    { width: 4, height: 4, top: "70%", left: "5%", animationDuration: "4s", animationDelay: "1s" },
    { width: 8, height: 8, top: "40%", left: "92%", animationDuration: "3.5s", animationDelay: "0.5s" },
    { width: 5, height: 5, top: "80%", left: "88%", animationDuration: "5s", animationDelay: "2s" },
    { width: 3, height: 3, top: "25%", left: "75%", animationDuration: "4s", animationDelay: "1.5s" },
    { width: 6, height: 6, top: "60%", left: "20%", animationDuration: "6s", animationDelay: "0.8s" },
  ];

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080d1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#080d1a] to-cyan-900/20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* ✅ pt-28 দিয়ে navbar overlap fix করা হয়েছে */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left text-white w-full lg:w-1/2 space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for hire
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] font-bold leading-tight"
            >
              Hi I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FAHIM HOSSAIN
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full opacity-60" />
              </span>
            </motion.h1>

            {/* Subtitle - typewriter */}
            {/* <motion.div 
  variants={fadeUp} 
  className="w-full flex justify-center md:justify-start"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 relative inline-block">
    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 typewriter-text whitespace-nowrap overflow-hidden border-r-4 border-cyan-400 pr-1">
      Frontend Developer.
    </span>
  </h2>
</motion.div> */}

<motion.div 
  variants={fadeUp} 
  className="w-full flex justify-center md:justify-start"
>
  <div className="inline-block max-w-fit">
    <h2 className="typewriter-text animate-typing text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-1">
      Frontend Developer.
    </h2>
  </div>
</motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about delivering stunning web experiences through
              technology and design innovation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <CustomButton
                text="Contact Me"
                icon={FaEnvelope}
                onClick={scrollToFooter}
                variant="solid"
              />
              <CustomButton
                text="Download CV"
                icon={FaDownload}
                href="/Fahim_CV.pdf"
                variant="outline"
              />
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start items-center gap-4 pt-2"
            >
              <span className="text-white/20 text-xs tracking-widest uppercase">Follow me</span>
              <div className="h-px w-8 bg-white/10" />
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                
                 <a key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start gap-8 pt-2"
            >
              {[
                { value: "2+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Clients" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/30 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 opacity-30 blur-md animate-spin-slow" />
              {/* Ring border */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 animate-spin-slow" />
              {/* Inner bg */}
              <div className="absolute inset-0 rounded-full bg-[#080d1a]" style={{ margin: "3px" }} />

              {/* Image */}
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
                <Image
                  imgSrc={fmunna}
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/30 via-transparent to-transparent" />
              </div>

              {/* Badge - top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-2 -right-4 lg:right-[-3rem] bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/80 text-xs font-medium">Open to work</span>
                </div>
              </motion.div>

              {/* Badge - bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 -left-4 lg:left-[-3rem] bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <div className="text-white/80 text-xs font-semibold">React & Tailwind</div>
                    <div className="text-white/30 text-[10px]">Specialist</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#080d1a] to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default Hero;