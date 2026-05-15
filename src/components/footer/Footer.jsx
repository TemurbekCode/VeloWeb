import "./Footer.scss"

function Footer() {

    return (
        <div className="footer">
            <div className="footer-topics">
                <h1>Ready to start your project?</h1>
                <p>Contact us today — get a free consultation!</p>
                <button>Get Free Quote →</button>
            </div>

            <div className="links-footer">
                <div className="footerLine1">
                    <h2>WEBRIVO</h2>
                    <p className="p1-footer-link">WEB STUDIO</p><br />
                    <p className="p2-footer-link">Professional web studio building modern, fast and beautiful websites for businesses worldwide.</p><br />
                    <i>"We launch businesses into the web 🚀"</i><br />
                    <div className="socialLinks-footer">
                        <div className="footerIcon1">📸</div>
                        <div className="footerIcon1">✈️</div>
                        <div className="footerIcon1">💼</div>
                        <div className="footerIcon1">🎬</div>
                        <div className="footerIcon1">💻</div>
                    </div>
                </div>

                <div className="footerLine2">
                    <b>Company</b>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Portfolio</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>

                <div className="footerLine3">
                    <b>Services</b>
                    <p>Landing Pages</p>
                    <p>Startup & Corporate</p>
                    <p>Restaurant & Cafe</p>
                    <p>Portfolio Sites</p>
                    <p>Educational Centers</p>
                </div>

                <div className="footerLine4">
                    <b>Contact</b>
                    <p>webrivo.team@gmail.com</p>
                    <p>@webrivo.studio</p>
                    <p>@fiverr.com/webrivo</p>
                    <p>@webrivo (Telegram)</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;