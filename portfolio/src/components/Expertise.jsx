import {
  FaCode,
  FaWordpress,
  FaPaintBrush,
  FaCheckCircle,
  FaProjectDiagram,
  FaClock
} from "react-icons/fa";
import "../styles/Expertise.css";

function Expertise() {
  return (
    <section className="expertise">

      <div className="container">

        <h2 className="expertise-heading">
          SPECIALIZED <span>EXPERTISE</span>
        </h2>

        <p className="expertise-subtitle">
          I specialize in building fast, responsive, and user-focused digital experiences—from modern websites to custom WordPress solutions and intuitive UI/UX designs.
        </p>

        <div className="credibility-badges">
          <div className="badge-item">
            <FaProjectDiagram />
            <span>20+ Projects Completed</span>
          </div>
          <div className="badge-item">
            <FaClock />
            <span>2+ Years of Experience</span>
          </div>
          <div className="badge-item">
            <FaCheckCircle />
            <span>Mobile-First & Performance Focused</span>
          </div>
        </div>

        <div className="expertise-grid">

          <div className="expertise-card">
            <FaCode className="expertise-icon" />
            <h3>Web Development</h3>
            <div className="divider"></div>
            <p>
              I build fast, responsive, and secure websites with a focus on front-end technologies, performance optimization, and seamless API integration.
            </p>
            <ul>
              <li>Responsive Web Development</li>
              <li>Front-End Development</li>
              <li>Performance Optimization</li>
              <li>API Integration</li>
              <li>Cross-Browser Compatibility</li>
              <li>WordPress Development</li>
            </ul>
          </div>

          <div className="expertise-card">
            <FaWordpress className="expertise-icon" />
            <h3>WordPress CMS</h3>
            <div className="divider"></div>
            <p>
              My expertise in WordPress includes custom theme and plugin development, Elementor, and a strong focus on website optimization, security, and maintenance.
            </p>
            <ul>
              <li>Elementor Development</li>
              <li>Theme Customization</li>
              <li>Plugin Integration</li>
              <li>Website Optimization</li>
              <li>Security & Maintenance</li>
              <li>Custom WordPress Solutions</li>
            </ul>
          </div>

          <div className="expertise-card">
            <FaPaintBrush className="expertise-icon" />
            <h3>UI/UX Design</h3>
            <div className="divider"></div>
            <p>
              I create intuitive and accessible user interfaces through a process of user research, wireframing, and prototyping in Figma to build effective design systems.
            </p>
            <ul>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Figma</li>
              <li>Design Systems</li>
              <li>Accessibility</li>
              <li>Usability Testing</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Expertise;
