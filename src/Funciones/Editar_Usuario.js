import {$,jQuery} from 'jquery';
let idP = document.getElementsByName("id_user")[0].value;
let nombreP = document.getElementsByName("name_user")[0].value;
let usuarioP = document.getElementsByName("username_user")[0].value;
let correoP = document.getElementsByName("email_user")[0].value;
let telefonoP = document.getElementsByName("tel_user")[0].value;
let credencialP = document.getElementsByName("pssw_user")[0].value;
export default function ajaxEdicionUsuario(){
    if(validarDatos()){
        var body = {
            id: idP,
            nombre: nombreP,
            usuario: usuarioP,
            correo: correoP,
            telefono: telefonoP,
            credencial: credencialP
        }
        $.ajax({
            url: "./localhost/api/login",
            type: "PATCH",
            data: JSON.stringify(body),
            success: function(msg){
                console.log(msg);
                okay = msg;
            },
            cache: false,
            contentType: false,
            processData: false,
            async: false
        });
    } 
 }

 function validarDatos(){
    let errores = 0;
    let txt = "";
    if(nombreP ==""){
        nombreP = null;
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
        usuarioP = null;
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
        credencialP = null;
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
        telefonoP = null;
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
        correoP = null;
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