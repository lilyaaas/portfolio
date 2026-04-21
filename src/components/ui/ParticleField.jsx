import React, { useMemo } from 'react';

const ParticleField = () => {
  // Generate particles deterministically
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: 2 + (i % 4),
      x: (i * 37 + 13) % 100,
      y: (i * 53 + 7) % 100,
      duration: 15 + (i % 20),
      delay: (i * 0.7) % 10,
      opacity: 0.15 + (i % 5) * 0.08,
    }));
  }, []);

  // Generate geometric fragments
  const fragments = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 20 + (i * 15) % 60,
      x: (i * 43 + 10) % 90,
      y: (i * 67 + 5) % 90,
      rotation: (i * 45) % 360,
      duration: 20 + (i * 3),
      delay: i * 2,
      shape: i % 3, // 0=triangle, 1=diamond, 2=hexagon
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Deep ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-[radial-gradient(circle,rgba(163,119,157,0.15)_0%,transparent_70%)]" />
      <div className="absolute bottom-1/4 right-1/4 w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(208,131,160,0.1)_0%,transparent_70%)]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0
              ? 'rgba(208, 131, 160, 0.6)'
              : p.id % 3 === 1
              ? 'rgba(163, 119, 157, 0.5)'
              : 'rgba(255, 255, 255, 0.3)',
            opacity: p.opacity,
            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: p.size > 3 ? `0 0 ${p.size * 3}px ${p.id % 2 === 0 ? 'rgba(208,131,160,0.3)' : 'rgba(163,119,157,0.3)'}` : 'none',
          }}
        />
      ))}

      {/* Geometric fragments */}
      {fragments.map((f) => (
        <div
          key={`frag-${f.id}`}
          className="absolute"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            border: `1px solid rgba(255, 255, 255, ${0.03 + (f.id % 3) * 0.02})`,
            borderRadius: f.shape === 0 ? '0' : f.shape === 1 ? '2px' : '50%',
            transform: `rotate(${f.rotation}deg)`,
            animation: `drift ${f.duration}s ease-in-out ${f.delay}s infinite`,
            opacity: 0.12,
            background: `rgba(163, 119, 157, ${0.02 + (f.id % 4) * 0.01})`,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(ParticleField);
