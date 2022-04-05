const zapatilas = require("../dataBase/Data.js");

const controller = {
    index: function(req, res) {
        res.render('index',{ title: 'Product' });
    },
    login: function(req, res) {
        res.render('login',{ title: 'Product' });
    },
    register: function(req, res) {
        res.render('index',{ title: 'Product' });
    }
}

module.exports = controller;