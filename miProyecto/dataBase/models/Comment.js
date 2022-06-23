module.exports = function (sequelize, dataTypes) {

    //defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
    let alias = "Comment";
    
    //Describir la config de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario : {
            type: dataTypes.STRING,
        },
        productsId: {
            type: dataTypes.INTEGER,
        },
        userId: {
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
        }
        
    }
    
    let config = {

    
        
      // tableName: 'comments', //el nombre de la tabla no coincide con el del modelo
       timestamps: 'true', //columnas para timestamps
      // underscored: 'false', //los campos no tienen guiones bajos

    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
    }


    const Comment = sequelize.define (alias, cols, config);
    
    
    // faltan las relaciones
    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey : 'productsId'
        })
        Comment.belongsTo(models.User, {
            as : 'user',
            foreignKey : 'userId'
        })
    }
    
    
    
    
    return Comment;
    
    }
    