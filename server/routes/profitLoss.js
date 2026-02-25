const router = require('express').Router();
const controller = require('../controllers/profitLossController');

router.get('/', controller.list);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
