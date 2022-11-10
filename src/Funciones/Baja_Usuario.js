import {$,jQuery} from 'jquery';

export default function ajaxBajaUsuario(){
    let id = document.getElementsByName("id_user")[0].value;
    var formData = new FormData();
    formData.append('id', id);
    formData.append('submit', 3);
    $.ajax({
        url: "./",
        type: "POST",
        data: formData,
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