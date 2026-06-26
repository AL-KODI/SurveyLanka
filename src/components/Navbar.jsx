
import { Link } from "react-router-dom";
import '../index.css'
function navbar(){
  
    return (
        
        <nav className="navbar">
          <div className="logo">SurveyLanka</div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li >
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default navbar;
