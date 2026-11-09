/**
 * Abstract portrait drawn from a seed (a person's name), standing in for a team photo.
 * The same seed always draws the same picture, on the server and in the browser.
 */

const PALETTES = [
  ["#05130c", "#0a5c2d", "#34d473", "#b6f0c6"],
  ["#0b2e1a", "#0f7a3d", "#b6f0c6", "#eafcf0"],
  ["#0a5c2d", "#05130c", "#34d473", "#f7fffa"],
  ["#0f7a3d", "#0b2e1a", "#b6f0c6", "#34d473"],
];

/** Small fast PRNG (mulberry32) seeded from a string hash. */
function rng(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 285;
const H = 450;

export function Avatar({ seed, className = "" }: { seed: string; className?: string }) {
  const r = rng(seed);
  const [bgA, bgB, accent, light] = PALETTES[Math.floor(r() * PALETTES.length)];
  const id = `av-${seed.replace(/[^a-z0-9]/gi, "")}`;
  const angle = Math.round(r() * 360);

  // Soft background blobs.
  const blobs = Array.from({ length: 3 }, () => ({
    cx: r() * W,
    cy: r() * H,
    rad: 80 + r() * 140,
    color: r() > 0.5 ? accent : light,
    opacity: 0.12 + r() * 0.2,
  }));

  // Head and shoulders, nudged a little per seed.
  const headX = W / 2 + (r() - 0.5) * 24;
  const headY = 175 + (r() - 0.5) * 30;
  const headR = 58 + r() * 14;
  const shoulderW = 120 + r() * 30;
  const ring = r() > 0.5;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`art ${className}`}
      role="img"
      aria-label={`Illustration for ${seed}`}
    >
      <defs>
        <linearGradient id={`${id}-bg`} gradientTransform={`rotate(${angle} .5 .5)`}>
          <stop offset="0" stopColor={bgA} />
          <stop offset="1" stopColor={bgB} />
        </linearGradient>
        <linearGradient id={`${id}-fig`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} />
          <stop offset="1" stopColor={light} stopOpacity="0.85" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>

      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      <g filter={`url(#${id}-blur)`}>
        {blobs.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} r={b.rad} fill={b.color} opacity={b.opacity} />
        ))}
      </g>

      {ring && <circle cx={headX} cy={headY} r={headR + 26} fill="none" stroke={light} strokeOpacity="0.25" strokeWidth="2" />}
      <circle cx={headX} cy={headY} r={headR} fill={`url(#${id}-fig)`} />
      <path
        d={`M ${headX - shoulderW} ${H} C ${headX - shoulderW} ${headY + headR + 60}, ${headX - 40} ${headY + headR + 30}, ${headX} ${headY + headR + 30} C ${headX + 40} ${headY + headR + 30}, ${headX + shoulderW} ${headY + headR + 60}, ${headX + shoulderW} ${H} Z`}
        fill={`url(#${id}-fig)`}
      />

      <text
        x={W - 24}
        y={48}
        textAnchor="end"
        fontSize="28"
        fontWeight="700"
        fill={light}
        fillOpacity="0.8"
        fontFamily="inherit"
      >
        {seed.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}
