module.exports = function (sequelize, dataTypes) {

    //defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
    let alias = "User";
    
    //Describir la config de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        bday: {
            type: dataTypes.DATE
        },
        profilePic: {
            type: dataTypes.STRING
        },
        dni: {
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
        tableName: 'users', //el nombre de la tabla no coincide con el del modelo
        timestamps: 'true', //columnas para timestamps
        underscored: 'false' //los campos no tienen guiones bajos
    }
    
    const User = sequelize.define (alias, cols, config);
    
    
    // faltan las relaciones
    
    User.asociate = function(models){
        User.hasMany(models.Product, 
        {
            as:'product',
            foreignKey: 'productId'
        });
    
        User.hasMany(models.Comment,
            {
                as:'comment',
                foreignKey:'commentId',
            });
    }
    
    
    return User;
    
    }
    