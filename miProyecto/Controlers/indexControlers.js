const zapatillas = require("../dataBase/Data.js");


const controller = {
    index: function(req, res) {
        res.render('index' , {shoes: zapatillas.shoes});
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    }, 
    searchresults:  function(req, res){
        res.render('search-results', {shoes: zapatillas.shoes});
    }

}

module.exports = controller;