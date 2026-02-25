exports.notImplemented = async (req, res) => {
  res.json({ message: `Scaffold route for ${req.originalUrl}`, payload: req.body || null });
};
