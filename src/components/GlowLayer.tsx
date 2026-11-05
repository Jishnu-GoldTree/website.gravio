"use client";

import { useEffect, useState, type ComponentType, type CSSProperties } from "react";
import GlowCursorSource from "./GlowCursor.jsx";

const GlowCursor = GlowCursorSource as unknown as ComponentType<{
  color: string;
  secondaryColor: string;
  intensity: number;
  hotspot: number;
  theme: "light" | "dark";
  blendMode: CSSProperties["mixBlendMode"];
  quality: "low" | "medium" | "high";
  style: CSSProperties;
}>;

/** Light green light trail across the whole page, only where there is a mouse. */
export function GlowLayer() {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    setHasMouse(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  if (!hasMouse) return null;

  return (
    <GlowCursor
      color="#5ee690"
      secondaryColor="#86efac"
      intensity={0.55}
      hotspot={0.15}
      theme="dark"
      blendMode="normal"
      quality="medium"
      style={{ position: "fixed", inset: 0, zIndex: 60, pointerEvents: "none" }}
    />
  );
}
