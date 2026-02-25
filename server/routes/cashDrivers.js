const router = require('express').Router();
const { notImplemented } = require('../controllers/genericController');

router.get('/', notImplemented);
router.post('/', notImplemented);
router.put('/:id', notImplemented);

module.exports = router;
