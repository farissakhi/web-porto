export const SmartAiEditorIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    style={{ display: "block" }}
    aria-label="Smart AI Image Editor illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Smart AI Image Editor</title>
    <defs>
      <linearGradient id="aied-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0c1225" />
      </linearGradient>
      <radialGradient id="aied-glow1" cx="35%" cy="50%" r="45%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="aied-glow2" cx="70%" cy="40%" r="40%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
      </radialGradient>
      {/* Canvas checker pattern */}
      <pattern id="aied-checker" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="4" height="4" fill="#1e2a3a" />
        <rect x="4" y="4" width="4" height="4" fill="#1e2a3a" />
        <rect x="4" y="0" width="4" height="4" fill="#16213a" />
        <rect x="0" y="4" width="4" height="4" fill="#16213a" />
      </pattern>
      {/* Neural style gradient overlay */}
      <linearGradient id="aied-style-a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#db2777" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="aied-toolbar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#111827" />
        <stop offset="100%" stopColor="#0d1421" />
      </linearGradient>
      {/* Sobel edge detection simulation */}
      <linearGradient id="aied-edge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="100%" stopColor="#312e81" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#aied-bg)" />
    <ellipse cx="150" cy="125" rx="160" ry="120" fill="url(#aied-glow1)" />
    <ellipse cx="290" cy="100" rx="140" ry="100" fill="url(#aied-glow2)" />

    {/* ─── App Frame ─── */}
    <rect x="16" y="14" width="368" height="222" rx="10" fill="#080d1a" stroke="#1e2d4a" strokeWidth="1" />

    {/* Titlebar */}
    <rect x="16" y="14" width="368" height="26" rx="10" fill="#0f1729" />
    <rect x="16" y="28" width="368" height="12" fill="#0f1729" />
    <circle cx="32" cy="27" r="4" fill="#ef4444" opacity="0.7" />
    <circle cx="46" cy="27" r="4" fill="#f59e0b" opacity="0.7" />
    <circle cx="60" cy="27" r="4" fill="#10b981" opacity="0.7" />
    <text x="200" y="31" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Smart AI Image Editor — Flask</text>

    {/* ─── Left toolbar ─── */}
    <rect x="16" y="40" width="40" height="196" fill="url(#aied-toolbar)" />
    {/* Tool icons */}
    {[
      { y: 55, icon: "✏", label: "Brush" },
      { y: 80, icon: "⬡", label: "Filter" },
      { y: 105, icon: "◎", label: "Select" },
      { y: 130, icon: "✂", label: "Crop" },
      { y: 155, icon: "↺", label: "Undo" },
      { y: 180, icon: "🤖", label: "AI" },
    ].map(({ y, icon, label }, i) => (
      <g key={label}>
        <rect x="21" y={y - 10} width="30" height="24" rx="5"
          fill={i === 5 ? "#4c1d95" : "#111827"}
          stroke={i === 5 ? "#8b5cf6" : "none"}
          strokeWidth="0.5" />
        <text x="36" y={y + 5} textAnchor="middle" fontSize={i === 5 ? "10" : "9"}>{icon}</text>
      </g>
    ))}

    {/* ─── Main Canvas Area ─── */}
    {/* Canvas with transparency checker */}
    <rect x="56" y="40" width="220" height="196" fill="url(#aied-checker)" />

    {/* ── Original image area (top half of canvas) ── */}
    {/* Sky gradient */}
    <rect x="56" y="40" width="220" height="90" fill="#1a3a5c" />
    {/* Sun */}
    <circle cx="230" cy="70" r="18" fill="#fbbf24" opacity="0.85" />
    <circle cx="230" cy="70" r="12" fill="#fde68a" opacity="0.9" />
    {/* Mountains */}
    <polygon points="56,130 110,70 160,130" fill="#1e4d3a" opacity="0.8" />
    <polygon points="100,130 165,62 225,130" fill="#166534" opacity="0.7" />
    <polygon points="170,130 220,82 276,130" fill="#14532d" opacity="0.9" />
    {/* Ground */}
    <rect x="56" y="125" width="220" height="5" fill="#92400e" opacity="0.6" />
    {/* Grass */}
    <ellipse cx="166" cy="126" rx="110" ry="8" fill="#15803d" opacity="0.6" />

    {/* ── Neural Style Transfer overlay (bottom half of canvas) ── */}
    <rect x="56" y="130" width="220" height="106" fill="url(#aied-style-a)" opacity="0.55" />
    {/* Swirl brush strokes (artistic effect) */}
    <path d="M60 155 Q100 135 140 160 Q180 185 220 155 Q250 135 276 160" stroke="#a78bfa" strokeWidth="2.5" fill="none" strokeOpacity="0.6" strokeLinecap="round" />
    <path d="M60 175 Q90 155 130 175 Q170 200 210 170 Q245 150 276 178" stroke="#f0abfc" strokeWidth="2" fill="none" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M60 195 Q110 175 155 200 Q195 218 240 198 Q260 188 276 200" stroke="#7dd3fc" strokeWidth="1.8" fill="none" strokeOpacity="0.5" strokeLinecap="round" />
    {/* Pointillist dots */}
    {[
      [75, 165], [95, 180], [120, 148], [145, 185], [165, 162], [190, 190], [215, 155], [250, 175], [270, 195]
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={2 + (i % 3)} fill={["#c084fc", "#f9a8d4", "#67e8f9"][i % 3]} opacity={0.5 + (i % 3) * 0.15} />
    ))}

    {/* Divider line between original/styled */}
    <line x1="56" y1="130" x2="276" y2="130" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4,3" />
    <rect x="136" y="123" width="60" height="14" rx="7" fill="#4c1d95" />
    <text x="166" y="132" textAnchor="middle" fontSize="6" fill="#c4b5fd" fontFamily="monospace">Neural Style</text>

    {/* ─── Right panel ─── */}
    <rect x="276" y="40" width="108" height="196" fill="#090e1c" />
    <rect x="276" y="40" width="108" height="1" fill="#1e2d4a" />

    {/* Filters section */}
    <text x="284" y="55" fontSize="7" fill="#94a3b8" fontFamily="sans-serif" fontWeight="bold">AI FEATURES</text>

    {[
      { label: "Neural Style", active: true, icon: "✦" },
      { label: "BG Remover", active: false, icon: "◈" },
      { label: "Edge Detect", active: false, icon: "⬡" },
      { label: "Auto Color", active: false, icon: "◉" },
    ].map(({ label, active, icon }, i) => (
      <g key={label}>
        <rect x="282" y={62 + i * 22} width="96" height="17" rx="4"
          fill={active ? "#1e1b4b" : "#0d1421"}
          stroke={active ? "#8b5cf6" : "#1e2d4a"}
          strokeWidth={active ? "0.8" : "0.4"} />
        <text x="292" y={74 + i * 22} fontSize="8">{icon}</text>
        <text x="302" y={74 + i * 22} fontSize="6.5" fill={active ? "#c4b5fd" : "#64748b"} fontFamily="sans-serif">{label}</text>
        {active && <circle cx="370" cy={70 + i * 22} r="3" fill="#8b5cf6" />}
      </g>
    ))}

    {/* Adjustment sliders */}
    <text x="284" y="156" fontSize="7" fill="#94a3b8" fontFamily="sans-serif" fontWeight="bold">ADJUSTMENTS</text>
    {[
      { label: "Brightness", val: 0.65 },
      { label: "Contrast", val: 0.45 },
      { label: "Saturation", val: 0.8 },
      { label: "Blur", val: 0.3 },
    ].map(({ label, val }, i) => (
      <g key={label}>
        <text x="282" y={167 + i * 15} fontSize="5.5" fill="#64748b" fontFamily="sans-serif">{label}</text>
        <rect x="282" y={169 + i * 15} width="96" height="5" rx="2.5" fill="#1e2d4a" />
        <rect x="282" y={169 + i * 15} width={96 * val} height="5" rx="2.5" fill="#8b5cf6" opacity="0.8" />
        <circle cx={282 + 96 * val} cy={171 + i * 15} r="3.5" fill="#a78bfa" />
      </g>
    ))}

    {/* Export button */}
    <rect x="282" y="222" width="96" height="14" rx="7" fill="#7c3aed" opacity="0.9" />
    <text x="330" y="231" textAnchor="middle" fontSize="6.5" fill="#fff" fontFamily="sans-serif" fontWeight="bold">Export Image</text>

    {/* ─── Bottom status bar ─── */}
    <rect x="56" y="226" width="220" height="10" fill="#0a0f1e" />
    <text x="62" y="233" fontSize="5" fill="#475569" fontFamily="monospace">OpenCV 4.8  |  Flask 3.0  |  DNN: NST Active</text>
    <circle cx="267" cy="231" r="2.5" fill="#10b981" opacity="0.8" />

    {/* Undo/Redo history indicator */}
    <rect x="62" y="42" width="50" height="9" rx="4" fill="#111827" />
    <text x="66" y="49" fontSize="5.5" fill="#475569" fontFamily="monospace">↺ Undo  ↻ Redo</text>
  </svg>
);
