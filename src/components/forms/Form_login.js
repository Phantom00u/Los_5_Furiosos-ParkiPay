import '../pages/login-page/login_page.css';
import "bootstrap/dist/css/bootstrap.min.css";

export function Form_login(){
    
    return <>
            <label>Correo electrónico</label><br></br>
            <input type="email" placeholder="exaple@gmail.com" required></input><br></br>
            <label>Contraseña</label><br></br>
            <input type="password" placeholder="Contraseña" required></input><br></br><br></br>
            <button className="box-boton">Aceptar</button><br></br>
    </>
}