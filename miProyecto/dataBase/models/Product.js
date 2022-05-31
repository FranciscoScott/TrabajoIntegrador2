module.exports = function (sequelize, dataType) {

//defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
let alias = "Product";

//Describir la config de las columnas de la tabla
let cols = {
    id: {
        autoIncrement: true,
        primaryKey: true, 
        type: DataTypes.INTEGER
    },
    product: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    comentario: {
        type: DataTypes.STRING
    },
    userId: {
        foreignKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    deletedAt: {
        type: DataTypes.DATE
    }
    
}

let config = {
    tableName: 'products', //el nombre de la tabla no coincide con el del modelo
    timestamps: 'true', //columnas para timestamps
    underscored: 'false' //los campos no tienen guiones bajos
}

const Product = sequelize.define (alias, cols, config);


// faltan las relaciones




return Product;

}
