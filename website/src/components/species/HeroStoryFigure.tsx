/** Detailed SVG artwork for the invasive spread story animation */

const clamPositions: { x: number; y: number; scale: number; rotate: number; className: string }[] = [
  { x: 48, y: 176, scale: 0.88, rotate: -8, className: 'c1' },
  { x: 104, y: 172, scale: 0.92, rotate: 5, className: 'c2' },
  { x: 160, y: 175, scale: 0.86, rotate: -4, className: 'c3' },
  { x: 216, y: 173, scale: 0.9, rotate: 10, className: 'c4' },
  { x: 272, y: 177, scale: 0.84, rotate: -6, className: 'c5' },
  { x: 328, y: 171, scale: 0.94, rotate: 3, className: 'c6' },
  { x: 384, y: 174, scale: 0.88, rotate: -12, className: 'c7' },
  { x: 440, y: 176, scale: 0.91, rotate: 7, className: 'c8' },
  { x: 496, y: 172, scale: 0.87, rotate: -3, className: 'c9' },
  { x: 552, y: 175, scale: 0.93, rotate: 6, className: 'c10' },
  { x: 608, y: 173, scale: 0.85, rotate: -5, className: 'c11' },
  { x: 664, y: 177, scale: 0.9, rotate: 9, className: 'c12' },
  { x: 720, y: 174, scale: 0.86, rotate: -7, className: 'c13' },
  { x: 132, y: 164, scale: 0.78, rotate: 4, className: 'c14' },
  { x: 308, y: 162, scale: 0.8, rotate: -9, className: 'c15' },
  { x: 484, y: 163, scale: 0.76, rotate: 11, className: 'c16' },
  { x: 660, y: 161, scale: 0.79, rotate: -2, className: 'c17' },
  { x: 756, y: 165, scale: 0.77, rotate: 8, className: 'c18' },
];

const riverFish: { x: number; y: number; scale: number; flip?: boolean; delay: number; className: string }[] = [
  { x: 96, y: 118, scale: 0.75, flip: true, delay: 0, className: 'f1' },
  { x: 188, y: 132, scale: 0.65, delay: 0.6, className: 'f2' },
  { x: 268, y: 112, scale: 0.85, flip: true, delay: 1.1, className: 'f3' },
  { x: 368, y: 126, scale: 0.7, delay: 0.3, className: 'f4' },
  { x: 448, y: 108, scale: 0.9, flip: true, delay: 1.4, className: 'f5' },
  { x: 548, y: 118, scale: 1, delay: 0.8, className: 'f6' },
  { x: 628, y: 130, scale: 0.72, flip: true, delay: 0.2, className: 'f7' },
  { x: 708, y: 114, scale: 0.8, delay: 1.0, className: 'f8' },
];

function GoldClam({
  x,
  y,
  scale = 1,
  rotate = 0,
  className,
}: {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  className?: string;
}) {
  const w = 18 * scale;
  const h = 12 * scale;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} ${w / 2} ${h / 2})`}>
      <g className={className ? `hero-clam ${className}` : 'hero-clam'}>
        <use href="#hs-gold-clam" width={w} height={h} />
      </g>
    </g>
  );
}

function RiverFish({
  x,
  y,
  scale = 1,
  flip = false,
  delay = 0,
  className,
}: {
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale}, ${scale})`}>
      <g className={className ? `hero-fish ${className}` : 'hero-fish'} style={{ animationDelay: `${delay}s` }}>
        <path
          fill="#4db6ac"
          d="M-22 0 Q-8 -10 8 -4 Q18 0 10 6 Q0 10 -12 8 Q-20 6 -22 0 Z"
        />
        <path fill="#00897b" d="M10 0 L22 -5 L22 5 Z" />
        <circle cx="-6" cy="-2" r="2" fill="#1a1a1a" />
        <circle cx="-5.2" cy="-2.6" r="0.6" fill="#fff" opacity="0.7" />
        <path stroke="#00695c" strokeWidth="0.8" fill="none" d="M-14 2 Q-6 6 2 4" opacity="0.5" />
      </g>
    </g>
  );
}

export function HeroStoryFigure() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" focusable="false" className="hero-story-svg">
      <defs>
        <linearGradient id="hs-ocean-deep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5eb4c4" />
          <stop offset="45%" stopColor="#2a8fa3" />
          <stop offset="100%" stopColor="#124e5c" />
        </linearGradient>
        <linearGradient id="hs-sky-open" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dff3fb" />
          <stop offset="55%" stopColor="#9fd4e8" />
          <stop offset="100%" stopColor="#5aafc4" />
        </linearGradient>
        <linearGradient id="hs-river-water" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3d8fa8" />
          <stop offset="50%" stopColor="#2f7f96" />
          <stop offset="100%" stopColor="#256b80" />
        </linearGradient>
        <linearGradient id="hs-river-murky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a848c" />
          <stop offset="100%" stopColor="#3f545c" />
        </linearGradient>
        <linearGradient id="hs-clam-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d76e" />
          <stop offset="45%" stopColor="#e8b84a" />
          <stop offset="100%" stopColor="#c9922a" />
        </linearGradient>
        <linearGradient id="hs-hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c6770" />
          <stop offset="55%" stopColor="#3f4a52" />
          <stop offset="100%" stopColor="#8b3030" />
        </linearGradient>
        <linearGradient id="hs-bank-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8e6c9" />
          <stop offset="100%" stopColor="#7cb342" />
        </linearGradient>
        <radialGradient id="hs-sun-glow" cx="85%" cy="12%" r="35%">
          <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff9c4" stopOpacity="0" />
        </radialGradient>
        <filter id="hs-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#000" floodOpacity="0.22" />
        </filter>
        <clipPath id="hs-frame">
          <rect width="800" height="200" rx="12" />
        </clipPath>

        <symbol id="hs-gold-clam" viewBox="0 0 24 16">
          <path
            d="M12 1.2C7.2 1.2 3.5 4.2 3.2 8.1C3 11.2 6.8 14.2 12 14.6C17.4 14.2 21 11.1 20.8 8C20.5 4.1 16.8 1.2 12 1.2Z"
            fill="url(#hs-clam-shell)"
            stroke="#6b5344"
            strokeWidth="0.6"
          />
          <path d="M6.5 5.2Q12 3.8 17.5 5.2" stroke="#a67c00" strokeWidth="0.45" fill="none" opacity="0.85" />
          <path d="M5.8 7.4Q12 6.2 18.2 7.4" stroke="#a67c00" strokeWidth="0.4" fill="none" opacity="0.7" />
          <path d="M6.2 9.6Q12 8.5 17.8 9.6" stroke="#a67c00" strokeWidth="0.35" fill="none" opacity="0.55" />
          <path d="M7 11.5Q12 10.8 17 11.5" stroke="#8d6e63" strokeWidth="0.3" fill="none" opacity="0.45" />
          <path d="M12 2.2V13.8" stroke="#6b5344" strokeWidth="0.35" opacity="0.35" />
        </symbol>
      </defs>

      <g clipPath="url(#hs-frame)">
        {/* Scene 1 — open ocean */}
        <g className="hero-scene hero-scene--travel">
          <rect width="800" height="200" fill="url(#hs-sky-open)" />
          <rect width="800" height="200" fill="url(#hs-sun-glow)" />
          <path
            fill="url(#hs-ocean-deep)"
            d="M0 108 Q120 98 240 104 T480 100 T720 106 T800 102 L800 200 L0 200 Z"
          />
          <path
            fill="rgba(255,255,255,0.12)"
            d="M0 112 C80 104 160 118 240 110 S400 106 480 114 S640 108 800 114 L800 124 L0 124 Z"
          />
          <path
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            fill="none"
            d="M0 118 Q100 112 200 118 T400 116 T600 120 T800 116"
          />
        </g>

        {/* Scene 3 — Brisbane River */}
        <g className="hero-scene hero-scene--river">
          <rect width="800" height="200" fill="#cfe8f2" />
          <path fill="url(#hs-bank-light)" d="M0 78 Q140 62 280 74 L280 88 L0 92 Z" opacity="0.9" />
          <path fill="url(#hs-bank-light)" d="M520 70 Q660 58 800 68 L800 84 L520 86 Z" opacity="0.88" />
          <path
            fill="url(#hs-river-water)"
            d="M0 96 Q200 82 400 94 Q600 106 800 92 L800 200 L0 200 Z"
          />
          <path fill="#6d4c41" opacity="0.22" d="M0 156 Q200 150 400 158 Q600 152 800 160 L800 200 L0 200 Z" />
          <path fill="#8d6e63" opacity="0.18" d="M0 164 Q400 158 800 166 L800 200 L0 200 Z" />
          <path fill="rgba(255,255,255,0.08)" d="M0 100 Q400 88 800 98 L800 108 L0 112 Z" />
          {/* Left bank reeds */}
          <g opacity="0.85" fill="#558b2f">
            <path d="M24 88 Q26 72 28 58 Q30 72 32 88 Z" />
            <path d="M34 90 Q36 70 38 52 Q40 68 42 90 Z" />
            <path d="M44 88 Q46 74 48 60 Q50 76 52 88 Z" />
            <path d="M18 92 Q20 78 22 66 Q24 80 26 92 Z" />
          </g>
          {/* Right bank melaleuca */}
          <g transform="translate(688 62)" opacity="0.9">
            <path fill="#6d4c41" d="M8 34 L10 18 L12 34 Z" />
            <ellipse cx="10" cy="16" rx="14" ry="10" fill="#2e7d32" />
            <ellipse cx="4" cy="18" rx="9" ry="7" fill="#388e3c" opacity="0.85" />
            <ellipse cx="16" cy="19" rx="8" ry="6" fill="#43a047" opacity="0.8" />
          </g>
          <text
            x="400"
            y="36"
            textAnchor="middle"
            fontFamily="Nunito, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#1b5e20"
            opacity="0.85"
          >
            Brisbane River
          </text>
        </g>

        {/* Scene 4 — low oxygen */}
        <g className="hero-scene hero-scene--impact">
          <rect width="800" height="200" fill="#8fa4ab" />
          <path fill="url(#hs-river-murky)" d="M0 98 Q220 88 420 98 T800 96 L800 200 L0 200 Z" />
          <path fill="rgba(60,70,75,0.25)" d="M0 102 Q400 94 800 100 L800 200 L0 200 Z" />
          <path fill="#5d4037" opacity="0.22" d="M0 156 Q200 150 400 158 Q600 152 800 160 L800 200 L0 200 Z" />
          <path fill="#4e342e" opacity="0.18" d="M0 164 Q400 158 800 166 L800 200 L0 200 Z" />
          <text
            x="400"
            y="34"
            textAnchor="middle"
            fontFamily="Nunito, sans-serif"
            fontSize="12"
            fontWeight="700"
            fill="#fff"
            opacity="0.92"
          >
            Less oxygen in the water
          </text>
        </g>

        {/* Shared water shimmer */}
        <g className="hero-waves">
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0 124 Q80 118 160 124 T320 122 T480 126 T640 120 T800 124 L800 134 L0 134 Z"
          />
        </g>

        {/* Australia landmass */}
        <g className="hero-australia" filter="url(#hs-soft-shadow)">
          <path
            fill="#9ccc65"
            stroke="#558b2f"
            strokeWidth="0.8"
            d="M548 108 L562 78 L588 62 L622 54 L658 58 L692 72 L712 92 L706 112 L678 122 L648 118 L620 112 L592 114 Z"
          />
          <path fill="#81c784" d="M668 118 L676 128 L662 132 L654 122 Z" opacity="0.9" />
          <text
            x="628"
            y="88"
            textAnchor="middle"
            fontFamily="Nunito, sans-serif"
            fontSize="11"
            fontWeight="700"
            fill="#1b5e20"
          >
            Australia
          </text>
        </g>

        {/* Cargo ship with hull clams */}
        <g className="hero-ship" filter="url(#hs-soft-shadow)">
          <g>
            <path fill="url(#hs-hull)" d="M8 52 L118 52 Q122 48 118 44 L22 38 Q12 38 8 44 Z" />
            <path fill="#eceff1" d="M8 44 Q62 50 118 44 L118 52 Q62 58 8 52 Z" opacity="0.35" />
            <path fill="#37474f" d="M38 26 L78 26 L82 38 L34 38 Z" />
            <rect x="42" y="28" width="8" height="6" rx="0.5" fill="#81d4fa" opacity="0.85" />
            <rect x="54" y="28" width="8" height="6" rx="0.5" fill="#81d4fa" opacity="0.85" />
            <rect x="66" y="28" width="8" height="6" rx="0.5" fill="#81d4fa" opacity="0.75" />
            <path fill="#546e7a" d="M82 30 L86 18 L90 30 Z" />
            <path stroke="#cfd8dc" strokeWidth="1.2" fill="none" d="M90 22 L90 8 L96 8" opacity="0.8" />
            <path fill="rgba(255,255,255,0.15)" d="M14 46 Q62 52 110 46" stroke="none" />
            <g className="hero-hull-clams">
              <GoldClam x={18} y={46} scale={0.72} rotate={-6} />
              <GoldClam x={36} y={47} scale={0.65} rotate={8} />
              <GoldClam x={54} y={46} scale={0.7} rotate={-4} />
              <GoldClam x={72} y={47} scale={0.62} rotate={10} />
              <GoldClam x={88} y={46} scale={0.68} rotate={-8} />
            </g>
          </g>
        </g>

        {/* River bed clams */}
        <g className="hero-river-clams">
          {clamPositions.map((c) => (
            <GoldClam key={c.className} x={c.x} y={c.y} scale={c.scale} rotate={c.rotate} className={c.className} />
          ))}
        </g>

        {/* Healthy river life */}
        <g className="hero-life hero-life--happy">
          <g transform="translate(128 78)">
            <path fill="#558b2f" d="M0 18 Q-2 8 0 0 Q2 8 0 18 Z" />
            <path fill="#689f38" d="M-8 18 Q-10 10 -8 4 Q-6 10 -8 18 Z" />
            <path fill="#689f38" d="M8 18 Q10 10 8 4 Q6 10 8 18 Z" />
            <path fill="none" stroke="#33691e" strokeWidth="1" d="M0 18 L0 26" />
          </g>
          {riverFish.map((f) => (
            <RiverFish
              key={f.className}
              x={f.x}
              y={f.y}
              scale={f.scale}
              flip={f.flip}
              delay={f.delay}
              className={f.className}
            />
          ))}
        </g>

        {/* Stressed river life */}
        <g className="hero-life hero-life--sad">
          <g transform="translate(128 82)" opacity="0.75">
            <path fill="#8d9a7a" d="M0 16 Q-2 10 0 6 Q2 10 0 16 Z" />
            <path fill="#a5b092" d="M-7 16 Q-8 12 -7 8 Q-6 12 -7 16 Z" opacity="0.8" />
            <path fill="none" stroke="#5d6b55" strokeWidth="0.8" d="M0 16 L0 24" />
          </g>
          <g transform="translate(548 112)" opacity="0.65">
            <path fill="#78909c" d="M-20 0 Q-6 -8 8 -2 Q16 2 8 6 Q-2 8 -10 6 Q-18 4 -20 0 Z" />
            <path fill="#607d8b" d="M8 0 L18 -4 L18 4 Z" />
            <path stroke="#455a64" strokeWidth="1" fill="none" d="M-4 2 L4 -2" opacity="0.8" />
          </g>
          <g opacity="0.45">
            <circle cx="320" cy="118" r="2" fill="none" stroke="#fff" strokeWidth="0.8" />
            <circle cx="332" cy="108" r="1.5" fill="none" stroke="#fff" strokeWidth="0.6" />
            <circle cx="410" cy="114" r="1.8" fill="none" stroke="#fff" strokeWidth="0.7" />
          </g>
          <text
            x="400"
            y="86"
            textAnchor="middle"
            fontFamily="Nunito, sans-serif"
            fontSize="11"
            fill="#fff"
            opacity="0.88"
          >
            Dissolved oxygen falls
          </text>
        </g>

        {/* Biosecurity badge */}
        <g className="hero-biosecurity-badge">
          <rect x="10" y="10" width="142" height="32" rx="16" fill="#b71c1c" opacity="0.94" />
          <path
            fill="#fff"
            d="M26 17 L30 29 L22 29 Z M26 21 V25"
            stroke="#fff"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          <text x="88" y="30" textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="11" fontWeight="700" fill="#fff">
            Biosecurity risk
          </text>
        </g>
      </g>
    </svg>
  );
}
