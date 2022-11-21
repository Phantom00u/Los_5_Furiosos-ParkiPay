import '../pages/register-page/registro_page.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ajaxRegistroUsuario from '../../Funciones/Crear_Usuario';
import axios from "axios"
import { useState } from 'react'

export function Form_register(){
    const [username,setNombre] = useState("")
    const [name,setUsuario] = useState("")
    const [email,setCorreo] = useState("")
    const [telephone,setTelefono] = useState("")
    const [password,setCredencial] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post("http://localhost:3001/api/signin", {
            name,
            username,
            email,
            telephone,
            password
        });
        console.log(res);
    }
    
    return <>
            <form onSubmit={handleSubmit}>
            <label>Nombre</label><br></br>
            <input type="text" name="name_user" placeholder="Escibre tu nombre completo" required
            onChange ={e=>setNombre(e.target.value)}></input><br></br>

            <label>Nombre de usuario</label><br></br>
            <input type="text" name="username_user" placeholder="user123" required
            onChange ={e=>setUsuario(e.target.value)}></input><br></br>

            <label>Correo</label><br></br>
            <input type="email" name="email_user" placeholder="exaple@gmail.com" required
            onChange ={e=>setCorreo(e.target.value)}></input><br></br>

            <label>Télefono celular</label><br></br>
            <input type="tel" name="tel_user" placeholder="81..." required
            onChange ={e=>setTelefono(e.target.value)}></input><br></br>

            <label>Contraseña</label><br></br>
            <input type="password" name="pssw_user" placeholder="Contraseña" required
            onChange ={e=>setCredencial(e.target.value)}></input><br></br><br></br>

            <button className="box-boton">Aceptar</button><br></br>
            </form>
    </>
}