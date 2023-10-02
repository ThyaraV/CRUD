import './App.css';
import {useState}from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * The function App returns a div element with input fields for name, last name, age, and occupation.
 * @returns The App component is returning a JSX element.
  <br/> salto de página
  
*/
function App() {
  
/**
 * Gestiono las variables que voy ingresando en los campos, necesito importar react  
  event: Tiene la información o los datos que se agregaron en el campo
  target: de aquí
  value: valor
  listaUsuarios: lista vacía
  setUsuarios(response.data);: Traemos los datos de la API
*/
  const [nombre,setNombre]=useState("");
  const [apellido,setApellido]=useState("");
  const [edad,setEdad]=useState(0);
  const [ocupacion,setOcupacion]=useState("");

  const[listaUsuarios,setUsuarios]=useState([]);

  const agregar=()=>{
    Axios.post("http://localhost:3001/create",
    {
      nombre:nombre,
      apellido:apellido,
      edad:edad,
      ocupacion:ocupacion
    }).then(()=>{
      obtenerUsuarios();
      alert("Usuario Registrado");
    });

  }

  const obtenerUsuarios=()=>{
    Axios.get("http://localhost:3001/usuarios").then((response)=>{
      setUsuarios(response.data);
    });

  }

  obtenerUsuarios();
 
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          GESTIÓN DE USUARIOS
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre:</span>
            <input type="text" 
              onChange={(event)=>{setNombre(event.target.value);}}
            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellido:</span>
            <input type="text" 
             onChange={(event)=>{setApellido(event.target.value);}}
            className="form-control" placeholder="Ingrese un apellido" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Edad:</span>
            <input type="number" 
             onChange={(event)=>{setEdad(event.target.value);}}
            className="form-control" placeholder="Ingrese una edad" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>   

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Ocupacion:</span>
            <input type="text" 
             onChange={(event)=>{setOcupacion(event.target.value);}}
            className="form-control" placeholder="Ingrese una ocupacion" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>   

        </div>
        <div className="card-footer text-muted">
          <button className= 'btn btn-success'onClick={agregar}>Registrar</button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Edad</th>
              <th scope="col">Ocupación</th>
            </tr>
        </thead>
        <tbody>
        {
          listaUsuarios.map((val,Key)=>{
            return <tr Key={val.id}>
                      <th scope="row">{val.id}</th>
                      <td>{val.nombre}</td>
                      <td>{val.apellido}</td>
                      <td>{val.edad}</td>
                      <td>{val.ocupacion}</td>
                    </tr>  
          })
        }
                   
        </tbody>
      </table>

     </div>
  );
}

export default App;

