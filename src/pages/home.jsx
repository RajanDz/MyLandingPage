import "../styles/HomeStyle.css"
import { Header } from "../components/Header"
import { SectionOne } from "../components/FirstSection"
import { ThirdSection } from "../components/ThirdSection"
import { SecondSections } from "../components/SecondSection"
import { ContactSection } from "../components/LastSection"
import { Footer } from "../components/Footer"
export function HomePage(){
    return(
        <div className="home-page-container">
        <Header/>
        <SectionOne/>
        <ThirdSection/>
        <SecondSections/>
        <ContactSection/>
        <Footer/>
        </div>
    )
}