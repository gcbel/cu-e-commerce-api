const { Model, DataTypes } = require('sequelize');     // Import sequelize
const sequelize = require('../config/connection.js');  // Import database connection

class Tag extends Model {}  // Initialize Tag model (table) by extending off Sequelize's Model class

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
