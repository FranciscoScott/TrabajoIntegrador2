const zapatillas = require("../db/Data.js");
const db = require ("../database/models")
const op = db.Sequelize.Op
const products = db.Product //(o products puede ser el ALIAS)

    const indexController = {
        index: (req, res ) => {
            products.findAll({
                order: [["createdAt" , "DESC"]]
            })
            .then ((result) => {
                return res.render("index" , {products : result})
            }) .catch((err) => {

            });
        },
    }
 // const controller = {
    // index: function (req, res) {
        // res.render('index', {
           //  shoes: zapatillas.shoes,
           //  comentarios: zapatillas.comentarios 
        // });
   //  },

    // searchresults: function (req, res) {
       //  res.render('search-results', {
       //      shoes: zapatillas.shoes,
        //     comentarios: zapatillas.comentarios
       //  });
   //  },


// }

module.exports = indexController;