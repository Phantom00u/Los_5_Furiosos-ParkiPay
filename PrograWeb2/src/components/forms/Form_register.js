import '../pages/register-page/registro_page.css';
import "bootstrap/dist/css/bootstrap.min.css";

export function Form_register(cambiarestado){
    
    
    return <>
            <label>Nombre</label><br></br>
            <input type="text" name="name_user" placeholder="Escibre tu nombre completo" required></input><br></br>
            <label>Nombre de usuario</label><br></br>
            <input type="text" name="username_user" placeholder="user123" required></input><br></br>
            <label>Correo</label><br></br>
            <input type="email" name="email_user" placeholder="exaple@gmail.com" required></input><br></br>
            <label>Télefono celular</label><br></br>
            <input type="tel" name="tel_user" placeholder="81..." required></input><br></br>
            <label>Contraseña</label><br></br>
            <input type="password" name="pssw_user" placeholder="Contraseña" required></input><br></br><br></br>
            <button className="box-boton">Aceptar</button><br></br>
    </>
}