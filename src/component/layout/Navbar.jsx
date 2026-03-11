import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaUserAlt,
  FaCode,
  FaGraduationCap,
  FaDownload,
  FaServer,
} from "react-icons/fa";
import { RiFolderChartLine } from "react-icons/ri";

import logoo from "../../assets/fologoo.png";
import Container from "../common/Container";
import Image from "../common/Image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.98 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -20, opacity: 0, scale: 0.98 },
  };

  const sidebarVariants = {
    hidden: { x: -320, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -320, opacity: 0 },
  };

  const sidebarLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUserAlt /> },
    { id: "services", label: "Services", icon: <FaServer /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "myProject", label: "My Projects", icon: <RiFolderChartLine /> },
  ];

  return (
    <>
      {/* Top accent line */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

      <div
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#080d1a]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 to-transparent pointer-events-none" />

        {/* Desktop Sidebar Toggle */}
        <div
          className="hidden xl:flex flex-col justify-center items-center w-9 h-9 cursor-pointer top-1/2 -translate-y-1/2 left-5 absolute z-10 rounded-lg hover:bg-white/5 transition-all duration-300 group"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span
            className={`block h-[2px] w-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
              sidebarOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 my-[5px] ${
              sidebarOpen ? "opacity-0 w-5" : "opacity-100 w-4 group-hover:w-5"
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
              sidebarOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </div>

        <Container>
          <div className="relative flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image imgSrc={logoo} className="w-[140px] md:w-[170px]" />
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-cyan-500/20 blur-sm" />
              <div className="relative flex border border-white/10 bg-white/[0.03] backdrop-blur-md py-2.5 px-8 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_20px_rgba(56,189,248,0.1)]">
                <ul className="flex justify-center items-center gap-x-1">
                  {sidebarLinks.map((item, i) => (
                    <ScrollLink
                      key={i}
                      to={item.id}
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-80}
                      onSetActive={() => setActiveItem(item.id)}
                      className="cursor-pointer"
                    >
                      <li
                        className={`relative px-4 py-1.5 text-[14px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                          activeItem === item.id
                            ? "text-cyan-400"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {activeItem === item.id && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </li>
                    </ScrollLink>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Search + Download CV */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center gap-3"
            >
              <div
                className={`flex items-center bg-white/[0.04] border rounded-full px-3.5 py-2 transition-all duration-300 ${
                  searchFocused
                    ? "border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.15)] w-[200px]"
                    : "border-white/10 w-[160px] hover:border-white/20"
                }`}
              >
                <Search size={14} className="text-white/30 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="ml-2 w-full bg-transparent outline-none text-sm text-white/70 placeholder:text-white/25"
                />
              </div>

              
               <a href="/Fahim_Hossain_CV.pdf"
                download="Fahim_Hossain_CV.pdf"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                <FaDownload className="relative z-10 text-xs group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span className="relative z-10">Download CV</span>
              </a>
            </motion.div>

            {/* Mobile Toggle */}
            <div
              className="flex flex-col justify-center items-center w-9 h-9 cursor-pointer relative md:hidden rounded-lg hover:bg-white/5 transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block h-[2px] w-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 my-[5px] ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden w-full bg-[#080d1a]/95 backdrop-blur-xl border-t border-white/[0.06] p-6"
            >
              <ul className="flex flex-col gap-y-1">
                {sidebarLinks.map((item, i) => (
                  <ScrollLink
                    key={i}
                    to={item.id}
                    smooth={true}
                    duration={600}
                    spy={true}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer"
                  >
                    <li className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 font-medium transition-all duration-200 hover:bg-white/[0.05] hover:text-cyan-400 group">
                      <span className="text-white/30 group-hover:text-cyan-400 transition-colors">
                        {item.icon}
                      </span>
                      {item.label}
                    </li>
                  </ScrollLink>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  
                   <a href="/Fahim_Hossain_CV.pdf"
                    download="Fahim_Hossain_CV.pdf"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white font-semibold text-sm transition-all duration-300 hover:from-cyan-400 hover:to-purple-400"
                  >
                    <FaDownload className="text-xs" />
                    Download CV
                  </a>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===== Sidebar ===== */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setSidebarOpen(false)}
            />

            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#0f172a]/95 backdrop-blur-md shadow-lg z-50 p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-cyan-400 transition-all"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-y-6 mt-12">
                {sidebarLinks.map((item, i) => (
                  <ScrollLink
                    key={i}
                    to={item.id}
                    smooth={true}
                    duration={600}
                    spy={true}
                    offset={-80}
                    onClick={() => setSidebarOpen(false)}
                    className="cursor-pointer"
                  >
                    <li className="text-white/90 font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-3">
                      <span className="text-lg transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee]">
                        {item.icon}
                      </span>
                      <div className="relative">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                      </div>
                    </li>
                  </ScrollLink>
                ))}

                {/* Download CV */}
                
                 <a href="/Fahim_Hossain_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setSidebarOpen(false)}
                  className="text-white/90 font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-3"
                >
                  <FaDownload className="text-lg transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee]" />
                  <div className="relative">
                    Download CV
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </div>
                </a>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;