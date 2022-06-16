const express = require('express');
const router = express.Router();
const ProductsControlers = require('../Controlers/ProductsControles')




router.get('/', ProductsControlers.detail)

router.get('/add', ProductsControlers.add)

router.get('/edit', ProductsControlers.edit)

router.get('/:id?', ProductsControlers.detail);


// multer para subir fotos

let multer = requiere('multer')
let path = requiere ('path')

let storage = multer.diskstorage ({
    destination: function(req, file, cb) {
        cb (null, path.join (__dirname, '/images')) 
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage})

// para mostrar una zapatilla

router.get('/id/:id', ProductsControlers.showProduct)
module.exports = router

// para agregar una zapatilla

router.get ('/add', ProductsControlers.showProductAdd)

router.post ('/store', upload.single ('imgProduct'), ProductsControlers.store)

//rutas para editar una zapatilla

router.get ('/edit/:id', ProductsControlers.showProductEdit)
router.post ('/edited', upload.single ('imgProduct'), ProductsControlers.updateProduct )