const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3307',
    database: 'db_taller'
});

conexion.connect((err)=>{
    if(err){
        conexion.log('ERROR: '+ err)
    }
    else
    {console.log('CONECTADO!!!')}
});

module.exports=conexion