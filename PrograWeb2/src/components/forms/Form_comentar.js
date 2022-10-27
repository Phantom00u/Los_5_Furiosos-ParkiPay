import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

export function Form_comentar(){

    return <>
        
        <Form_comnt>
            <textarea placeholder="Escribe un comentario..." rows="2"></textarea>
            <Boton>Enviar comentario</Boton>
        </Form_comnt>
        
    </>
}

const Form_comnt = styled.div`

    padding-top: 10px;
    padding-bottom: 10px;

    textarea{
        background: none;
        border-radius: 0px;
        width: 100%;
    }
`;
const Boton = styled.div`

    float: right;
    width: fit-content;
    background-color: none;
    margin-top: 0px;
    border-color: transparent;
    color: gray;

    &:hover{
        color: black;
    }
`;