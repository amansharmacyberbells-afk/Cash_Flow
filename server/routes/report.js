const router = require('express').Router();

router.get('/pdf', (_req, res) => {
  res.json({ message: 'PDF generation scaffold. Integrate Puppeteer service here.' });
});

module.exports = router;
