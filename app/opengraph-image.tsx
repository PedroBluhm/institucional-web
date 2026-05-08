import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Bluhmwerk Tecnologia — Inteligência que rastreia, tecnologia que entrega";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 20% 0%, #1B2A3D 0%, transparent 55%), radial-gradient(circle at 90% 100%, #5C7187 0%, transparent 50%), linear-gradient(180deg, #060B16 0%, #02050B 100%)",
          color: "#F4F6FA",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#A6C4DD",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#7DEBC1",
            }}
          />
          BLUHMWERK · TECNOLOGIA SOB MEDIDA
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: -3,
              maxWidth: 980,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(244,246,250,0.7)",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Software para operações que não podem parar — Suite Compartilha,
            integrações e controle real.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(244,246,250,0.12)",
            paddingTop: 24,
            fontSize: 20,
            color: "rgba(244,246,250,0.55)",
          }}
        >
          <span>www.bluhmwerk.com</span>
          <span style={{ color: "#7DEBC1" }}>São Paulo · BR</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
