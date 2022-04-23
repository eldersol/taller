const router = require('express').Router()
const conexion = require('./config/conexion')

//Ver todos los productos
router.get('/',(req, res)=>{
    let sql ='select * from producto'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Ver solo un producto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/productos:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from producto where producto_codigo = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/nuevo',( req, res)=>{
    const{producto_nombre} = req.body
    console.log(producto_nombre)
    let sql = `insert into producto(producto_nombre) values('${producto_nombre}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto agregado'})
        }
    })
})

//eliminar 
router.delete('/eliminar:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from producto where producto_codigo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto eliminado'})
        }
    })
});

//modificar
router.put('/mod:id',(req, res)=>{
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql = `update producto set 
                nombre ='${nombre}',                
                where producto_codigo = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Producto modificado'})
        }
    })

})

module.exports = router