/* DEPENDENCIES */
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

/* ROUTES */
/* Get route to /api/products, finds all products and associated category and tags */
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{model: Category}, {model: Tag}]
    });
    if (!products) {
      res.status(404).json({ message: 'No products!' })
      return;
    }
    res.status(200).json(products);
  } catch (err) {res.status(500).json(err)};
});

/* Get route to /api/products, finds a product by id and its associated category and tags */
router.get('/:id', async (req, res) => {
  try {
  const product = await Product.findByPk(req.params.id, {
    include: [{model: Category}, {model: Tag}]
  });
  if (!product) {
    res.status(404).json({ message: 'No product with this id!' });
    return;
  }
  res.status(200).json(product);
  } catch (err) {res.status(500).json(err)};
});

/* Post route to /api/products, creates a new product */
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      // If product tags, create pairings to bulk create ProductTags
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

/* Put route to /api/categories/:id, updates a product by its id value */
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {

          // Create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

          // Figure out which tags to remove
          const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
          // Run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {res.status(400).json(err)});
});

/* Delete route for /api/product/:id, deletes a product by its id value */
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy(req.body, {
      where: {id: req.params.id}
    });
    if (!product || !product[0]) {
      res.status(404).json({ message: 'No product with that ID!' })
      return;
    }
    res.status(200).json({ message: 'Success! Product deleted.' })
  } catch (err) {res.status(500).json(err)};
});

/* EXPORTS */
module.exports = router;
