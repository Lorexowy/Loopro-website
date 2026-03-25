"use client";

interface GrainientProps {
  colorBalance?: number;
  blendAngle?: number;
  blendSoftness?: number;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  centerX?: number;
  centerY?: number;
  zoom?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [255, 255, 255];
  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
};

export default function Grainient({
  colorBalance = 0.0,
  blendAngle = 0.0,
  blendSoftness = 0.05,
  contrast = 1.5,
  gamma = 1.0,
  saturation = 1.0,
  centerX = 0.0,
  centerY = 0.0,
  zoom = 0.9,
  color1 = "#FF9FFC",
  color2 = "#5227FF",
  color3 = "#B19EEF",
  className = "",
}: GrainientProps) {
  // `centerX/centerY` w shaderze są dodawane do UV w zakresie ~[-0.5..0.5].
  const xPct = clamp(50 + centerX * 50, 0, 100);
  const yPct = clamp(50 + centerY * 50, 0, 100);

  // Mapowanie `colorBalance/blendSoftness` na pozycje stopów gradientu.
  const balance = clamp(colorBalance, -1, 1);
  const mid = clamp(50 - balance * 20, 0, 100);
  const softness = clamp(blendSoftness, 0, 0.25) * 100; // 0.05 -> 5%
  const p1 = clamp(mid - softness, 0, 100);
  const p2 = clamp(mid + softness, 0, 100);

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  const [r3, g3, b3] = hexToRgb(color3);

  // Zamiast “twardych” kolorów robimy półprzezroczyste plamy (transparentne krawędzie),
  // żeby gradient był widoczny na całej powierzchni (a nie tylko w rogach).
  const baseBackgroundImage = [
    `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(${r3},${g3},${b3},0.38) 0%, rgba(${r2},${g2},${b2},0.20) 38%, rgba(${r1},${g1},${b1},0.0) 72%)`,
    `radial-gradient(ellipse at 80% 10%, rgba(${r3},${g3},${b3},0.26) 0%, rgba(${r3},${g3},${b3},0.0) 60%)`,
    `radial-gradient(ellipse at 10% 90%, rgba(${r2},${g2},${b2},0.22) 0%, rgba(${r2},${g2},${b2},0.0) 55%)`,
    // Delikatna “warstwa pionowa” (odpowiednik mieszania zależnego od `tuv.y`)
    `linear-gradient(to bottom, rgba(${r3},${g3},${b3},0.16) 0%, rgba(${r2},${g2},${b2},0.14) ${p1}%, rgba(${r2},${g2},${b2},0.10) ${p2}%, rgba(${r1},${g1},${b1},0.0) 100%)`,
    // Akcent skręcony po kącie `blendAngle`
    `linear-gradient(${blendAngle}deg, rgba(${r3},${g3},${b3},0.10) 0%, rgba(${r2},${g2},${b2},0.08) 48%, rgba(${r1},${g1},${b1},0.0) 100%)`,
  ].join(", ");

  const effectiveZoom = Math.max(zoom, 0.001);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`.trim()}
      aria-hidden="true"
      style={{ backgroundColor: color1 }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${1 / effectiveZoom})`,
          transformOrigin: `${xPct}% ${yPct}%`,
          backgroundImage: baseBackgroundImage,
          // Normal, bo i tak używamy RGBA z alpha -> same warstwy się “przenikają”.
          backgroundBlendMode: "normal",
          filter: `contrast(${contrast}) saturate(${saturation}) brightness(${gamma})`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
