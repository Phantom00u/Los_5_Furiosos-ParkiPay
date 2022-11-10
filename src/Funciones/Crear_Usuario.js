 
import {$} from 'jquery';
export default function ajaxRegistroUsuario(){
    let nombre = document.getElementsByName("name_user")[0].value;
    let usuario = document.getElementsByName("username_user")[0].value;
    let correo = document.getElementsByName("email_user")[0].value;
    let telefono = document.getElementsByName("tel_user")[0].value;
    let credencial = document.getElementsByName("pssw_user")[0].value;
    if(validarDatos(nombre,usuario,correo,telefono,credencial)){
        var formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('usuario', usuario);
        formData.append('correo', correo);
        formData.append('telefono', telefono);
        formData.append('credencial', credencial);
        formData.append('submit', 1);
        $.ajax({
            url: "./",
            type: "POST",
            data: formData,
            success: function(msg){
                console.log(msg);
            },
            cache: false,
            contentType: false,
            processData: false,
            async: false
        });
    } 
 }

 function validarDatos(nombreP, usuarioP, correoP, telefonoP, credencialP){
    let errores = 0;
    let txt = "";
    if(nombreP ==""){
        txt = txt + "El nombre está vacío.\n";
        errores++;
    }else{
        let regexNombre = /^[a-zA-Z\sñÁÉÍÓÚáéíóúàèìòùÀÈÌÒÙ]*$/;
        if(!regexNombre.test(nombreP)){
            txt = txt + "El nombre solo puede contener letras.\n"
            errores++;
        }
        if(nombreP.length > 100){
            txt = txt + "El nombre no puede tener más de 100 caracteres.\n"
            errores++;
        }
    }

    let regexNombreYCredencial = /^[a-zA-ZñÑ0-9¿?¡!@#$%&]*$/;
    if(usuarioP ==""){
        txt = txt + "El usuario está vacío.\n";
        errores++;
    }else{  
        if(!regexNombreYCredencial.test(usuarioP)){
            txt = txt + "El usuario solo puede contener letras, numeros o los siguientes simbolos ¿?¡!@#$%&.\n"
            errores++;
        }
        if(usuarioP.length > 30){
            txt = txt + "El usuario no puede tener más de 30 caracteres.\n"
            errores++;
        }
    }

    if(credencialP ==""){
        txt = txt + "La contraseña está vacía.\n";
        errores++;
    }else{  
        if(!regexNombreYCredencial.test(credencialP)){
            txt = txt + "La contraseña solo puede contener letras, numeros o los siguientes simbolos ¿?¡!@#$%&.\n"
            errores++;
        }
        if(credencialP.length > 30){
            txt = txt + "La contraseña no puede tener más de 30 caracteres.\n"
            errores++;
        }
    }

    if(telefonoP ==""){
        txt = txt + "El campo de telefono está vacío.\n";
        errores++;
    }else{
        let regexTelefono = /^[0-9]*$/;
        if(!regexTelefono.test(telefonoP)){
            txt = txt + "El telefono solo puede contener numeros.\n"
            errores++;
        }
        if(telefonoP.length != 8){
            txt = txt + "El telefono debe tener 8 caracteres.\n"
            errores++;
        }
    }
    
    if(correoP ==""){
        txt = txt + "El correo está vacío.\n";
        errores++;
    }else{
        let regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(!regexCorreo.test(correoP)){
            txt = txt + "El correo ingreado es incorrecto.\n"
            errores++;
        }
    }

    if (errores == 0)
        return true;
    else{
        alert(txt)
        return false;
    }
 }