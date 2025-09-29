import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Download,
  GraduationCap,
  Home,
  User,
  X,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoo from "../../assets/fologoo.png";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Mobile menu animation
  const menuVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
  };

  return (
    <>
      <div
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md ${
          scrolled ? "bg-[#0f172a] shadow-lg " : "bg-[#0f172a] pt-2"
        }`}
      >
        {/* ✅ Sidebar Toggle (Bar ↔ Cross) */}
        <div
          className="hidden xl:flex flex-col justify-center items-center w-8 h-8 cursor-pointer top-7 left-4 absolute"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span
            className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 ${
              sidebarOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 my-[6px] ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 ${
              sidebarOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </div>

        <Container>
          <Flex className="justify-between items-center">
            <div className="flex items-center gap-4">
              {/* ✅ Logo */}
              <Image imgSrc={logoo} className="w-[160px] md:w-[200px]" />
            </div>

            {/* ✅ Desktop Menu */}
            <div className="hidden md:flex border border-cyan-500/60 py-3 px-10 rounded-[25px]">
              <ul className="flex justify-center items-center gap-x-10">
                {["Home", "About", "Skills", "Education"].map((item, i) => (
                  <Link key={i} to={`/${item}`}>
                    <li className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105">
                      {item}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </li>
                  </Link>
                ))}
                <a
                  href="/Fahim_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  className="relative text-white/80 text-[16px] font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105"
                >
                  Download CV
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </ul>
            </div>

            {/* ✅ Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 w-[220px] border border-cyan-400 focus-within:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)] transition-all">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>

            {/* ✅ Mobile Dropdown Toggle */}
            <div
              className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 my-[6px] ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-[3px] w-7 bg-white rounded-sm transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </div>
          </Flex>
        </Container>

        {/* ✅ Mobile Dropdown */}
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
                {["Home", "About", "Skills", "Education"].map((item, i) => (
                  <Link
                    key={i}
                    to={`/${item}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="relative text-white/90 font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105">
                      {item}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </li>
                  </Link>
                ))}
                <a
                  href="/Fahim_Hossain_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="relative text-white/90 font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105"
                >
                  Download CV
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>

                {/* ✅ Mobile Search Bar */}
                <div className="flex items-center bg-white rounded-full px-3 py-1 w-[200px] border border-cyan-400 mt-3">
                  <Search size={18} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700"
                  />
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✅ Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-[250px] bg-[#0f172a] shadow-xl z-[999] p-6"
            >
              {/* ✅ Cross Icon */}
              <div className="flex justify-end">
                <X
                  size={35}
                  className="text-blue-300 cursor-pointer hover:text-emerald-300 transition-all duration-500"
                  onClick={() => setSidebarOpen(false)}
                />
              </div>

              {/* Sidebar Menu */}
              <ul className="flex flex-col gap-y-6 mt-10 ml-2">
                <Link to="/Home" onClick={() => setSidebarOpen(false)}>
                  <li className="flex items-center gap-3 text-white/90 text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <Home size={20} /> Home
                  </li>
                </Link>
                <Link to="/About" onClick={() => setSidebarOpen(false)}>
                  <li className="flex items-center gap-3 text-white/90 text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <User size={20} /> About
                  </li>
                </Link>
                <Link to="/Skills" onClick={() => setSidebarOpen(false)}>
                  <li className="flex items-center gap-3 text-white/90 text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <Award size={20} /> Skills
                  </li>
                </Link>
                <Link to="/Education" onClick={() => setSidebarOpen(false)}>
                  <li className="flex items-center gap-3 text-white/90 text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:translate-x-1">
                    <GraduationCap size={20} /> Education
                  </li>
                </Link>
                <a
                  href="/Fahim_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 text-white/90 text-lg font-medium transition-all duration-300 hover:text-purple-400 hover:translate-x-1"
                >
                  <Download size={20} /> Download CV
                </a>
              </ul>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block fixed inset-0 bg-black z-40"
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
