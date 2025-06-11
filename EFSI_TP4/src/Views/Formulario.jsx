import { useState } from "react";

function Formulario({ agregarCita }) {
  const [form, setForm] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),
      ...form,
    };

    agregarCita(nuevaCita);
    setForm({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div className="container">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" value={form.mascota} onChange={handleChange} required />

        <label>Nombre Dueño</label>
        <input type="text" name="dueño" value={form.dueño} onChange={handleChange} required />

        <label>Fecha</label>
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />

        <label>Hora</label>
        <input type="time" name="hora" value={form.hora} onChange={handleChange} required />

        <label>Síntomas</label>
        <textarea name="sintomas" value={form.sintomas} onChange={handleChange} required />

        <button type="submit" className="button-primary">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
