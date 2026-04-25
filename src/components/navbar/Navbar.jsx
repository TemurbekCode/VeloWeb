import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { t, i18n } = useTranslation();

    const closeAll = () => {
        setMenuOpen(false);
    }

    return (
        <div className="nav">
            <div className="navContainer">
                <Link to="/" onClick={closeAll}>
                    <h1 className="logo">
                        <img src="veloweb.jpg" className="logoVelo" />
                    </h1>
                </Link>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("home")}
                    </Link>
                    <Link to="/services" className="nav-link" onClick={closeAll}>
                        {t("services")}
                    </Link>
                    <Link to="/portfolio" className="nav-link" onClick={closeAll}>
                        {t("portfolio")}
                    </Link>
                    <Link to="/pricing" className="nav-link" onClick={closeAll}>
                        {t("pricing")}
                    </Link>
                    <Link to="/register" className="nav-link" onClick={closeAll}>
                        {t("contact")}
                    </Link>

                    <div className="nav-right nav-right-mobile">
                        <button className="btns-right" onClick={() => i18n.changeLanguage("en")}>EN</button>
                        <div className="chiziq-tepa-past"></div>
                        <button className="btns-right" onClick={() => i18n.changeLanguage("uz")}>UZ</button>

                        <a href="#" className="quoteBTN1">
                            <button className="quoteBTN">{t("quote")}</button>
                        </a>
                    </div>
                </div>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </div>
    )
}

export default Navbar;