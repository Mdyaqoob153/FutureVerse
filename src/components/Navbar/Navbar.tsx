export default function Navbar() {
  const navButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#e2e8f0",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "8px 14px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,

        display: "flex",
        alignItems: "center",
        gap: "1.5rem",

        padding: "1rem 2rem",

        borderRadius: "20px",

        background: "rgba(15,23,42,0.65)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",

        border: "1px solid rgba(255,255,255,0.08)",

        boxShadow:
          "0 8px 30px rgba(0,0,0,0.25)",
      }}
    >
      {/* Logo */}

      <div
        style={{
          marginRight: "1rem",
          fontWeight: 800,
          color: "#60a5fa",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("home")}
      >
        MYH
      </div>

      {/* Home */}

      <button
        style={navButtonStyle}
        onClick={() => scrollToSection("home")}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#60a5fa";
          e.currentTarget.style.background =
            "rgba(59,130,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#e2e8f0";
          e.currentTarget.style.background = "transparent";
        }}
      >
        Home
      </button>

      {/* About */}

      <button
        style={navButtonStyle}
        onClick={() => scrollToSection("about")}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#60a5fa";
          e.currentTarget.style.background =
            "rgba(59,130,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#e2e8f0";
          e.currentTarget.style.background = "transparent";
        }}
      >
        About
      </button>

      {/* Projects */}

      <button
        style={navButtonStyle}
        onClick={() => scrollToSection("projects")}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#60a5fa";
          e.currentTarget.style.background =
            "rgba(59,130,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#e2e8f0";
          e.currentTarget.style.background = "transparent";
        }}
      >
        Projects
      </button>

      {/* Skills */}

      <button
        style={navButtonStyle}
        onClick={() => scrollToSection("skills")}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#60a5fa";
          e.currentTarget.style.background =
            "rgba(59,130,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#e2e8f0";
          e.currentTarget.style.background = "transparent";
        }}
      >
        Skills
      </button>

      {/* Contact */}

      <button
        style={navButtonStyle}
        onClick={() => scrollToSection("contact")}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#60a5fa";
          e.currentTarget.style.background =
            "rgba(59,130,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#e2e8f0";
          e.currentTarget.style.background = "transparent";
        }}
      >
        Contact
      </button>
    </nav>
  );
}