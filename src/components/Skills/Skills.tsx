export default function Skills() {
  const skillCategories = [
    {
      icon: "💻",
      title: "Programming",
      skills: [
        "Java",
        "Python",
        "C",
        "C++",
        "JavaScript",
      ],
    },

    {
      icon: "🌐",
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "HTML",
        "CSS",
        "Vite",
      ],
    },

    {
      icon: "🤖",
      title: "AI & Machine Learning",
      skills: [
        "TensorFlow",
        "Keras",
        "CNN",
        "Machine Learning",
        "Deep Learning",
      ],
    },

    {
      icon: "📡",
      title: "IoT & Embedded",
      skills: [
        "ESP32",
        "ESP-NOW",
        "Arduino",
        "Sensors",
        "IoT Systems",
      ],
    },

    {
      icon: "☁️",
      title: "Databases & Cloud",
      skills: [
        "MongoDB",
        "MySQL",
        "Cloud Computing",
      ],
    },

    {
      icon: "🛠️",
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "VS Code",
        "Cisco Networking",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        position: "relative",
        zIndex: 10,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 8%",
        color: "white",
        background: "transparent",
      }}
    >
      {/* Section Label */}

      <p
        style={{
          color: "#3b82f6",
          fontWeight: 700,
          letterSpacing: "3px",
          marginBottom: "1rem",
        }}
      >
        EXPERTISE
      </p>

      {/* Heading */}

      <h2
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          marginBottom: "1.5rem",
        }}
      >
        Skills & Technologies
      </h2>

      {/* Intro */}

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "1.2rem",
          lineHeight: 2,
          maxWidth: "900px",
          marginBottom: "4rem",
        }}
      >
        A diverse technical skillset spanning software
        engineering, artificial intelligence, machine
        learning, IoT systems, cloud technologies, and
        modern web development.
      </p>

      {/* Skill Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "2rem",
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            style={{
              padding: "2rem",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              transition: "0.3s ease",
            }}
          >
            {/* Category Header */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                }}
              >
                {category.icon}
              </span>

              <h3
                style={{
                  color: "#60a5fa",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                {category.title}
              </h3>
            </div>

            {/* Skills */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
              }}
            >
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "999px",
                    background:
                      "rgba(59,130,246,0.15)",
                    border:
                      "1px solid rgba(59,130,246,0.25)",
                    color: "#cbd5e1",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}

      <div
        style={{
          marginTop: "6rem",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "2rem",
        }}
      >
        <div
          style={{
            padding: "2rem",
            borderRadius: "24px",
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            10+
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "0.5rem",
            }}
          >
            Certifications Earned
          </p>
        </div>

        <div
          style={{
            padding: "2rem",
            borderRadius: "24px",
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            34+
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "0.5rem",
            }}
          >
            LeetCode Problems Solved
          </p>
        </div>

        <div
          style={{
            padding: "2rem",
            borderRadius: "24px",
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            4+
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "0.5rem",
            }}
          >
            Featured Projects
          </p>
        </div>

        <div
          style={{
            padding: "2rem",
            borderRadius: "24px",
            background:
              "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            AI
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "0.5rem",
            }}
          >
            Machine Learning Focus
          </p>
        </div>
      </div>
    </section>
  );
}