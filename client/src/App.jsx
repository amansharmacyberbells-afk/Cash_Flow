import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import ProfitLossPage from './pages/ProfitLossPage';
import BalanceSheetPage from './pages/BalanceSheetPage';
import BreakevenPage from './pages/BreakevenPage';
import CashDriversPage from './pages/CashDriversPage';
import GraphsPage from './pages/GraphsPage';

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profit-loss" element={<ProfitLossPage />} />
          <Route path="/balance-sheet" element={<BalanceSheetPage />} />
          <Route path="/breakeven" element={<BreakevenPage />} />
          <Route path="/cash-drivers" element={<CashDriversPage />} />
          <Route path="/graphs" element={<GraphsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
