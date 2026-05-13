import "./Pricing.scss";


function Pricing() {

    return (
        <div className="pricing">
            <div className="topic1">
                <p>TRANSPARENT PRICING</p>
            </div><br />
            <h1 className="topic2">Our Pricing</h1><br />
            <p className="topic3">Simple and clear pricing — no hidden fees.</p><br /><br />
            <div className="pricing-title-line"></div><br /><br />

            <div className="cards-pricing">
                <div className="cardBasic">
                    <div className="topic-card-pri">
                        <div className="icon-card-pri">
                            🚀
                        </div>
                        <b>Standard</b>
                    </div>

                    <div className="pri-card">
                        <h1>$500</h1><sub>USD</sub>
                    </div>
                    <p className="p-pri-card">≈ 6,350,000 UZS</p><br />
                    <p className="p2-pri-card">Ideal for growing businesses that need a full professional website.</p><br /><br />
                    <div className="hr-pri-card" />
                </div>

                <div className="cardStandard">
                    <div className="topic-card-pri">
                        <div className="icon-card-pri">
                            🚀
                        </div>
                        <b>Standard</b>
                    </div>

                    <div className="pri-card">
                        <h1>$500</h1><sub>USD</sub>
                    </div>
                    <p className="p-pri-card">≈ 6,350,000 UZS</p><br />
                    <p className="p2-pri-card">Ideal for growing businesses that need a full professional website.</p><br /><br />
                    <div className="hr-pri-card" />
                </div>

                <div className="cardPremium">
                    <div className="topic-card-pri">
                        <div className="icon-card-pri">
                            🚀
                        </div>
                        <b>Standard</b>
                    </div>

                    <div className="pri-card">
                        <h1>$500</h1><sub>USD</sub>
                    </div>
                    <p className="p-pri-card">≈ 6,350,000 UZS</p><br />
                    <p className="p2-pri-card">Ideal for growing businesses that need a full professional website.</p><br /><br />
                    <div className="hr-pri-card" />
                </div>
            </div><br /><br /><br />
            <p className="last-p">💡 Prices may vary based on project complexity. Contact us for a free consultation!</p>
        </div>
    )
}

export default Pricing;