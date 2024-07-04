const { Model, DataTypes } = require('sequelize');     // Import sequelize
const sequelize = require('../config/connection.js');  // Import database connection
// const Product = require('./Product.js')

class Category extends Model {}  // Initialize Category model (table) by extending off Sequelize's Model class
// Category.hasMany(Product);

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
