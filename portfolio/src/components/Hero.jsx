import pic from "../assets/pic.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-small">
            AVAILABLE FOR HIRE
          </span>

          <h1>
            FRONT END <br />
            DEVELOPER <br />
            & UI DESIGNER
          </h1>

          <p>
            Crafting high-performance digital experiences with
            a focus on Computer Engineering precision and
            innovative aesthetics.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="btn pink-btn">
                VIEW PROJECTS
              </button>
            </a>

            <a href="#contact">
              <button className="btn outline-btn">
                CONTACT ME
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={pic} alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;