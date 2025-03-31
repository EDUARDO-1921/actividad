import { useEffect, useState } from 'react'
import axios  from 'axios';
import Reserva from './reserva'
function Usuarios() {
  const[users, setUsers]=useState([]);
  const listUser= async()=>{
try{
 const respuesta=await axios.get("http://localhost:5445/apiusuario/");
 setUsers(respuesta.data);
}
catch (e){
console.log("error presentado")
}
  }
  useEffect(()=>{
    listUser();
  },[])
  return(
    <div>
      <h1>Usuario</h1>
      <table>
        <thead>
            <th>ID</th>
            <th>Nombre</th>
        </thead>
        <tbody>
                {users.map((index)=>(
                    <tr>
                    <td>{index.id}</td>
                    <td>{index.nombre}</td>
                    </tr>
                ))}
            
        </tbody>
      </table>

                
      <Reserva></Reserva>
    </div>
  )

}

export default Usuarios