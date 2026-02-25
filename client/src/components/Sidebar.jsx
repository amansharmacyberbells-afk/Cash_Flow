import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Dashboard'],
  ['/settings', 'Setup / Settings'],
  ['/profit-loss', 'Profit & Loss'],
  ['/balance-sheet', 'Balance Sheet'],
  ['/breakeven', 'Breakeven'],
  ['/cash-drivers', '6 Cash Drivers'],
  ['/graphs', 'Graphs'],
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Business Analysis</h1>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className="nav-link">
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
