import "./Cita.css";

function Cita({ cita }) {
  const { mascota, dueño, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {mascota}</p>
      <p><strong>Dueño:</strong> {dueño}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
    </div>
  );
}

export default Cita;
