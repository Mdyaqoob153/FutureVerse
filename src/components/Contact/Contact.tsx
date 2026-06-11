export default function Contact() {
  const contactCards = [
    {
      icon: "📧",
      title: "Email",
      value: "mdyaqoob153@gmail.com",
      link: "mailto:mdyaqoob153@gmail.com",
    },

    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/Mdyaqoob153",
      link: "https://github.com/Mdyaqoob153",
    },

    {
      icon: "🔗",
      title: "LinkedIn",
      value:
        "linkedin.com/in/mohammed-yaqoob-hussain-8a8178252",
      link:
        "https://linkedin.com/in/mohammed-yaqoob-hussain-8a8178252",
    },

    {
      icon: "📄",
      title: "Resume",
      value: "Download Resume",
      link: "/MDYH_General.pdf",
    },

    {
      icon: "📍",
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
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
      {/* Label */}

      <p
        style={{
          color: "#3b82f6",
          fontWeight: 700,
          letterSpacing: "3px",
          marginBottom: "1rem",
        }}
      >
        CONTACT
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
        Let's Build Something
        <br />
        Amazing Together
      </h2>

      {/* Description */}

      <p
        style={{
          fontSize: "1.2rem",
          color: "#cbd5e1",
          maxWidth: "850px",
          lineHeight: 2,
          marginBottom: "4rem",
        }}
      >
        I am actively seeking opportunities in Software
        Engineering, Artificial Intelligence, Machine
        Learning, Full-Stack Development, and Internet of
        Things. Whether you're recruiting, collaborating,
        or building something exciting, I'd love to connect.
      </p>

      {/* Contact Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "2rem",
        }}
      >
        {contactCards.map((card) => (
          <a
            key={card.title}
            href={card.link || undefined}
            target={
              card.link?.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "24px",
                background:
                  "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                height: "100%",
                transition: "0.3s ease",
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
                  marginBottom: "1rem",
                  fontSize: "1.3rem",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                  wordBreak: "break-word",
                }}
              >
                {card.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Section */}

      <div
        style={{
          marginTop: "5rem",
          padding: "3rem",
          borderRadius: "30px",
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Ready to Collaborate?
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: 1.8,
          }}
        >
          Open to internships, full-time opportunities,
          freelance work, innovative projects, and
          technology collaborations.
        </p>

        <button
          onClick={() =>
            window.open(
              "mailto:mdyaqoob153@gmail.com",
              "_blank"
            )
          }
          style={{
            padding: "16px 36px",
            borderRadius: "14px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 700,
            boxShadow:
              "0 10px 25px rgba(37,99,235,0.35)",
          }}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}