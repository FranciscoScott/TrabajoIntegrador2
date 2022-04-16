const zapatillas = require("../dataBase/Data.js");


const controller = {
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    }, 
    Profile: function(req, res) {
        res.render('profile' , {users: zapatillas.users , shoes: zapatillas.shoes} );
    },
    ProfileEdit: function(req, res) {
        res.render('profile-edit' , {users: zapatillas.users , shoes: zapatillas.shoes});
    },
    // para mi en el 2do paraemtro de Profile va esto: "users: zapatillas.imagenDelUsuario , users: zapatillas.nombreDelUsuario , users: zapatillas.emailDelUsuario, por eso lo agregue, pero//
     
    
}

module.exports = controller;