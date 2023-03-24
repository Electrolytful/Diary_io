const { Router } = require('express');
const entriesController = require('../controllers/entriesController.js');

const router = Router();

// GET
router.get('/', entriesController.index);
router.get('/:id', entriesController.show);
router.get('/:category', entriesController.showByCategory);
router.get('/:date', entriesController.showByDate);
router.get('/category', entriesController.sortByCategory);
router.get('/recent', entriesController.sortByRecent);

// POST
router.post('/', entriesController.create);

// DELETE
router.delete('/:id', entriesController.destroy);

// UPDATE
router.patch('/:id', entriesController.update);


module.exports = router;
