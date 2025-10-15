import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaUserAlt,
  FaCode,
  FaGraduationCap,
  FaDownload,
  FaServer,
  FaProjectDiagram 
} from "react-icons/fa";
import { RiFolderChartLine } from "react-icons/ri";


import logoo from "../../assets/fologoo.png";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //  Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Mobile menu animation
  const menuVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
  };

  //  Sidebar animation
  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  //  Sidebar menu items with icons
  const sidebarLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUserAlt /> },
    { id: "services", label: "Services", icon: <FaServer /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "myProject", label: "MyProject", icon: <RiFolderChartLine  /> },
  ];

  return (
    <>
      <div
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? "bg-[#0f172a]/95 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
            : "bg-[#0f172a] pt-2"
        }`}
      >
        {/* ===== Sidebar Toggle (Bar ↔ Cross)===== */}
        <div
          className="hidden xl:flex flex-col justify-center items-center w-8 h-8 cursor-pointer top-7 left-4 absolute"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span
            className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 ${
              sidebarOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 my-[6px] ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 ${
              sidebarOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </div>

        <Container>
          <Flex className="justify-between items-center">
            <div className="flex items-center gap-4">
              {/* ===== Logo=====*/}
              <Image imgSrc={logoo} className="w-[160px] md:w-[200px]" />
            </div>

            {/* ===== Desktop Menu =====*/}
            <div className="hidden md:flex border border-cyan-500/60 py-3 px-10 rounded-[25px] shadow-[0_0_15px_rgba(56,189,248,0.25)]">
              <ul className="flex justify-center items-center gap-x-10">
                {sidebarLinks.map((item, i) => (
                  <ScrollLink
                    key={i}
                    to={item.id}
                    smooth={true}
                    duration={600}
                    spy={true}
                    offset={-80}
                    className="cursor-pointer"
                  >
                    <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                      {item.label}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </li>
                  </ScrollLink>
                ))}
              </ul>
            </div>

            {/* ===== Search Bar =====*/}
            <div className="hidden md:flex items-center bg-white/95 rounded-full px-3 py-1 w-[220px] border border-cyan-400 focus-within:shadow-[0_0_15px_#22d3ee] transition-all">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>

            {/* ===== Mobile Dropdown Toggle =====*/}
            <div
              className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 my-[6px] ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-[3px] w-7 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </div>
          </Flex>
        </Container>

        {/* =====Mobile Dropdown =====*/}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="md:hidden w-full bg-[#0f172a]/95 backdrop-blur-md border-t border-cyan-500/30 shadow-lg p-6"
            >
              <ul className="flex flex-col gap-y-5 items-center">
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
                    <li className="relative text-white/90 font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2">
                      {item.icon} {item.label}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </li>
                  </ScrollLink>
                ))}
                <a
                  href="/Fahim_Hossain_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="relative text-white/90 font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-2"
                >
                  <FaDownload /> Download CV
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*=====Sidebar + Overlay =====*/}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#0f172a]/95 backdrop-blur-md shadow-lg z-50 p-6"
            >
              {/*===== Cross Button =====*/}
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
                      {/* Icon */}
                      <span className="text-lg transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee]">
                        {item.icon}
                      </span>

                      {/* Label with hover underline */}
                      <div className="relative">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                      </div>
                    </li>
                  </ScrollLink>
                ))}

                <a
                  href="/Fahim_Hossain_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setSidebarOpen(false)}
                  className="text-white/90 font-medium transition-all duration-300 group hover:text-cyan-400 hover:scale-110 flex items-center gap-3"
                >
                  {/* Icon */}
                  <FaDownload className="text-lg transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee]" />

                  {/* Text with underline */}
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
