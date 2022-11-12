import {$,jQuery} from 'jquery';

export default function ajaxBajaUsuario(){
    let idP = document.getElementsByName("id_user")[0].value;
    var body = {
        id: idP,
    }
    $.ajax({
        url: "./",
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