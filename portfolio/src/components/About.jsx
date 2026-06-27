function About() {
  return (
    <section
      id="about"
      className="about"
      style={{
        backgroundImage: "url('https://i.imgur.com/YjaCrf6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://i.imgur.com/oFmf8hL.png"
        alt="About"
        style={{
          width: "1300px",
          height: "auto",
          display: "block",
        }}
      />
    </section>
  );
}

export default About;