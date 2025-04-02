import { useEffect, useState } from 'react'
import axios  from 'axios';
import Reserva from './reserva'
import{useNavigate} from "react-router-dom";
import{createContext, useContext}from 'react'
// ccrear context
const useContext=createContext();
function Usuarios() {
  const[users, setUsers]=useState([]);
  const[selectedUser,setselectUser]=useState(null);
  const Navigate =useNavigate();
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
    <useContext value={selectedUser}>
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
    </useContext>
  )

}

export default Usuarios