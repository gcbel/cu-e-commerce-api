/* DEPENDENCIES */
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

/* ROUTES */
/* Get route for /api/tags, finds all tags and associated product information */
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{model: Product}],
      order: [['id', 'ASC']]
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
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag matches this id!', id: req.params.id });
      return;
    }
    res.status(200).json(tag)
  } catch (err) {res.status(500).json(err)}
});

/* Post route to /api/tags, creates a new tag */
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body)
    res.status(200).json({ message: 'Success! Tag created.', tag: tag })
  } catch (err) {res.status(500).json(err)};
});

/* Put route to /api/categories/:id, updates a tag by its id value */
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if (!tag[0]) {
      res.status(404).json({ message: 'No tag matches that ID!', id: req.params.id })
      return;
    }
    res.status(200).json({ message: 'Success! Tag updated.', id: req.params.id })
  } catch (err) {res.status(500).json(err)};
});

/* Delete route for /api/product/:id, deletes a tag by its id value */
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag with that ID!', id: req.params.id })
      return;
    }
    res.status(200).json({ message: 'Success! Tag deleted.', id: req.params.id })
  } catch (err) {res.status(500).json(err)};
});

/* EXPORTS */
module.exports = router;
