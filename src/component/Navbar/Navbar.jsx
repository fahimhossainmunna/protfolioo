import React, { useState, useEffect } from "react";
import Image from "../Image";
import logoo from "../../assets/fologoo.png"; // ✅ Vercel-safe path
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide animation
  const menuVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
  };

  return (
    <>
      <div
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md ${
          scrolled ? "bg-[#0f172a] shadow-lg py-2" : "bg-[#0f172a] py-4"
        }`}
      >
        <Container>
          <Flex className="justify-between items-center">
            {/* Logo */}
            <div>
              <Image imgSrc={logoo} className="w-[160px] md:w-[200px]" />
            </div>

            {/* Desktop Menu */}
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

            {/* Right Side */}
            <div className="flex items-center gap-x-4">
              {/* Contact Button */}
              <button
                className="hidden md:block py-[5px] px-[20px] rounded-[20px] bg-white text-[#121212] font-medium border-2 border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-cyan-400 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]"
              >
                Contact Us
              </button>

              {/* Bar / Cross Icon (Mobile Only) */}
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
            </div>
          </Flex>
        </Container>

        {/* Mobile Dropdown Menu */}
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
                  <Link key={i} to={`/${item}`} onClick={() => setMenuOpen(false)}>
                    <li className="relative text-white/90 font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105">
                      {item}
                      <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </li>
                  </Link>
                ))}
                <a
                  href="/Fahim_CV.pdf"
                  download="Fahim_Hossain_CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="relative text-white/90 font-medium transition-all duration-300 group hover:text-purple-400 hover:scale-105"
                >
                  Download CV
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 py-[8px] px-[20px] rounded-[20px] bg-white text-[#121212] font-medium border-2 border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-cyan-400"
                >
                  Contact Us
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
