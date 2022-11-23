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