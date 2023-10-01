/**
 * Realizar peticiones
 *  
*/
const express=require("express");
const app = express()
const msql=require("mysql");

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
    db.query('INSERT INTO usuarios (nombre,apellido,edad,ocupacion) VALUES (?,?,?,?)');
});


app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})