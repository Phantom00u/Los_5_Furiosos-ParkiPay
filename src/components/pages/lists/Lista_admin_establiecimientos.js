import './lista_est.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Lista_admin_establiecimientos(props) {

  const id = useState(props.id);
  const name = useState(props.name);
  const address = useState(props.address);
  const hourPrice = useState(props.hourPrice);

  async function deleteHandler (e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/establecimientos/${id[0]}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const respJson = await response.json();
    console.log(respJson);
    location.reload();
  }





  return (
    <>
      <div className="row box-establecimiento-hijo">
        <div className="col-3 py-2 borders">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/06/03/39/parking-4455360_960_720.jpg"
            height="200"
            width="200"
          ></img>
        </div>
        <div className="col-9 py-2">
          <p className="box-establecimiento-details">Detalles</p>
          <p>{name}</p>
          <p>{address}</p>
          <p>Costo por hora ${hourPrice}</p>
          <div className="flexing">
            <Link to={'/establecimiento/' + id[0]}>
              <button className="box-boton">Ver</button>
            </Link>
            <Link to={'/editar_establecimiento/' + id[0]}>
              <button className="box-boton">Editar</button>
            </Link>
            <button className="box-boton" onClick={deleteHandler}>Borrar</button>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
