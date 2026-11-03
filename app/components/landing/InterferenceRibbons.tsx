"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export interface InterferenceRibbonsProps {
  colors?: [string, string];
  wires?: number;
  lineWidth?: number;
  ribbonWidth?: number;
  amplitude?: number;
  waveLength?: number;
  angle?: number;
  twist?: number;
  curl?: number;
  depth?: number;
  stripes?: number;
  colorFlow?: number;
  glow?: number;
  intensity?: number;
  speed?: number;
  spin?: number;
  /** Backing-resolution scale for the blurred glow pass, 0.25–1. Lower = faster. */
  quality?: number;
  className?: string;
  style?: CSSProperties;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const clean = hex.replace("#", "");
  const n = parseInt(clean.length === 3 ? clean.replace(/./g, (c) => c + c) : clean, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * A free, from-scratch reimplementation of the "fine glowing wires drifting
 * and twisting" ribbon look (no React Bits Pro dependency / license needed).
 *
 * Perf notes: per-wire `shadowBlur` is avoided (it's O(pixels * radius) per
 * stroke and tanks at 40+ strokes/frame). Instead every wire's path is drawn
 * once, crisp, on the main canvas, and once more onto a small offscreen
 * canvas that gets a single `filter: blur()` composite pass for the glow
 * halo — one blur operation per frame instead of up to `wires` of them.
 */
export default function InterferenceRibbons({
  colors = ["#0a5c2d", "#34d473"],
  wires = 48,
  lineWidth = 1.6,
  ribbonWidth = 0.26,
  amplitude = 0.55,
  waveLength = 1.1,
  angle = 42,
  twist = 1.6,
  curl = 0.3,
  depth = 0.7,
  stripes = 2.2,
  colorFlow = 0.06,
  glow = 0.5,
  intensity = 1,
  speed = 0.5,
  spin = 0.3,
  quality = 0.6,
  className = "",
  style,
}: InterferenceRibbonsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const propsRef = useRef({
    colors,
    wires,
    lineWidth,
    ribbonWidth,
    amplitude,
    waveLength,
    angle,
    twist,
    curl,
    depth,
    stripes,
    colorFlow,
    glow,
    intensity,
    speed,
    spin,
    quality,
  });
  propsRef.current = {
    colors,
    wires,
    lineWidth,
    ribbonWidth,
    amplitude,
    waveLength,
    angle,
    twist,
    curl,
    depth,
    stripes,
    colorFlow,
    glow,
    intensity,
    speed,
    spin,
    quality,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!container || !canvas || !ctx) return undefined;

    const glowCanvas = document.createElement("canvas");
    const glowCtx = glowCanvas.getContext("2d", { alpha: true });
    if (!glowCtx) return undefined;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let glowScale = 1;
    let time = reduce ? 4 : 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const p = propsRef.current;
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      glowScale = dpr * Math.min(1, Math.max(0.25, p.quality));

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      glowCanvas.width = Math.max(1, Math.round(width * glowScale));
      glowCanvas.height = Math.max(1, Math.round(height * glowScale));
      glowCtx.setTransform(glowScale, 0, 0, glowScale, 0, 0);
    };

    // Adaptive detail: fewer samples/wires on narrow (mobile) viewports.
    const sampleCount = () => Math.round(Math.min(90, Math.max(36, width / 12)));
    const wireCount = (requested: number) => Math.round(Math.min(requested, Math.max(16, width / 18)));

    const render = () => {
      const p = propsRef.current;
      const samples = sampleCount();
      const wireN = wireCount(p.wires);

      ctx.clearRect(0, 0, width, height);
      glowCtx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      glowCtx.globalCompositeOperation = "lighter";

      const [c0, c1] = p.colors.map(hexToRgb);
      const angleRad = (p.angle * Math.PI) / 180;
      const dirX = Math.cos(angleRad);
      const dirY = Math.sin(angleRad);
      const perpX = -dirY;
      const perpY = dirX;
      const cx = width / 2;
      const cy = height / 2;
      const diag = Math.hypot(width, height);
      const twoPi = Math.PI * 2;

      for (let w = 0; w < wireN; w++) {
        const t = wireN <= 1 ? 0 : w / (wireN - 1) - 0.5;
        ctx.beginPath();
        glowCtx.beginPath();

        let strokeStyle = "";
        let strokeWidth = 1;

        for (let s = 0; s <= samples; s++) {
          const frac = s / samples;
          const sPos = (frac - 0.5) * diag * 1.4;
          const baseX = cx + dirX * sPos;
          const baseY = cy + dirY * sPos;

          const wave =
            Math.sin((sPos / (diag * 0.5)) * twoPi * (1 / p.waveLength) + time * p.speed) *
            amplitude * height * 0.15;

          const twistPhase = (sPos / diag) * p.twist * twoPi + time * p.spin + t * p.curl * twoPi;
          const cosPhase = Math.cos(twistPhase);
          const cross = t * p.ribbonWidth * height * cosPhase;
          const nearness = (cosPhase + 1) / 2;

          const offset = wave + cross;
          const px = baseX + perpX * offset;
          const py = baseY + perpY * offset;

          if (s === 0) {
            ctx.moveTo(px, py);
            glowCtx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
            glowCtx.lineTo(px, py);
          }

          if (s === (samples >> 1)) {
            const stripePhase = p.stripes * (frac + t) + time * p.colorFlow * 6.28;
            const mixAmt = (Math.sin(stripePhase * twoPi) + 1) / 2;
            const r = lerp(c0[0], c1[0], mixAmt) | 0;
            const g = lerp(c0[1], c1[1], mixAmt) | 0;
            const b = lerp(c0[2], c1[2], mixAmt) | 0;
            const alpha = Math.min(1, (0.25 + 0.75 * nearness) * p.intensity);
            strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            strokeWidth = Math.max(0.3, p.lineWidth * (1 - p.depth * (1 - nearness)));
          }
        }

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();

        glowCtx.strokeStyle = strokeStyle;
        glowCtx.lineWidth = strokeWidth * 1.6;
        glowCtx.stroke();
      }

      if (p.glow > 0) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.filter = `blur(${Math.max(1, p.glow * 10 * dpr)}px)`;
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = Math.min(1, p.intensity);
        ctx.drawImage(glowCanvas, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      }
    };

    const frame = () => {
      raf = 0;
      if (!visible || document.hidden) return;
      if (!reduce) time += 0.016;
      render();
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      resize();
      render();
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) wake();
    });
    intersection.observe(container);
    document.addEventListener("visibilitychange", wake);

    resize();
    render();
    wake();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", wake);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={["relative h-full w-full overflow-hidden", className].filter(Boolean).join(" ")}
      style={style}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
    </div>
  );
}
