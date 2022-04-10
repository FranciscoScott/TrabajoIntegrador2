const zapatillas = require("../dataBase/Data.js");
const zapatilas = require("../dataBase/Data.js");

const controller = {
    index: function(req, res) {
        res.render('Product' , {shoes: zapatillas.shoes , comentarios: zapatillas.comentarios})
    },
    login: function(req, res) {
        res.render('login')
    },
    register: function(req, res) {
        res.render('register')
    }, 
    Product: function(req, res) {
        res.render('product',{shoes: zapatillas.shoes , Comentarios: zapatillas.Comentarios })
    }
}

module.exports = controller;