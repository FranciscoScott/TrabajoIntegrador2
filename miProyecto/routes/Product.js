const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')




/*  router.get('/', ProductsControlers.detail)

router.get('/add', ProductsControlers.add)

router.get('/edit', ProductsControlers.edit)

router.get('/:id?', ProductsControlers.detail); */


// multer para subir fotos

let multer = require('multer')
let path = require ('path')

let storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb (null, path.join (__dirname, '../public/images/products')) 
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage})

// para mostrar una zapatilla



// para agregar una zapatilla

router.get ('/add', ProductsControlers.showProductAdd)

router.post ('/store', upload.single ('imgProduct'), ProductsControlers.store)

//rutas para editar una zapatilla

router.get ('/:id/edit', ProductsControlers.showProductEdit)
router.post ('/edited', upload.single ('imgProduct'), ProductsControlers.updateProduct )

router.get('/:id', ProductsControlers.showProduct)

module.exports = router