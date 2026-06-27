import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <span className="contact-small">
          LET'S WORK TOGETHER
        </span>

        <h2>
          A project in mind?
        </h2>

        <p>
          I take on a small number of projects
          each quarter. If you have something
          interesting, I'd love to hear about it.
        </p>

        <button className="contact-btn">
          ellacalugay@vercel.app
        </button>

        <div className="contact-socials">
          <a href="#">
            <FaGithub /> GitHub
          </a>

          <a href="#">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;