const mongoose = require('mongoose');

const BreakevenSchema = new mongoose.Schema({
  period: { type: String, default: 'current' },
  data: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Breakeven', BreakevenSchema);
