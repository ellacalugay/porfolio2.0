import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiNotion,
  SiVercel,
  SiArduino,
} from "react-icons/si";

import "../styles/Stack.css";

const languages = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "SQL", icon: <FaGithub /> },
    { name: "C++", icon: <FaGithub /> },
]

const frameworks = [
    { name: "React", icon: <FaReact /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Arduino", icon: <SiArduino /> },
];

const tools = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "VS Code", icon: "VS" },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Shopify", icon: <FaShopify /> },
];

export default function Stack() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-container">
        <header className="stack-header">
          <div className="stack-badge">
            TECHNICAL STACK
          </div>
          <h2 className="stack-title">
            Languages & <span className="text-pink">frameworks</span>
          </h2>
        </header>

        <div className="skills-blob">
          <div className="skills-inner">
            <div className="skills-grid">
              {languages.map((skill) => (
                <div className={`skill-pill skill-${skill.name.toLowerCase()}`} key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
              {frameworks.map((skill) => (
                <div className={`skill-pill skill-${skill.name.toLowerCase()}`} key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools I Work With</h3>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div className={`tool-card tool-${tool.name.toLowerCase().replace(/\s/g, '-')}`} key={tool.name}>
                <div className="tool-icon">{tool.icon}</div>
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}