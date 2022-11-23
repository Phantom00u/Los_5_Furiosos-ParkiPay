import getCookie from '../Funciones/GetCookie';

export default async function ajaxBajaUsuario(){
    var body = {
        id: getCookie("id")
    }
    const response = await fetch(`http://localhost:3001/api/Usuario`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        }
    );
    
    const respJson = await response.json();
    console.log(JSON.stringify(respJson));
    if (respJson.success) {
        var a = new Date();
        a = new Date(a.getTime() - 60);
        document.cookie = "nombre=a; expires=" +a.toGMTString()+";";
        document.cookie = "correo=a; expires=" +a.toGMTString()+";";
        document.cookie = "usuario=a; expires=" +a.toGMTString()+";";
        document.cookie = "telefono=a; expires=" +a.toGMTString()+";";
        document.cookie = "id=a; expires=" +a.toGMTString()+";";
        document.cookie = "dueño=a; expires=" +a.toGMTString()+";";
        alert("Usuario editado correctamente");
        window.location.href = "/";
        return;
    }else{
        alert(JSON.stringify.respJson)
        alert("Usuario no editado");
    }
 }