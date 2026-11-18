import { useId } from "react";

/** String to 32-bit seed (FNV-1a). */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Small deterministic PRNG, so server and client draw the same picture. */
function mulberry32(a: number) {
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Curated five-colour palettes for the tile covers; the seed picks one. */
const PALETTES = [
  ["#0b2e1a", "#0f7a3d", "#34d473", "#b6f0c6", "#f4f1e8"],
  ["#1d3557", "#e63946", "#f1faee", "#a8dadc", "#457b9d"],
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  ["#3d405b", "#e07a5f", "#f4f1de", "#81b29a", "#f2cc8f"],
  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"],
  ["#2b2d42", "#ef233c", "#edf2f4", "#8d99ae", "#d90429"],
  ["#10002b", "#5a189a", "#9d4edd", "#e0aaff", "#ffd60a"],
  ["#073b4c", "#118ab2", "#06d6a0", "#ffd166", "#ef476f"],
  ["#1b1b1e", "#d8c99b", "#a4243b", "#bd632f", "#f6f4ed"],
];

/** One square tile of the geometric cover: a seeded shape on a seeded background. */
function Tile({ x, y, s, r, pal }: { x: number; y: number; s: number; r: () => number; pal: string[] }) {
  const pick = () => pal[Math.floor(r() * pal.length)];
  const bg = pick();
  let fg = pick();
  if (fg === bg) fg = pal[(pal.indexOf(bg) + 2) % pal.length];
  const rot = Math.floor(r() * 4) * 90;
  const c = s / 2;
  const kind = Math.floor(r() * 7);
  let shape: React.ReactNode = null;
  if (kind === 0) shape = <path d={`M0 0H${s}A${s} ${s} 0 0 1 0 ${s}Z`} fill={fg} />;
  else if (kind === 1) shape = <path d={`M0 ${s}A${c} ${c} 0 0 1 ${s} ${s}Z`} fill={fg} />;
  else if (kind === 2) shape = <circle cx={c} cy={c} r={s * 0.36} fill={fg} />;
  else if (kind === 3) shape = <path d={`M0 0H${s}L0 ${s}Z`} fill={fg} />;
  else if (kind === 4) shape = <g fill={fg}>{[0, 1, 2].map((i) => <rect key={i} x={0} y={(i * s) / 3 + s / 12} width={s} height={s / 6} />)}</g>;
  else if (kind === 5) shape = <circle cx={c} cy={c} r={s * 0.3} fill="none" stroke={fg} strokeWidth={s * 0.12} />;
  else shape = <><path d={`M0 0H${c}V${c}H0Z`} fill={fg} /><path d={`M${c} ${c}H${s}V${s}H${c}Z`} fill={fg} /></>;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot} ${c} ${c})`}>
      {/* Slight overlap hides anti-aliased seams between neighbouring tiles. */}
      <rect x={-0.3} y={-0.3} width={s + 0.6} height={s + 0.6} fill={bg} />
      {shape}
    </g>
  );
}

/** Geometric cover: a grid of seeded Bauhaus-style tiles in one curated palette, darkened at the bottom for a title. */
function Tiles({ seed, className, uid }: { seed: string; className?: string; uid: string }) {
  const r = mulberry32(hash(`tiles:${seed}`));
  const pal = PALETTES[hash(seed) % PALETTES.length];
  const s = 30;
  const tiles = [];
  for (let row = 0; row < 3; row++) for (let col = 0; col < 4; col++) tiles.push(<Tile key={`${row}-${col}`} x={col * s} y={row * s} s={s} r={r} pal={pal} />);
  return (
    <svg className={className} viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`f${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset=".45" stopColor="#05130c" stopOpacity="0" />
          <stop offset="1" stopColor="#05130c" stopOpacity=".7" />
        </linearGradient>
      </defs>
      {tiles}
      <rect width="120" height="90" fill={`url(#f${uid})`} />
    </svg>
  );
}

/**
 * A placeholder picture generated from `seed`; the same seed always gives the same image.
 * "mesh" is a soft gradient with colour blobs and grain, "tiles" a geometric grid. Fills its parent (position it with a class).
 */
export function SeedArt({ seed, className, variant = "mesh" }: { seed: string; className?: string; variant?: "mesh" | "tiles" }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  if (variant === "tiles") return <Tiles seed={seed} className={className} uid={uid} />;
  return <Mesh seed={seed} className={className} uid={uid} />;
}

function Mesh({ seed, className, uid }: { seed: string; className?: string; uid: string }) {
  const r = mulberry32(hash(seed));
  const base = Math.floor(r() * 360);
  const spread = 40 + r() * 80;
  const hues = [base, (base + spread) % 360, (base + spread * 2) % 360];
  const c = (h: number, s: number, l: number) => `hsl(${Math.round(h)} ${s}% ${l}%)`;
  const angle = Math.floor(r() * 360);
  const blobs = Array.from({ length: 4 }, (_, i) => ({
    cx: 10 + r() * 80,
    cy: 10 + r() * 80,
    rr: 22 + r() * 30,
    fill: c(hues[i % 3] + r() * 20, 70 + r() * 25, 45 + r() * 25),
    o: 0.55 + r() * 0.4,
  }));
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`g${uid}`} gradientTransform={`rotate(${angle} .5 .5)`}>
          <stop offset="0" stopColor={c(hues[0], 65, 22)} />
          <stop offset="1" stopColor={c(hues[1], 70, 38)} />
        </linearGradient>
        <filter id={`b${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id={`n${uid}`}>
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .5 0" />
        </filter>
      </defs>
      <rect width="100" height="100" fill={`url(#g${uid})`} />
      <g filter={`url(#b${uid})`}>
        {blobs.map((b, i) => <circle key={i} cx={b.cx} cy={b.cy} r={b.rr} fill={b.fill} opacity={b.o} />)}
      </g>
      <rect width="100" height="100" filter={`url(#n${uid})`} opacity=".18" style={{ mixBlendMode: "overlay" }} />
    </svg>
  );
}
