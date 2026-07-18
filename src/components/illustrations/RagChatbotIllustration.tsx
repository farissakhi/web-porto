export const RagChatbotIllustration = () => (
  <svg
    viewBox="0 0 400 250"
    className="w-full h-full"
    aria-label="Multi-Tenant RAG Chatbot illustration"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Multi-Tenant RAG Chatbot</title>
    <defs>
      {/* Background gradient */}
      <linearGradient id="rag-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a1628" />
        <stop offset="100%" stopColor="#0d1f3c" />
      </linearGradient>
      {/* Cyan glow */}
      <radialGradient id="rag-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </radialGradient>
      {/* Accent gradient for bubbles */}
      <linearGradient id="rag-bubble1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="rag-bubble2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#1e4d6b" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="400" height="250" fill="url(#rag-bg)" />
    {/* Glow center */}
    <ellipse cx="200" cy="125" rx="180" ry="100" fill="url(#rag-glow)" />

    {/* Grid lines - subtle */}
    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
      <line key={`vl-${x}`} x1={x} y1="0" x2={x} y2="250" stroke="#0ea5e9" strokeWidth="0.3" strokeOpacity="0.08" />
    ))}
    {[50, 100, 150, 200].map((y) => (
      <line key={`hl-${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#0ea5e9" strokeWidth="0.3" strokeOpacity="0.08" />
    ))}

    {/* ─── Tenant layer indicators (left side stacked) ─── */}
    {[0, 1, 2].map((i) => (
      <rect
        key={`tenant-${i}`}
        x={22 + i * 5}
        y={28 + i * 5}
        width="72"
        height="40"
        rx="6"
        fill="#0f2744"
        stroke="#0ea5e9"
        strokeWidth="0.6"
        strokeOpacity={0.6 - i * 0.15}
        opacity={1 - i * 0.2}
      />
    ))}
    {/* Tenant label */}
    <text x="58" y="52" textAnchor="middle" fontSize="7" fill="#38bdf8" fontFamily="monospace" opacity="0.9">
      TENANT A
    </text>
    <text x="63" y="62" textAnchor="middle" fontSize="5.5" fill="#7dd3fc" fontFamily="monospace" opacity="0.6">
      Isolated DB
    </text>

    {/* ─── Center: Chat window ─── */}
    {/* Window frame */}
    <rect x="115" y="25" width="170" height="195" rx="10" fill="#071525" stroke="#0ea5e9" strokeWidth="0.8" strokeOpacity="0.4" />
    {/* Titlebar */}
    <rect x="115" y="25" width="170" height="22" rx="10" fill="#0c2240" />
    <rect x="115" y="36" width="170" height="11" fill="#0c2240" />
    {/* Dots */}
    <circle cx="128" cy="36" r="3.5" fill="#ef4444" opacity="0.7" />
    <circle cx="140" cy="36" r="3.5" fill="#f59e0b" opacity="0.7" />
    <circle cx="152" cy="36" r="3.5" fill="#10b981" opacity="0.7" />
    {/* Title */}
    <text x="200" y="40" textAnchor="middle" fontSize="7.5" fill="#7dd3fc" fontFamily="monospace" opacity="0.8">RAG Chat</text>

    {/* User bubble (right-aligned) */}
    <rect x="185" y="58" width="87" height="20" rx="10" fill="url(#rag-bubble1)" opacity="0.95" />
    <text x="228" y="72" textAnchor="middle" fontSize="6.5" fill="#fff" fontFamily="sans-serif">Siapa vendor terbaik?</text>

    {/* Bot thinking dots */}
    <rect x="125" y="86" width="45" height="18" rx="9" fill="url(#rag-bubble2)" />
    <circle cx="138" cy="95" r="2.5" fill="#38bdf8" opacity="0.9" />
    <circle cx="148" cy="95" r="2.5" fill="#38bdf8" opacity="0.7" />
    <circle cx="158" cy="95" r="2.5" fill="#38bdf8" opacity="0.5" />

    {/* Bot response bubble */}
    <rect x="125" y="112" width="130" height="38" rx="10" fill="url(#rag-bubble2)" />
    <text x="190" y="126" textAnchor="middle" fontSize="6.2" fill="#bae6fd" fontFamily="sans-serif">Berdasarkan dokumen Anda,</text>
    <text x="190" y="137" textAnchor="middle" fontSize="6.2" fill="#bae6fd" fontFamily="sans-serif">vendor A memiliki rating 4.8...</text>
    <text x="190" y="146" textAnchor="middle" fontSize="5.5" fill="#38bdf8" fontFamily="monospace">[Retrieved: 3 chunks]</text>

    {/* Another user bubble */}
    <rect x="185" y="158" width="80" height="18" rx="9" fill="url(#rag-bubble1)" opacity="0.8" />
    <text x="225" y="171" textAnchor="middle" fontSize="6" fill="#fff" fontFamily="sans-serif">Tampilkan detail nya</text>

    {/* Input bar */}
    <rect x="120" y="185" width="155" height="24" rx="12" fill="#0f2744" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.5" />
    <text x="185" y="200" textAnchor="middle" fontSize="6.5" fill="#475569" fontFamily="sans-serif">Ketik pesan...</text>
    {/* Send button */}
    <circle cx="264" cy="197" r="8" fill="#0ea5e9" opacity="0.85" />
    <polygon points="261,194 268,197 261,200" fill="#fff" />

    {/* ─── Right side: Vector DB indicator ─── */}
    <rect x="304" y="60" width="72" height="100" rx="8" fill="#0a1e35" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.5" />
    <text x="340" y="76" textAnchor="middle" fontSize="6.5" fill="#22d3ee" fontFamily="monospace">ChromaDB</text>
    {/* Vector rows */}
    {[0, 1, 2, 3].map((i) => (
      <g key={`vec-${i}`}>
        <rect x="313" y={86 + i * 18} width="54" height="10" rx="3" fill="#0d3050" stroke="#0ea5e9" strokeWidth="0.4" strokeOpacity="0.4" />
        {[0, 1, 2, 3, 4].map((j) => (
          <rect
            key={`v-${j}`}
            x={316 + j * 10}
            y={89 + i * 18}
            width="6"
            height={3 + Math.sin((i + j) * 1.2) * 2}
            rx="1"
            fill="#0ea5e9"
            opacity={0.4 + j * 0.1}
          />
        ))}
      </g>
    ))}
    <text x="340" y="162" textAnchor="middle" fontSize="5.5" fill="#38bdf8" fontFamily="monospace" opacity="0.7">Vector Store</text>

    {/* Connection arrow: chat → chromadb */}
    <line x1="285" y1="125" x2="303" y2="125" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3,2" strokeOpacity="0.6" />
    <polygon points="301,122 306,125 301,128" fill="#06b6d4" opacity="0.7" />

    {/* ─── Bottom: Model badges ─── */}
    {["Groq", "LLaMA", "Phi-2"].map((model, i) => (
      <g key={model}>
        <rect x={125 + i * 55} y="218" width="47" height="15" rx="7.5" fill="#0d2a45" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.5" />
        <text x={148.5 + i * 55} y="229" textAnchor="middle" fontSize="6" fill="#7dd3fc" fontFamily="monospace">{model}</text>
      </g>
    ))}
  </svg>
);
