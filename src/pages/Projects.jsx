
const Projects = () => (
    <section className="main-info" id="projects">
        <h2>Projects</h2>
        <div className="project-info">
            <h4>Timetable AP</h4>
            <a className="project-links" href="https://github.com/Dunconius/timetable_api" target="_blank" rel="noopener noreferrer">Repo Link</a>
            <p>This project is a backend app for timetabling school classes. The application was built using Flask as the API framework and PostgreSQL for the database.</p>
            <p>The application allows for efficient management of classroom bookings, class schedules, and teacher assignments, implementing full CRUD functionality for data manipulation. The app follows RESTful conventions for HTTP requests to facilitate communication between the client and server. Documentation includes an Entity-Relationship Diagram (ERD) and endpoint descriptions. This project showcases my skills in backend development, database management, and API design.</p>
        </div>
        <div className="project-info">
            <h4>Catstagram</h4>
            <a className="project-links" href="https://github.com/Dunconius/cat-generator" target="_blank" rel="noopener noreferrer">Repo Link</a>
            <a className="project-links" href="https://dunconius-catstagram.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment Link</a>
            <p>Catstagram is a social media style app dedicated solely to cat pictures. This project was built in 48 hours as part of a hackathon.</p>
            <p>Built with React and JavaScript, the application fetches data (cat pics) from The Cat API generates random cat names from a predefined list. Users can like cats and get more cats to enjoy an endless supply of cute cat pics. The app displays data dynamically and uses conditional rendering and state management to handle user interactions smoothly. This project highlights my ability to rapidly prototype and deliver a functional, visually appealing frontend application.</p>
        </div>
        <div className="project-info">
            <h4>DesignGrads</h4>
            <a className="project-links" href="https://www.designgrads.com.au/" target="_blank" rel="noopener noreferrer">designgrads.com</a>
            <p>An alumni portfolio website for students from the Canberra Institute of Technology. Made using Weblfow.</p>
            <p>I was commissioned to design and developed this website for students from the Department of Creative and Design Industries at CIT. This real-world project  leverages Webflow's CMS features to create dynamic, template-driven pages for each year group and each student profile. This ensurs consistent styling and easy updates across the site. The site serves as a central hub for alumni information, showcasing my ability to deliver client-focused solutions and maintain a high-quality, functional website.</p>
        </div>
        <div className="project-info">
            <h4>Duncan Bean Visualisation</h4>
            <a className="project-links" href="https://www.duncanbean.com/" target="_blank" rel="noopener noreferrer">duncanbean.com</a>
            <p>My personal portfolio website showcasing my 3D architectural rendering work. Made using Weblfow</p>
            <p>
            I created this portfolio website using Webflow to showcase my work in 3D architectural visualisation. The main focus of the site is the visual content, which is display in a dynamic grid format slideshow. This project demonstrates my ability to create visually compelling, user-friendly websites for the presentation of artistic work.
            </p>
        </div>
    </section>
);

export default Projects;