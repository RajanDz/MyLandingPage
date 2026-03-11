import "../styles/SectionOne.css"
export function SectionOne(){
    return(
        <div className="section-one-main-container">
            
            <div className="promotional-info">
                <div className="status-dot"></div>
                <p>Dostupni smo za nove projekte</p>
            </div>

            <div className="main-promotional-text">
                <h2>Vaš biznis zaslužuje <br /> <span className="highlight">Web Koji Prodaje</span></h2>
                <p>Izrađujemo moderne, brze i SEO optimizirane web stranice <br />koje pretvaraju posjetitelje u vjerne kupce.</p>
            </div>
            
            <div className="promotional-buttons">
                <button className="free-call" onClick={() => document.getElementById("contact-us")?.scrollIntoView({behavior: "smooth"})}>Besplatna konsultacija</button>
                <button className="our-service" onClick={() => document.getElementById("our-service")?.scrollIntoView({behavior: "smooth"})}>Nase usluge</button>
            </div>
        </div>
    )
}