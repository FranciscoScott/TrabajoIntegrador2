module.exports = function (sequelize, dataType) {

    //defino el alias. me permite idecntificar el modelo cuando lo usamos en el controlador
    let alias = "User";
    
    //Describir la config de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        bday: {
            type: DataTypes.DATE
        },
        profilePic: {
            type: DataTypes.STRING
        },
        dni: {
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
    