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

/**
 * A placeholder picture: a gradient with soft colour blobs and grain, generated from `seed`.
 * The same seed always gives the same image. Fills its parent (position it with a class).
 */
export function SeedArt({ seed, className }: { seed: string; className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
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
