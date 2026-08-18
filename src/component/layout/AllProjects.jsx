import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"; // ✅ Import Footer Component

// ✅ Import all images
import orebi from "/src/assets/orebi.png";
import protostarr from "/src/assets/protostarr.png";
import umo from "/src/assets/umo.png";
import appletham from "/src/assets/appletham.png";
import hancok from "/src/assets/hancok.png";
import developer from "/src/assets/developer.png";
import figma from "/src/assets/figma.png";
import projectOne from "/src/assets/projectOne.png";
import shakib from "/src/assets/shakib.png";
import glidex from "/src/assets/glidex.png";
import blockchain from "/src/assets/blockchain.png";
import skilljob from "/src/assets/skilljob.png";

const projectsData = [
  {
    id: 1,
    title: "SmartShop – Modern E-Commerce Experience",
    description:
      "A fully responsive React-based online shopping platform featuring dynamic product filtering, smooth navigation, and a premium user experience.",
    tags: ["React Js", "All"],
    image: orebi,
    liveDemoLink: "https://react-orebi-tau.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/reactOrebi",
  },
  {
    id: 2,
    title: "Protostar – Personal Portfolio Showcase",
    description:
      "A modern portfolio website built with React showcasing professional projects, animation, and elegant responsive layouts.",
    tags: ["React Js", "All"],
    image: protostarr,
    liveDemoLink: "https://react-protostar.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/reactProtostar",
  },
  {
    id: 3,
    title: "UOMO – Fashion & Lifestyle Store",
    description:
      "A stylish React fashion website with interactive product sections, minimal UI, and smooth category transitions for all devices.",
    tags: ["React Js", "All"],
    image: umo,
    liveDemoLink: "https://uomo-react-weld.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/uomoReact",
  },
  {
    id: 4,
    title: "Exclusive – Smart Gadget Store",
    description:
      "A feature-rich React e-commerce site offering seamless browsing, category filtering, and mobile-optimized performance.",
    tags: ["React Js", "All"],
    image: appletham,
    liveDemoLink: "https://raact-ecom.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/raactEcom",
  },
  {
    id: 5,
    title: "HANCOK – Gaming Community Website",
    description:
      "A responsive gaming-themed site built with React and Tailwind CSS, showcasing dark aesthetics and high-performance design.",
    tags: ["React Js", "All"],
    image: hancok,
    liveDemoLink: "https://hancok-beta.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/hancok",
  },
  {
    id: 6,
    title: "Hyper Blockchain – Modern Digital Transaction Platform",
    description:
      "A modern blockchain transaction platform built with React, Tailwind, and Framer Motion — fast, secure, and fully responsive with a sleek futuristic UI.",
    tags: ["React Js", "All"],
    image: blockchain,
    liveDemoLink: "https://block-chain-weld.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/blockChain",
  },
  {
    id: 7,
    title: "SkillJob – Smart Career & Hiring Platform",
    description:
      "A modern career and job listing platform built with React, Tailwind CSS, and Framer Motion — featuring smooth animations, responsive design, and elegant UI for job seekers and recruiters.",
    tags: ["React Js", "All"],
    image: skilljob,
    liveDemoLink: "https://skill-job.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/skillJob",
  },
  {
    id: 8,
    title: "Developer Portfolio – Modern UI Design",
    description:
      "A clean, fast, and mobile-friendly developer portfolio built with Tailwind CSS to highlight skills and projects efficiently.",
    tags: ["Tailwind", "All"],
    image: developer,
    liveDemoLink: "https://fahimhossainmunna.github.io/Developer-Protfolio/",
    githubLink: "https://github.com/fahimhossainmunna/Developer-Protfolio",
  },
  {
    id: 9,
    title: "Agency – Digital Design Landing Page",
    description:
      "A creative, responsive HTML & CSS landing page for a digital agency with modern animations and a professional layout.",
    tags: ["html css", "All"],
    image: figma,
    liveDemoLink: "https://fahimhossainmunna.github.io/figmaa/",
    githubLink: "https://github.com/fahimhossainmunna/figmaa",
  },
  {
    id: 10,
    title: "Creative Pixel – Personal Blog Website",
    description:
      "A Bootstrap-based personal blog platform built with elegant UI, clean typography, and a fully responsive structure.",
    tags: ["Bootstrap", "All"],
    image: projectOne,
    liveDemoLink: "https://fahimhossainmunna.github.io/creativePixel/",
    githubLink: "https://github.com/fahimhossainmunna/creativePixel",
  },
  {
    id: 11,
    title: "Protostar – Portfolio Template",
    description:
      "A Bootstrap-based portfolio website template with smooth scrolling, vibrant color palette, and responsive design.",
    tags: ["Bootstrap", "All"],
    image: shakib,
    liveDemoLink: "https://fahimhossainmunna.github.io/protostar/",
    githubLink: "https://github.com/fahimhossainmunna/protostar",
  },
  {
    id: 12,
    title: "Glidex – Multipurpose Landing Page",
    description:
      "A Bootstrap landing page built for startups and creative teams featuring flexible layouts and interactive sections.",
    tags: ["Bootstrap", "All"],
    image: glidex,
    liveDemoLink: "https://fahimhossainmunna.github.io/Glidex/",
    githubLink: "https://github.com/fahimhossainmunna/Glidex",
  },
];

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterButtons = [
    "All",
    "Next Js",
    "React Js",
    "Tailwind",
    "Bootstrap",
    "html css",
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(activeFilter)
  );

  return (
    <div className="bg-gradient-to-br from-[#0b0f2c] via-[#20133a] to-[#2b0f46] text-white min-h-screen">
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition cursor-pointer"
            >
              &larr; Back to Home
            </Link>
          </div>

          {/* Header & Filter */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 font-fahim">
              All Projects
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-8 font-munna">
              Explore the complete collection of web development and UI/UX projects.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {filterButtons.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition duration-200 backdrop-blur-md border cursor-pointer ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/30 border-transparent scale-105"
                      : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid or Empty State */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#12142a]/80 border border-white/10 shadow-lg shadow-purple-800/20 rounded-xl p-5 flex flex-col justify-between h-[490px] transition-all duration-300 hover:shadow-pink-500/30 hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div className="flex flex-col flex-grow">
                    <div className="h-48 overflow-hidden rounded-lg mb-4 bg-gray-800 flex items-center justify-center relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform origin-center group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:shadow-teal-500/40 transition duration-150 text-sm flex-1 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg shadow-md hover:shadow-gray-500/30 transition duration-150 text-sm flex-1 text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400">
              <p className="text-xl font-medium">No projects found in this category.</p>
              <p className="text-sm text-gray-500 mt-2">New projects will be added soon!</p>
            </div>
          )}

          {/* ✅ Let's Work Together Banner */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-purple-900/40 via-[#1e1335]/70 to-cyan-900/30 border border-white/10 text-center backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm md:text-base">
              I am open for freelancing, collaboration, and exciting full-time/part-time web development opportunities.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 shadow-lg shadow-fuchsia-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Footer Component */}
      <Footer />
    </div>
  );
};

export default AllProjects;