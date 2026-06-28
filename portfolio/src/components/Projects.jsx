import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/Projects.css";
import eightBox from "../assets/8box.png";
import goEquip from "../assets/goequip.png";
import buildCredit from "../assets/buildcredit.png";
import jciWorldCongress from "../assets/jciworldcongress.png";
import jciManilaOrg from "../assets/jcimanilaorg.png";
import p3kCars from "../assets/p3kcars.png";
import iiaP from "../assets/iiap.png";
import Angelicious from "../assets/angelicious.png";
import ptsi from "../assets/ptsi.png";
import hikeSafe from "../assets/hikesafe.png";

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
    title: "GoEquip Website",
    image: goEquip,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://goequip.ph/",
  },
  {
    title: "Build Credit ",
    image: buildCredit,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://buildcredit.ph/",
  },
  {
    title: "JCI World Congress Website",
    image: jciWorldCongress,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://jcimanila.org/",
  },
  {
    title: "JCI Manila Org Website",
    image: jciManilaOrg,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://builtdifferent.ph/",
  },
  {
    title: "P3KCars Website",
    image: p3kCars,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://p3kcars.com/",
  },
  {
    title: "The Institute of Internal Auditors Philippines Website",
    image: iiaP,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://iia-p.org/",
  },
  {
    title: "Angelicious Website",
    image: Angelicious,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveDemo: "https://angelicious.com/",
  },  
  {
    title: "PTSI Website",
    image: ptsi,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveCode: "",
  }, 
  {
    title: "HikeSafe App",
    image: hikeSafe,
    description: "Developed company website for IT solutions.",
    category: "Corporate Website",
    technologies: ["Figma", "Wordpress"],
    role: "Web Developer",
    features: ["SEO-Friendly Structure", "Responsive Design", "Service Showcase Pages", "Contact & Inquiry Forms"],
    liveCode: "",
  }, 
  
  
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projectsData.length) % projectsData.length;
      visibleProjects.push({ ...projectsData[index], originalIndex: index });
    }
    return visibleProjects;
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="badge">FEATURED PROJECTS</span>
        <h2 className="section-title">DIGITAL ARTIFACTS</h2>
      </div>
      <div className="projects-carousel">
        <div className="arrow-container prev-arrow-desktop">
          <button className="arrow" onClick={handlePrev}>
            &#8249;
          </button>
        </div>
        <div className="projects-grid">
          {getVisibleProjects().map((project, i) => (
            <div
              key={project.originalIndex}
              className={`project-wrapper ${i === 1 ? "active" : "mobile-hidden"}`}
            >
              <ProjectCard
                project={project}
                onClick={() => handleOpenModal(project)}
                isActive={i === 1}
              />
            </div>
          ))}
        </div>
        <div className="arrow-container next-arrow-desktop">
          <button className="arrow" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
      <div className="arrow-container-mobile">
        <button className="arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default Projects;
