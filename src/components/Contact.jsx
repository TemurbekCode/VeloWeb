import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// EMAILJS
const SERVICE_ID = "service_a8d852d";
const TEMPLATE_ID = "template_bqk9d0f";
const PUBLIC_KEY = "jUy_y9jB4kOIDYW3O";

const inputStyle = {
  width: "100%",
  background: "#111",
  border: "1px solid #1e1e1e",
  borderRadius: 8,
  padding: "13px 16px",
  fontSize: 14,
  color: "#E8E0D0",
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  boxSizing: "border-box",
  transition: "0.2s ease",
};

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "webrivo.team@gmail.com",
    link: "mailto:info.webrivo@gmail.com",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@webrivo.studio",
    link: "https://instagram.com/webrivo.studio",
  },
  {
    icon: "💼",
    label: "Fiverr",
    value: "fiverr.com/webrivo",
    link: "https://fiverr.com/webrivo",
  },
  {
    icon: "🎬",
    label: "YouTube",
    value: "@webrivostudio",
    link: "https://youtube.com/@webrivostudio",
  },
];

export default function Contact() {
  const { i18n } = useTranslation();

  const lang = i18n.language?.startsWith("uz") ? "uz" : "en";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const tx = {
    en: {
      badge: "Get In Touch",
      title: "Contact Us",
      subtitle:
        "Have a project in mind? Let's talk and build something great together.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      phoneLabel: "Telegram or Instagram",
      phonePlaceholder: "@username or +998...",
      emailLabel: "Email Address",
      emailPlaceholder: "example@gmail.com",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send Message →",
      sending: "Sending...",
      sent: "Message Sent ✓",
      error: "Something went wrong ❌",
      orContact: "Or reach us directly",
      tagline: "Let's bring your project to life 🚀",
      taglineSub:
        "Fill out the form or reach us through any channel below.",
      response: "We usually respond within 24 hours",
      services: [
        "Landing Page",
        "Startup Website",
        "Portfolio Website",
        "Corporate Website",
        "Other",
      ],
    },

    uz: {
      badge: "Bog'laning",
      title: "Aloqa",
      subtitle:
        "Loyihangiz bormi? Keling birgalikda ajoyib loyiha yaratamiz.",
      nameLabel: "To'liq Ism",
      namePlaceholder: "Ism Familiya",
      phoneLabel: "Telegram yoki Instagram",
      phonePlaceholder: "@username yoki +998...",
      emailLabel: "Email Manzil",
      emailPlaceholder: "example@gmail.com",
      serviceLabel: "Xizmat",
      servicePlaceholder: "Xizmat tanlang",
      messageLabel: "Xabar",
      messagePlaceholder: "Loyihangiz haqida yozing...",
      send: "Xabar Yuborish →",
      sending: "Yuborilmoqda...",
      sent: "Xabar yuborildi ✓",
      error: "Xatolik ❌",
      orContact: "Yoki to'g'ridan bog'laning",
      tagline: "Loyihangizni hayotga olib chiqamiz 🚀",
      taglineSub:
        "Forma yoki quyidagi kanallar orqali bog'laning.",
      response: "Odatda 24 soatda javob beramiz",
      services: [
        "Landing Page",
        "Startup Website",
        "Portfolio Website",
        "Korporativ Website",
        "Boshqa",
      ],
    },
  };

  const t = tx[lang];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          service: form.service,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");

        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      })
      .catch((error) => {
        console.log("FULL ERROR:", error);

        alert(`
STATUS: ${error.status}
TEXT: ${error.text}
  `);

        setStatus("error");

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      });
  };

  const getFocusStyle = (field) => ({
    ...inputStyle,
    borderColor:
      focused === field
        ? "rgba(201,168,76,0.6)"
        : "#1e1e1e",

    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(201,168,76,0.08)"
        : "none",
  });

  return (
    <section
      id="contact"
      style={{
        background: "#080808",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        .contact-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:48px;
        }

        .contact-name-row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }

        @media(max-width:900px){
          .contact-grid{
            grid-template-columns:1fr;
          }

          .contact-name-row{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:600px){
          #contact{
            padding:70px 16px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: 64,
          }}
        >
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
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 800,
              color: "#F0EAD8",
              marginBottom: 16,
            }}
          >
            {t.title}
          </h2>

          <p
            style={{
              fontSize: 17,
              color: "#666",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t.subtitle}
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT */}

          <form
            onSubmit={handleSubmit}
            style={{
              background: "#0D0D0D",
              border: "1px solid #1e1e1e",
              borderRadius: 16,
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >

            {/* NAME + PHONE */}

            <div className="contact-name-row">

              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "#C9A84C",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {t.nameLabel}
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("name")}
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "#C9A84C",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {t.phoneLabel}
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("phone")}
                />
              </div>

            </div>

            {/* EMAIL */}

            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "#C9A84C",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {t.emailLabel}
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={getFocusStyle("email")}
                required
              />
            </div>

            {/* SERVICE */}

            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "#C9A84C",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {t.serviceLabel}
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{
                  ...getFocusStyle("service"),
                  background: "#111",
                  cursor: "pointer",
                }}
              >
                <option value="">
                  {t.servicePlaceholder}
                </option>

                {t.services.map((s, i) => (
                  <option
                    key={i}
                    value={s}
                    style={{
                      background: "#111",
                    }}
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                style={{
                  fontSize: 12,
                  color: "#C9A84C",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {t.messageLabel}
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={5}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{
                  ...getFocusStyle("message"),
                  resize: "vertical",
                  minHeight: 120,
                }}
                required
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: 8,
                border: "none",
                cursor:
                  status === "sending"
                    ? "not-allowed"
                    : "pointer",
                fontSize: 15,
                fontWeight: 700,
                background:
                  status === "sent"
                    ? "linear-gradient(135deg,#28c840,#20a030)"
                    : status === "error"
                      ? "linear-gradient(135deg,#e53935,#c62828)"
                      : "linear-gradient(135deg,#C9A84C,#F5D98B)",
                color: "#0A0A0A",
              }}
            >
              {status === "idle"
                ? t.send
                : status === "sending"
                  ? t.sending
                  : status === "sent"
                    ? t.sent
                    : t.error}
            </button>

          </form>

          {/* RIGHT */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              justifyContent: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#F0EAD8",
                  marginBottom: 12,
                }}
              >
                {t.tagline}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                {t.taglineSub}
              </p>
            </div>

            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg,#C9A84C,transparent)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  color: "#444",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {t.orContact}
              </p>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "#0D0D0D",
                    border: "1px solid #1a1a1a",
                    borderRadius: 12,
                    padding: "16px 20px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "rgba(201,168,76,0.08)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#555",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>

                    <div
                      style={{
                        fontSize: 15,
                        color: "#C9A84C",
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: "auto",
                      color: "#333",
                    }}
                  >
                    →
                  </div>
                </a>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background:
                  "rgba(201,168,76,0.05)",
                border:
                  "1px solid rgba(201,168,76,0.15)",
                borderRadius: 8,
                padding: "12px 16px",
              }}
            >
              <span>⚡</span>

              <span
                style={{
                  fontSize: 13,
                  color: "#888",
                }}
              >
                {t.response}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}