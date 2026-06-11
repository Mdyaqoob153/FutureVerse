export default function About() {
  const cards = [
    {
      icon: "🎓",
      title: "Education",
      content: [
        "B.Tech - Internet of Things",
        "ACE Engineering College",
        "Hyderabad, Telangana",
      ],
    },

    {
      icon: "💻",
      title: "Specialization",
      content: [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Engineering",
      ],
    },

    {
      icon: "🚀",
      title: "Career Goal",
      content: [
        "Build Impactful Products",
        "Solve Real-World Problems",
        "Grow as a Software Engineer",
      ],
    },

    {
      icon: "🌐",
      title: "Areas of Interest",
      content: [
        "AI & Deep Learning",
        "IoT Systems",
        "Cloud & Full-Stack Development",
      ],
    },
  ];

  const stats = [
    {
      value: "34+",
      label: "LeetCode Problems Solved",
    },
    {
      value: "4+",
      label: "Featured Projects",
    },
    {
      value: "10+",
      label: "Certifications Earned",
    },
    {
      value: "AI",
      label: "Machine Learning & IoT Focus",
    },
  ];

  return (
    <section
      id="about"
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
        ABOUT ME
      </p>

      {/* Heading */}

      <h2
        style={{
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "2rem",
          maxWidth: "900px",
        }}
      >
        Turning Ideas Into
        <br />
        Intelligent Solutions
      </h2>

      {/* Description */}

      <p
        style={{
          fontSize: "1.15rem",
          lineHeight: 2,
          color: "#cbd5e1",
          maxWidth: "950px",
          marginBottom: "4rem",
        }}
      >
        I'm Mohammed Yaqoob Hussain, a final-year B.Tech student
        specializing in Internet of Things (IoT) at ACE Engineering
        College, Hyderabad.

        My interests span Artificial Intelligence, Machine Learning,
        Software Engineering, Full-Stack Development, and Intelligent
        Connected Systems.

        I enjoy building technology-driven solutions that combine
        software, data, and hardware to solve meaningful real-world
        challenges.

        My long-term goal is to contribute to innovative product-based
        companies while continuously learning, building, and creating
        impactful technology.
      </p>

      {/* Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "2rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              padding: "2rem",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                color: "#60a5fa",
                fontSize: "1.4rem",
                marginBottom: "1rem",
              }}
            >
              {card.title}
            </h3>

            {card.content.map((item) => (
              <p
                key={item}
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                }}
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Journey */}

      <div
        style={{
          marginTop: "5rem",
          padding: "2.5rem",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
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
          My Journey
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 2,
            fontSize: "1.05rem",
          }}
        >
          Over the years, I have explored multiple technology
          domains including IoT, Artificial Intelligence,
          Deep Learning, Networking, Cloud Computing,
          and Modern Web Development.

          Through hands-on projects such as Gesture Controlled
          Wheelchair Systems, Garbage Classification using CNNs,
          Handwritten Digit Recognition, and the FutureVerse 3D
          Portfolio, I continue to strengthen my ability to design,
          build, and deploy technology-driven solutions.
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
              border: "1px solid rgba(255,255,255,0.08)",
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