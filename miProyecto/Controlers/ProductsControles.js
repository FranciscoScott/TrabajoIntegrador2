const zapatilas = require("../dataBase/Data.js");

const controller = {
    index: function(req, res) {
        let infoZapatillas = zapatilas.lista
        res.render('index', {'listadoZapatillaz' :infoZapatillas})
    },
    login: function(req, res) {
        res.render('login')
    },
    register: function(req, res) {
        res.render('register')
    }
}

module.exports = controller;