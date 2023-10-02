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
    <div class="container">
    <div className="App">
     <div className='datos'>
      
      <label>Nombre:
        <input onChange={(event)=>{setNombre(event.target.value);}} 
        type="text"></input> 
      </label>
      <label>Apellido:
        <input onChange={(event)=>{setApellido(event.target.value);}} 
        type="text"></input> 
      </label>
      <label>Edad:
        <input onChange={(event)=>{setEdad(event.target.value);}}
         type="number"></input> 
      </label>
      <label>Ocupación:
        <input onChange={(event)=>{setOcupacion(event.target.value);}}
        type="text"></input> 
      </label>
        <button className= 'btn btn-success'onClick={agregar}>Registrar</button>
      </div>
      <div className='lista'>
        
        {
          listaUsuarios.map((val,Key)=>{
            return <div className=''>{val.nombre}</div> 
          })
        }
      
      </div>
     </div>
     </div>
  );
}

export default App;

