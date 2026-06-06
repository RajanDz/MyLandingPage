import "../styles/PricingSectionStyle.css";
import { Link } from "react-router-dom";

const plans = [
    {
        id: 1,
        name: "Standard",
        price: "70€",
        description: "Idealno za početnike i male biznise.",
        popular: false,
        features: [
            "Jednostrani portfolio / CV website",
            "Responzivan dizajn",
            "SEO optimizacija",
            "Jednostavan i moderan dizajn",
            "Kontakt forma",
            "Integracija društvenih mreža",
            "Osnovna optimizacija",
            "Google Maps integracija",
            "1 mjesec podrške",
            "Vrijeme izrade: 24h",
        ],
    },
    {
        id: 2,
        name: "Medium",
        price: "150€",
        description: "Savršen izbor za rastuće biznise.",
        popular: true,
        features: [
            "Do 10 stranica",
            "Responzivan dizajn",
            "Napredna SEO optimizacija",
            "Kontakt forma",
            "Google Analytics integracija",
            "Integracija društvenih mreža",
            "Google Maps integracija",
            "Custom dizajn",
            "Optimizacija performansi",
            "3 mjeseca podrške",
        ],
    },
    {
        id: 3,
        name: "Professional",
        price: "Po dogovoru",
        description: "Kompletno rješenje za ozbiljne projekte.",
        popular: false,
        features: [
            "Neograničen broj stranica",
            "Responzivan dizajn",
            "Premium SEO optimizacija",
            "Kontakt forma",
            "Google Analytics",
            "Online rezervacije i upravljanje terminima",
            "Integracija baze podataka",
            "Sistem za upravljanje sadržajem sajta",
            "Email i WhatsApp integracija",
            "Napredna sigurnosna zaštita sajta",
            "Custom funkcionalnosti",
            "Prioritetna podrška",
            "6 mjeseci podrške",
        ]
    },
];

export function PricingSection() {
    return (
        <div className="pricing-section-main-container" id="pricing">
            <div className="section-info-text">
                <h3 className="main-text">Naši planovi</h3>
                <p className="sub-text">Odaberite paket koji odgovara vašim potrebama.</p>
            </div>

            <div className="pricing-grid">
                {plans.map((plan) => (
                    <div className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`} key={plan.id}>
                        {plan.popular && (
                            <div className="pricing-badge">Najpopularniji</div>
                        )}

                        <div className="pricing-card-header">
                            <h4 className="pricing-plan-name">{plan.name}</h4>
                            <p className="pricing-description">{plan.description}</p>
                            <div className="pricing-price">{plan.price}</div>
                        </div>

                        <ul className="pricing-features">
                            {plan.features.map((feature, index) => (
                                <li className="pricing-feature-item" key={index}>
                                    <span className="material-symbols-outlined pricing-check">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="https://www.instagram.com/detail__web/"
                            target="_blank"
                            className={`pricing-cta-btn ${plan.popular ? "pricing-cta-btn--popular" : ""}`}
                        >
                            Zatražite ponudu
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
