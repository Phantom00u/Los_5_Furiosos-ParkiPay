import styled from 'styled-components';

export function Form_reservar() {

  /*const  submitHandler = async(e) =>{

  }*/

  return (
    <>
      <Reservacion>
        <p className="p-aviso">Haz tu reservación fácil y rápido.</p>
        <div className="box-flex">
          <p>Selecciona tu lugar</p>
          <select>
            <option>A1</option>
            <option>A2</option>
            <option>B2</option>
          </select>
        </div>
        <div className="box-flex">
          <p>Hora de inicio</p>
          <input type="time"></input>
        </div>
        <div className="box-flex">
          <p>Tarifa</p>
          <p>130$</p>
        </div>
        <Boton>Reservar</Boton>
      </Reservacion>
    </>
  );
}

const Reservacion = styled.div`
  .box-flex {
    display: flex;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .p-aviso {
    margin: 0px;
    padding: 5px;
    font-weight: bold;
  }

  p {
    padding: 5px;
    margin-left: 0px;
  }
`;
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
  font-family: Herculanum, 'Eras Light ITC', sans-serif;

  &:hover {
    background-color: rgb(168, 30, 30);
  }
`;
