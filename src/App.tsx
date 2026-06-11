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
      {/* =========================
          NAVIGATION
      ========================== */}
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}
      <>
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}
  >
    <EarthCanvas />
  </div>

  <section
  id="home"
  style={{
    position: "relative",
    zIndex: 10,
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <Hero />
</section>

  <About />
  <Projects />
  <Skills />
  <Contact />
</>

    
      <footer
        style={{
          background: "#000",
          color: "#94a3b8",
          textAlign: "center",
          padding: "4rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3
          style={{
            color: "white",
            marginBottom: "1rem",
            fontSize: "1.5rem",
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
          IoT Engineer • AI & Machine Learning Enthusiast • Software Developer
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
    </>
  );
}

export default App;