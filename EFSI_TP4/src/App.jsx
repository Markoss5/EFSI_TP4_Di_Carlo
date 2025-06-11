import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Formulario from "./views/Formulario";
import Listado from "./views/Listado";
import "./index.css";

function App() {
  const [citas, setCitas] = useState([]);

  // Cargar desde localStorage
  useEffect(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario agregarCita={agregarCita} />} />
        <Route path="/listado" element={<Listado citas={citas} eliminarCita={eliminarCita} />} />
      </Routes>
    </Router>
  );
}

export default App;
