import { useEffect, useState } from 'react';
import axios from 'axios';

function Reservas() {
  const [reservas, setReservas] = useState([]);
  
  const listarReservas = async () => {
    try {
      const respuesta = await axios.get("http://localhost:5445/api/");
      setReservas(respuesta.data);
    } catch (e) {
      console.log("Error al obtener reservas:", e);
    }
  }

  useEffect(() => {
    listarReservas();
  }, []);

  return (
    <div>
      <h1>Listado de Reservas</h1>
      <table className="table">
        <thead>
          <tr>

            <th>fecha</th>
            <th>Lugar</th>
            <th>Nombre</th>
            <th>Usuario ID</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.fechaReserva}</td>
              <td>{reserva.lugar}</td>
              <td>{reserva.nombreReserva}</td>
              <td>{reserva.usuario_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservas;