import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-small">
            AVAILABLE FOR HIRE
          </span>

          <h1>
            SOFTWARE <br />
            DEVELOPER <br />
            & UI DESIGNER
          </h1>

          <p>
            Crafting high-performance digital experiences with
            a focus on Computer Engineering precision and
            innovative aesthetics.
          </p>

          <div className="hero-buttons">
            <button className="btn pink-btn">
              VIEW PROJECTS
            </button>

            <button className="btn outline-btn">
              CONTACT ME
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={hero} alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;