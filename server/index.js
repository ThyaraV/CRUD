/**
 * Realizar peticiones
 *  app.use(cors());: antes de ejecutar cualquier cosa
*/
const express=require("express");
const app = express();
const mysql=require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


/**
 * Conexión con la base de datos laragon
 *  
*/
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"usuarioscrud"
})

/**
 * Petición de guardar * 
 * req:peticion
 * res:respuesta 
*/
app.post("/create",(req,res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const edad=req.body.edad;
    const ocupacion=req.body.ocupacion;
    db.query('INSERT INTO usuarios (nombre,apellido,edad,ocupacion) VALUES (?,?,?,?)',[nombre,apellido,edad,ocupacion],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario registrado con éxito");
        }
    });
});

/**
 * Petición de listar * 
 * req:peticion
 * res:respuesta 
*/
app.get("/usuarios",(req,res)=>{
    db.query('SELECT * FROM usuarios',
       (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})