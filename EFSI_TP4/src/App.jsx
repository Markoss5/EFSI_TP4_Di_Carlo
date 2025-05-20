import { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario";
import Listado from "./components/Listado/Listado";
import "./App.css";

const obtenerCitasLS = () => {
  const citasGuardadas = localStorage.getItem("citas");
  return citasGuardadas ? JSON.parse(citasGuardadas) : [];
};

function App() {
  const [citas, setCitas] = useState(obtenerCitasLS);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  return (
    <div className="container">
            <h1>Administrador de pacientes</h1>     {" "}
      <div className="contenido-principal">
                <Formulario setCitas={setCitas} />
                <Listado citas={citas} />     {" "}
      </div>
         {" "}
    </div>
  );
}

export default App;
