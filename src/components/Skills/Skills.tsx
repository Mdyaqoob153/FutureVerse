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
      title: "Frontend Development",
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
      title: "IoT & Embedded Systems",
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

  const stats = [
    {
      value: "10+",
      label: "Certifications Earned",
    },
    {
      value: "34+",
      label: "LeetCode Problems Solved",
    },
    {
      value: "4+",
      label: "Featured Projects",
    },
    {
      value: "AI",
      label: "Machine Learning Focus",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 8%",
        position: "relative",
        zIndex: 10,
        color: "white",
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
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          fontWeight: 800,
          marginBottom: "1.5rem",
        }}
      >
        Skills & Technologies
      </h2>

      {/* Description */}

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "1.15rem",
          lineHeight: 2,
          maxWidth: "900px",
          marginBottom: "4rem",
        }}
      >
        My technical expertise spans software engineering,
        artificial intelligence, machine learning, IoT
        systems, cloud technologies, and modern web
        development. I enjoy combining these technologies
        to create innovative and impactful solutions.
      </p>

      {/* Skill Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "2rem",
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            style={{
              padding: "2rem",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
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
                  fontSize: "2rem",
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

      {/* Professional Summary */}

      <div
        style={{
          marginTop: "5rem",
          padding: "2.5rem",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
        }}
      >
        <h3
          style={{
            color: "#60a5fa",
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          Technical Strength
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 2,
            fontSize: "1.05rem",
          }}
        >
          My strongest areas include Java development,
          Artificial Intelligence, Machine Learning,
          IoT systems, and modern frontend development.
          Through internships, certifications, coding
          practice, and project-based learning, I continue
          to strengthen both my problem-solving abilities
          and software engineering skills.
        </p>
      </div>

      {/* Stats */}

      <div
        style={{
          marginTop: "5rem",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "2rem",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: "2rem",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
            }}
          >
            <h2
              style={{
                color: "#3b82f6",
                fontSize: "3rem",
                marginBottom: "0.5rem",
              }}
            >
              {stat.value}
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}