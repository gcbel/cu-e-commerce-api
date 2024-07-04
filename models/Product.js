const { Model, DataTypes } = require('sequelize');  // Import sequelize
const sequelize = require('../config/connection.js');  // Import database connection
// const Category = require('./Category.js')

class Product extends Model {}  // Initialize Product model (table) by extending off Sequelize's Model class
// Product.belongsTo(Catgeory);
// Product.belongsTo

Product.init(
  {
    id: {
      type: Datatype.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Datatype.STRING,
      allowNull: false,
    },
    price: {
      type: Datatype.DECIMAL,
      allowNull: false,
      isFloat: true,  // Validates decimal
    }, 
    stock: {
      type: Datatype.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isInt: true,  // Validates number
    },
    category_id: {
      type: Datatype.INTEGER,
      references: {
        model: Category,
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

module.exports = Product;
