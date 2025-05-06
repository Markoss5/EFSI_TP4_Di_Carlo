import "./Listado.css";
import Cita from "../Cita/Cita";

function Listado({ citas }) {
  return (
    <div className="listado">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  );
}

export default Listado;
