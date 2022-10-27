
import '../pages/agregar_establecimiento-page/agregar_establecimiento.css';
import "bootstrap/dist/css/bootstrap.min.css";

export function Form_Add_establecimiento() {

    return <>

        <form>

            <label>Nombre del establecimiento </label><br></br>
            <input type="text" placeholder="Establecimiento los cuates"></input><br></br>
            <label>Direccion </label><br></br>
            <input type="text" placeholder=" Agustin de iturbide #1500 A "></input><br></br>
            <label>Numero de cajones</label><br></br>
            <input type="text" placeholder="200"></input><br></br>
            <label>Subir logo de establecimiento</label><br></br>
            <input type="file"></input><br></br>
            <label >Selecciona una hora de apertura y cierre:</label><br></br>
            <input type="time" name="appt"></input>
            <input type="time" name="appt"></input><br></br>

            <div class="btnCenter">
                <input type="submit" value="Crear establecimiento"></input>
            </div>

        </form>

    </>
}
