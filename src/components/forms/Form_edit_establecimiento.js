
import '../pages/agregar_establecimiento-page/agregar_establecimiento.css';
import "bootstrap/dist/css/bootstrap.min.css";

export function Form_edit_establecimiento() {

    return <>

        <form>

            <label>Nombre del establecimiento </label><br></br>
            <input type="text" placeholder="Establecimiento los cuates" defaultValue="Starbucks"></input><br></br>
            <label>Direccion </label><br></br>
            <input type="text" placeholder="Agustin de iturbide #1500 A" defaultValue="Agustin de iturbide #1500 A"></input><br></br>
            <label>Numero de cajones</label><br></br>
            <input type="text" placeholder="200" defaultValue="200"></input><br></br>
            <label>Subir logo de establecimiento</label><br></br>
            <input type="file"></input><br></br>
            <label >Selecciona una hora de apertura y cierre:</label><br></br>
            <input type="time" name="appt" defaultValue="10:00"></input>
            <input type="time" name="appt" defaultValue="19:00"></input><br></br>

            <div class="btnCenter">
                <input type="submit" value="Aceptar"></input>
            </div>

        </form>

    </>
}
