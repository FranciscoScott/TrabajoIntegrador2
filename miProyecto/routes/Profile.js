const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')



//Multer 
let multer = require('multer');
let path = require('path');


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path.join(__dirname, '../public/images/users'))
        //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
      //Las carpetas deben existir.
    },
    filename : function (req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
}) 

let upload = multer({storage : storage});

/// Login
router.get('/login', ProfileControlers.login)

router.post('/login', ProfileControlers.procesarLogin)

// Register
router.get('/register', ProfileControlers.register)

router.post('/register', upload.single('imgPerfil'), ProfileControlers.procesarRegister)

//logout
router.get('/logout', ProfileControlers.logout)

router.get('/:id', ProfileControlers.showProfile);

//editProfile

router.get('/:id/edit', ProfileControlers.showProfileEdit);

router.post('/:id/edit', upload.single('imgPerfil'), ProfileControlers.updateProfile);

// folLow
// router.post('/follow/:id', ProfileControlers.follow)


module.exports = router ;


