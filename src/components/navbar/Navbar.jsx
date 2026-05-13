import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const closeAll = () => setMenuOpen(false);
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        closeAll();
    }

    return (
        <div className="nav">
            <div className="navContainer">
                <Link to="/" onClick={closeAll}>
                    <img src="logo.png" className="logoVelo" alt="logo" />
                </Link>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>{t("home")}</Link>
                    <Link to="/services" className="nav-link" onClick={closeAll}>{t("services")}</Link>
                    <Link to="/portfolio" className="nav-link" onClick={closeAll}>{t("portfolio")}</Link>
                    <Link to="/pricing" className="nav-link" onClick={closeAll}>{t("pricing")}</Link>
                    <Link to="/aboutUs" className="nav-link" onClick={closeAll}>{t("aboutUs")}</Link>

                    {/* ✅ Faqat mobile da ko'rinadi */}
                    <div className="nav-right-mobile">
                        <button
                            className={`btns-right ${currentLang === "en" ? "lang-active" : ""}`}
                            onClick={() => changeLang("en")}
                        >EN</button>
                        <div className="chiziq-tepa-past"></div>
                        <button
                            className={`btns-right ${currentLang === "uz" ? "lang-active" : ""}`}
                            onClick={() => changeLang("uz")}
                        >UZ</button>
                        <a href="#">
                            <button className="quoteBTN">{t("quote")}</button>
                        </a>
                    </div>
                </div>

                {/* ✅ Desktop da ko'rinadi, mobile da yo'q */}
                <div className="nav-right nav-right-desktop">
                    <button
                        className={`btns-right ${currentLang === "en" ? "lang-active" : ""}`}
                        onClick={() => changeLang("en")}
                    >EN</button>
                    <div className="chiziq-tepa-past"></div>
                    <button
                        className={`btns-right ${currentLang === "uz" ? "lang-active" : ""}`}
                        onClick={() => changeLang("uz")}
                    >UZ</button>
                    <a href="#contact">
                        <button className="quoteBTN">{t("quote")}</button>
                    </a>
                </div>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </div>
            </div>
        </div>
    );
}

export default Navbar;