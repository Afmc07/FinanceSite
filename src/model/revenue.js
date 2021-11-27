const { DataTypes, Model } = require("sequelize");
const sequelize = require('../database');

class revenue extends Model{}

revenue.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    value:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'revenue',
    tableName: 'revenues'
});

module.exports= revenue;