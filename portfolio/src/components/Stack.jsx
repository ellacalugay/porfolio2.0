import {
  FaGithub,
  FaWordpress,
  FaFigma,
  FaAdobe,
} from "react-icons/fa";

import {
  SiVercel,
  SiNotion,
  SiShopify,
} from "react-icons/si";

function Stack() {
  const techs = [
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "PHP",
    "React",
    "Supabase",
    "Tailwind",
    "Git",
    "SQL",
    "C++",
    "Arduino",
  ];

  const tools = [
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <FaAdobe />, name: "Adobe" },
    { icon: <SiShopify />, name: "Shopify" },
  ];

  return (
    <section className="stack">
      <div className="container">
        <span className="badge">
          TECHNICAL STACK
        </span>

        <h2 className="section-title">
          Languages & <span>frameworks</span>
        </h2>

        <div className="tech-box">
          {techs.map((tech) => (
            <div className="tech-pill" key={tech}>
              {tech}
            </div>
          ))}
        </div>

        <h3 className="tools-title">
          Tools I Use
        </h3>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>
              <div className="tool-icon">
                {tool.icon}
              </div>

              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;