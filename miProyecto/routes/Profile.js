const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')



//Multer 
let multer = require('multer');
let path = require('path'); 

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path.join(__dirname, '../public/images/users'))
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

// View

//logout
router.get('/logout', ProfileControlers.logout)

router.get('/:id', ProfileControlers.showProfile);
//router.get('/Profile', ProfileControlers.showProfile);


//editProfile

router.get('/:id/edit', ProfileControlers.showProfileEdit);

router.post('/:id/edit', upload.single('imgPerfil'), ProfileControlers.updateProfile);

// folLow



module.exports = router ;


