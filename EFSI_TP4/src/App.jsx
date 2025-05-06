import { useState } from "react";
import Formulario from "./components/Formulario/Formulario";
import Listado from "./components/Listado/Listado";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Firulais",
      dueño: "Juan Pérez",
      fecha: "2025-04-29",
      hora: "10:30",
      sintomas: "No come hace dos días",
    },
  ]);

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <div className="contenido-principal">
        <Formulario />
        <Listado citas={citas} />
      </div>
    </div>
  );
}

export default App;
