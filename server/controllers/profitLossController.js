const ProfitLoss = require('../models/ProfitLoss');

exports.list = async (_req, res) => res.json(await ProfitLoss.find());
exports.create = async (req, res) => res.status(201).json(await ProfitLoss.create(req.body));
exports.update = async (req, res) => {
  const doc = await ProfitLoss.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
};
