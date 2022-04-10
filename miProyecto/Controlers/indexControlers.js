const zapatillas = require("../dataBase/Data.js");


const controller = {
    index: function(req, res) {
        res.render('index' , {shoes: zapatillas.shoes , Comentarios: zapatillas.Comentarios });
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    }, 
    searchresults:  function(req, res){
        res.render('search-results', {shoes: zapatillas.shoes , Comentarios: zapatillas.Comentarios});
    },
    Product: function(req, res) {
        res.render('product',{shoes: zapatillas.shoes , Comentarios: zapatillas.Comentarios })
    }

}

module.exports = controller;