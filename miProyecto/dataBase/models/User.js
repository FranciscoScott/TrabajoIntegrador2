module.exports = (sequelize, dataTypes) => {

    let alias = 'User'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        foto: {
            type: dataTypes.STRING,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE
        }

    }

    let config = {

     tableName: 'users', //el nombre de la tabla no coincide con el del modelo
     timestamps: 'true', //columnas para timestamps
     // underscored: 'false', //los campos no tienen guiones bajos

createdAt: 'createdAt',
updatedAt: 'updatedAt',
deletedAt: 'deletedAt'
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product, 
        {
            as:'products',
            foreignKey: 'userId'
        });
    
        User.hasMany(models.Comment,
            {
                as:'comment',
                foreignKey:'userId',
            });
    }


    return User;

}


