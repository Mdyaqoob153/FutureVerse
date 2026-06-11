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
        CONTACT
      </p>

      {/* Heading */}

      <h2
        style={{
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
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
          fontSize: "1.15rem",
          color: "#cbd5e1",
          maxWidth: "900px",
          lineHeight: 2,
          marginBottom: "4rem",
        }}
      >
        I am actively seeking opportunities in Software
        Engineering, Artificial Intelligence, Machine
        Learning, Full-Stack Development, and Internet
        of Things.

        Whether you're recruiting, building innovative
        products, collaborating on projects, or simply
        connecting with fellow technology enthusiasts,
        I'd be happy to hear from you.
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
                border:
                  "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                height: "100%",
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

      {/* CTA Card */}

      <div
        style={{
          marginTop: "5rem",
          padding: "3rem",
          borderRadius: "30px",
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#ffffff",
          }}
        >
          Ready to Collaborate?
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "750px",
            margin: "0 auto 2rem",
            lineHeight: 1.8,
          }}
        >
          Open to internships, full-time roles,
          freelance opportunities, innovative
          technology projects, research collaborations,
          and product development initiatives.

          Let's create impactful solutions together.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
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

          <a
            href="/MDYH_General.pdf"
            download
            style={{
              padding: "16px 36px",
              borderRadius: "14px",
              border:
                "1px solid rgba(255,255,255,0.15)",
              background:
                "rgba(255,255,255,0.05)",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Footer Message */}

      <div
        style={{
          marginTop: "5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#64748b",
            fontSize: "0.95rem",
            letterSpacing: "1px",
          }}
        >
          Building the future through AI, IoT, and
          Software Engineering.
        </p>
      </div>
    </section>
  );
}