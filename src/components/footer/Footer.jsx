import "./Footer.scss"
import { useTranslation } from "react-i18next"

function Footer() {

    const { t } = useTranslation()

    return (
        <div className="footer">

            <div className="footer-topics">
                <h1>{t("footerTitle")}</h1>

                <p>{t("footerDesc")}</p>

                <a className="button" href="#contact">
                    <button className="button">
                        {t("footerBtn")} →
                    </button>
                </a>
            </div>

            <div className="links-footer">

                <div className="footerLine1">
                    <h2>WEBRIVO</h2>

                    <p className="p1-footer-link">
                        WEB STUDIO
                    </p>

                    <br />

                    <p className="p2-footer-link">
                        {t("footerStudioDesc")}
                    </p>

                    <br />

                    <i>{t("footerQuote")}</i>

                    <br />

                    <div className="socialLinks-footer">
                        <div className="footerIcon1">📸</div>
                        <div className="footerIcon1">✈️</div>
                        <div className="footerIcon1">💼</div>
                        <div className="footerIcon1">🎬</div>
                        <div className="footerIcon1">💻</div>
                    </div>
                </div>

                <div className="footerLine2">
                    <b>{t("company")}</b>

                    <p>{t("home")}</p>
                    <p>{t("services")}</p>
                    <p>{t("portfolio")}</p>
                    <p>{t("pricing")}</p>
                    <p>{t("contact")}</p>
                </div>

                <div className="footerLine3">
                    <b>{t("services")}</b>

                    <p>{t("landingTitle")}</p>
                    <p>{t("startupTitle")}</p>
                    <p>{t("restaurantTitle")}</p>
                    <p>{t("portfolioTitle")}</p>
                    <p>{t("educationTitle")}</p>
                </div>

                <div className="footerLine4">
                    <b>{t("contact")}</b>

                    <p>webrivo.team@gmail.com</p>
                    <p>@webrivo.studio</p>
                    <p>@fiverr.com/webrivo</p>
                    <p>@webrivo (Telegram)</p>
                </div>

                <div className="line-footer-links"></div>

                <div className="end">
                    <p>
                        © 2024 Webrivo Studio. {t("rights")}
                    </p>

                    <p>
                        {t("madeWith")}
                        <div className="heart-end">❤️</div>
                        {t("madeIn")}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer;