function Experience() {
  const experience = [
    {
      date: "July 2025 - Present",
      company: "8Box Solutions Inc.",
      role: "Website Front-End Developer",
      description:
        "Building modern WordPress sites using Elementor, focused on security, speed optimization and custom integrations."
    },
    {
      date: "July 2024 - September 2024",
      company: "Catalina Security Agency",
      role: "IT Technician Intern",
      description:
        "Managed company databases, encoded records and assisted with desktop troubleshooting."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">

        <h2 className="experience-title">
          WORK  EXPERIENCE
        </h2>

        <div className="timeline">

          {/* Vertical Line */}
          <div className="timeline-line"></div>

          {experience.map((item, index) => (
            <div
              key={index}
              className={`timeline-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Content */}
              <div className="timeline-content">
                <small>{item.date}</small>

                <h3>{item.company}</h3>

                <h4>{item.role}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;