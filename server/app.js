const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const settingsRoutes = require('./routes/settings');
const profitLossRoutes = require('./routes/profitLoss');
const balanceSheetRoutes = require('./routes/balanceSheet');
const breakevenRoutes = require('./routes/breakeven');
const cashDriversRoutes = require('./routes/cashDrivers');
const scenariosRoutes = require('./routes/scenarios');
const calculateRoutes = require('./routes/calculate');
const reportRoutes = require('./routes/report');
const clearAllRoutes = require('./routes/clearAll');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/settings', settingsRoutes);
app.use('/api/profit-loss', profitLossRoutes);
app.use('/api/balance-sheet', balanceSheetRoutes);
app.use('/api/breakeven', breakevenRoutes);
app.use('/api/cash-drivers', cashDriversRoutes);
app.use('/api/scenarios', scenariosRoutes);
app.use('/api/calculate', calculateRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/clear-all', clearAllRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use(errorHandler);

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

async function start() {
  if (mongoUri) {
    await mongoose.connect(mongoUri);
  }
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
