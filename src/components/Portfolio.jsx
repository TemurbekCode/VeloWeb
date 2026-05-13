import { useState, useEffect } from "react";

const projects = {
  en: [
    {
      tag: "Restaurant & Cafe",
      title: "Taste of Samarkand",
      desc: "A modern restaurant website with menu, reservation system and location map.",
      link: "https://foodly-restaurant.netlify.app/",
      icon: "🍽️",
    },
    {
      tag: "Landing Page",
      title: "Business Card",
      desc: "A sleek personal business card website — fast, minimal and professional.",
      link: "https://temur-business-card.netlify.app/",
      icon: "📄",
    },
    {
      tag: "Portfolio",
      title: "Temurbek Portfolio",
      desc: "Elegant personal portfolio showcasing projects, skills and experience.",
      link: "https://portfolio-temurbek.netlify.app/",
      icon: "👤",
    },
    {
      tag: "Educational Center",
      title: "School #103 Urgut",
      desc: "Full website for a school with announcements, staff info and contact section.",
      link: "https://urgut-103-maktab.netlify.app/",
      icon: "🎓",
    },
    {
      tag: "Startup & Corporate",
      title: "Coming Soon",
      desc: "A startup or corporate website is on the way. Stay tuned for our next project!",
      link: "",
      icon: "🚀",
    },
  ],

  uz: [
    {
      tag: "Restoran & Kafe",
      title: "Samarqand Ta'mi",
      desc: "Menyu, bron qilish tizimi va lokatsiya xaritasi bilan zamonaviy restoran sayti.",
      link: "https://foodly-restaurant.netlify.app/",
      icon: "🍽️",
    },
    {
      tag: "Landing Page",
      title: "Biznes Karta",
      desc: "Tez, minimal va professional shaxsiy biznes karta sayti.",
      link: "https://temur-business-card.netlify.app/",
      icon: "📄",
    },
    {
      tag: "Portfolio",
      title: "Temurbek Portfolio",
      desc: "Loyihalar, ko'nikmalar va tajribani namoyish etuvchi shaxsiy portfolio sayti.",
      link: "https://portfolio-temurbek.netlify.app/",
      icon: "👤",
    },
    {
      tag: "Ta'lim Markazi",
      title: "Urgut 103-Maktab",
      desc: "E'lonlar, o'qituvchilar ma'lumoti va aloqa bo'limi bilan maktab sayti.",
      link: "https://urgut-103-maktab.netlify.app/",
      icon: "🎓",
    },
    {
      tag: "Startup & Korporativ",
      title: "Tez Kunda",
      desc: "Startup yoki korporativ sayt tayyorlanmoqda. Keyingi loyihamizni kuting!",
      link: "",
      icon: "🚀",
    },
  ],
};

const tx = {
  en: {
    badge: "Our Work",
    title: "Portfolio",
    subtitle: "A selection of websites we've built for our clients.",
    viewLive: "View Live →",
    comingSoon: "Coming Soon",
    prev: "←",
    next: "→",
    of: "of",
  },

  uz: {
    badge: "Bizning Ishlar",
    title: "Portfolio",
    subtitle: "Mijozlarimiz uchun yaratgan saytlarimizdan tanlanma.",
    viewLive: "Ko'rish →",
    comingSoon: "Tez Kunda",
    prev: "←",
    next: "→",
    of: "/",
  },
};

export default function Portfolio({ lang = "en" }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const list = projects[lang] || projects.en;
  const t = tx[lang] || tx.en;
  const total = list.length;

  const goTo = (index, dir) => {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const prev = () =>
    goTo(current === 0 ? total - 1 : current - 1, "left");

  const next = () =>
    goTo(current === total - 1 ? 0 : current + 1, "right");

  const project = list[current];
  const hasLink = project.link && project.link !== "";

  return (
    <section
      id="portfolio"
      style={{
        background: "#080808",
        padding: isMobile ? "70px 18px" : "100px 32px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 300 : 600,
          height: isMobile ? 300 : 400,
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#C9A84C",
              borderRadius: 100,
              padding: "6px 18px",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {t.badge}
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#F0EAD8",
              marginBottom: 16,
              letterSpacing: -1,
            }}
          >
            {t.title}
          </h2>

          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: "#666",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t.subtitle}
          </p>

          <div
            style={{
              width: 60,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              margin: "28px auto 0",
            }}
          />
        </div>

        {/* Carousel */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
              background: "#0D0D0D",
              border: "1px solid #1e1e1e",
              borderRadius: 16,
              overflow: "hidden",
              minHeight: isTablet ? "auto" : 420,
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "right" ? "-30px" : "30px"
                })`
                : "translateX(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,168,76,0.05)",
            }}
          >
            {/* Left */}
            <div
              style={{
                background: "#111",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: isMobile ? 28 : 48,
                borderRight: isTablet
                  ? "none"
                  : "1px solid #1e1e1e",
                borderBottom: isTablet
                  ? "1px solid #1e1e1e"
                  : "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Grid */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: isMobile ? 70 : 96,
                  marginBottom: 24,
                  filter:
                    "drop-shadow(0 0 30px rgba(201,168,76,0.3))",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {project.icon}
              </div>

              {/* Browser */}
              <div
                style={{
                  background: "#161616",
                  border: "1px solid #2a2a2a",
                  borderRadius: 8,
                  padding: "10px 16px",
                  width: "100%",
                  maxWidth: 280,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#ff5f57",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#febc2e",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                </div>

                <div
                  style={{
                    height: 6,
                    background: "#222",
                    borderRadius: 3,
                    marginBottom: 6,
                    width: "70%",
                  }}
                />

                <div
                  style={{
                    height: 6,
                    background: "#1a1a1a",
                    borderRadius: 3,
                    marginBottom: 6,
                    width: "90%",
                  }}
                />

                <div
                  style={{
                    height: 6,
                    background: "#1a1a1a",
                    borderRadius: 3,
                    width: "60%",
                  }}
                />
              </div>

              {/* Number */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11,
                  letterSpacing: 1,
                  zIndex: 1,
                }}
              >
                {String(current + 1).padStart(2, "0")} {t.of}{" "}
                {String(total).padStart(2, "0")}
              </div>
            </div>

            {/* Right */}
            <div
              style={{
                padding: isMobile
                  ? "32px 24px"
                  : "52px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(201,168,76,0.08)",
                  border:
                    "1px solid rgba(201,168,76,0.2)",
                  color: "#C9A84C",
                  borderRadius: 100,
                  padding: "5px 14px",
                  fontSize: 12,
                  letterSpacing: 1,
                  width: "fit-content",
                }}
              >
                <span>{project.icon}</span>
                {project.tag}
              </div>

              <h3
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#F0EAD8",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  width: 48,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #C9A84C, transparent)",
                }}
              />

              <p
                style={{
                  fontSize: isMobile ? 15 : 16,
                  color: "#666",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {project.desc}
              </p>

              {/* Button */}
              {hasLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background:
                      "linear-gradient(135deg, #C9A84C, #F5D98B)",
                    color: "#0A0A0A",
                    padding: isMobile
                      ? "12px 20px"
                      : "13px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    letterSpacing: 0.5,
                    width: isMobile ? "100%" : "fit-content",
                    marginTop: 8,
                    boxShadow:
                      "0 4px 24px rgba(201,168,76,0.25)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(0)")
                  }
                >
                  {t.viewLive}
                </a>
              ) : (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "transparent",
                    color: "#444",
                    padding: isMobile
                      ? "12px 20px"
                      : "13px 28px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    width: isMobile ? "100%" : "fit-content",
                    marginTop: 8,
                    border: "1px dashed #2a2a2a",
                    cursor: "not-allowed",
                  }}
                >
                  🔒 {t.comingSoon}
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobile ? 10 : 16,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={prev}
              style={{
                width: isMobile ? 42 : 48,
                height: isMobile ? 42 : 48,
                borderRadius: "50%",
                background: "#111",
                border: "1px solid #2a2a2a",
                color: "#C9A84C",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              {t.prev}
            </button>

            <div style={{ display: "flex", gap: 8 }}>
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    goTo(
                      i,
                      i > current ? "right" : "left"
                    )
                  }
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    background:
                      i === current
                        ? "linear-gradient(90deg, #C9A84C, #F5D98B)"
                        : "#2a2a2a",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: isMobile ? 42 : 48,
                height: isMobile ? 42 : 48,
                borderRadius: "50%",
                background: "#111",
                border: "1px solid #2a2a2a",
                color: "#C9A84C",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              {t.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}