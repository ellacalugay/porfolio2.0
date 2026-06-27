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

import "../styles/globals.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#F59E0B" /> },
  { name: "CSS", icon: <FaCss3Alt color="#3B82F6" /> },
  { name: "Python", icon: <FaPython color="#16A34A" /> },
  { name: "JavaScript", icon: <FaJs color="#F97316" /> },
  { name: "PHP", icon: <FaPhp color="#3B82F6" /> },
  { name: "React", icon: <FaReact color="#A855F7" /> },
  { name: "Supabase", icon: <SiSupabase color="#10B981" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Git", icon: <FaGitAlt color="#EF4444" /> },
  { name: "SQL", icon: <FaGithub color="#6B7280" /> },
  { name: "C++", icon: <FaGithub color="#6B7280" /> },
  { name: "Arduino", icon: <SiArduino color="#14B8A6" /> },
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
    <section className="stack" id="stack">

      <div className="stack-tag">
        TECHNICAL STACK
      </div>

      <h2 className="stack-title">
        Languages & <span>frameworks</span>
      </h2>

      {/* Pink Background */}
      <div className="skills-wrapper">

        {/* Dashed Box */}
        <div className="skills-box">

          {skills.map((skill) => (
            <div className="skill-pill" key={skill.name}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}

        </div>

      </div>

      <h3 className="tools-title">
        Tools I use
      </h3>

      <div className="tools-grid">

        {tools.map((tool) => (
          <div className="tool-card" key={tool.name}>

            <div className="tool-icon">
              {tool.icon}
            </div>

            <p>{tool.name}</p>

          </div>
        ))}

      </div>

    </section>
  );
}