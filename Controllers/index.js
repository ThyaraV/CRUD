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
            res.send(result);
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

/**
 * Petición de Actualizar * 
 * req:peticion
 * res:respuesta 
*/
app.put("/update",(req,res)=>{
    const id=req.body.id;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const edad=req.body.edad;
    const ocupacion=req.body.ocupacion;
    db.query('UPDATE usuarios SET nombre=?,apellido=?,edad=?,ocupacion=? WHERE id=?',[nombre,apellido,edad,ocupacion,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

/**
 * Petición de Eliminar * 
 * req:peticion
 * res:respuesta 
*/
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM usuarios WHERE id=?',id,
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

