import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>Crear cita</h2>
      <form>
        <input placeholder="Nombre de Mascota" />
        <input placeholder="Nombre del Dueño" />
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Síntomas" />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
