const zapatillas = require("../dataBase/Data.js");


const controller = {
    index: function (req, res) {
        res.render('index', {
            shoes: zapatillas.shoes,
            comentarios: zapatillas.comentarios
        });
    },

    searchresults: function (req, res) {
        res.render('search-results', {
            shoes: zapatillas.shoes,
            comentarios: zapatillas.comentarios
        });
    },


}

module.exports = controller;