import "../styles/header.css";
import logo from '../assets/LOGO.png';

export function Header(){
    return(
        <div className="header-main-container">
            <div className="header-content">
                <div className="header-left-side">
                    <img src={logo} alt="Logo" />
                    <h2>Detail Web</h2>
                </div>
                <div className="header-right-side">
                    <p className="nav-link" onClick={() => document.getElementById("our-service")?.scrollIntoView({behavior: "smooth"})}>Usluge</p>
                    <p className="promotional-button" onClick={() => document.getElementById("contact-us")?.scrollIntoView({behavior: "smooth"})}>Zatrazite ponudu</p>
                </div>
            </div>
        </div>
    )
}