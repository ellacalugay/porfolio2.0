import pic from "../assets/pic.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaWordpress,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-small">Available for New Projects</span>

          <h1 className="typewriter-container">
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "WordPress Developer",
                1000,
                "UI/UX Designer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p>
            Crafting high-performance digital experiences with a focus on
            Computer Engineering precision and innovative aesthetics.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="btn pink-btn">VIEW PROJECTS</button>
            </a>

            <a href="#contact">
              <button className="btn outline-btn">CONTACT ME</button>
            </a>
          </div>
          <div className="tech-badges">
            <div className="tech-badge">
              <FaReact /> React
            </div>
            <div className="tech-badge">
              <FaWordpress /> WordPress
            </div>
            <div className="tech-badge">
              <SiElementor /> Elementor
            </div>
            <div className="tech-badge">
              <FaJsSquare /> JavaScript
            </div>
            <div className="tech-badge">
              <FaCss3Alt /> CSS
            </div>
            <div className="tech-badge">
              <FaFigma /> Figma
            </div>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:">
              <MdEmail />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
      <div className="scroll-down-indicator">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="scroller"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;