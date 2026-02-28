import "../styles/HomeStyle.css"
import { Header } from "../components/Header"
import { SectionOne } from "../components/FirstSection"
import { ThirdSection } from "../components/ThirdSection"
import { SecondSections } from "../components/SecondSection"
export function HomePage(){
    return(
        <div className="home-page-container">
        <Header/>
        <SectionOne/>
        <ThirdSection/>
        <SecondSections/>
        </div>
    )
}