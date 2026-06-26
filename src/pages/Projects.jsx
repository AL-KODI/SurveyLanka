import Navbar from "../components/Navbar";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Saliya Gems Website",
    description:
      "A responsive React website for a gemstone business with collections, contact form, and modern UI.",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "SurveyLanka",
    description:
      "An online survey platform that allows users to create, share, and analyze surveys efficiently.",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A full-stack application to manage employees, departments, attendance, and reports.",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    title: "IoT Smart Home",
    description:
      "ESP32-based smart home system with web dashboard for monitoring and controlling devices.",
    image: "https://picsum.photos/400/250?random=4",
  },
];

function Projects() {
  return (
    <div>
      <Navbar />

      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;