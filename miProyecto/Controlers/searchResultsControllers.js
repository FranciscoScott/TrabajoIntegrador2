
const db = require('../database/models/');
const op = db.Sequelize.Op;
const product = db.Product;

const searchResultsController = {
    findProduct: (req, res) => {
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
            [op.or]: [
            { modelo: { [op.like]: `%${ palabraBuscada}%` } },
            { product: { [op.like]: `%${ palabraBuscada}%` } },
            { descripcion: { [op.like]: `%${ palabraBuscada}%` } }
            ]
        }, 
           // include: [ { association: 'user' }],
            order: [[ "createdAt" , "DESC"]]
        }
    
        product.findAll(filtro)
        .then((result) => {
        return res.render('search-results', { producto : result } )
        }).catch((err) => {
            console.log(err);
        });
    }

};

module.exports = searchResultsController;