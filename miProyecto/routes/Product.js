const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')


// multer para subir fotos

let multer = require('multer')
let path = require ('path')

let storage = multer.diskStorage ({ //Mediante el metodo diskStorage, multer almacacena archivos en carpetas.
    destination: function(req, file, cb) {
        cb (null, path.join (__dirname, '../public/images/products')) //el metodo join junta __dirname con la ruta que escribimos nosotros
        //dirname le dice al sistema en q carpeta estamos parados en el momento, lo otro dice hacia donde queremos ir 
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //evita que las fotos se pisen con el DateTime y el nombre del archivo
    } //extname nos da la extension del archivo que estamos
})

let upload = multer({storage : storage})

// para mostrar una zapatilla



// para agregar una zapatilla

router.get ('/add', ProductsControlers.showProductAdd)
router.post ('/add', upload.single ('imagen'), ProductsControlers.store)

//rutas para editar una zapatilla

router.get ('/:id/edit', ProductsControlers.showProductEdit)
router.post ('/:id/edit', upload.single ('imagen'), ProductsControlers.updateProduct )

router.get('/:id', ProductsControlers.showProduct)

router.post('/:id', ProductsControlers.comments)

module.exports = router