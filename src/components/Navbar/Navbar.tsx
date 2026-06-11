import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () =>
      window.removeEventListener("resize", checkScreen);
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMobileMenu(false);
  };

  const navButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#e2e8f0",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "8px 14px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };

  const navItems = [
    "home",
    "about",
    "projects",
    "skills",
    "contact",
  ];

  return (
    <>
      {/* Navbar */}

      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,

          width: isMobile ? "90%" : "fit-content",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          padding: "1rem 1.5rem",

          borderRadius: "20px",

          background: "rgba(15,23,42,0.7)",

          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          boxShadow:
            "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        {/* Logo */}

        <div
          onClick={() => scrollToSection("home")}
          style={{
            fontWeight: 800,
            color: "#60a5fa",
            letterSpacing: "1px",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          MYH
        </div>

        {/* Desktop Menu */}

        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginLeft: "2rem",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                style={navButtonStyle}
                onClick={() =>
                  scrollToSection(item)
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "#60a5fa";

                  e.currentTarget.style.background =
                    "rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "#e2e8f0";

                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}

        {isMobile && (
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Dropdown */}

      {isMobile && mobileMenu && (
        <div
          style={{
            position: "fixed",
            top: "90px",
            left: "50%",
            transform: "translateX(-50%)",

            width: "90%",

            zIndex: 999,

            borderRadius: "20px",

            background: "rgba(15,23,42,0.9)",

            backdropFilter: "blur(16px)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            overflow: "hidden",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item)
              }
              style={{
                width: "100%",

                padding: "1rem",

                background: "transparent",

                border: "none",

                color: "white",

                cursor: "pointer",

                fontSize: "1rem",

                borderBottom:
                  "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}