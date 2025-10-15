import React from "react";
import { FaProjectDiagram } from "react-icons/fa"; // icon import

const MyProject = () => {
  const projects = [
    {
      name: "My Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
    },
    {
      name: "E-commerce App",
      description: "A simple shopping cart app built with React and Firebase.",
    },
    {
      name: "Blog Platform",
      description: "A markdown based blog platform built with Next.js.",
    },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <FaProjectDiagram className="text-pink-500 text-3xl" />
        <h2 className="text-2xl font-bold">My Projects</h2>
      </div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProject;
