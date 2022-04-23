require('./config/conexion');
const express = require('express')
const port = (process.env.port || 3000)

const app = express()
app.use(express.json())
app.set('port',port)


app.use('/api', require('./rutas'))


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('Error de conexion: '+error)}
    else{
        console.log('Conectado en puerto: '+port)
    }
})