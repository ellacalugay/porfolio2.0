function Projects() {
  const projects = [
    {
      title: "Bloom — Brand Identity",
      image: "/project1.jpg",
      description:
        "Complete brand system for a cosmetics company, including visual language and digital touchpoints.",
    },

    {
      title: "Meridian — UX Overhaul",
      image: "/project2.jpg",
      description:
        "Redesigned user experience of fintech dashboard improving usability and conversion.",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="container">

        <span className="badge">
          FEATURED PROJECTS
        </span>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt="" />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;