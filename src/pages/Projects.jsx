
const Projects = () => (
    <section className="main-info" id="projects">
        <h2>Projects</h2>
        <div className="project-info">
            <h3>Timetable AP</h3>
            <a href="https://github.com/Dunconius/timetable_api" target="_blank">Repo Link</a>
            <p>A school timetabling backend using Flask and PostgreSQL with full CRUD functionality and RESTful endpoints.</p>
        </div>
        <div className="project-info">
            <h3>Catstagram</h3>
            <a href="https://github.com/Dunconius/cat-generator" target="_blank">Repo Link</a>
            <a href="https://dunconius-catstagram.netlify.app/" target="_blank">Deployment Link</a>
            <p>An instagram style cat photo app built with React and JavaScript, fetching data from the Cat API. Built in 48 hours as part of a hackathon.</p>
        </div>
        <div className="project-info">
            <h3>DesignGrads</h3>
            <a href="https://www.designgrads.com.au/" target="_blank">designgrads.com</a>
            <p><em>Commercial Project</em></p>
            <p>A graduate alumni portfolio website for CIT students from the department of Creative and Design Industries. Made using Weblfow</p>
        </div>
        <div className="project-info">
            <h3>Duncan Bean Visualisation</h3>
            <a href="https://www.duncanbean.com/" target="_blank">duncanbean.com</a>
            <p>My personal portfolio website showcasing my 3D architectural rendering work. Made using Weblfow</p>
        </div>
    </section>
);

export default Projects;