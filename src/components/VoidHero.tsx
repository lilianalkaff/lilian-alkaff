import { useRef, useState } from "react";

interface VoidHeroProps {
  src: string;
  alt?: string;
}

const VoidHero = ({ src, alt = "" }: VoidHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [active, setActive] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={handleMove}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background texture revealed by flashlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: active ? 1 : 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 1.5px), radial-gradient(circle at 12px 8px, rgba(255,255,255,0.08) 1px, transparent 1.5px)",
          backgroundSize: "6px 6px, 18px 18px",
          WebkitMaskImage: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 75%)`,
          maskImage: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 75%)`,
        }}
      />

      {/* Central breathing image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] max-w-[80vw] object-contain animate-void-breathe"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default VoidHero;
