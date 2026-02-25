const router = require('express').Router();
const { calculate } = require('../services/pythonService');

router.post('/', async (req, res, next) => {
  try {
    const result = await calculate(req.body.path || '/calculate/profit-loss', req.body.payload || {});
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
