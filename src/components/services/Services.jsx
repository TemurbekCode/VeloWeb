import "./services.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Services() {

    const { t } = useTranslation();

    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`services ${show ? "show-services" : ""}`}
            ref={sectionRef}
        >

            <div className="services-title1">
                {t("whatOffer")}
            </div>

            <br />

            <h1 className="services-title2">
                {t("ourServices")}
            </h1>

            <br />

            <p className="services-title3">
                {t("servicesDesc")}
            </p>

            <br />

            <div className="services-title-line"></div>

            <div className="cardsContainer">

                <div className="card">
                    <div className="iconCard1">📄</div>
                    <br />

                    <h2>{t("landingTitle")}</h2>
                    <br />

                    <p>
                        {t("landingDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 3-5 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🚀</div>
                    <br />

                    <h2>{t("startupTitle")}</h2>
                    <br />

                    <p>
                        {t("startupDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 1-2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🍽️</div>
                    <br />

                    <h2>{t("restaurantTitle")}</h2>
                    <br />

                    <p>
                        {t("restaurantDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 5-7 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">👤</div>
                    <br />

                    <h2>{t("portfolioTitle")}</h2>
                    <br />

                    <p>
                        {t("portfolioDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 3-5 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🎓</div>
                    <br />

                    <h2>{t("educationTitle")}</h2>
                    <br />

                    <p>
                        {t("educationDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 1-2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🏢</div>
                    <br />

                    <h2>{t("corporateTitle")}</h2>
                    <br />

                    <p>
                        {t("corporateDesc")}
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>{t("fromPrice")}</b>
                        <div>⏱️ 2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">
                            {t("quote")} →
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Services;