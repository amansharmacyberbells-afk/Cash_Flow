const mongoose = require('mongoose');

const PlantPurchaseSchema = new mongoose.Schema({
  period: { type: String, default: 'current' },
  data: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('PlantPurchase', PlantPurchaseSchema);
