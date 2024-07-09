/* DEPENDENCIES */
const router = require('express').Router();
const { Category, Product } = require('../../models');

/* ROUTES */
/* Get route to /api/categories, finds all categories and associated products */
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
      order: [['id', 'ASC']]
    });
    if (!categories) {
      res.status(404).json({ message: 'No categories!' })
      return;
    }
    res.status(200).json(categories);
  } catch (err) {res.status(500).json(err)}
});

/* Get route to /api/categories/:id, finds a category by id and associated products */
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!category) {
      res.status(404).json({ message: 'No category matches this id!', id: req.params.id });
      return;
    }
    res.status(200).json(category);
  } catch (err) {res.status(500).json(err)}
});

/* Post route to /api/categories, creates a new category */
router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json({ message: 'Success! Category created.', category: category });
  } catch (err) {res.status(400).json(err)}
});

/* Put route to /api/categories/:id, updates a category by its id value */
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if (!category) {
      res.status(404).json({ message: 'No category matches that id!', id: req.params.id });
      return;
    }
    res.status(200).json({ message: 'Success! Category updated.', id: req.params.id });
  } catch (err) {res.status(500).json(err)}
});

/* Delete route for /api/categories/:id, deletes a category by its id value */
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: 'No category matches this id!', id: req.params.id });
      return;
    }
    res.status(200).json({ message: 'Success! Category deleted.', id: req.params.id });
  } catch (err) {res.status(500).json(err)}
});

/* EXPORT */
module.exports = router;
