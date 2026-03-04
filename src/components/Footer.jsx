import "../styles/FooterStyle.css"
import logo from "../assets/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
export function Footer(){
    const navigate = useNavigate();
    return(
        <div className="footer-main-container">
            <div className="footer-content">
                <div className="brand-container">
                    <img src={logo} alt="" />
                </div>

                <div className="rules-and-policy">
                    <p>© 2024 Detail Web. Sva prava pridržana.</p>
                </div>

                <div className="social-media">
                    <Link to={"https://www.instagram.com/detail_web/"} >
                        <span className="fa fa-instagram"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}