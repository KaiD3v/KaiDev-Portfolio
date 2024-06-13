import { Link } from "react-router-dom";

const CardProject = ({ projectName, projectImg, projectDesc, projectTechIcons, projectLink }) => {
    return (
        <div className='projects-card-container'>
            <Link to={projectLink}>
                <header>
                    <h2>{projectName}</h2>
                </header>
                <main>
                    <img src={projectImg} alt="project" />
                </main>
                <footer>
                    <p>{projectDesc}</p>
                    <div className="tech-icons">
                        <p>Principais Tecnologias</p>
                        <div>
                            {projectTechIcons}
                        </div>
                    </div>
                </footer>
            </Link>
        </div>
    );
}

export default CardProject;
