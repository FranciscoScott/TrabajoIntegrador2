const zapatillas = require("../db/Data.js");


const controller = {
    detail: function (req, res) {
        res.render('product', {
            shoes: zapatillas.shoes,
            comentarios: zapatillas.comentarios,
            users: zapatillas.users,
            idProduct: req.params.id
        })
    },
    add: function (req, res) {
        res.render('productAdd', {
            shoes: zapatillas.shoes,
            comentarios: zapatillas.comentarios,
            users: zapatillas.users
        })
    },
    edit: function (req, res) {
        res.render('product')
    },
}
//detalle y agregar producto
module.exports = controller;