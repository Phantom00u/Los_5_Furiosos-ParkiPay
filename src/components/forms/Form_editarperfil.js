import '../pages/register-page/registro_page.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ajaxEdicionUsuario from '../../Funciones/Crear_Usuario';

export function Form_editarperfil(){
        return <>
        <div className="text-center">
            <label>Nombre</label><br></br>
            <input type="text" name="name_user" defaultValue="Nombre ejemplo" placeholder="Escibre tu nombre completo" required></input><br></br>
            <label>Nombre de usuario</label><br></br>
            <input type="text" name="username_user" defaultValue="ejemplo_us12" placeholder="user123" required></input><br></br>
            <label>Correo</label><br></br>
            <input type="email" name="email_user" defaultValue="example@asd.as" placeholder="exaple@gmail.com" required></input><br></br>
            <label>Télefono celular</label><br></br>
            <input type="tel" name="tel_user" defaultValue="812738212" placeholder="81..." required></input><br></br>
            <label>Contraseña</label><br></br>
            <input type="password" name="pssw_user" defaultValue="1234" placeholder="Contraseña" required></input><br></br><br></br>
            <button  onClick={ajaxEdicionUsuario} className="box-boton">Aceptar</button><br></br>
        </div>
    </>
}