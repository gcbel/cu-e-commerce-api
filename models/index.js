/* DEPENDENCIES */
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/* ASSOCIATIONS */
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Category.hasMany(Product, {
  foreignKey: 'categoryId',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productId',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagId',
});

/* EXPORTS */
module.exports = {Product, Category, Tag, ProductTag};