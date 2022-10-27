
import "bootstrap/dist/css/bootstrap.min.css";
import '../lists/lista_reserva.css';
import { Lista_reserva } from "../lists/Lista_reserva";



export function Ver_Reservas() {

    return <>

        <div class="titulo">
            <h1> Tus reservas </h1>
        </div>

        <Lista_reserva></Lista_reserva>
        <Lista_reserva></Lista_reserva>

    </>

}

/*

Ver reservacion 
tiene estado(activo o cancelada), precio, hora de inicio, duración, establecimiento (nombre y direccion), estatus (pagado, por pagar, lugar (tipo te toca el lugar A45 para estacionarte)

*/