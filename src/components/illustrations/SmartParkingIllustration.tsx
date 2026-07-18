export const SmartParkingIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    aria-label="Smart Parking System illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Smart Parking System</title>
    <defs>
      <linearGradient id="park-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0e0a1a" />
        <stop offset="100%" stopColor="#130f24" />
      </linearGradient>
      <radialGradient id="park-glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="park-slot-occ" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e1035" />
        <stop offset="100%" stopColor="#2d1b5e" />
      </linearGradient>
      <linearGradient id="park-slot-free" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d1f12" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#park-bg)" />
    <ellipse cx="200" cy="130" rx="190" ry="110" fill="url(#park-glow)" />

    {/* ─── Parking lot (top-down view) ─── */}
    {/* Lot boundary */}
    <rect x="30" y="30" width="230" height="190" rx="8" fill="#0a0814" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.4" />

    {/* Road / drive lane */}
    <rect x="30" y="105" width="230" height="40" fill="#110e1e" />
    <line x1="30" y1="125" x2="260" y2="125" stroke="#f8fafc" strokeWidth="1" strokeDasharray="12,8" strokeOpacity="0.2" />

    {/* ─── Parking slots — top row ─── */}
    {[0, 1, 2, 3, 4].map((i) => {
      const occupied = [0, 2, 4].includes(i);
      return (
        <g key={`top-${i}`}>
          <rect x={38 + i * 44} y="38" width="36" height="62" rx="3"
            fill={occupied ? "url(#park-slot-occ)" : "url(#park-slot-free)"}
            stroke={occupied ? "#7c3aed" : "#16a34a"}
            strokeWidth="0.6" strokeOpacity="0.6" />
          {/* Slot number */}
          <text x={56 + i * 44} y="53" textAnchor="middle" fontSize="7" fill={occupied ? "#a78bfa" : "#4ade80"} fontFamily="monospace">
            {String(i + 1).padStart(2, "0")}
          </text>
          {/* Status dot */}
          <circle cx={56 + i * 44} cy="90" r="5" fill={occupied ? "#7c3aed" : "#22c55e"} opacity="0.85" />
          {occupied && (
            // Simplified car top-view (occupied slots)
            <g transform={`translate(${38 + i * 44 + 5}, 58)`}>
              <rect x="0" y="0" width="26" height="22" rx="4" fill="#4c1d95" opacity="0.8" />
              <rect x="4" y="2" width="18" height="7" rx="2" fill="#6d28d9" opacity="0.7" />
              <circle cx="4" cy="20" r="2.5" fill="#1e1035" />
              <circle cx="22" cy="20" r="2.5" fill="#1e1035" />
            </g>
          )}
        </g>
      );
    })}

    {/* ─── Parking slots — bottom row ─── */}
    {[0, 1, 2, 3, 4].map((i) => {
      const occupied = [1, 3].includes(i);
      return (
        <g key={`bot-${i}`}>
          <rect x={38 + i * 44} y="150" width="36" height="62" rx="3"
            fill={occupied ? "url(#park-slot-occ)" : "url(#park-slot-free)"}
            stroke={occupied ? "#7c3aed" : "#16a34a"}
            strokeWidth="0.6" strokeOpacity="0.6" />
          <text x={56 + i * 44} y="165" textAnchor="middle" fontSize="7" fill={occupied ? "#a78bfa" : "#4ade80"} fontFamily="monospace">
            {String(i + 6).padStart(2, "0")}
          </text>
          <circle cx={56 + i * 44} cy="200" r="5" fill={occupied ? "#7c3aed" : "#22c55e"} opacity="0.85" />
          {occupied && (
            <g transform={`translate(${38 + i * 44 + 5}, 168)`}>
              <rect x="0" y="0" width="26" height="22" rx="4" fill="#4c1d95" opacity="0.8" />
              <rect x="4" y="2" width="18" height="7" rx="2" fill="#6d28d9" opacity="0.7" />
              <circle cx="4" cy="20" r="2.5" fill="#1e1035" />
              <circle cx="22" cy="20" r="2.5" fill="#1e1035" />
            </g>
          )}
        </g>
      );
    })}

    {/* Entry gate */}
    <rect x="250" y="112" width="6" height="26" rx="2" fill="#7c3aed" opacity="0.7" />
    <rect x="256" y="122" width="28" height="3" rx="1.5" fill="#a78bfa" opacity="0.9" />

    {/* ─── Right panel: Dashboard ─── */}
    <rect x="272" y="20" width="110" height="210" rx="10" fill="#0b0918" stroke="#7c3aed" strokeWidth="0.7" strokeOpacity="0.4" />
    {/* Header */}
    <rect x="272" y="20" width="110" height="28" rx="10" fill="#1a0f36" />
    <rect x="272" y="36" width="110" height="12" fill="#1a0f36" />
    <text x="327" y="37" textAnchor="middle" fontSize="7.5" fill="#c4b5fd" fontFamily="sans-serif" fontWeight="bold">Smart Parking</text>

    {/* Status summary */}
    <text x="285" y="62" fontSize="6.5" fill="#a78bfa" fontFamily="sans-serif">Tersedia</text>
    <text x="370" y="62" textAnchor="end" fontSize="10" fill="#22c55e" fontFamily="monospace" fontWeight="bold">5</text>

    <text x="285" y="79" fontSize="6.5" fill="#a78bfa" fontFamily="sans-serif">Terisi</text>
    <text x="370" y="79" textAnchor="end" fontSize="10" fill="#a78bfa" fontFamily="monospace" fontWeight="bold">5</text>

    {/* Mini bar chart */}
    <rect x="285" y="88" width="92" height="1" fill="#2d1b5e" />
    {[70, 50, 80, 40, 90, 55, 60].map((h, i) => (
      <rect key={i} x={285 + i * 14} y={100 + (40 - h * 0.4)} width="10" height={h * 0.4}
        rx="2" fill="#7c3aed" opacity={0.5 + (i % 2) * 0.3} />
    ))}
    <text x="327" y="148" textAnchor="middle" fontSize="5.5" fill="#6d28d9" fontFamily="monospace">Last 7 days</text>

    {/* OCR / Plate read */}
    <rect x="285" y="155" width="92" height="22" rx="5" fill="#160d30" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.5" />
    <text x="331" y="163" textAnchor="middle" fontSize="6" fill="#c4b5fd" fontFamily="monospace">Plat Terbaca</text>
    <text x="331" y="173" textAnchor="middle" fontSize="8" fill="#e879f9" fontFamily="monospace" fontWeight="bold">B 2934 SKI</text>

    {/* Camera feed */}
    <rect x="285" y="183" width="92" height="38" rx="5" fill="#0d0b1a" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.4" />
    <rect x="290" y="188" width="82" height="28" rx="3" fill="#1a1030" />
    {/* Car silhouette in camera */}
    <rect x="315" y="196" width="32" height="14" rx="4" fill="#6d28d9" opacity="0.6" />
    <rect x="321" y="193" width="20" height="8" rx="2" fill="#7c3aed" opacity="0.5" />
    <circle cx="318" cy="211" r="2.5" fill="#0e0a1a" />
    <circle cx="345" cy="211" r="2.5" fill="#0e0a1a" />
    <text x="291" y="193" fontSize="5" fill="#a78bfa" fontFamily="monospace">CAM</text>

    {/* ESP32 indicator */}
    <rect x="285" y="227" width="92" height="0" fill="none" />
    <circle cx="295" cy="222" r="3" fill="#22c55e" opacity="0.8" />
    <text x="302" y="225" fontSize="6" fill="#86efac" fontFamily="monospace">ESP32 Connected</text>
  </svg>
);
