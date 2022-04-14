const zapatillas = require("../dataBase/Data.js");
const zapatilas = require("../dataBase/Data.js");

const controller = {
    detail: function(req, res) {
        res.render('product' , {shoes: zapatillas.shoes , Comentarios: zapatillas.comentarios})
    },
    add: function(req, res) {
        res.render('product')
    },
    edit: function(req, res) {
        res.render('product')
    },
}
//detalle y agregar producto
module.exports = controller;