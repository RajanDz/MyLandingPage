import "../styles/HomeStyle.css"
import { Header } from "../components/Header"
import { SectionOne } from "../components/FirstSection"
import { ThirdSection } from "../components/ThirdSection"
import { SecondSections } from "../components/SecondSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/LastSection"
import { Footer } from "../components/Footer"
export function HomePage(){
    return(
        <div className="home-page-container">
        <Header/>
        <SectionOne/>
        <ThirdSection/>
        <ProjectsSection/>
        <SecondSections/>
        <ContactSection/>
        <Footer/>
        </div>
    )
}