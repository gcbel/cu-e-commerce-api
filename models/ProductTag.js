/* DEPENDENCIES */
const { Model, DataTypes } = require('sequelize');     // Import sequelize
const sequelize = require('../config/connection.js');  // Import database connection

/* CLASS DEFINITION */
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: Datatype.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: Datatype.INTEGER,
      references: {
        model: product,
        key: "id",
      }
    },
    tag_id: {
      type: Datatype.INTEGER,
      references: {
        model: tag,
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

/* EXPORTS */
module.exports = ProductTag;
