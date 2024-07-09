/* DEPENDENCIES */
const { Model, DataTypes } = require('sequelize');  // Import sequelize
const sequelize = require('../config/connection.js');  // Import database connection

/* CLASS DEFINITION */
class Product extends Model {}  // Initialize Product model (table) by extending off Sequelize's Model class

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validates: {
        isFloat: true,  // Validates decimal
      }
    }, 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validates: {
        isInt: true,  // Validates number
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

/* EXPORTS */
module.exports = Product;