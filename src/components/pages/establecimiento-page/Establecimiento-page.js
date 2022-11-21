import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { Form_comentar } from '../../forms/Form_comentar';
import { Lista_comentarios } from '../lists/Lista_comentarios';
import { Form_reservar } from '../../forms/Form_reservar';
import Modal from './Modal';

export function Establecimiento(){

    const [estadoModal1, cambiarestadoModal1] = useState(false);





    return <>
        <Box_padre>
            <Box_hijo>
            <div className="Encabezado  text-start"><h3>Establecimiento</h3> </div>
                    <Info_establecimiento>
                        <Info_establecimiento_left>
                            <img src="https://library.kissclipart.com/20181002/yqw/kissclipart-starbucks-logo-black-and-white-vector-clipart-coff-354a187b5c752f61.png"></img>
                        </Info_establecimiento_left>
                        <Info_establecimiento_right>
                            <div className="box-p">
                                <p className="p-name">Nombre: </p><p>Starbucks</p>
                            </div>
                            <div className="box-p">
                                <p className="p-name">Direccion: </p><p>Av. Universidad #234, San Nicolas, NL </p>
                            </div>
                            <div className="box-p">
                                <p className="p-name">Horario: </p><p>10:00Am - 9:00PM</p>
                            </div>
                            <div className="box-p">
                                <p className="p-name">Numero de lugares disponibles: </p><p>10</p>
                            </div>
                            <Modal
                                estado={estadoModal1}
                                cambiarestado={cambiarestadoModal1}>
                                <Form_reservar></Form_reservar>
                            </Modal>
                            <Boton onClick={() => cambiarestadoModal1(!estadoModal1)}>Reservar un lugar</Boton>
                        </Info_establecimiento_right>
                    </Info_establecimiento>
            <div className="Encabezado  text-start"><h4>Comentarios</h4> </div>
                    <Comentar>
                        <div className="info_coment">
                            <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp"></img>
                            <p>usuario</p>
                        </div>
                        <Form_comentar></Form_comentar>
                    </Comentar>
                    <Lista_comentarios></Lista_comentarios>
                    <Lista_comentarios></Lista_comentarios>
                    <Lista_comentarios></Lista_comentarios>
            </Box_hijo>

        </Box_padre>
    </>
}

const Box_padre = styled.div`

    height: auto;
    width: 100vh;

`;
const Box_hijo = styled.div`

    height: auto;
    width: 70vw;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 5vh;
    margin-bottom:5vh;
    background-color: rgb(243, 243, 243);

    .Encabezado{
        background-color: rgb(228, 228, 228);
        width: 100%;
        border-bottom: solid;
        border-width: 10px;
        border-color:  rgb(243, 243, 243);;
    }
    h3{
        color: black;
        padding: 10px;
        margin: 0px;
    }
    h4{
        color: black;
        padding: 10px;
    }

`;

const Info_establecimiento = styled.div`

    height: auto;
    width: 100%;
    background-color: rgb(228, 228, 228);
    padding: 20px;
    display: flex;
    border-bottom: solid;
    border-width: 10px;
    border-color:  rgb(243, 243, 243);

`;

const Info_establecimiento_left = styled.div`

    height: auto;
    width: 20%;
    padding: 5px;
    img{
        width: 150px;
        height: 150px;
    }

`;
const Info_establecimiento_right = styled.div`

    height: auto;
    width: 100%;
    padding: 5px;

    .box-p{
        display: flex;
    }
    .p-name{
        font-weight: bold;
    }

    p{
        color: black;
        padding-left: 5px;
        margin: 0px;
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
    font-family: Herculanum, "Eras Light ITC", sans-serif;

    &:hover{
        background-color: rgb(168, 30, 30);
    }
`;

const Comentar = styled.div`

        height: auto;
        width: 100%;
        background-color: rgb(228, 228, 228);
        padding: 20px;
        border-bottom: solid;
        border-width: 10px;
        border-color:  rgb(243, 243, 243);;

        .info_coment{
            display: flex;
        }

        img{
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
        p{
            color: black;
            font-weight: bold;
            padding-top: 15px;
            padding-left: 10px;
        }
`;


