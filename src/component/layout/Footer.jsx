import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import flogo from "/src/assets/fologoo.png";
import Container from "../common/Container";

const Footer = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 18,
      },
    }),
    hover: {
      y: -8,
      scale: 1.25,
      rotate: 8,
      transition: { type: "spring", stiffness: 300, damping: 12 },
    },
  };

  const socials = [
    { Icon: FaFacebookF, link: "https://facebook.com" },
    { Icon: FaInstagram, link: "https://instagram.com" },
    { Icon: FaGithub, link: "https://github.com" },
    { Icon: FaLinkedinIn, link: "https://linkedin.com" },
    { Icon: FaTwitter, link: "https://twitter.com" },
  ];

  return (
    <footer className="relative text-gray-200 py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg" />

      <Container>
        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Logo + About */}
          <div className="flex-1 mt-15">
            <div className="flex items-center gap-2 mb-4 relative">
              <img src={flogo} alt="logo" className="absolute -top-25 -left-10" />
              
            </div>
            <p className="text-sm mb-10 max-w-xs opacity-80 ">
              Frontend Developer passionate about creating modern & responsive
              web applications.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg bg-white/10 text-white outline-none border border-white/20"
              />
              <button className="px-5 py-2 rounded-r-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Menu */}
          <div className="flex-1 ml-25">
            <h3 className="text-[26px] font-fahim font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2 ml-3">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
              <li><a href="#education" className="hover:text-purple-400">Education</a></li>
              <li><a href="#cv" className="hover:text-purple-400">Download CV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 mr-25">
            <h3 className="text-[26px] font-fahim font-semibold text-white mb-4">Contact</h3>
            <p className="flex items-center gap-2">
              <span className="text-purple-400">📞</span> (+880) 185-0374637
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span className="text-purple-400">📧</span> hossainfahim306@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span className="text-purple-400">📍</span> Crescent Ave, Quakertown, PA 18951
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-6">
              {socials.map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative w-12 h-12 flex items-center justify-center rounded-full group overflow-hidden"
                >
                  {/* Gradient glow */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500" />

                  {/* Border pulse */}
                  <span className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:animate-ping" />

                  {/* Icon Circle */}
                  <span className="relative w-full h-full flex items-center justify-center rounded-full bg-[#111] text-white shadow-lg shadow-purple-500/30 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                    <Icon size={20} />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Line */}
      <div className="relative mt-12 border-t border-white/20 text-center pt-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Fahim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
