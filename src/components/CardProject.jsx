import React from 'react';

const CardProject = ({ projectName, projectImg, projectDesc, projectTechIcons }) => {
    return (
        <div className='projects-card-container'>
            <header>
                <h2>{projectName}</h2>
            </header>
            <main>
                <img src={projectImg} alt="project" />
            </main>
            <footer>
                <p>{projectDesc}</p>
                <div className="tech-icons">
                    <p>Main Technologies</p>
                    {projectTechIcons}
                </div>
            </footer>
        </div>
    );
}

export default CardProject;
