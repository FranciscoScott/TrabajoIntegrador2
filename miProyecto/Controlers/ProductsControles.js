// const zapatillas = require("../db/Data.js");

const db = require ("../database/models");

const Product = db.Product ; //el nombre del modelo (siempre en singular y en mayus)

//const op = db.sequelize.Op ;

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        
        let filtro = {
            include : {
                all: true,
                nested: true
            },
            order : [["comment", "createdAt" , "DESC"]]
        }

        Product.findByPk(id //,filtro
        )
            .then((result) => {
                return res.render('product',  { product: result.dataValues })
            }).catch((err) => {
                console.log(err);
            });
    } , 
    showProductAdd: function (req, res) {
        return res.render('productAdd')
    },

    store: (req, res) => {
        let info = req.body;
        let imgProduct = req.file.filename;
        let shoe = {
        photo: imgProduct,
        model: info.modelo,
        description: info.descripcion,
        users_id: req.session.userId
        };


        Product.create(info)
            .then(() => {
                return res.redirect('/')
            }).catch((err) => {
                return res.send('Hay un error' + err)
            });

    },
    showProductEdit: (req, res) => {
        let id = req.params.id;
        Product.findByPk(id).then((product) => {
        let shoe = {
            id: result.id,
                photo: result.imagen,
                model: result.modelo,
                description: result.descripcion,
                users_id: req.params.id
            }
            return res.render('productEdit', { product })
        }).catch((err) => {
            console.log(err);
        });
    },
    updateProduct: (req, res) => {


        if(req.session.user.id == req.body.users_id) {
            let info = req.body;
            let imgProduct = req.file.filename;
    
            let shoe = {
                photo: imgProduct,
                model: info.modelo,
                description: info.descripcion,
            }
    
            let filtro = {
                where: {
                    id: req.params.id
                }
            };
            product.update(shoe, filtro)
            .then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            res.redirect('/profile/login')
        }
        
    },
    deleteProduct: (req, res) => {
        let id = req.params.id
        product.destroy({
            where: {
                id: id
            }
        }).then((result) => {
            return res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    },
    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
        
        
        } 
        let info = req.body
        let comentario = {
            comentario: info.comentario,
            products_id: req.params.id,
            users_id: req.session.user.id,
        }
        comment.create(comentario)
        .then((result) => {
            return res.redirect('/products/id/' + req.params.id)
        }).catch((err) => {
            console.log(err);
        });
    
    },

};

module.exports = productController;

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
