import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #a4e6ff, #00d1ff)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 18,
          color: "#003543",
        }}
      >
        H
      </div>
    ),
    { ...size }
  );
}
