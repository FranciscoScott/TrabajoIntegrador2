const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')



//Multer 
let multer = require('multer');
let path = require('path');
const ProfileControlers = require('../Controlers/ProfileControles');
const { profile } = require('console');

let storage = multer.diskStorage({
    destination: function(req,res,cd) {
        cd(null,path.join(__dirname, '../images/users'))
    },
    filename : function (req,res,cd){
        cd(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage});

// Login 
router.get ('/login',ProfileControlers.login);

router.post('/login',ProfileControlers.procesarLogin);

//register
router.get ('/register', ProfileControlers.register);

router.post ('/register', upload.single('imgPerfil'), ProfileControlers.procesarRegister);

//logout
router.get('/logout',ProfileControlers.logout);

router.get('/:id', ProfileControlers.showProfile);

router.get('/edit',ProfileControlers.showProfileEdit)

router.post('/edit', upload.single('imgPerfil'), ProfileControlers.updateProfile);


//Lo Viejo 
router.get('/', ProfileControlers.Profile)

router.get('/edit', ProfileControlers.ProfileEdit)


module.exports = router ;


