
import './lista_est.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Link
} from "react-router-dom";
import { useState } from 'react';

export function Lista_establecimientos(props) {


  const id = useState(props.id);
  const name = useState(props.name);
  const address = useState(props.address);
  const hourPrice = useState(props.hourPrice);



  return <>
    <div className="row box-establecimiento-hijo">
      <div className="col-3 py-2 borders">
        <img src="https://cdn.pixabay.com/photo/2019/09/06/03/39/parking-4455360_960_720.jpg" height="150" width="150"></img>
      </div>
      <div className="col-9 py-2">
        <p className="box-establecimiento-details">Detalles</p>
        <p>{name}</p>
        <p>{address}</p>
        <p>Precio por hora: ${hourPrice}</p>
        <Link to={'/establecimiento/' + id[0]}>
          <button className="box-boton">Ver</button>
        </Link>
      </div>
    </div>
    <br></br>
  </>
}
