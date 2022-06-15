const express = require('express');
const router = express.Router();
const ProfileControlers = require('../Controlers/ProfileControles')



//Multer 
let multer = require('multer');
let path = require('path');
const profileController = require('../Controlers/ProfileControles');
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
router.get ('/login',profileController.login);

router.post('/login',profileController.procesarLogin);

//register
router.get ('/register', profileController.register);

router.post ('/register', upload.single('imgPerfil'), profileController.procesarRegister);

//logout
router.get('/logout',profileController.logout);

router.get('/:id', profileController.showProfile);

router.get('/edit',profileController.showProfileEdit)

router.post('/edit', upload.single('imgPerfil'), profileController.updateProfile);

router.get('/', ProfileControlers.Profile)

router.get('/edit', ProfileControlers.ProfileEdit)


module.exports = router ;


