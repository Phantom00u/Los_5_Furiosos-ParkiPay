import './lista_reserva.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";*/

export function Lista_reserva() {

    const reserva = {

        establecimiento_nombre: " Estacionamiento el capitan",
        establecimiento_direccion: " av los piratas #10",
        estado: "activo",
        hora_inicio: "10:15",
        duracion: "a",
        precio: "$190"
    }

    return <>

        <div class="box-card">

            <h5> Establecimiento</h5>

            <div class="row">
                <div className="col-3 py-2 borders">
                <img src="https://library.kissclipart.com/20181002/yqw/kissclipart-starbucks-logo-black-and-white-vector-clipart-coff-354a187b5c752f61.png" class="img-fluid" alt="Responsive image"></img>
                </div>

                <div className="col-5 py-2">
                    <h6>{reserva.establecimiento_nombre}</h6>
                    <h6>{reserva.establecimiento_direccion}</h6>
                </div>
            </div>

            <Boton>Cancelar reservación</Boton>

            <div class="row">
                <div class="col">
                    <h5> Estado</h5>
                    <p>{reserva.estado}</p>
                </div>
                <div class="col">

                    <h5> Hora de inicio</h5>
                    <p>{reserva.hora_inicio}</p>
                </div>
                <div class="col">
                    <h5> Duracion</h5>
                    <p>{reserva.duracion}</p>
                </div>
                <div class="col">
                    <h5> Precio</h5>
                    <p>{reserva.precio}</p>
                </div>

            </div>

        </div>

    </>

}

const Boton = styled.div`

    float: right;
    width: fit-content;
    background-color: rgb(201, 36, 36);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-top: 15px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(236, 242, 247);
    font-family: Herculanum, "Eras Light ITC", sans-serif;

    &:hover{
        background-color: rgb(168, 30, 30);
    }
`;