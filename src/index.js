import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
/*Importamos componentes*/
import { Header } from './components/pages/header/Header';
import { Footer } from './components/pages/footer/Footer';
import { Main } from './components/pages/main/Main';
import { Login_page } from './components/pages/login-page/Login_page';
import { Registro_page } from './components/pages/register-page/Registro_page';
import { Perfil_page } from './components/pages/perfil-usuario-page/Perfil_page';
import { Establecimiento } from './components/pages/establecimiento-page/Establecimiento-page';
import { Add_establecimiento } from './components/pages/agregar_establecimiento-page/Agregar_establecimiento-page';
import { Ver_Reservas } from './components/pages/ver_reservaciones-page/Ver_reservaciones-page';
/*Importamos la biblioteca react-router para el enrutamiento de la página*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

/*Obtenemos el id root del index.html de la carpeta public y renderizamos la interfaz*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    <Router>
        {/*user active es un boleano que si es falso nos
        mostrara el header como un usuario que no ha iniciado sesion, 
        y si es true nos lo mostrara como un usuario que ha inciado sesion*/}
        <Header user_active={false}></Header>
            <Switch>
                <Route path="/" exact>
                    <Main></Main>
                </Route>
                <Route path="/login">
                    <Login_page></Login_page>
                </Route>
                <Route path="/signin">
                    <Registro_page></Registro_page>
                </Route>
                <Route path="/perfil_de_usuario">
                     <Perfil_page></Perfil_page>   
                </Route>    
                <Route path="/establecimiento">
                    <Establecimiento></Establecimiento>
                </Route>
                <Route path="/agregar_establecimiento">
                    <Add_establecimiento></Add_establecimiento>
                </Route>
                <Route path="/ver_reservas">
                    <Ver_Reservas></Ver_Reservas>
                </Route>           
            </Switch>
        <Footer></Footer>
    </Router>
</>);

reportWebVitals();
