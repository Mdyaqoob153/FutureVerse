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
        "Software Development",
      ],
    },

    {
      icon: "🚀",
      title: "Career Goal",
      content: [
        "Build impactful products",
        "Solve real-world problems",
        "Grow as a Software Engineer",
      ],
    },

    {
      icon: "🌐",
      title: "Areas of Interest",
      content: [
        "AI & Deep Learning",
        "IoT Systems",
        "Cloud & Full Stack Development",
      ],
    },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
  position: "relative",
  zIndex: 10,
  maxWidth: "1200px",
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
        ABOUT ME
      </p>

      {/* Heading */}

      <h2
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}
      >
        Turning Ideas Into
        <br />
        Intelligent Solutions
      </h2>

      {/* Description */}

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 2,
          color: "#cbd5e1",
          maxWidth: "950px",
          marginBottom: "4rem",
        }}
      >
        I'm Mohammed Yaqoob Hussain, a B.Tech student
        specializing in Internet of Things (IoT) at
        ACE Engineering College, Hyderabad.

        My passion lies at the intersection of Artificial
        Intelligence, Machine Learning, Software Engineering,
        and Intelligent Connected Systems.

        I enjoy building technology-driven solutions that
        combine software, data, and hardware to solve
        meaningful real-world challenges.

        My goal is to contribute to innovative product-based
        companies while continuously learning, building,
        and creating impactful technology.
      </p>

      {/* Information Cards */}

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
              background:
                "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border:
                "1px solid rgba(255,255,255,0.08)",
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
                fontSize: "1.4rem",
                marginBottom: "1rem",
                color: "#60a5fa",
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

      {/* Journey Section */}

      <div
        style={{
          marginTop: "5rem",
          padding: "2.5rem",
          borderRadius: "28px",
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
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
          Deep Learning, Networking, and Modern Web
          Development.

          Through hands-on projects such as Gesture Controlled
          Wheelchair Systems, Garbage Classification using
          CNNs, Handwritten Digit Recognition, and the
          FutureVerse 3D Portfolio, I continue to strengthen
          my ability to design, build, and deploy
          technology-driven solutions.
        </p>
      </div>

      {/* Statistics */}

      <div
        style={{
          marginTop: "5rem",
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
            34+
          </h2>

          <p
            style={{
              color: "#94a3b8",
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
            10+
          </h2>

          <p
            style={{
              color: "#94a3b8",
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
            AI
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Machine Learning & IoT Focus
          </p>
        </div>
      </div>
    </section>
  );
}