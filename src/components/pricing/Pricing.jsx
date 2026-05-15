import "./Pricing.scss";
import { useTranslation } from "react-i18next";

function Pricing() {

    const { t } = useTranslation();

    return (
        <div className="pricing">

            <div className="topic1">
                <p>{t("pricingBadge")}</p>
            </div>

            <br />

            <h1 className="topic2">
                {t("pricingTitle")}
            </h1>

            <br />

            <p className="topic3">
                {t("pricingDesc")}
            </p>

            <br /><br />

            <div className="pricing-title-line"></div>

            <br /><br /><br /><br /><br />

            <div className="popu">
                {t("mostPopular")} ⭐
            </div>

            <div className="cards-pricing">

                {/* BASIC */}
                <div className="cardBasic">

                    <div className="topic-card-pri">
                        <div className="icon-card-pri">⚡</div>
                        <b>{t("basic")}</b>
                    </div>

                    <div className="pri-card">
                        <div className="discount-price">$150</div>
                        <h1>$100</h1>
                        <sub>USD</sub>
                    </div>

                    <p className="p-pri-card">≈ 1,270,000 UZS</p>

                    <br />

                    <p className="p2-pri-card">
                        {t("basicDesc")}
                    </p>

                    <br /><br />

                    <div className="hr-pri-card" />

                    <div className="features">
                        <p>✓ 5 Pages</p>
                        <p>✓ Mobile Responsive</p>
                        <p>✓ Contact Form</p>
                        <p>✓ Basic SEO Setup</p>
                        <p>✓ 3 Days Delivery</p>
                        <p>✓ 1 Revision</p>
                        <p className="disable">✕ Custom Animations</p>
                        <p className="disable">✕ Priority Support</p>
                    </div>

                    <a href="#contact" className="btn-price">
                        <button>{t("getStarted")} →</button>
                    </a>

                </div>

                {/* STANDARD */}
                <div className="cardStandard">

                    <div className="topic-card-pri">
                        <div className="icon-card-pri">🚀</div>
                        <b>{t("standard")}</b>
                    </div>

                    <div className="pri-card">
                        <div className="discount-price">$500</div>
                        <h1>$300</h1>
                        <sub>USD</sub>
                    </div>

                    <p className="p-pri-card">≈ 3,810,000 UZS</p>

                    <br />

                    <p className="p2-pri-card">
                        {t("standardDesc")}
                    </p>

                    <br /><br />

                    <div className="hr-pri-card" />

                    <div className="features">
                        <p>✓ 7 Pages</p>
                        <p>✓ Mobile Responsive</p>
                        <p>✓ Contact Form</p>
                        <p>✓ Advanced SEO</p>
                        <p>✓ Custom Animations</p>
                        <p>✓ 7 Days Delivery</p>
                        <p>✓ 3 Revisions</p>
                        <p>✓ 1 Month Support</p>
                        <p className="disable">✕ Priority Support</p>
                    </div>

                    <a href="#contact" className="btn-price">
                        <button>{t("getStarted")} →</button>
                    </a>

                </div>

                {/* PREMIUM */}
                <div className="cardPremium">

                    <div className="topic-card-pri">
                        <div className="icon-card-pri">💎</div>
                        <b>{t("premium")}</b>
                    </div>

                    <div className="pri-card">
                        <div className="discount-price">$1500</div>
                        <h1>$700</h1>
                        <sub>USD</sub>
                    </div>

                    <p className="p-pri-card">≈ 8,890,000 UZS</p>

                    <br />

                    <p className="p2-pri-card">
                        {t("premiumDesc")}
                    </p>

                    <br /><br />

                    <div className="hr-pri-card" />

                    <div className="features">
                        <p>✓ Up to 10+ Pages</p>
                        <p>✓ Mobile Responsive</p>
                        <p>✓ Advanced Animations</p>
                        <p>✓ Full SEO Optimization</p>
                        <p>✓ Contact & Booking Forms</p>
                        <p>✓ 14 Days Delivery</p>
                        <p>✓ Unlimited Revisions</p>
                        <p>✓ 3 Months Support</p>
                        <p>✓ Priority Support</p>
                    </div>

                    <a href="#contact" className="btn-price">
                        <button>{t("getStarted")} →</button>
                    </a>

                </div>

            </div>

            <br /><br /><br /><br /><br />

            <p className="last-p">
                💡 {t("pricingBottom")}
            </p>

        </div>
    )
}

export default Pricing;