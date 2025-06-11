import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Administrador de Pacientes</h1>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/formulario">Crear Cita</Link>
          <Link to="/listado">Listado</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
