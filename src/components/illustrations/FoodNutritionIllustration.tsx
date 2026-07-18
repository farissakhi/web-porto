export const FoodNutritionIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    style={{ display: "block" }}
    aria-label="Food Predictor & Nutrition Tracker illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Food Predictor &amp; Nutrition Tracker</title>
    <defs>
      <linearGradient id="food-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d1a10" />
        <stop offset="100%" stopColor="#111a0c" />
      </linearGradient>
      <radialGradient id="food-glow" cx="40%" cy="55%" r="50%">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="food-plate-rim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#166534" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <linearGradient id="food-bar-cal" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#fb923c" />
      </linearGradient>
      <linearGradient id="food-bar-prot" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="food-bar-fat" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#ca8a04" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <linearGradient id="food-bar-carb" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#0d9488" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#food-bg)" />
    <ellipse cx="160" cy="140" rx="160" ry="100" fill="url(#food-glow)" />

    {/* ─── Left side: Plate + Food ─── */}
    {/* Plate shadow */}
    <ellipse cx="145" cy="148" rx="80" ry="10" fill="#000" opacity="0.25" />
    {/* Plate rim */}
    <circle cx="145" cy="128" r="78" fill="url(#food-plate-rim)" opacity="0.3" />
    {/* Plate base */}
    <circle cx="145" cy="128" r="72" fill="#0f1f0e" />
    {/* Plate inner ring */}
    <circle cx="145" cy="128" r="65" fill="none" stroke="#166534" strokeWidth="1" strokeOpacity="0.4" />

    {/* Food items on plate */}
    {/* Rice/grain mound */}
    <ellipse cx="140" cy="135" rx="28" ry="16" fill="#d4a96a" opacity="0.85" />
    <ellipse cx="140" cy="128" rx="22" ry="14" fill="#e8c07a" opacity="0.9" />
    {/* Grain dots */}
    {[[-5, -2], [3, -4], [-8, 2], [6, 1], [0, 4], [-3, 6]].map(([dx, dy], i) => (
      <ellipse key={i} cx={140 + dx} cy={130 + dy} rx="3" ry="2" fill="#f5d58a" opacity="0.7" />
    ))}

    {/* Veggie (broccoli-like) */}
    <circle cx="112" cy="118" r="10" fill="#16a34a" opacity="0.9" />
    <circle cx="120" cy="112" r="8" fill="#15803d" opacity="0.9" />
    <circle cx="105" cy="112" r="7" fill="#166534" opacity="0.85" />
    <rect x="113" y="124" width="4" height="8" rx="2" fill="#14532d" opacity="0.8" />

    {/* Protein slice */}
    <ellipse cx="172" cy="120" rx="18" ry="12" fill="#b45309" opacity="0.85" />
    <ellipse cx="172" cy="118" rx="14" ry="9" fill="#d97706" opacity="0.7" />

    {/* Scan/detect frame overlay */}
    <rect x="90" y="72" width="110" height="110" rx="4" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="8,4" strokeOpacity="0.7" />
    {/* Corner brackets */}
    {[
      [90, 72], [200, 72], [90, 182], [200, 182]
    ].map(([x, y], i) => (
      <g key={i}>
        <line x1={x} y1={y} x2={x + (i % 2 === 0 ? 12 : -12)} y2={y} stroke="#22c55e" strokeWidth="2.5" strokeOpacity="0.9" />
        <line x1={x} y1={y} x2={x} y2={y + (i < 2 ? 12 : -12)} stroke="#22c55e" strokeWidth="2.5" strokeOpacity="0.9" />
      </g>
    ))}

    {/* Scan line animation (static representation) */}
    <line x1="90" y1="118" x2="200" y2="118" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="90" y="115" width="110" height="6" fill="#22c55e" fillOpacity="0.06" />

    {/* AI predict label */}
    <rect x="108" y="58" width="74" height="14" rx="7" fill="#14532d" stroke="#22c55e" strokeWidth="0.6" strokeOpacity="0.7" />
    <text x="145" y="68" textAnchor="middle" fontSize="6.5" fill="#86efac" fontFamily="monospace">🍛 Nasi Goreng — 94%</text>

    {/* ─── Right side: Nutrition panel ─── */}
    <rect x="232" y="32" width="148" height="188" rx="10" fill="#071209" stroke="#22c55e" strokeWidth="0.7" strokeOpacity="0.35" />
    {/* Header */}
    <rect x="232" y="32" width="148" height="26" rx="10" fill="#0f2d10" />
    <rect x="232" y="46" width="148" height="12" fill="#0f2d10" />
    <text x="306" y="49" textAnchor="middle" fontSize="8.5" fill="#4ade80" fontFamily="sans-serif" fontWeight="bold">Nutrition Info</text>

    {/* Calorie ring */}
    <circle cx="306" cy="90" r="28" fill="none" stroke="#1a2e1a" strokeWidth="6" />
    <circle cx="306" cy="90" r="28" fill="none" stroke="#f97316" strokeWidth="6"
      strokeDasharray="130 176" strokeDashoffset="44" strokeLinecap="round" />
    <text x="306" y="87" textAnchor="middle" fontSize="13" fill="#fb923c" fontFamily="sans-serif" fontWeight="bold">342</text>
    <text x="306" y="97" textAnchor="middle" fontSize="6" fill="#86efac" fontFamily="sans-serif">kcal</text>

    {/* Nutrition bars */}
    {[
      { label: "Protein", val: 18, max: 40, color: "url(#food-bar-prot)", y: 132 },
      { label: "Lemak", val: 12, max: 40, color: "url(#food-bar-fat)", y: 152 },
      { label: "Karbo", val: 45, max: 80, color: "url(#food-bar-carb)", y: 172 },
    ].map(({ label, val, max, color, y }) => (
      <g key={label}>
        <text x="245" y={y - 2} fontSize="6.5" fill="#86efac" fontFamily="sans-serif">{label}</text>
        <rect x="245" y={y + 1} width="120" height="7" rx="3.5" fill="#1a2e1a" />
        <rect x="245" y={y + 1} width={(val / max) * 120} height="7" rx="3.5" fill={color} opacity="0.9" />
        <text x="370" y={y + 7} textAnchor="end" fontSize="6" fill="#a3e635" fontFamily="monospace">{val}g</text>
      </g>
    ))}

    {/* Portion adjust */}
    <rect x="245" y="195" width="120" height="18" rx="9" fill="#0f2d10" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.5" />
    <text x="255" y="207" fontSize="7" fill="#4ade80">−</text>
    <text x="305" y="207" textAnchor="middle" fontSize="7" fill="#86efac" fontFamily="sans-serif">Porsi: 1x</text>
    <text x="357" y="207" textAnchor="end" fontSize="7" fill="#4ade80">+</text>
  </svg>
);
