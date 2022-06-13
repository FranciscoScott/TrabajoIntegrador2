// const zapatillas = require("../db/Data.js");

const db = require ("../database/models/Product");

const Product = db.products ;
//const op = db.sequelize.Op ;

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        Product.findByPk (id).then ((results) => {
            let shoe = {
                id: result.id,
                photo: result.photo,
                model: result.model,
                description: result.description,
            }
            console.log(shoe);
            return res.render ('products', {products: shoes})
        }) .catch((err) => {console.log(err);});
    } , 
    showProductAdd: function(req, res) {
        return res.render ('product/add' , {
            user: database.user, 
            logueado: database.user.logueado,

        })
    },
    store: (req,res) => {
        let info = req.body;
        let imgProduct = req.file.fileName;
        let shoe = {
            photo: imgProduct, 
            model: info.model,
            description: info.description,
        };
        Product.create(shoe)
        .then ((result) => {
            return res.redirect ('/product')
        }) .catch((err) => {
            return res.send ('Hay un error' + err)
        });
    },
    showProductEdit: (req, res) => {
        let id = req.params.id;
        Product.findByPk(id).then((result) => {
            let shoe = {
                id: result.id,
                photo: result.photo,
                model: result.model,
                description: result.description,
            }
            return res.render ('product/edit', {products: shoe})
        }) .catch((err) => {
            console.log(err);
        });
    },
    updateProduct: (req, res) => {
        let info = req.body;
        let imgProduct = req.file.fileName;
        let shoe = {
            photo: imgProduct, 
            model: info.model,
            description: info.description,
        };
        let filtro = {
            where: {
                id: req.params
            }
        };
        console.log(shoe);
        Product.update(shoe, filtro)
        .then ((result) => {
            return res.redirect ('/')
        }) .catch((err) => {
            console.log(err);
        });
    }
};


module.exports = controller;

/* const controller = {
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
} */

//detalle y agregar producto
