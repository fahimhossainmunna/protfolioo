import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaDownload,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // ✅ react-scroll import
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
      y: -6,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 12 },
    },
  };

  const socials = [
    { Icon: FaFacebookF, link: "https://facebook.com" },
    { Icon: FaInstagram, link: "https://instagram.com" },
    { Icon: FaGithub, link: "https://github.com/fahimhossainmunna" },
    { Icon: FaLinkedinIn, link: "https://linkedin.com" },
    { Icon: FaTwitter, link: "https://twitter.com" },
  ];

  const menuItems = [
    { text: "Home", icon: FaHome, link: "home" },
    { text: "About", icon: FaUser, link: "about" },
    { text: "Skills", icon: FaCode, link: "skills" },
    { text: "Education", icon: FaGraduationCap, link: "education" },
    { text: "Download CV", icon: FaDownload, link: "cv" },
  ];

  return (
    <footer
      id="footer"
      className="relative text-gray-200 py-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg" />

      <Container>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4 relative">
              <img src={flogo} alt="logo" className="w-32 h-22" />
            </div>
            <p className="text-sm mb-6 max-w-xs opacity-80">
              Frontend Developer passionate about creating modern & responsive
              web applications.
            </p>
            <div className="flex max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 text-white outline-none border border-white/20 text-sm"
              />
              <button className="px-4 sm:px-5 py-2 rounded-r-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-fahim font-semibold text-white mb-4">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuItems.map(({ text, icon: Icon, link }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 500,
                  }}
                >
                  {/* ✅ react-scroll ব্যবহার */}
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="group flex items-center gap-3 text-gray-300 font-medium transition-all text-sm sm:text-base cursor-pointer"
                  >
                    <motion.span
                      whileHover={{ rotate: 20, scale: 1.2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 12,
                      }}
                      className="text-purple-400 group-hover:text-pink-400 transition-colors text-lg"
                    >
                      <Icon />
                    </motion.span>
                    <motion.span
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="group-hover:text-purple-300 transition-colors"
                    >
                      {text}
                    </motion.span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-fahim font-semibold text-white mb-4">
              Contact
            </h3>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-purple-400">📞</span> (+880) 185-0374637
            </p>
            <p className="flex items-center gap-2 mt-2 text-sm sm:text-base">
              <span className="text-purple-400">📧</span>{" "}
              hossainfahim306@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2 text-sm sm:text-base">
              <span className="text-purple-400">📍</span> Crescent Ave,
              Quakertown, PA 18951
            </p>
          </div>

          {/* Socials */}
          <div>
            <div className="flex justify-center lg:justify-start mb-8">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="px-6 py-2 text-sm sm:text-base 
                bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                rounded-full shadow-lg shadow-purple-500/40 
                hover:scale-105 hover:shadow-pink-500/40 
                transition-transform duration-300 cursor-pointer"
              >
                🚀 Let’s Work Together
              </ScrollLink>
            </div>
            <h3 className="text-[22px] sm:text-[26px] font-fahim font-semibold text-white mb-4 text-center lg:text-left">
              Follow Us
            </h3>
            <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
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
                  className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full group overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:animate-ping" />
                  <span className="relative w-full h-full flex items-center justify-center rounded-full bg-[#111] text-white shadow-lg shadow-purple-500/30 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                    <Icon size={18} />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Line */}
      <div className="relative mt-8 border-t border-white/20 text-center pt-6 text-xs sm:text-sm text-gray-300">
        © {new Date().getFullYear()} Fahim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
