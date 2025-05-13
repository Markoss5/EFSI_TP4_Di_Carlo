import "./Formulario.css";
import { useState } from "react";

function Formulario({ setCitas }) {
  const [form, setForm] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  
  const agregarCita = (e) => {
    e.preventDefault(); 

    
    const nuevaCita = {
      id: Date.now(), 
      ...form, 
    };

    
    setCitas((prevCitas) => [...prevCitas, nuevaCita]);

   
    setForm({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="formulario">
      <h2>Crear cita</h2>
      <form onSubmit={agregarCita}> 
        <input
          name="mascota"
          value={form.mascota}
          onChange={handleChange}
          placeholder="Nombre de la mascota"
        required/>
        <input
          placeholder="Nombre del dueño"
          name="dueño"
          value={form.dueño}
          onChange={handleChange}
        required/>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        required/>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
        required/>
        <textarea
          placeholder="Síntomas"
          name="sintomas"
          value={form.sintomas}
          onChange={handleChange}
        required/>
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
