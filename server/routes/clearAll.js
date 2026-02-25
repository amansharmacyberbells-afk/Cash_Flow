const router = require('express').Router();

router.delete('/', (_req, res) => {
  res.json({ message: 'Clear-all scaffold. Add collection truncation logic here.' });
});

module.exports = router;
