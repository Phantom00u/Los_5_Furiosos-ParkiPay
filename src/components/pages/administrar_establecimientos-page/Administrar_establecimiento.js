import 'bootstrap/dist/css/bootstrap.min.css';
import { Lista_admin_establiecimientos } from '../lists/Lista_admin_establiecimientos';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../lists/lista_est.css';

export function Administrar_establecimiento() {
  const [gotInfo, setGotInfo] = useState(false);
  const [establecimientosArray, setEstablecimientosArray] = useState([]);

  useEffect(() => {
    async function getEstablecimientos() {
      if (!gotInfo) {

        const response = await fetch(`http://localhost:3001/api/establecimientos/`);
        const respJson = await response.json();
        setEstablecimientosArray(respJson)
        setGotInfo(true);
      }

    }

    getEstablecimientos();
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="box-establecimiento py-2">
          <h3>ADMINISTRAR ESTABLECIMIENTOS</h3>
          <Link to="/agregar_establecimiento" className="text-decorationt">
            <Boton>Agregar nuevo establecimiento</Boton>
          </Link>
          <hr></hr>
          {establecimientosArray.map((establecimeinto, index) =>
              <Lista_admin_establiecimientos
              key={index}
              id={establecimeinto._id}
              name={establecimeinto.name}
              address={establecimeinto.address}
              hourPrice={establecimeinto.hourPrice}
              ></Lista_admin_establiecimientos>
          )}

        </div>
      </div>
    </>
  );
}

const Boton = styled.div`
  background-color: rgb(201, 36, 36);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border-color: transparent;
  color: rgb(236, 242, 247);
  font-family: Herculanum, 'Eras Light ITC', sans-serif;
  margin: 10px;

  &:hover {
    background-color: rgb(168, 30, 30);
  }
`;
