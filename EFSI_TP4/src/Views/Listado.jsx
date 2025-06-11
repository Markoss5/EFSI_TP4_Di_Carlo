function Listado({ citas, eliminarCita }) {
    return (
      <div className="container">
        <h2>Administra tus citas</h2>
        {citas.length === 0 ? (
          <p className="alerta-error">No hay citas</p>
        ) : (
          citas.map((cita) => (
            <div key={cita.id} className="cita">
              <p>Mascota: <span>{cita.mascota}</span></p>
              <p>Dueño: <span>{cita.dueño}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Síntomas: <span>{cita.sintomas}</span></p>
              <button className="button eliminar" onClick={() => eliminarCita(cita.id)}>Eliminar ×</button>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default Listado;
  