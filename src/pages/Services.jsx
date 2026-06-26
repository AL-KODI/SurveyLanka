import Navbar from "../components/Navbar";
import "./Projects.css";

const services = [
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

function Services() {
  return (
    <div>
      <Navbar />

      <div className="projects-container">
        <h1>Services</h1>

        <div className="projects-grid">
          {services.map((service) => (
            <div className="project-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="project-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;