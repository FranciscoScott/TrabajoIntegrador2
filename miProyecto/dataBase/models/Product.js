module.exports = function (sequelize, dataType) {

let alias = "Shoe";

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

const Shoe = sequelize.define (alias, cols, config);


// faltan las relaciones




return Shoe;

}
