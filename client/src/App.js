import './App.css';
import {useState}from "react"

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
*/
  const [nombre,setNombre]=useState("");
  const [Apellido,setApellido]=useState("");
  const [Edad,setEdad]=useState(0);
  const [Ocupacion,setOcupacion]=useState("");

  const mostrarDatos=()=>{
    alert(nombre);
  }
  return (
    <div className="App">
     <div className='datos'>
      
      <label>Nombre:
        <input onChange={(event)=>{setNombre(event.target.value);}} 
        type="text"></input> 
      </label><br/>
      <label>Apellido:
        <input onChange={(event)=>{setApellido(event.target.value);}} 
        type="text"></input> 
      </label><br/>
      <label>Edad:
        <input onChange={(event)=>{setEdad(event.target.value);}}
         type="number"></input> 
      </label><br/>
      <label>Ocupación:
        <input onChange={(event)=>{setOcupacion(event.target.value);}}
        type="text"></input> 
      </label><br/>
      <button onClick={mostrarDatos}>Registrar</button>
     </div>
    </div>
  );

}

export default App;

