import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    id: 11,
    title: "Protostar – Personal Portfolio Showcase",
    description:
      "A modern portfolio website built with React showcasing professional projects, animation, and elegant responsive layouts.",
    tags: ["React Js", "All"],
    image: protostarr,
    liveDemoLink: "https://react-orebi-tau.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/reactOrebi",
  },
  {
    id: 12,
    title: "UOMO – Fashion & Lifestyle Store",
    description:
      "A stylish React fashion website with interactive product sections, minimal UI, and smooth category transitions for all devices.",
    tags: ["React Js", "All"],
    image: umo,
    liveDemoLink: "https://uomo-react-weld.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/uomoReact",
  },
  {
    id: 13,
    title: "Exclusive – Smart Gadget Store",
    description:
      "A feature-rich React e-commerce site offering seamless browsing, category filtering, and mobile-optimized performance.",
    tags: ["React Js", "All"],
    image: appletham,
    liveDemoLink: "https://raact-ecom.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/raactEcom",
  },
  {
    id: 14,
    title: "HANCOK – Gaming Community Website",
    description:
      "A responsive gaming-themed site built with React and Tailwind CSS, showcasing dark aesthetics and high-performance design.",
    tags: ["React Js", "All"],
    image: hancok,
    liveDemoLink: "https://hancok-beta.vercel.app/",
    githubLink: "https://github.com/fahimhossainmunna/hancok",
  },
  {
    id: 2,
    title: "Developer Portfolio – Modern UI Design",
    description:
      "A clean, fast, and mobile-friendly developer portfolio built with Tailwind CSS to highlight skills and projects efficiently.",
    tags: ["Tailwind", "All"],
    image: developer,
    liveDemoLink: "https://fahimhossainmunna.github.io/Developer-Protfolio/",
    githubLink: "https://github.com/fahimhossainmunna/Developer-Protfolio",
  },
  {
    id: 3,
    title: "Agency – Digital Design Landing Page",
    description:
      "A creative, responsive HTML & CSS landing page for a digital agency with modern animations and a professional layout.",
    tags: ["html css", "All"],
    image: figma,
    liveDemoLink: "https://fahimhossainmunna.github.io/figmaa/",
    githubLink: "https://github.com/fahimhossainmunna/figmaa",
  },
  {
    id: 4,
    title: "Creative Pixel – Personal Blog Website",
    description:
      "A Bootstrap-based personal blog platform built with elegant UI, clean typography, and a fully responsive structure.",
    tags: ["Bootstrap", "All"],
    image: projectOne,
    liveDemoLink: "https://fahimhossainmunna.github.io/creativePixel/",
    githubLink: "https://github.com/fahimhossainmunna/creativePixel",
  },
  {
    id: 5,
    title: "Protostar – Portfolio Template",
    description:
      "A Bootstrap-based portfolio website template with smooth scrolling, vibrant color palette, and responsive design.",
    tags: ["Bootstrap", "All"],
    image: shakib,
    liveDemoLink: "https://fahimhossainmunna.github.io/protostar/",
    githubLink: "https://github.com/fahimhossainmunna/protostar",
  },
  {
    id: 6,
    title: "Glidex – Multipurpose Landing Page",
    description:
      "A Bootstrap landing page built for startups and creative teams featuring flexible layouts and interactive sections.",
    tags: ["Bootstrap", "All"],
    image: glidex,
    liveDemoLink: "https://fahimhossainmunna.github.io/Glidex/",
    githubLink: "https://github.com/fahimhossainmunna/Glidex",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterButtons = [
    "All",
    "html css",
    "Bootstrap",
    "Tailwind",
    "React Js",
    "JavaScript",
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(activeFilter)
  );

  return (
    <section className="pt-1 pb-20 md:pt-28 md:pb-28 bg-gradient-to-br from-[#0b0f2c] via-[#20133a] to-[#2b0f46] text-white relative overflow-hidden">
      {/* gradient aura background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 md:mb-12">
          <div className="text-left mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-3 leading-tight break-words ">
              My Projects
            </h2>
            <p className="text-[16px] text-gray-300">
              A collection of my recent front-end projects built with passion
              and precision.
            </p>
          </div>

          <div className="flex flex-wrap  gap-2 md:gap-3 justify-start md:justify-end">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ease-in-out backdrop-blur-md border
                ${
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

        {/* ✅ Swiper Slider */}
        <div className="relative flex items-center">
          <button className="custom-prev absolute -left-10 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-pink-500/50 hover:scale-110 transition">
            ❮
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper w-full"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-[#12142a]/80 border m-5 border-white/10 shadow-lg shadow-purple-800/20 rounded-xl p-5 flex flex-col justify-between h-[500px] transition-all duration-300 hover:shadow-pink-500/30 hover:-translate-y-2 w-full max-w-md mx-auto backdrop-blur-sm">
                  <div className="flex flex-col flex-grow ">
                  
                    <div className="h-48 overflow-hidden rounded-lg mb-4 bg-gray-800 flex items-center justify-center relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform origin-center group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-5 flex-grow text-base line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:shadow-teal-500/40 transition duration-150 text-sm flex-1 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg shadow-md hover:shadow-gray-500/30 transition duration-150 text-sm flex-1 text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next absolute -right-10 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/50 hover:scale-110 transition">
            ❯
          </button>
        </div>

        <div className="custom-pagination flex justify-center mt-12 gap-3"></div>

        <style>
          {`
          .swiper-pagination-bullet {
            background: linear-gradient(90deg, #a855f7, #06b6d4);
            opacity: 0.4;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            box-shadow: 0 0 10px #f0abfc, 0 0 20px #22d3ee;
            transform: scale(1.3);
            animation: pulse 1.2s infinite alternate;
          }
          @keyframes pulse {
            from { box-shadow: 0 0 10px #f0abfc; }
            to { box-shadow: 0 0 25px #22d3ee; }
          }
          `}
        </style>
      </div>
    </section>
  );
};

export default Projects;
