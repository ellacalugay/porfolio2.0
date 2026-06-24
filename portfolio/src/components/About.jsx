import about from "../assets/about.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-book">

        <div className="about-left">
          <img src={about} alt="" />

          <div className="stats-grid">
            <div className="stat-card">
              <h3>70k</h3>
              <span>TikTok</span>
            </div>

            <div className="stat-card">
              <h3>70k</h3>
              <span>YouTube</span>
            </div>

            <div className="stat-card">
              <h3>26k</h3>
              <span>Instagram</span>
            </div>

            <div className="stat-card">
              <h3>10k</h3>
              <span>Pinterest</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h2>hi, im name</h2>

          <p>
            I'm a UX-centered web designer &
            developer creating modern digital
            experiences that balance aesthetics
            and functionality.
          </p>

          <p>
            Passionate about frontend development,
            UI systems, accessibility and creating
            interfaces users genuinely enjoy.
          </p>

          <p>
            With experience in responsive design,
            WordPress CMS management and React
            applications, I transform ideas into
            polished digital products.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;