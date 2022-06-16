//requires necesarios
//const { Association } = require('sequelize/types');
const db = require('../database/models'); //trae los modelos
const { shoes } = require('../db/Data');
const zapatillas = db.zapatillas //de todos los modelos pide Zapatillas (el alias, a crear)
const users = db.User // de todos los modelos pide User(el alias)
const comments = db.Comment
const op = db.Sequelize.Op;//contiene los operadores para usar en metodos de sequelize

const data = require('../db/index')

let funcionFillArray = require('../utils/fillArray');


//funciones
let arrayNovedades = funcionFillArray(4);
let arrayMasComentados = funcionFillArray(4);

const indexController = {
    home: function (req,res){
        shoes.findAll () //corresponde a la variable qyue tiene adentro el modelo que obtuvimos de la ocnstante db, si tnego adentro el modelo podemos usar el metodo de sequelize que son promesas
            .then(function(zapatillas){
                //console.log('RESULTADOS DEL FINDALL: ' + zapatillas);
                //return res.send (zapatillas)
                return res.render('index', {info: data, arrayNovedades: arrayNovedades, arrayMasComentados: arrayMasComentados});
            }) 
    },
    search: function (req,res){
        //var usuarios = [];
        shoes.findAll ({
            include:[{association: 'owner'}, {association: 'comentarios'}],
            where: [{model: {[op.like]: '%' + req.query.search + '%'}}] //  asi deberia funcionar 
        })
            .then(function (zapatillas){
                //return res.send(zapatillas);
                return res.render('search-results', {info: zapatillas, query: req.query.search});
                /*
                let fks = [];
                //return res.send (zapatillas) //esto lo use para ver si llegaba -> hasta aca anda
                //agarrar perfiles de los que postearon los zapatillas
                for(let i = 0; i < zapatillas.length; i++){
                    fks.push(zapatillas[i].FkUserId);
                }
                //return res.send(fks); -> llega [1,1,1,1]
                for(let i = 0; i < fks.length; i++){
                    users.findOne({
                        where: [{id: fks[i]}]
                    })
                    .then(function(usuarioPosteo){
                        usuarios.push({id: usuarioPosteo.id, username: usuarioPosteo.username, image: usuarioPosteo.image});
                        if(i == fks.length - 1){ //esto es para que se haga en la ultima vuelta del for
                            return res.render('search-results', {info: zapatillas, usuarios: usuarios, query: req.query.search});
                        }
                    })
                } forma de hacerlo sin relaciones del model*/
            })        
            .catch(error => console.log('EL ERROR ES: ' + error))
        },
}

//exportamos

module.exports = indexController;

//

//const zapatillas = require("../db/Data.js");
//const db = require ("../database/models")
//const op = db.Sequelize.Op
//const products = db.Product //(o products puede ser el ALIAS)

  //  const indexController = {
    //    index: (req, res ) => {
      //      products.findAll({
        //        order: [["createdAt" , "DESC"]]
          //  })
            //.then ((result) => {
              //  return res.render("index" , {products : result})
            // }) .catch((err) => {

         //   });
      //  },
   // }
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

