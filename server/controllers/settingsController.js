const Settings = require('../models/Settings');

exports.getSettings = async (_req, res) => {
  const settings = await Settings.findOne();
  res.json(settings || {});
};

exports.updateSettings = async (req, res) => {
  const settings = await Settings.findOneAndUpdate({}, req.body, { upsert: true, new: true });
  res.json(settings);
};
