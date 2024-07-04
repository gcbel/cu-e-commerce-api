const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

/* Get route to  /api/categories, finds all categories and associated products */
router.get('/', async (req, res) => {
  try {
    const category = await Category.findall({
      category_name: req.body.name,
    });
    res.status(200).json(category);
  } catch (err) {res.status(400).json(err)}
});
/* Get route to  /api/categories/:id, finds a category by id and associated products */
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findbyPk(req.params.id)
    if (!category) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {res.status(400).json(err)}
});

/* Post route to /api/categories, creates a new category */
router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.name,
    });
    res.status(200).json(category);
  } catch (err) {res.status(400).json(err)}
});

/* Put route to /api/categories/:id, updates a category by its id value */
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category[0]) {
      res.status(404).json({ message: 'No category matches this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {res.status(500).json(err)}
});

/* Delete route for /api/categories/:id, deletes a category by its id value */
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.delete(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category[0]) {
      res.status(404).json({ message: 'No category matches this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {res.status(500).json(err)}
});

module.exports = router;
