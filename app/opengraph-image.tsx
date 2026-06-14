import { ImageResponse } from "next/og";

export const alt = "Chiara Lodovici — Psicologa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #FBF7F2 0%, #F4DBC0 100%)",
          fontFamily: "serif",
        }}
      >
        <svg width="170" height="212" viewBox="0 0 64 80">
          <path
            d="M32 4C36 16 26 20 28.5 31C29.5 36.5 33 38.5 33 38.5C31 33.5 34.5 28.5 38.5 26.5C38.5 34.5 45 36.5 45 46C45 53 39.5 58 32 58C24.5 58 18.5 53 19 45C19.5 35.5 28 31 29 21C30.5 15.5 30.5 10 28.5 4C30 6.5 32 7.5 32 4Z"
            fill="#E08A4E"
            stroke="#BC663A"
            strokeWidth="1.6"
          />
          <path
            d="M31.5 40C29 45 31 52 35.5 53.5C32 50 33 44.5 36.5 42C34.5 45.5 38 49 37 52C40.5 48.5 39.5 42.5 35 40.5C33.5 39 32 39.2 31.5 40Z"
            fill="#F8D9BE"
          />
          <path d="M7.5 52C10 64.5 17.5 70.5 31.5 71" stroke="#BC663A" strokeWidth="2.4" fill="none" />
          <path d="M56.5 52C54 64.5 46.5 70.5 32.5 71" stroke="#BC663A" strokeWidth="2.4" fill="none" />
        </svg>
        <div style={{ fontSize: 78, color: "#3B3127", fontWeight: 600, marginTop: 20 }}>
          Chiara Lodovici
        </div>
        <div style={{ fontSize: 40, color: "#BC663A", marginTop: 2 }}>Psicologa</div>
        <div style={{ fontSize: 26, color: "#5E5142", marginTop: 30 }}>
          Uno spazio per osservarsi e acquisire consapevolezza
        </div>
      </div>
    ),
    { ...size },
  );
}
