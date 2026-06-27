import React, { useEffect } from "react";
import "../styles/ProjectModal.css";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FiX />
        </button>
        <div className="modal-image-container">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        <div className="modal-details">
          <span className="project-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h3>My Role</h3>
            <p>{project.role}</p>
          </div>
          <div className="modal-section">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="modal-buttons">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="modal-btn">
              <FiExternalLink /> Live Demo
            </a>
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="modal-btn github-btn">
              <FiGithub /> GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;