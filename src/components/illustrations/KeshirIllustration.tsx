export const KeshirIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    style={{ display: "block" }}
    aria-label="Keshir POS System illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Keshir — POS System</title>
    <defs>
      <linearGradient id="keshir-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#150e05" />
        <stop offset="100%" stopColor="#1a1108" />
      </linearGradient>
      <radialGradient id="keshir-glow" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#d97706" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="keshir-cup-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="keshir-receipt" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
      <linearGradient id="keshir-screen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1c0f02" />
        <stop offset="100%" stopColor="#241504" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#keshir-bg)" />
    <ellipse cx="200" cy="125" rx="200" ry="110" fill="url(#keshir-glow)" />

    {/* ── Counter / surface ── */}
    <rect x="20" y="190" width="360" height="50" rx="6" fill="#1c110a" stroke="#92400e" strokeWidth="0.5" strokeOpacity="0.4" />
    <rect x="20" y="190" width="360" height="6" rx="3" fill="#2d1a0c" />

    {/* ─── Center: Coffee Cup ─── */}
    {/* Steam wisps */}
    <path d="M172 85 Q168 72 172 60 Q176 48 172 36" stroke="#d1fae5" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeOpacity="0.35" />
    <path d="M186 80 Q182 68 186 56 Q190 44 186 32" stroke="#d1fae5" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeOpacity="0.28" />
    <path d="M200 78 Q196 66 200 54 Q204 42 200 30" stroke="#d1fae5" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeOpacity="0.22" />

    {/* Cup body */}
    <path d="M155 100 L165 185 L235 185 L245 100 Z" rx="4" fill="url(#keshir-cup-body)" />
    {/* Cup top rim */}
    <ellipse cx="200" cy="100" rx="45" ry="8" fill="#a16207" />
    {/* Coffee surface */}
    <ellipse cx="200" cy="100" rx="40" ry="6.5" fill="#6b3a0f" />
    {/* Latte art swirl */}
    <path d="M190 100 Q200 95 210 100 Q200 105 190 100" stroke="#d4a574" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
    <circle cx="200" cy="100" r="3" fill="#d4a574" opacity="0.5" />
    {/* Cup sleeve */}
    <path d="M160 145 L168 185 L232 185 L240 145 Z" fill="#92400e" opacity="0.5" />
    {/* Logo on cup */}
    <text x="200" y="165" textAnchor="middle" fontSize="11" fill="#fde68a" fontFamily="serif" fontWeight="bold" opacity="0.8">K</text>
    {/* Cup handle */}
    <path d="M245 130 Q268 130 268 150 Q268 170 245 170" stroke="#92400e" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M245 130 Q262 130 262 150 Q262 170 245 170" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Saucer */}
    <ellipse cx="200" cy="188" rx="62" ry="8" fill="#7c3304" opacity="0.8" />
    <ellipse cx="200" cy="188" rx="55" ry="5.5" fill="#6b2c02" opacity="0.6" />

    {/* ─── Left: POS Tablet ─── */}
    <rect x="24" y="65" width="112" height="122" rx="8" fill="#1a0f05" stroke="#d97706" strokeWidth="0.7" strokeOpacity="0.4" />
    {/* Screen */}
    <rect x="30" y="72" width="100" height="100" rx="5" fill="url(#keshir-screen)" />

    {/* POS menu items */}
    <text x="80" y="87" textAnchor="middle" fontSize="7.5" fill="#fbbf24" fontFamily="sans-serif" fontWeight="bold">☕ Menu</text>
    {[
      { name: "Kopi Susu", price: "25K" },
      { name: "Latte", price: "28K" },
      { name: "Americano", price: "22K" },
      { name: "Croissant", price: "18K" },
    ].map(({ name, price }, i) => (
      <g key={name}>
        <rect x="34" y={93 + i * 17} width="92" height="13" rx="3"
          fill={i === 1 ? "#431a03" : "#1e0f03"}
          stroke={i === 1 ? "#d97706" : "none"} strokeWidth="0.5" />
        <text x="40" y={103 + i * 17} fontSize="6.5" fill="#fde68a" fontFamily="sans-serif">{name}</text>
        <text x="120" y={103 + i * 17} textAnchor="end" fontSize="6.5" fill="#fbbf24" fontFamily="monospace">{price}</text>
      </g>
    ))}

    {/* Total & Pay button */}
    <line x1="34" y1="161" x2="126" y2="161" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.4" />
    <text x="40" y="170" fontSize="6.5" fill="#fde68a" fontFamily="sans-serif">Total</text>
    <text x="120" y="170" textAnchor="end" fontSize="8" fill="#4ade80" fontFamily="monospace" fontWeight="bold">Rp 53K</text>

    <rect x="34" y="174" width="92" height="14" rx="7" fill="#d97706" opacity="0.9" />
    <text x="80" y="183" textAnchor="middle" fontSize="7" fill="#fff" fontFamily="sans-serif" fontWeight="bold">BAYAR</text>

    {/* Stand */}
    <rect x="74" y="187" width="12" height="8" rx="2" fill="#451a03" />
    <rect x="64" y="195" width="32" height="4" rx="2" fill="#451a03" />

    {/* ─── Right: Receipt ─── */}
    <g transform="translate(296, 52) rotate(4)">
      <rect x="0" y="0" width="80" height="135" rx="3" fill="url(#keshir-receipt)" />
      {/* Receipt serration at bottom */}
      {Array.from({ length: 10 }).map((_, i) => (
        <polygon key={i} points={`${i * 8},135 ${i * 8 + 4},141 ${i * 8 + 8},135`} fill="url(#keshir-bg)" />
      ))}
      {/* Keshir logo on receipt */}
      <text x="40" y="16" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="serif" fontWeight="bold">KESHIR</text>
      <text x="40" y="24" textAnchor="middle" fontSize="5.5" fill="#b45309" fontFamily="sans-serif">Coffee &amp; Resto</text>
      <line x1="8" y1="28" x2="72" y2="28" stroke="#b45309" strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Items */}
      {[
        ["Kopi Susu", "1x", "25K"],
        ["Latte", "1x", "28K"],
        ["Croissant", "1x", "18K"],
      ].map(([item, qty, price], i) => (
        <g key={item as string}>
          <text x="8" y={40 + i * 14} fontSize="6" fill="#78350f" fontFamily="sans-serif">{item as string}</text>
          <text x="40" y={40 + i * 14} textAnchor="middle" fontSize="6" fill="#92400e" fontFamily="sans-serif">{qty as string}</text>
          <text x="72" y={40 + i * 14} textAnchor="end" fontSize="6" fill="#78350f" fontFamily="monospace">{price as string}</text>
        </g>
      ))}
      <line x1="8" y1="84" x2="72" y2="84" stroke="#b45309" strokeWidth="0.5" strokeDasharray="2,2" />
      <text x="8" y="95" fontSize="7" fill="#451a03" fontFamily="sans-serif" fontWeight="bold">TOTAL</text>
      <text x="72" y="95" textAnchor="end" fontSize="8" fill="#451a03" fontFamily="monospace" fontWeight="bold">71K</text>
      {/* Payment method */}
      <rect x="16" y="100" width="48" height="12" rx="3" fill="#d97706" opacity="0.85" />
      <text x="40" y="109" textAnchor="middle" fontSize="6.5" fill="#fff" fontFamily="sans-serif">Midtrans ✓</text>
      {/* Barcode representation */}
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={i} x={10 + i * 3.3} y="118" width={i % 3 === 0 ? 2 : 1} height="10" rx="0.5" fill="#451a03" opacity={0.5 + (i % 4) * 0.1} />
      ))}
      <text x="40" y="135" textAnchor="middle" fontSize="4.5" fill="#92400e" fontFamily="monospace">*2847103*</text>
    </g>

    {/* RFID indicator */}
    <circle cx="322" cy="205" r="6" fill="#d97706" opacity="0.2" />
    <circle cx="322" cy="205" r="4" fill="#d97706" opacity="0.3" />
    <circle cx="322" cy="205" r="2" fill="#d97706" opacity="0.7" />
    <text x="332" y="208" fontSize="6" fill="#fbbf24" fontFamily="monospace" opacity="0.7">RFID</text>
  </svg>
);
