import type { CSSProperties } from "react";
import { ART_ALT } from "@/lib/artAlt";

/**
 * Stock artwork from Lummi (see IMAGE_SOURCES.md) standing where a real Gravio photo can go.
 * To use a real photo, replace the matching file in public/art/ and keep the file name.
 */
export function Art({ kind, className = "", style, alt }: { kind: string; className?: string; style?: CSSProperties; alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/art/${kind}.jpg`} alt={alt ?? ART_ALT[kind] ?? ""} className={`art ${className}`} style={style} />;
}

export function Icon({ name, size = 24, alt = "", className }: { name: string; size?: number; alt?: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/icons/${name}.svg`} width={size} height={size} alt={alt} className={className} />;
}
