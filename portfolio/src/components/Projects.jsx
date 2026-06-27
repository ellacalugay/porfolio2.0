import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/Projects.css";
import eightBox from "../assets/8box.png";

const projectsData = [
  {
    title: "8Box Website",
    image: eightBox,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://8box.solutions/",
  },
  {
    title: "Meridian — UX Overhaul",
    image: "assets/project2.jpg",
    description: "Redesigned user experience of fintech dashboard improving usability and conversion.",
    category: "UI/UX",
    technologies: ["React", "Node.js", "Figma"],
    role: "UX/UI Designer",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    liveDemo: "#",
    githubRepo: "#",
  },
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="badge">FEATURED PROJECTS</span>
          <h2 className="section-title">DIGITAL ARTIFACTS</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleOpenModal(project)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default Projects;