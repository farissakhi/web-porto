export const FinanceManagerIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    style={{ display: "block" }}
    aria-label="Finance Manager illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Finance Manager</title>
    <defs>
      <linearGradient id="fin-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0c1a0a" />
        <stop offset="100%" stopColor="#0f1c0d" />
      </linearGradient>
      <radialGradient id="fin-glow" cx="55%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#16a34a" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="fin-card" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14532d" />
        <stop offset="50%" stopColor="#166534" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
      <linearGradient id="fin-bar-inc" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <linearGradient id="fin-bar-exp" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#fin-bg)" />
    <ellipse cx="220" cy="100" rx="200" ry="120" fill="url(#fin-glow)" />

    {/* ─── Left: App Phone Frame ─── */}
    <rect x="28" y="18" width="138" height="214" rx="18" fill="#070f06" stroke="#166534" strokeWidth="1" strokeOpacity="0.5" />
    {/* Notch */}
    <rect x="68" y="18" width="58" height="10" rx="5" fill="#070f06" />
    <rect x="68" y="22" width="58" height="6" rx="3" fill="#0a1708" />

    {/* ── Balance card inside phone ── */}
    <rect x="36" y="36" width="122" height="62" rx="10" fill="url(#fin-card)" />
    {/* Card shine */}
    <ellipse cx="100" cy="50" rx="50" ry="20" fill="#fff" fillOpacity="0.05" />
    <text x="48" y="55" fontSize="6.5" fill="#86efac" fontFamily="sans-serif" opacity="0.8">Total Balance</text>
    <text x="48" y="72" fontSize="16" fill="#fff" fontFamily="monospace" fontWeight="bold">Rp 4.2M</text>
    <text x="48" y="86" fontSize="5.5" fill="#a3e635" fontFamily="sans-serif" opacity="0.8">↑ +12.4% this month</text>
    {/* Chip icon */}
    <rect x="128" y="64" width="20" height="14" rx="2" fill="#f59e0b" opacity="0.7" />
    <rect x="130" y="67" width="6" height="5" rx="1" fill="#d97706" opacity="0.8" />
    <rect x="138" y="67" width="6" height="5" rx="1" fill="#d97706" opacity="0.8" />
    <line x1="130" y1="69" x2="150" y2="69" stroke="#d97706" strokeWidth="0.4" opacity="0.6" />

    {/* ── Quick stats ── */}
    <rect x="36" y="106" width="55" height="36" rx="8" fill="#0d2210" stroke="#16a34a" strokeWidth="0.5" strokeOpacity="0.4" />
    <text x="63" y="120" textAnchor="middle" fontSize="6" fill="#86efac" fontFamily="sans-serif">Pemasukan</text>
    <text x="63" y="133" textAnchor="middle" fontSize="9" fill="#4ade80" fontFamily="monospace" fontWeight="bold">2.8M</text>

    <rect x="103" y="106" width="55" height="36" rx="8" fill="#1c0f03" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.4" />
    <text x="130" y="120" textAnchor="middle" fontSize="6" fill="#fcd34d" fontFamily="sans-serif">Pengeluaran</text>
    <text x="130" y="133" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="monospace" fontWeight="bold">1.1M</text>

    {/* ── Transaction list ── */}
    {[
      { label: "Gaji", amount: "+2.8M", color: "#4ade80", icon: "💼" },
      { label: "Makan", amount: "-85K", color: "#fbbf24", icon: "🍜" },
      { label: "Netflix", amount: "-54K", color: "#f87171", icon: "📺" },
      { label: "Listrik", amount: "-120K", color: "#f87171", icon: "⚡" },
    ].map(({ label, amount, color, icon }, i) => (
      <g key={label}>
        <rect x="36" y={152 + i * 18} width="122" height="15" rx="4" fill="#0a1708" />
        <text x="44" y={163 + i * 18} fontSize="8">{icon}</text>
        <text x="58" y={163 + i * 18} fontSize="6.5" fill="#86efac" fontFamily="sans-serif">{label}</text>
        <text x="152" y={163 + i * 18} textAnchor="end" fontSize="6.5" fill={color} fontFamily="monospace" fontWeight="bold">{amount}</text>
      </g>
    ))}

    {/* ─── Right: Chart panel ─── */}
    <rect x="182" y="18" width="190" height="214" rx="12" fill="#060f05" stroke="#166534" strokeWidth="0.7" strokeOpacity="0.35" />
    {/* Title */}
    <text x="277" y="40" textAnchor="middle" fontSize="9" fill="#4ade80" fontFamily="sans-serif" fontWeight="bold">Monthly Overview</text>

    {/* Bar chart - 6 months */}
    {[
      { month: "Feb", inc: 70, exp: 35 },
      { month: "Mar", inc: 85, exp: 45 },
      { month: "Apr", inc: 60, exp: 50 },
      { month: "Mei", inc: 90, exp: 30 },
      { month: "Jun", inc: 75, exp: 40 },
      { month: "Jul", inc: 95, exp: 25 },
    ].map(({ month, inc, exp }, i) => (
      <g key={month}>
        {/* Income bar */}
        <rect x={196 + i * 30} y={148 - inc} width="12" height={inc} rx="3" fill="url(#fin-bar-inc)" opacity="0.9" />
        {/* Expense bar */}
        <rect x={210 + i * 30} y={148 - exp} width="12" height={exp} rx="3" fill="url(#fin-bar-exp)" opacity="0.85" />
        <text x={209 + i * 30} y="158" textAnchor="middle" fontSize="6" fill="#86efac" fontFamily="sans-serif">{month}</text>
      </g>
    ))}

    {/* Chart baseline */}
    <line x1="192" y1="148" x2="366" y2="148" stroke="#166534" strokeWidth="0.8" strokeOpacity="0.4" />

    {/* Legend */}
    <rect x="196" y="166" width="8" height="8" rx="2" fill="#4ade80" />
    <text x="208" y="173" fontSize="6.5" fill="#86efac" fontFamily="sans-serif">Pemasukan</text>
    <rect x="258" y="166" width="8" height="8" rx="2" fill="#fbbf24" />
    <text x="270" y="173" fontSize="6.5" fill="#fcd34d" fontFamily="sans-serif">Pengeluaran</text>

    {/* Savings goal */}
    <rect x="194" y="182" width="172" height="40" rx="8" fill="#0d2210" stroke="#166534" strokeWidth="0.5" strokeOpacity="0.5" />
    <text x="206" y="196" fontSize="7" fill="#86efac" fontFamily="sans-serif">Target Tabungan — Laptop</text>
    <rect x="206" y="200" width="148" height="9" rx="4.5" fill="#0a1708" />
    <rect x="206" y="200" width="98" height="9" rx="4.5" fill="url(#fin-bar-inc)" opacity="0.8" />
    <text x="280" y="226" textAnchor="middle" fontSize="6" fill="#4ade80" fontFamily="monospace">Rp 3.2M / 5M  (64%)</text>
  </svg>
);
