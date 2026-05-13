// src/pages/about/About.jsx
import { useTranslation } from "react-i18next";
 
export default function About() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
 
    const stats = [
        { num: "10+", label: lang === "uz" ? "Loyihalar" : "Projects Done" },
        { num: "100%", label: lang === "uz" ? "Mamnuniyat" : "Client Satisfaction" },
        { num: "24/7", label: lang === "uz" ? "Qo'llab-quvvatlash" : "Support" },
        { num: "2026", label: lang === "uz" ? "Tashkil etilgan" : "Founded" },
    ];
 
    const values = [
        { icon: "⚡", title: lang === "uz" ? "Tezlik" : "Speed", desc: lang === "uz" ? "Sifatga putur yetkazmagan holda tez yetkazib berish." : "Fast delivery without compromising quality." },
        { icon: "💎", title: lang === "uz" ? "Sifat" : "Quality", desc: lang === "uz" ? "Har bir piksel muhim. Biz aniqlik bilan quramiz." : "Every pixel matters. We build with precision." },
        { icon: "🤝", title: lang === "uz" ? "Ishonch" : "Trust", desc: lang === "uz" ? "Shaffof jarayon va halol muloqot." : "Transparent process and honest communication." },
        { icon: "🚀", title: lang === "uz" ? "O'sish" : "Growth", desc: lang === "uz" ? "Biz mijozlarimiz bilan birga o'samiz." : "We grow alongside our clients." },
    ];
 
    const team = [
        {
            name: "Asilbek Aslanboyev",
            role: lang === "uz" ? "Frontend Dasturchi" : "Frontend Developer",
            bio: lang === "uz"
                ? "Chiroyli dizaynlarni toza, samarali va qulay kod bilan hayotga tatbiq etuvchi diqqatli frontend dasturchi."
                : "Detail-oriented frontend developer who brings beautiful designs to life with clean, efficient and maintainable code.",
            img: "/asilbek.jpg",
            isFounder: false,
            isComingSoon: false,
            socials: {
                instagram: "https://instagram.com/asil_web",
                linkedin: "https://linkedin.com/in/asilbek-aslonboyev-739023405",
                telegram: "#",
            },
        },
        {
            name: "Temur Alisherov",
            role: lang === "uz" ? "Asoschi & Frontend Dasturchi" : "Founder & Frontend Developer",
            bio: lang === "uz"
                ? "Zamonaviy web texnologiyalarida ixtisoslashgan ishtiyoqli frontend dasturchi. Butun dunyo bo'ylab bizneslarning onlayn mavjudligini kuchaytirishga yordam berish uchun Webrivo ni tashkil etdi."
                : "Passionate frontend developer specializing in modern web technologies. Founded Webrivo to help businesses worldwide establish a powerful online presence.",
            img: "/temurbek.jpg",
            isFounder: true,
            isComingSoon: false,
            socials: {
                instagram: "https://instagram.com/alisherov.dev",
                linkedin: "https://linkedin.com/in/temurbek-alisherov-42a5b23b3",
                telegram: "https://t.me/alisherovdev",
            },
        },
        {
            name: "???",
            role: lang === "uz" ? "Dizayner · Tez Kunda" : "Designer · Coming Soon",
            bio: lang === "uz"
                ? "Biz o'sib borayotgan jamoamizga iqtidorli UI/UX dizayner qidiryapmiz. Kuting!"
                : "We're looking for a talented UI/UX designer to join our growing team. Stay tuned!",
            img: null,
            isFounder: false,
            isComingSoon: true,
            socials: null,
        },
    ];
 
    return (
        <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#E8E0D0" }}>
 
            <style>{`
                .about-hero {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                    min-height: 90vh;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 32px 60px;
                }
                .story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 48px;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 32px;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                @media (max-width: 900px) {
                    .about-hero {
                        grid-template-columns: 1fr;
                        min-height: auto;
                        padding: 60px 20px 40px;
                        gap: 40px;
                    }
                    .story-grid {
                        grid-template-columns: 1fr;
                        padding: 50px 20px;
                        gap: 24px;
                    }
                    .team-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .about-photo-box {
                        width: 260px !important;
                        height: 340px !important;
                    }
                }
                @media (max-width: 600px) {
                    .about-hero { padding: 50px 16px 32px; }
                    .story-grid { padding: 40px 16px; }
                    .team-grid { gap: 16px; }
                }
            `}</style>
 
            {/* ===== HERO ===== */}
            <div className="about-hero">
 
                {/* LEFT */}
                <div>
                    <div style={{ display: "inline-block", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", borderRadius: 100, padding: "6px 18px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>
                        {lang === "uz" ? "Biz Haqimizda" : "Who We Are"}
                    </div>
 
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#F0EAD8", margin: "0 0 8px 0", letterSpacing: -1, lineHeight: 1.1 }}>Temur</h1>
                    <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, margin: "0 0 20px 0", letterSpacing: -1, lineHeight: 1.1, background: "linear-gradient(135deg, #C9A84C, #F5D98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Alisherov</h1>
 
                    <div style={{ fontSize: 13, color: "#C9A84C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 24, fontWeight: 600 }}>
                        {lang === "uz" ? "Asoschi & Frontend Dasturchi" : "Founder & Frontend Developer"}
                    </div>
                    <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 24 }} />
 
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, margin: "0 0 32px 0", maxWidth: 460 }}>
                        {lang === "uz"
                            ? "Zamonaviy web texnologiyalarida ixtisoslashgan ishtiyoqli frontend dasturchi. Butun dunyo bo'ylab bizneslarning onlayn mavjudligini kuchaytirishga yordam berish uchun Webrivo ni tashkil etdi."
                            : "Passionate frontend developer specializing in modern web technologies. Founded Webrivo to help businesses worldwide establish a powerful online presence."}
                    </p>
 
                    {/* Skills */}
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
                        {["HTML", "CSS", "JavaScript", "React"].map((skill, i) => (
                            <span key={i} style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 600 }}>{skill}</span>
                        ))}
                    </div>
 
                    {/* Stats */}
                    <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 36 }}>
                        {stats.slice(0, 3).map((s, i) => (
                            <div key={i}>
                                <div style={{ fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, #C9A84C, #F5D98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.num}</div>
                                <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
 
                    {/* Socials */}
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {[
                            { icon: "📸", href: "https://instagram.com/alisherov.dev" },
                            { icon: "💼", href: "https://linkedin.com/in/temurbek-alisherov-42a5b23b3" },
                            { icon: "✈️", href: "https://t.me/alisherovdev" },
                            { icon: "🐙", href: "https://github.com/TemurbekCode" },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                style={{ width: 42, height: 42, background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none", transition: "all 0.2s" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >{s.icon}</a>
                        ))}
                    </div>
                </div>
 
                {/* RIGHT — Photo */}
                <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ position: "absolute", width: 400, height: 400, background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", width: 380, height: 380, border: "1px solid rgba(201,168,76,0.1)", borderRadius: "50%", pointerEvents: "none" }} />
 
                    <div className="about-photo-box" style={{ width: 320, height: 420, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(201,168,76,0.25)", background: "#111", position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.06)" }}>
                        <img src="/temurbek.jpg" alt="Temur Alisherov" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent, rgba(8,8,8,0.85))" }} />
                        <div style={{ position: "absolute", bottom: 16, left: 12, right: 12, background: "rgba(8,8,8,0.85)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", boxShadow: "0 0 8px #28c840", flexShrink: 0 }} />
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: "#F0EAD8" }}>Temurbek Alisherov</div>
                                <div style={{ fontSize: 11, color: "#C9A84C" }}>Founder & Frontend Dev</div>
                            </div>
                        </div>
                    </div>
 
                    <div style={{ position: "absolute", top: 20, right: 0, background: "#0F0F0F", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                        <div style={{ fontSize: 22 }}>⚡</div>
                        <div style={{ fontSize: 12, color: "#C9A84C", fontWeight: 600, marginTop: 4 }}>Frontend</div>
                    </div>
                    <div style={{ position: "absolute", bottom: 60, left: 0, background: "#0F0F0F", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                        <div style={{ fontSize: 22 }}>🚀</div>
                        <div style={{ fontSize: 12, color: "#C9A84C", fontWeight: 600, marginTop: 4 }}>Webrivo</div>
                    </div>
                </div>
            </div>
 
            {/* ===== STORY + VALUES ===== */}
            <div style={{ background: "#050505", borderTop: "1px solid #111", borderBottom: "1px solid #111" }}>
                <div className="story-grid">
                    <div style={{ background: "#0D0D0D", border: "1px solid #1a1a1a", borderRadius: 16, padding: "36px" }}>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0EAD8", margin: "0 0 16px 0" }}>
                            📖 {lang === "uz" ? "Bizning Tariximiz" : "Our Story"}
                        </h3>
                        <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 20 }} />
                        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, margin: "0 0 32px 0" }}>
                            {lang === "uz"
                                ? "Webrivo Samarqand shahrida bitta missiya bilan tashkil etildi — bizneslarni tez, zamonaviy va professional saytlar orqali raqamli dunyoga chiqarishga yordam berish."
                                : "Webrivo was founded in Samarkand, Uzbekistan with one mission — to help businesses launch into the digital world with fast, modern and professional websites."}
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                            {stats.map((s, i) => (
                                <div key={i} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: "16px", textAlign: "center" }}>
                                    <div style={{ fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, #C9A84C, #F5D98B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 4 }}>{s.num}</div>
                                    <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0EAD8", margin: "0 0 4px 0" }}>
                            🎯 {lang === "uz" ? "Bizning Qadriyatlarimiz" : "Our Values"}
                        </h3>
                        <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 4 }} />
                        {values.map((v, i) => (
                            <div key={i}
                                style={{ background: "#0D0D0D", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", transition: "all 0.2s" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.background = "#111"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.background = "#0D0D0D"; }}
                            >
                                <div style={{ width: 42, height: 42, flexShrink: 0, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{v.icon}</div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: "#E8E0D0", marginBottom: 4 }}>{v.title}</div>
                                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{v.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
 
            {/* ===== TEAM ===== */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#F0EAD8", margin: "0 0 12px 0" }}>
                        {lang === "uz" ? "Jamoamiz" : "Meet The Team"}
                    </h2>
                    <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto" }} />
                </div>
 
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i}
                            style={{
                                background: member.isComingSoon ? "transparent" : "#0D0D0D",
                                border: member.isFounder
                                    ? "1px solid rgba(201,168,76,0.35)"
                                    : member.isComingSoon
                                    ? "1px dashed #222"
                                    : "1px solid #1a1a1a",
                                borderRadius: 16, overflow: "hidden",
                                transition: "all 0.3s ease", position: "relative",
                                opacity: member.isComingSoon ? 0.5 : 1,
                            }}
                            onMouseEnter={e => {
                                if (!member.isComingSoon) {
                                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(201,168,76,0.1)";
                                }
                            }}
                            onMouseLeave={e => {
                                if (!member.isComingSoon) {
                                    e.currentTarget.style.borderColor = member.isFounder ? "rgba(201,168,76,0.35)" : "#1a1a1a";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }
                            }}
                        >
                            {member.isFounder && (
                                <div style={{ position: "absolute", top: 14, right: 14, background: "linear-gradient(135deg, #C9A84C, #F5D98B)", color: "#0A0A0A", borderRadius: 100, padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: 1, zIndex: 2 }}>
                                    FOUNDER
                                </div>
                            )}
 
                            {/* Photo */}
                            <div style={{ height: 220, background: "#111", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {member.isComingSoon ? (
                                    <>
                                        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, zIndex: 1 }}>
                                            <div style={{ width: 80, height: 80, borderRadius: "50%", border: "2px dashed rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#2a2a2a" }}>?</div>
                                            <div style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: 2, textTransform: "uppercase" }}>
                                                {lang === "uz" ? "Tez Kunda" : "Coming Soon"}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, rgba(8,8,8,0.7))" }} />
                                    </>
                                )}
                            </div>
 
                            {/* Info */}
                            <div style={{ padding: "22px" }}>
                                <h3 style={{ fontSize: 17, fontWeight: 800, color: member.isComingSoon ? "#2a2a2a" : "#F0EAD8", margin: "0 0 4px 0" }}>{member.name}</h3>
                                <div style={{ fontSize: 11, color: member.isComingSoon ? "#2a2a2a" : "#C9A84C", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>{member.role}</div>
                                <div style={{ height: 1, background: member.isComingSoon ? "#161616" : "rgba(201,168,76,0.15)", marginBottom: 12 }} />
                                <p style={{ fontSize: 13, color: member.isComingSoon ? "#222" : "#666", lineHeight: 1.7, margin: "0 0 18px 0" }}>{member.bio}</p>
                                {!member.isComingSoon && (
                                    <div style={{ display: "flex", gap: 8 }}>
                                        {[
                                            { icon: "📸", href: member.socials.instagram },
                                            { icon: "💼", href: member.socials.linkedin },
                                            { icon: "✈️", href: member.socials.telegram },
                                        ].map((s, j) => (
                                            <a key={j} href={s.href} target="_blank" rel="noopener noreferrer"
                                                style={{ width: 32, height: 32, background: "#111", border: "1px solid #1e1e1e", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, textDecoration: "none", transition: "all 0.2s" }}
                                                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
                                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.background = "#111"; }}
                                            >{s.icon}</a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
 
                <p style={{ textAlign: "center", marginTop: 48, fontSize: 14, color: "#444" }}>
                    🌍 {lang === "uz" ? "Samarqand shahridan butun dunyo bo'ylab ishlaymiz" : "Based in Samarkand, working with clients worldwide"}
                </p>
            </div>
        </div>
    );
}
 