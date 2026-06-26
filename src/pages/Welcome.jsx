import "./Welcome.css";
import Navbar from "../components/Navbar"
import {  useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="hero">
        <Navbar />
      
        <div className="hero-content">
          <h1> Survey Lanka Construction Technological Services</h1>

          <p>
            Geospatial Surveying Engineering & Construction Services.
          </p>

          <div className="buttons">
            <button className="btn-primary" onClick={() => navigate("/")}>Learn More</button>
           
          </div>
        </div>
        
      </header>

      <section className="features">
        <div className="card">
          <div className="icon">📐</div>
          <h3>Civil Engineering</h3>
          <p>Civil Engineering Consultancy Services</p>
        </div>

        <div className="card">
          <div className="icon">🏗️</div>
          <h3>Constuction</h3>
          <p>Construction Survey</p>
        </div>

        <div className="card">
          <div className="icon">🗺️</div>
          <h3>Modeling</h3>
          <p>Raster-based spatial modeling and analysis</p>
        </div>
      </section>
    </div>
  );
}

export default Welcome;