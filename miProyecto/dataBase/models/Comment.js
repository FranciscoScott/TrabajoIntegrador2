module.exports = function (sequelize, dataType) {

    //defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
    let alias = "Comment";
    
    //Describir la config de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER
        },
        comentario: {
            type: DataTypes.STRING
        },
        userId: {
            foreignKey: true,
            type: DataTypes.INTEGER
        },
        productId: {
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
        tableName: 'comentarios', //el nombre de la tabla no coincide con el del modelo
        timestamps: 'true', //columnas para timestamps
        underscored: 'false' //los campos no tienen guiones bajos
    }
    
    const Comment = sequelize.define (alias, cols, config);
    
    
    // faltan las relaciones
    Comment.asociate = function(models){
        Comment.belongsTo(models.Product, 
        {
            as:'product',
            foreignKey: 'productId'
        });
    
        Comment.belongsTo(models.User,
            {
                as:'user',
                foreignKey:'userId',
            });
    }
    
    
    
    
    return Comment;
    
    }
    