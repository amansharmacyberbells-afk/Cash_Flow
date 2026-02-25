const router = require('express').Router();
const controller = require('../controllers/settingsController');

router.get('/', controller.getSettings);
router.put('/', controller.updateSettings);

module.exports = router;
