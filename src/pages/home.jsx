import "../styles/HomeStyle.css"
import "../styles/PricingSectionStyle.css"
import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { SectionOne } from "../components/FirstSection"
import { ThirdSection } from "../components/ThirdSection"
import { SecondSections } from "../components/SecondSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { PricingSection } from "../components/PricingSection"
import { ContactSection } from "../components/LastSection"
import { Footer } from "../components/Footer"
import instagramLogo from "../assets/instagram-logo.png"

export function HomePage(){
    return(
        <div className="home-page-container">
            <Header/>
            <SectionOne/>
            <ThirdSection/>
            <ProjectsSection/>
            <PricingSection/>
            <SecondSections/>
            <ContactSection/>
            <Footer/>

            <Link
                to="https://www.instagram.com/detail__web/"
                target="_blank"
                className="instagram-float"
            >
                <img src={instagramLogo} alt="Instagram" />
                <span className="instagram-float-label">Brzi kontakt</span>
            </Link>
        </div>
    )
}