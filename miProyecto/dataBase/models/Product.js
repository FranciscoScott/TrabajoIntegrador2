module.exports = function (sequelize, dataTypes) {

//defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
let alias = "Product";

//Describir la config de las columnas de la tabla
let cols = {
    id: {
        autoIncrement: true,
        primaryKey: true, 
        type: dataTypes.INTEGER
    },

    product: {
        type: dataTypes.STRING
    },
    autor: {
        type: dataTypes.STRING
    },
    descripcion: {
        type: dataTypes.STRING
    },
    imagen: {
        type: dataTypes.STRING
    },
    userId: {
        foreignKey: true,
        type: dataTypes.INTEGER
    },
    createdAt: {
        type: dataTypes.DATE
    },
    updatedAt: {
        type: dataTypes.DATE
    },
    deletedAt: {
        type: dataTypes.DATE
    },
    modelo: {
        type: dataTypes.STRING
    }
}

let config = {

    timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
  //  tableName: 'products', //el nombre de la tabla no coincide con el del modelo
    // timestamps: 'true', //columnas para timestamps
   //  underscored: 'false' //los campos no tienen guiones bajos
}

const Product = sequelize.define (alias, cols, config);


// faltan las relaciones

Product.asociate = function(models){
    Product.belongsTo(models.User, 
    {
        as:'user',
        foreignKey: 'userId'
    });

    Product.hasMany(models.Comment,
        {
            as:'commentario',
            foreignKey:'comentarioId',
        });
}


return Product;

}
