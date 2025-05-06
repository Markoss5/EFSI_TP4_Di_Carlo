import "./Formulario.css";
import { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  })

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
      <form>
        <input
            name="mascota"
            value={form.mascota}
            onChange={handleChange}
            placeholder="nombredeMascota"
        />
        <input placeholder="Nombre del Dueño" 
            name="dueño"
            value={form.dueño}
            onChange={handleChange}
        />
        <input type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
        />
        <input type="time" 
            name="hora"
            value={form.hora}
            onChange={handleChange}
        />
        <textarea placeholder="Síntomas"
            name="sintomas"        
            value={form.sintomas}
            onChange={handleChange}
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
