import "./services.scss";
import { useEffect, useRef, useState } from "react";

function Services() {

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
                What We Offer
            </div>

            <br />

            <h1 className="services-title2">
                Our Services
            </h1>

            <br />

            <p className="services-title3">
                We build modern, fast and professional websites tailored to your business needs.
            </p>

            <br />

            <div className="services-title-line"></div>

            {/* BITTA CONTAINER */}
            <div className="cardsContainer">

                <div className="card">
                    <div className="iconCard1">📄</div>
                    <br />

                    <h2>Landing Pages</h2>
                    <br />

                    <p>
                        High-converting single-page websites designed to attract and turn visitors into customers.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 3-5 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🚀</div>
                    <br />

                    <h2>Startup & Corporate</h2>
                    <br />

                    <p>
                        Modern multi-page websites for startups and companies to establish a strong online presence.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 1-2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🍽️</div>
                    <br />

                    <h2>Restaurant & Cafe</h2>
                    <br />

                    <p>
                        Stylish websites for restaurants and cafes with menu, location and reservation features.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 5-7 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">👤</div>
                    <br />

                    <h2>Portfolio Sites</h2>
                    <br />

                    <p>
                        Personal portfolio websites for doctors, lawyers, bloggers and creative professionals.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 3-5 days</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🎓</div>
                    <br />

                    <h2>Educational Centers</h2>
                    <br />

                    <p>
                        Professional websites for schools, courses and educational centers with course listings.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 1-2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>

                <div className="card">
                    <div className="iconCard1">🏢</div>
                    <br />

                    <h2>Corporate Websites</h2>
                    <br />

                    <p>
                        Full-featured corporate websites with multiple pages, team section and contact forms.
                    </p>

                    <br />

                    <div className="hr-card"></div>

                    <div className="price">
                        <b>From $***</b>
                        <div>⏱️ 2 weeks</div>
                    </div>

                    <br />

                    <a href="#contact" className="button-ser">
                        <button className="button-ser">Get a Quote →</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Services;