import "bootstrap/dist/css/bootstrap.min.css";
import "../register-page/registro_page.css";
import { Form_register } from '../../forms/Form_register';

export function Registro_page(){

    return <>
         <div className="box-section">
            <div className="box-right text-center py-3">
                <h3 className="py-2 h3-style-r">Registro de Usuarios</h3>
                <div className="box-form text-center">
                    <Form_register></Form_register>
                </div>
            </div>
            <div className="box-left text-center">
                <div className="center-box-img">
                </div>
            </div>
        </div>
    </>
}