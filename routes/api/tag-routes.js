/* DEPENDENCIES */
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

/* ROUTES */
/* Get route for /api/tags, finds all tags and associated product information */
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{model: Product}]
    });
    if (!tags) {
      res.status(404).json({ message: 'No tags!' })
      return;
    }
    res.status(200).json(tags)
  } catch (err) {res.status(500).json(err)}
});

/* Get route for /api/tags, finds a tag by id and its associated product information */
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {})
    if (!tag) {
      res.status(404).json({ message: 'No tags!' });
      return;
    }
    res.status(200).json(tag)
  } catch (err) {res.status(400).json(err)}
});

/* Post route to /api/tags, creates a new tag */
router.post('/', (req, res) => {

});

/* Put route to /api/categories/:id, updates a product by its id value */
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

/* Delete route for /api/product/:id, deletes a product by its id value */
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

/* EXPORTS */
module.exports = router;
