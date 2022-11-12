import {$,jQuery} from 'jquery';

export default function ajaxLogin(){
    let correoP = document.getElementsByName("correo")[0].value;
    let credencialP = document.getElementsByName("contraseña")[0].value;
    var body = {
        correo: correoP,
        credencial: credencialP
    }
    if(validarDatos(correoP,credencialP)){
    $.ajax({
        url: "./localhost/api/login",
        type: "POST",
        data: JSON.stringify(body),
        success: function (msg) {
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

 function validarDatos(correoP, credencialP){
    let errores = 0;
    let txt = "";
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