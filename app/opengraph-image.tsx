import { ImageResponse } from "next/og";

export const alt = "Gravio - Launching Soon";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05130c",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(52,212,115,0.35), rgba(5,19,12,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
            }}
          />
          Social Media &amp; Branding Agency
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 160,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          Gravio
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          Launching soon.
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 12,
          }}
        >
          <span
            style={{
              display: "flex",
              borderRadius: 999,
              background: "#b6f0c6",
              color: "#0a5c2d",
              padding: "8px 24px",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            UAE
          </span>
          <span
            style={{
              display: "flex",
              borderRadius: 999,
              background: "#b6f0c6",
              color: "#0a5c2d",
              padding: "8px 24px",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            India
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
