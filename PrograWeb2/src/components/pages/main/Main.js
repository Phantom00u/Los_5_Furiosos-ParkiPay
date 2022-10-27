import './main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Lista_establecimientos} from '../lists/Lista_establecimientos'


export function Main(){

    return <>
        <div className="box-img">
            <div className="box-hijo" >
            <p id="title" className="p-style">PARKIPAY</p>
            <p className="text p-style">Busca un lugar para estacionarte, reserva y paga más fácil y rápido. </p>
            <p className="text p-style">¡Mira las opiniones de otros usuarios!ff</p>
            </div>
        </div>
        <div className="text-center">
            <div className="box-establecimiento py-2">
                <h3>NUESTROS ESTABLECIMIENTOS</h3>
                <hr></hr>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>
                <Lista_establecimientos></Lista_establecimientos>

            </div>
        </div>
    </>
}