"use client";

import { useEffect, useRef } from "react";

type VaporTypeProps = {
  text: string;
  color?: string;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

type Particle = {
  tx: number;
  ty: number;
  x: number;
  y: number;
  size: number;
  seed: number;
};

const CONDENSE = 2200;
const HOLD = 1800;
const DISPERSE = 1800;
const CYCLE = CONDENSE + HOLD + DISPERSE;

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function VaporType({
  text,
  color = "#ffffff",
  className = "",
  minFontSize = 44,
  maxFontSize = 112,
  as: Tag = "span",
}: VaporTypeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];

    const PAD_X = 260;
    const PAD_Y = 260;

    const buildParticles = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const textWidth = Math.max(1, container.clientWidth);
      const fontSize = Math.max(minFontSize, Math.min(maxFontSize, textWidth / (text.length * 0.72)));
      const tightHeight = Math.ceil(fontSize * 1.5);
      width = textWidth + PAD_X * 2;
      height = tightHeight + PAD_Y * 2;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.left = `${-PAD_X}px`;
      canvas.style.top = `${-PAD_Y}px`;
      container.style.height = `${tightHeight}px`;

      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d");
      if (!octx) return;
      const family = getComputedStyle(container).fontFamily || "sans-serif";
      octx.fillStyle = "#fff";
      octx.font = `800 ${fontSize}px ${family}`;
      octx.textBaseline = "middle";
      octx.textAlign = "center";
      octx.fillText(text, width / 2, height / 2);

      const data = octx.getImageData(0, 0, width, height).data;
      const step = Math.max(2, Math.round(textWidth / 420));
      const pts: { x: number; y: number }[] = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (data[(y * width + x) * 4 + 3] > 120) pts.push({ x, y });
        }
      }
      particles = pts.map((p) => ({
        tx: p.x,
        ty: p.y,
        x: p.x + (Math.random() - 0.5) * 420,
        y: p.y + (Math.random() - 0.5) * 320 - 60,
        size: 0.9 + Math.random() * 1.5,
        seed: Math.random() * Math.PI * 2,
      }));
    };

    buildParticles();

    const drawStatic = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.tx, p.ty, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onResize = () => {
      buildParticles();
      if (reduce) drawStatic();
    };
    window.addEventListener("resize", onResize);

    if (reduce) {
      drawStatic();
      return () => window.removeEventListener("resize", onResize);
    }

    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = (now - start) % CYCLE;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      let phase: "condense" | "hold" | "disperse";
      let localT: number;
      if (elapsed < CONDENSE) {
        phase = "condense";
        localT = elapsed / CONDENSE;
      } else if (elapsed < CONDENSE + HOLD) {
        phase = "hold";
        localT = (elapsed - CONDENSE) / HOLD;
      } else {
        phase = "disperse";
        localT = (elapsed - CONDENSE - HOLD) / DISPERSE;
      }

      for (const p of particles) {
        let x: number;
        let y: number;
        let alpha: number;
        if (phase === "condense") {
          const e = ease(localT);
          x = p.x + (p.tx - p.x) * e;
          y = p.y + (p.ty - p.y) * e;
          alpha = Math.min(1, localT * 1.6);
        } else if (phase === "hold") {
          x = p.tx + Math.sin(now / 600 + p.seed) * 1.2;
          y = p.ty + Math.cos(now / 700 + p.seed) * 1.2;
          alpha = 1;
        } else {
          x = p.tx + Math.sin(p.seed) * localT * 90;
          y = p.ty - localT * 90 - Math.cos(p.seed) * localT * 40;
          alpha = 1 - localT;
        }
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [text, color, minFontSize, maxFontSize]);

  return (
    <div ref={containerRef} className={className} style={{ position: "relative" }}>
      <Tag
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Tag>
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "absolute",
          display: "block",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 50%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 50%, #000 55%, transparent 100%)",
        }}
      />
    </div>
  );
}
