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
        "An IoT-powered smart wheelchair controlled through hand gestures using ESP-NOW communication, enabling real-time navigation and enhanced accessibility.",
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
        "Deep learning-based waste classification system capable of identifying multiple garbage categories using CNNs and computer vision techniques.",
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
        "Neural network-powered digit recognition application trained using deep learning algorithms to accurately classify handwritten numbers.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Deep Learning",
      ],
      github: "https://github.com/Mdyaqoob153",
    },

    {
      title: "FutureVerse 3D Portfolio",
      image: futureverseImg,
      description:
        "Interactive 3D developer portfolio featuring React, TypeScript, Three.js, React Three Fiber, immersive animations, and responsive design.",
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "R3F",
      ],
      github: "https://github.com/Mdyaqoob153",
    },
  ];

  const stats = [
    {
      value: "4+",
      label: "Featured Projects",
    },
    {
      value: "AI",
      label: "Machine Learning & Deep Learning",
    },
    {
      value: "IoT",
      label: "Smart Embedded Systems",
    },
    {
      value: "Web",
      label: "Modern Frontend Development",
    },
  ];

  return (
    <section
      id="projects"
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
        MY WORK
      </p>

      {/* Heading */}

      <h2
        style={{
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          fontWeight: 800,
          marginBottom: "1.5rem",
        }}
      >
        Featured Projects
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
        A collection of projects showcasing my expertise in
        Artificial Intelligence, Machine Learning,
        Internet of Things, Deep Learning, and Modern
        Web Development.
      </p>

      {/* Projects Grid */}

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(500px,1fr))",
    gap: "2rem",
  }}
>
        {projects.map((project, index) => (
          <div
            key={project.title}
            style={{
              overflow: "hidden",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              transition: "all 0.3s ease",
            }}
          >
            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "240px",
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
                  fontWeight: 700,
                  marginBottom: "0.8rem",
                }}
              >
                Project {index + 1}
              </p>

              <h3
                style={{
                  fontSize: "1.7rem",
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

              {/* Tech Stack */}

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
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 22px",
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
                    padding: "12px 22px",
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

      {/* Stats */}

      <div
        style={{
          marginTop: "6rem",
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