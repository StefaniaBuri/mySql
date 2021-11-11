let mysql = require("mysql2");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nia-Sql-05-06",
    database: "codenotch"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correcta');
    }
});
/*
//>>>>>>>>>>>>> RETO 2 <<<<<<<<<<<<<<<<

//------- CREAR TABLA-----------
let sql = "CREATE TABLE prueba (id INT AUTO_INCREMENT PRIMARY KEY, direccion VARCHAR(200), numero INT, ciudad VARCHAR(60))";

connection.query(sql, function(err,result){
    if(err)
    console.log(err);
    else{
        console.log("Tabla creada");
        console.log(result);
    }
});


//------------ BORRAR TABLA--------

let sql = "DROP TABLE prueba";
connection.query(sql, function(err, result){
    if(err) throw err;
    console.log("Tabla eliminada");
});
*/

//------- INSERTAR DATOS EN UN TABLA----
/*
let sql = "INSERT INTO prueba (direccion, numero, ciudad) VALUES (\"c/Boltaña\",1,\"Barcelona\")";
connection.query(sql, function(err, result){
    if(err)
    console.log(err);
    else{
        console.log("Dato Insertado");
        console.log(result);
    }
});



let sql = "INSERT INTO notas (id_alumnos, id_asignaturas, fecha_examen , calificacion) VALUES ?";
let values = 
[
    [2, 1, "2018-08-03",3],
    [3, 1, "2017-09-02",5],
    [4, 1, "2016-10-01",9],
    [5, 1, "2020-06-05",4],
    [6, 1, "2021-07-06",6],
]

connection.query(sql, [values], function(error,resultado) {
    if (error) throw error;
    else{
    console.log("Datos insertados");
    console.log(resultado)
    }
});


 let sql = "INSERT INTO asignaturas_profesor(id_asignaturas, id_profesores, id_grupo) VALUES (2,2,2)"
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Dato insertado")
        console.log(resultado)
})


 let sql = "INSERT INTO alumnos (nombre, apellido1, apellido2, edad, id_grupo) VALUES ?";
let values = 
[
    ["Lucia", "Arranz","Jimenez",31, 1],
    ["Leo","Lera", "Dominguez",29, 2],
   
]
connection.query(sql, [values], function(err,resultado) {
    if (err) throw err;
    else
    {
    console.log("Datos insertados");
    console.log(resultado)
    }
   
});

// ---------- ACTUALIZAR DATOS------

// SETEAR LAS NOTAS A "0"
let sql = "UPDATE notas SET calificacion = 0";
connection.query(sql, function(err,result){
    if(err)
    console.log(err);
    else{
        console.log("Dato Actualizado");
        console.log(result);
    }
});


//OBTENER NOMBRE Y PRIMER APELLIDO ALUMNOS 
let sql = "SELECT nombre, apellido1 FROM alumnos "
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Seleccion realizada")
        console.log(resultado)
        
});

//OBTENER DATOS PROFESORES
let sql = "SELECT nombre,apellidos FROM PROFESORES "
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Seleccion realizada")
        console.log(resultado)
        
})

// >>>>>>>>>>>>> RETO 3 <<<<<<<<
//ELIMINAR NOTAS MAS DE 10AÑOS

let sql = "DELETE FROM notas WHERE fecha_examen<20111231"
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Dato borrado")
        console.log(resultado)
})
*/


let sql = "UPDATE notas SET calificacion = 5 WHERE calificacion<5"
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Dato actualizado")
        console.log(resultado)
})

