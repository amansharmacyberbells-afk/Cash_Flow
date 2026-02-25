const mongoose = require('mongoose');

const CashDriversSchema = new mongoose.Schema({
  period: { type: String, default: 'current' },
  data: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('CashDrivers', CashDriversSchema);
