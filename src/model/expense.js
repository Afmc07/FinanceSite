const { DataTypes, Model } = require("sequelize");
const sequelize = require('../database');

class expense extends Model{}

expense.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    value:{
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'expense',
    tableName: 'expenses'
});

module.exports= expense; 

