import {Usuarios} from "../usuarios";
function UserDetail(){
    const{selectedUser}=Usuarios();
    return(
        <div>
            <h1>Detalle del usuario</h1>
            <p><strong>ID</strong>{selectedUser.id}</p>
            <p><strong>Nombre</strong>{selectedUser.nombre}</p>
        </div>
    )
}
export default UserDetail;