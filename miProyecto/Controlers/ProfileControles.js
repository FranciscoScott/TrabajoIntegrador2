const zapatillas = require("../dataBase/Data.js");


const controller = {
    index: function(req, res) {
        res.render('index', {shoes: zapatillas.shoes , comentarios: zapatillas.comentarios , users: zapatillas.imagenDelUsuario , users: zapatillas.nombreDelUsuario , users: zapatillas.emailDelUsuario } );
    },
    login: function(req, res) {
        res.render('login', {users: zapatillas.emailDelUsuario});
    },
    register: function(req, res) {
        res.render('register', {users: zapatillas.emailDelUsuario});
    },
    Profile: function(req, res) {
        res.render('profile' , {shoes: zapatillas.shoes , Comentarios: zapatillas.comentarios , users: zapatillas.imagenDelUsuario , users: zapatillas.nombreDelUsuario , users: zapatillas.emailDelUsuario});
    },
    // para mi en el 2do paraemtro de Profile va esto: "users: zapatillas.imagenDelUsuario , users: zapatillas.nombreDelUsuario , users: zapatillas.emailDelUsuario, por eso lo agregue, pero puede llegar a estar mal//
     Product: function(req, res) {
        res.render('product',{shoes: zapatillas.shoes , Comentarios: zapatillas.comentarios })
    }
    
}

module.exports = controller;