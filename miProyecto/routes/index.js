const express = require('express');
const router = express.Router();
const indexControlers = require('../Controlers/indexControlers');

const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../images')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
      //Las carpetas deben existir.
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

router.get('/', indexControlers.index);
router.get('/searchResults', indexControlers.search);
router.get('/login', indexControlers.login);

module.exports = router ;

