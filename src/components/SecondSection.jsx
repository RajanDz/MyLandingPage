import "../styles/SecondSectionStyle.css";
import gif from "../assets/marketingGif.gif";
import instagram from "../assets/instagram-logo.png";
import { Link } from "react-router-dom";
export function SecondSections(){
    return(
        <div className="section-two-main-container">

            <div className="section-two-content">
                <div className="section-two-left-side-content">
                    <div className="section-header">
                        <img src={instagram} alt="" />
                        <p className="marketing-advice-text">MARKETING SAVJETI</p>
                    </div>
                    <div className="advice-text-promo">
                        <h2 className="promo-text">Znate li da <span className="advice-procent">93%</span> vaših  <br />kupaca prvo pretražuje <br />Google?</h2>
                        <p className="promo-description">Većina agencija samo napravi stranicu i zaboravi na nju. <br /> Mi se fokusiramo na rezultate.Koristimo dokazane strategije kako bi vaša <br /> web stranica bila ne samo lijepa, već i efikasan prodajni alat.</p>
                    </div>

                    <div className="performance-advice">
                        <div className="option">
                            <span className="material-symbols-outlined">
                            task_alt
                            </span>
                            <p>SEO Optimizacija uključena</p>
                        </div>
                        <div className="option">
                            <span className="material-symbols-outlined">
                            task_alt
                            </span>
                            <p>Integracija s društvenim mrežama</p>
                        </div>
                        <div className="option">
                            <span className="material-symbols-outlined">
                            task_alt 
                            </span>
                            <p>Google Analytics analitika</p>
                        </div>
                        <Link to={"https://www.instagram.com/detail_web/"} >
                            <p className="more-about-us">Saznajte više o našem procesu</p>
                        </Link>
                    </div>
                </div>

                <img className="promotional-gif" src={gif} alt="" />
            </div>
        </div>
    )
}