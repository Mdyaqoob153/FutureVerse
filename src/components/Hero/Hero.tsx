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
    transition: "all 0.3s ease",
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
    transition: "all 0.3s ease",
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "140px 8% 120px",
        position: "relative",
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
          fontSize: "clamp(3rem, 8vw, 5.8rem)",
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: "-3px",
          marginBottom: "1.5rem",
          maxWidth: "900px",
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
        {[
          "IoT Engineer",
          "AI / ML Enthusiast",
          "Software Developer",
        ].map((role) => (
          <span
            key={role}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              background:
                role === "IoT Engineer"
                  ? "rgba(59,130,246,0.15)"
                  : "rgba(255,255,255,0.05)",

              border:
                role === "IoT Engineer"
                  ? "1px solid rgba(59,130,246,0.3)"
                  : "1px solid rgba(255,255,255,0.1)",

              color:
                role === "IoT Engineer"
                  ? "#60a5fa"
                  : "#cbd5e1",

              fontWeight: 600,
            }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Description */}

      <p
        style={{
          fontSize: "1.15rem",
          color: "#d1d5db",
          lineHeight: 2,
          maxWidth: "750px",
          marginBottom: "2rem",
        }}
      >
        Final-year B.Tech student specializing in Internet of
        Things, Artificial Intelligence, Machine Learning,
        and Software Development. Passionate about building
        intelligent systems, immersive web experiences,
        scalable applications, and technology solutions that
        solve real-world challenges.
      </p>

      {/* Focus Card */}

      <div
        style={{
          padding: "1.2rem 1.5rem",
          borderRadius: "20px",
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
          backdropFilter: "blur(12px)",
          marginBottom: "2.5rem",
          maxWidth: "720px",
        }}
      >
        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 1.8,
          }}
        >
          Currently focused on Software Engineering,
          Artificial Intelligence, Machine Learning,
          Full-Stack Development, Cloud Technologies,
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
        {[
          {
            value: "34+",
            label: "LeetCode Problems",
          },
          {
            value: "4+",
            label: "Major Projects",
          },
          {
            value: "10+",
            label: "Certifications",
          },
        ].map((item) => (
          <div key={item.label}>
            <h2
              style={{
                color: "#3b82f6",
                fontSize: "2rem",
                marginBottom: "0.3rem",
              }}
            >
              {item.value}
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <button
          style={primaryButton}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          View Projects
        </button>

        <button
          style={secondaryButton}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
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

      {/* Social Buttons */}

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  }}
>
  <a
    href="https://github.com/Mdyaqoob153"
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "14px 28px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "white",
      textDecoration: "none",
      fontWeight: 600,
      backdropFilter: "blur(12px)",
    }}
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/mohammed-yaqoob-hussain-8a8178252"
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "14px 28px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "white",
      textDecoration: "none",
      fontWeight: 600,
      backdropFilter: "blur(12px)",
    }}
  >
    LinkedIn
  </a>
</div>
    </section>
  );
}