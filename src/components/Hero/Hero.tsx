export default function Hero() {
  const primaryButton = {
    padding: "16px 34px",
    borderRadius: "14px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "1rem",
    boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
    transition: "0.3s ease",
  };

  const secondaryButton = {
    padding: "16px 34px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "1rem",
    transition: "0.3s ease",
  };

  return (
    <div
  style={{
    width: "90%",
    maxWidth: "750px",
    marginLeft: "8%",
    paddingTop: "120px",
    color: "white",
    zIndex: 10,
  }}
>
      {/* Greeting */}

      <p
        style={{
          color: "#3b82f6",
          fontSize: "1rem",
          fontWeight: 700,
          letterSpacing: "3px",
          marginBottom: "1rem",
        }}
      >
        WELCOME TO MY PORTFOLIO
      </p>

      {/* Name */}

      <h1
        style={{
          fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: "-3px",
          marginBottom: "1.5rem",
        }}
      >
        Mohammed
        <br />
        Yaqoob Hussain
      </h1>

      {/* Roles */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#60a5fa",
            fontWeight: 600,
          }}
        >
          IoT Engineer
        </span>

        <span
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#cbd5e1",
            fontWeight: 600,
          }}
        >
          AI / ML Enthusiast
        </span>

        <span
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#cbd5e1",
            fontWeight: 600,
          }}
        >
          Software Developer
        </span>
      </div>

      {/* Description */}

      <p
        style={{
          fontSize: "1.15rem",
          color: "#d1d5db",
          lineHeight: 2,
          maxWidth: "700px",
          marginBottom: "2rem",
        }}
      >
        Final-year B.Tech student specializing in Internet of Things,
        Artificial Intelligence, Machine Learning, and Software
        Development. Passionate about building intelligent systems,
        immersive web experiences, and scalable technology solutions
        that solve real-world challenges.
      </p>

      {/* Focus Card */}

      <div
        style={{
          padding: "1rem 1.5rem",
          borderRadius: "18px",
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
          marginBottom: "2.5rem",
          maxWidth: "650px",
        }}
      >
        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 1.8,
          }}
        >
          Currently focused on Software Engineering, Artificial
          Intelligence, Machine Learning, Full-Stack Development,
          and Product-Based Company opportunities.
        </p>
      </div>

      {/* Stats */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          marginBottom: "2.5rem",
        }}
      >
        <div>
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "2rem",
            }}
          >
            34+
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            LeetCode Problems
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "2rem",
            }}
          >
            4+
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Major Projects
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "2rem",
            }}
          >
            10+
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Certifications
          </p>
        </div>
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}
      >
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={primaryButton}
        >
          View Projects
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={secondaryButton}
        >
          Contact Me
        </button>

        <a
          href="/MDYH_General.pdf"
          download
          style={{
            ...secondaryButton,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/Mdyaqoob153"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#94a3b8",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          GitHub →
        </a>

        <a
          href="https://linkedin.com/in/mohammed-yaqoob-hussain-8a8178252"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#94a3b8",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}