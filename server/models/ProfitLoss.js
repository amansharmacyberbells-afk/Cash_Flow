const mongoose = require('mongoose');

const profitLossSchema = new mongoose.Schema(
  {
    period: { type: String, enum: ['benchmark', 'current', 'prior'], required: true },
    sales: {
      openingStock: { type: Number, default: 0 },
      purchases: { type: Number, default: 0 },
      wages: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      revenue: { type: Number, default: 0 },
    },
    cogs: {
      closingStock: { type: Number, default: 0 },
      totalCOGS: { type: Number, default: 0 },
      grossProfit: { type: Number, default: 0 },
    },
    expenses: { type: Object, default: {} },
    netProfit: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProfitLoss', profitLossSchema);
