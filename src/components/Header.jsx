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
                    <p className="nav-link">Usluge</p>
                    <p className="nav-link">O nama</p>
                    <p className="promotional-button">Zatrazite ponudu</p>
                </div>
            </div>
        </div>
    )
}