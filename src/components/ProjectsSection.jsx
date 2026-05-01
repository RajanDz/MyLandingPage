import "../styles/ProjectsSectionStyle.css";
import { Link } from "react-router-dom";
import monamourProjekatImg from "../assets/monamourProjekat.jpg"
import realEstateProjekatImg from "../assets/realEstateProjekat.jpg"
import beautyImg from "../assets/beautySalon.jpg";
const projects = [
    {
        id: 1,
        name: "Monamour",
        description: "Moderan portfolio za Monamour butik.",
        image: monamourProjekatImg,
        link: "https://www.monamourmne.online/",
    },
    {
        id: 2,
        name: "Real Estate (Demo)",
        description: "Kreirali smo demo verziju kako moze izgledati Vaš real estate sajt.",
        image: realEstateProjekatImg,
        link: "https://realestatedemopodgorica.netlify.app/",
    },
    {
        id: 3,
        name: "Kozmetički salon (Demo)",
        description: "Kreirali smo profesionalan dizajn i pristup kozmetičkom salonu.",
        image: beautyImg,
        link: "https://beautysalonpodgorica.netlify.app/",
    },
];

export function ProjectsSection() {
    return (
        <div className="projects-section-main-container">
            <div className="section-info-text">
                <h3 className="main-text">Naši projekti</h3>
                <p className="sub-text">Pogledajte neke od naših najnovijih radova.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-wrapper">
                            {project.image ? (
                                <img src={project.image} alt={project.name} className="project-image" />
                            ) : (
                                <div className="project-image-placeholder">
                                    <span className="material-symbols-outlined">web</span>
                                </div>
                            )}
                            <div className="project-image-overlay"></div>
                        </div>

                        <div className="project-card-body">
                            <h4 className="project-name">{project.name}</h4>
                            <p className="project-description">{project.description}</p>
                            <Link to={project.link} target="_blank" className="project-link">
                                <span className="material-symbols-outlined">open_in_new</span>
                                Pogledaj projekt
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
