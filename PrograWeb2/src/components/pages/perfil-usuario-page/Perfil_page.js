import React, { useState } from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import './perfil_page.css';
import Modal from './Modal';
import { Form_editarperfil } from '../../forms/Form_editarperfil';

export function Perfil_page(){

    const [estadoModal1, cambiarestadoModal1] = useState(false);

    return <>
    
        <div className="box-section-perfil">
            <div className="box-opciones">
                    <div className="box-opciones-hijo">
                        <p id="title-opciones">OPCIONES</p>
                        <p>Mi cuenta</p>
                        <p>Ver reservaciones</p>
                        <p>Cerrar sesión</p>
                    </div>
            </div>
            <div className="box-informacion-perfil">
                <div className="box-informacion-perfil-hijo">
                    <p id="title-miperfil">MI CUENTA</p>
                        <div className="box-columns">
                            <div className="box-perfil-multimedia text-center">
                                <img className="img-foto" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp" height="170" width="170"></img>
                                <p className="p-username">Todosenuno10</p>
                                <Modal 
                                    estado={estadoModal1}
                                    cambiarestado={cambiarestadoModal1}>
                                    <Form_editarperfil></Form_editarperfil>
                                </Modal>
                                <Boton onClick={() => cambiarestadoModal1(!estadoModal1)}>Editar perfil</Boton>
                            </div>
                            <div className="box-perfil-textos">
                                <p className="p-bold">Nombre</p>
                                    <p className="p-normal">Lauro Lucío Carlos Lara Delgadillo</p>
                                <p className="p-bold">Nombre de usuario</p>
                                    <p className="p-normal">Todosenuno19</p>
                                <p className="p-bold">Correo</p>
                                    <p className="p-normal">example@uanl.das</p>
                                <p className="p-bold">Teléfono</p>
                                    <p className="p-normal">29381294</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
}

const Boton = styled.div`

    width: 100%;
    background-color: rgb(201, 36, 36);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(236, 242, 247);
    font-family: Herculanum, "Eras Light ITC", sans-serif;

    &:hover{
        background-color: rgb(168, 30, 30);
    }
`;