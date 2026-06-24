import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  z-index: 999;
  transition: all 0.3s ease-in-out;

  &.scrolled {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  }

  &.hidden {
    top: -100px;
  }

  h2 {
  margin: 0;
  color: #FB6D8B;
  font-size: 1.6rem;
  margin-left: 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  color: #FB6D8B;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  

  &:hover {
    color: var(--pink-dark);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--pink-dark);
    transition: width 0.3s ease;
  }

  &.active {
    color: #FD245A;
  }

  &.active::after {
    width: 100%;
  }
`;

const ResumeButton = styled.button`
  padding: 10px 20px;
  border-radius: 999px;
  border: none;
  background: white;
  color: var(--pink-main);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 2rem;

  &:hover {
    background: var(--pink-main);
    color: white;
    transform: translateY(-2px);
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;

      // Blur effect when scrolled
      setScrolled(currentScrollY > 50);

      // Active section highlight
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Nav className={`${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <h2>WEB DEVELOPER</h2>

      <ul>
        <li>
          <NavLink
            onClick={() => scrollToSection("hero")}
            className={activeSection === "hero" ? "active" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => scrollToSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => scrollToSection("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => scrollToSection("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ResumeButton
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        RESUME
      </ResumeButton>
    </Nav>
  );
}

export default Navbar;