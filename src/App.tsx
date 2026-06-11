import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import EarthCanvas from "./scenes/EarthScene/EarthCanvas";

function App() {
  return (
    <>
      {/* 3D Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <EarthCanvas />
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Home */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Hero />
        </section>

        {/* About */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer
          style={{
            background: "transparent",
            color: "#94a3b8",
            textAlign: "center",
            padding: "5rem 2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h3
            style={{
              color: "white",
              marginBottom: "1rem",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            Mohammed Yaqoob Hussain
          </h3>

          <p
            style={{
              marginBottom: "1rem",
              color: "#cbd5e1",
            }}
          >
            IoT Engineer • AI/ML Enthusiast • Software Developer
          </p>

          <p
            style={{
              marginBottom: "1rem",
            }}
          >
            Hyderabad, India
          </p>

          <p>
            © 2026 Mohammed Yaqoob Hussain. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;