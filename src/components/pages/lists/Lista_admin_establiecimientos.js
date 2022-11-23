import './lista_est.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Link
  } from "react-router-dom";

export function Lista_admin_establiecimientos(){

    return <>
        <div className="row box-establecimiento-hijo">
                    <div className="col-3 py-2 borders">
                        <img src="https://library.kissclipart.com/20181002/yqw/kissclipart-starbucks-logo-black-and-white-vector-clipart-coff-354a187b5c752f61.png" height="200" width="200"></img>
                    </div>
                    <div className="col-9 py-2">
                        <p className="box-establecimiento-details">Detalles</p>
                        <p>Starbucks</p>
                        <p>Direccion Av.Universidad bla bla #123</p>
                        <p>Horario 10:00AM - 9:00PM</p>
                        <div className="flexing">
                            <Link to="/establecimiento">
                                <button className="box-boton">Ver</button>
                            </Link>
                            <Link to="/editar_establecimiento">
                                <button className="box-boton">Editar</button>
                            </Link>
                            
                                <button className="box-boton">Borrar</button>
                            
                        </div>
                    </div>
        </div>
        <br></br>
    </>
}

