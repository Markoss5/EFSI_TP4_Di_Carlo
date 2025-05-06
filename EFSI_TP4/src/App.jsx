import { useState } from "react";
import Formulario from "./components/Formulario/Formulario";
import Listado from "./components/Listado/Listado";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([

  ]);

  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <div className="contenido-principal">
        <Formulario setcitas={setCitas}/>
        <Listado citas={citas} />
      </div>
    </div>
  );
}

export default App;
