const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema(
  {
    companyName: String,
    preparedFor: String,
    preparedBy: {
      name: String,
      address: String,
      email: String,
      phone: String,
      website: String,
    },
    currentPeriod: {
      startDate: Date,
      endDate: Date,
    },
    priorPeriod: {
      startDate: Date,
      endDate: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', settingsSchema);
