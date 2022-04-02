const zapatilas = require("../dataBase/Data.js");

const controller = {
    index: function(req, res) {
        res.send('index');
    },
    login: function(req, res) {
        res.send('login');
    },
    register: function(req, res) {
        res.send('index');
    }
}

module.exports = controller;