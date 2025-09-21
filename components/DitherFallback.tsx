"use client"

import { useEffect, useRef, useState } from 'react';

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
}

export default function DitherFallback({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 1
}: DitherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disableAnimation) return;

    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const time = elapsed * waveSpeed * 10;

      const wave1 = Math.sin(time) * waveAmplitude * 30;
      const wave2 = Math.sin(time * 1.5 + Math.PI / 3) * waveAmplitude * 20;
      const wave3 = Math.sin(time * 0.8 + Math.PI / 6) * waveAmplitude * 25;

      const hueShift = Math.sin(time * 0.5) * 30;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate(${wave1}px, ${wave2 * 0.5}px) scale(${1 + Math.sin(time * 0.3) * 0.1})`;
        layer1Ref.current.style.filter = `hue-rotate(${hueShift}deg) brightness(${0.8 + Math.sin(time * 0.7) * 0.2})`;
      }

      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate(${wave2}px, ${wave1 * 0.3}px) rotate(${Math.sin(time * 0.2) * 2}deg)`;
        layer2Ref.current.style.filter = `hue-rotate(${hueShift + 60}deg) contrast(${1.2 + Math.sin(time * 0.4) * 0.3})`;
      }

      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate(${wave3}px, ${wave3 * 0.4}px)`;
        layer3Ref.current.style.filter = `hue-rotate(${hueShift + 120}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [disableAnimation, waveSpeed, waveAmplitude]);

  useEffect(() => {
    if (!enableMouseInteraction) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouseInteraction]);

  // Convert waveColor to proper RGB values
  const r = Math.floor(waveColor[0] * 255);
  const g = Math.floor(waveColor[1] * 255);
  const b = Math.floor(waveColor[2] * 255);

  const baseColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
  const lightColor = `rgba(${Math.min(255, r + 60)}, ${Math.min(255, g + 40)}, ${Math.min(255, b + 20)}, 0.4)`;
  const darkColor = `rgba(${Math.floor(r * 0.7)}, ${Math.floor(g * 0.7)}, ${Math.floor(b * 0.7)}, 0.5)`;

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
    >
      {/* Layer 1 - Main background */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${baseColor} 0%, transparent 50%),
            radial-gradient(circle at 20% 30%, ${lightColor} 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, ${baseColor} 0%, transparent 45%),
            radial-gradient(circle at 60% 20%, ${darkColor} 0%, transparent 35%),
            radial-gradient(circle at 30% 80%, ${lightColor} 0%, transparent 40%)
          `,
          backgroundSize: '300px 300px, 250px 250px, 200px 200px, 180px 180px, 220px 220px'
        }}
      />

      {/* Layer 2 - Wave patterns */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, ${baseColor} 50%, transparent 70%),
            linear-gradient(-45deg, transparent 40%, ${lightColor} 60%, transparent 80%),
            linear-gradient(90deg, transparent 35%, ${darkColor} 55%, transparent 75%)
          `,
          backgroundSize: '120px 120px, 100px 100px, 140px 140px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Layer 3 - Dithered grid */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent ${pixelSize}px,
              rgba(${r}, ${g}, ${b}, 0.1) ${pixelSize}px,
              rgba(${r}, ${g}, ${b}, 0.1) ${pixelSize * 2}px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent ${pixelSize}px,
              rgba(${r}, ${g}, ${b}, 0.1) ${pixelSize}px,
              rgba(${r}, ${g}, ${b}, 0.1) ${pixelSize * 2}px
            )
          `,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Mouse interaction */}
      {enableMouseInteraction && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.2) 0%, transparent ${mouseRadius * 100}px)`,
            mixBlendMode: 'screen'
          }}
        />
      )}
    </div>
  );
}