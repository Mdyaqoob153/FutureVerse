import wheelchairImg from "../../assets/project-images/wheelchair.jpg";
import garbageImg from "../../assets/project-images/garbage-classification.jpg";
import digitImg from "../../assets/project-images/digit-recognition.jpg";
import futureverseImg from "../../assets/project-images/futureverse.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Gesture Controlled Smart Wheelchair",
      image: wheelchairImg,
      description:
        "An IoT-based smart wheelchair controlled using hand gestures and ESP-NOW communication for seamless real-time navigation.",
      technologies: [
        "ESP32",
        "ESP-NOW",
        "IoT",
        "Embedded Systems",
      ],
      github: "https://github.com/Mdyaqoob153",
    },

    {
      title: "AI Garbage Classification",
      image: garbageImg,
      description:
        "Deep learning model capable of classifying waste into multiple categories using CNNs and computer vision techniques.",
      technologies: [
        "TensorFlow",
        "CNN",
        "Python",
        "Computer Vision",
      ],
      github: "https://github.com/Mdyaqoob153",
    },

    {
      title: "Handwritten Digit Recognition",
      image: digitImg,
      description:
        "Neural network based handwritten digit recognition system trained using deep learning techniques.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Deep Learning",
      ],
      github: "https://github.com/Mdyaqoob153",
    },

    {
      title: "FutureVerse Portfolio",
      image: futureverseImg,
      description:
        "Interactive 3D portfolio website built with React, TypeScript, Three.js and React Three Fiber.",
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "R3F",
      ],
      github: "https://github.com/Mdyaqoob153",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        position: "relative",
        zIndex: 10,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 8%",
        background: "transparent",
        color: "white",
      }}
    >
      {/* Header */}

      <p
        style={{
          color: "#3b82f6",
          fontWeight: 700,
          letterSpacing: "3px",
          marginBottom: "1rem",
        }}
      >
        MY WORK
      </p>

      <h2
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          marginBottom: "1.5rem",
        }}
      >
        Featured Projects
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "1.2rem",
          maxWidth: "850px",
          lineHeight: 2,
          marginBottom: "4rem",
        }}
      >
        Projects spanning Artificial Intelligence,
        Machine Learning, Internet of Things,
        Deep Learning, and Modern Web Development.
      </p>

      {/* Projects Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(400px,1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              transition: "0.3s ease",
            }}
          >
            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            {/* Content */}

            <div
              style={{
                padding: "2rem",
              }}
            >
              <p
                style={{
                  color: "#60a5fa",
                  marginBottom: "0.8rem",
                  fontWeight: 700,
                }}
              >
                Project {index + 1}
              </p>

              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              {/* Technologies */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.7rem",
                  marginBottom: "2rem",
                }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "999px",
                      background:
                        "rgba(59,130,246,0.15)",
                      border:
                        "1px solid rgba(59,130,246,0.3)",
                      color: "#60a5fa",
                      fontSize: "0.9rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "#2563eb",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  GitHub
                </a>

                <button
                  style={{
                    padding: "12px 20px",
                    borderRadius: "12px",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                    background:
                      "rgba(255,255,255,0.05)",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "3rem",
          marginTop: "6rem",
        }}
      >
        <div>
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

        <div>
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
            Machine Learning & Deep Learning
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            IoT
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Smart Embedded Systems
          </p>
        </div>

        <div>
          <h2
            style={{
              color: "#3b82f6",
              fontSize: "3rem",
            }}
          >
            Web
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Modern Frontend Development
          </p>
        </div>
      </div>
    </section>
  );
}