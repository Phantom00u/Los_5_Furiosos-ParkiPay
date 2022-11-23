
import "bootstrap/dist/css/bootstrap.min.css";
import '../lists/lista_reserva.css';
//import { Lista_reserva } from "../lists/Lista_reserva";
import '../lists/lista_reserva.css';
import getReservacion from '../../Funciones/Ver_Reservacion';
import deleteReservacion from '../../Funciones/Ver_Reservacion';
var reservacion = getReservacion()

export function Ver_Reservas() {

    return <>
        <div class="titulo">
            <h1> Tus reservas </h1>
        </div>
            <div class="box-card">

            <h5> Establecimiento</h5>
            <div class="row">
                <div className="col-3 py-2 borders">
                <img src="https://library.kissclipart.com/20181002/yqw/kissclipart-starbucks-logo-black-and-white-vector-clipart-coff-354a187b5c752f61.png" class="img-fluid" alt="Responsive image"></img>
                </div>

                <div className="col-5 py-2">
                    <h6>{reservacion.dataEstacionamiento.name}</h6>
                    <h6>{reservacion.dataEstacionamiento.adress}</h6>
                </div>
            </div>

            <Boton onclick={deleteReservacion(reservacion.dataReservacion.id)}>Cancelar reservación</Boton>

            <div class="row">
                <div class="col">
                    <h5> Hora de inicio</h5>
                    <p>{reservacion.dataReservacion.arrivingTime}</p>
                </div>
                <div class="col">
                    <h5> Precio</h5>
                    <p>{reservacion.dataReservacion.cost}</p>
                </div>
            </div>

        </div>
    </>

}

/*

Ver reservacion 
tiene estado(activo o cancelada), precio, hora de inicio, duración, establecimiento (nombre y direccion), estatus (pagado, por pagar, lugar (tipo te toca el lugar A45 para estacionarte)

*/