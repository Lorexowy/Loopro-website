/**
 * Ciemniejsze krawędzie i rogi (winieta) nad warstwami gradientu, pod treścią.
 */
export function BackgroundVignette() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background: [
          // Główna winieta — środek jaśniejszy, krawędzie i rogi w czerni
          "radial-gradient(ellipse 125% 115% at 50% 45%, rgba(0,0,0,0) 32%, rgba(0,0,0,0.38) 62%, rgba(0,0,0,0.88) 100%)",
          // Delikatne przyciemnienie rogów (bez zmiany środka)
          "radial-gradient(ellipse 85% 85% at 0% 0%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 52%)",
          "radial-gradient(ellipse 85% 85% at 100% 0%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 52%)",
          "radial-gradient(ellipse 85% 85% at 0% 100%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 52%)",
          "radial-gradient(ellipse 85% 85% at 100% 100%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 52%)",
        ].join(", "),
      }}
    />
  );
}
