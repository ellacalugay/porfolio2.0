import {
  FaCode,
  FaWordpress,
  FaPaintBrush,
} from "react-icons/fa";

function Expertise() {
  return (
    <section className="expertise">

      <div className="container">

        <h2 className="expertise-heading">
          SPECIALIZED <span>EXPERTISE</span>
        </h2>

        <p className="expertise-subtitle">
          Bridging the gap between creative vision and
          technical execution through a disciplined
          design process.
        </p>

        <div className="expertise-grid">

          <div className="expertise-card">
            <FaCode />

            <h3>Web Development</h3>

            <p>
              Creating visually stunning,
              pixel-perfect interfaces that
              reflect your brand and convert users.
            </p>

            <ul>
              <li>Design Systems</li>
              <li>Prototypes</li>
              <li>Visual Identity</li>
            </ul>
          </div>

          <div className="expertise-card">
            <FaWordpress />

            <h3>WordPress CMS</h3>

            <p>
              Expert management of WordPress
              websites using Elementor and
              custom solutions.
            </p>

            <ul>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Accessibility Audits</li>
            </ul>
          </div>

          <div className="expertise-card">
            <FaPaintBrush />

            <h3>UI/UX Design</h3>

            <p>
              Translating complex ideas into
              responsive, scalable and
              maintainable interfaces.
            </p>

            <ul>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Motion Design</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Expertise;