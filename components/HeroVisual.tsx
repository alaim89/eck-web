'use client';

import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

export function HeroVisual() {
  const [particles, setParticles] = useState<{id: number, x: string, y: string, targetY: string, opacity: number, duration: number}[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles([...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        targetY: Math.random() * 100 + "%",
        opacity: Math.random() * 0.5,
        duration: Math.random() * 10 + 10,
      })));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (particles.length === 0) return <div className="aspect-square w-full bg-black rounded-3xl" />;

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#050505] shadow-2xl border border-white/5 group">
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001518] via-black to-[#000a0c]" />
      
      {/* Subtle particle effect */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: p.opacity
            }}
            animate={{ 
              y: [null, p.targetY],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Main Logo Visual */}
      <div className="absolute inset-0 flex items-center justify-center p-12 md:p-20">
        <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            className="w-full h-full drop-shadow-[0_0_15px_rgba(0,95,107,0.5)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#005F6B" />
                <stop offset="100%" stopColor="#003D45" />
              </linearGradient>
              <filter id="3d-depth" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lightingColor="#bbbbbb" result="specOut">
                  <fePointLight x="-5000" y="-10000" z="20000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
              </filter>
            </defs>

            {/* Outer broken circle with 3D feel */}
            <motion.path 
              d="M 25 90 A 45 45 0 1 1 85 20" 
              stroke="url(#logoGradient)" 
              strokeWidth="6" 
              strokeLinecap="round"
              filter="url(#3d-depth)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Network Connections (Subtle animated lines) */}
            <g stroke="#005F6B" strokeWidth="1" strokeOpacity="0.3">
              <motion.line x1="25" y1="45" x2="40" y2="45" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.line x1="50" y1="30" x2="65" y2="30" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
              <motion.line x1="75" y1="45" x2="90" y2="45" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
              <motion.line x1="45" y1="65" x2="75" y2="65" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
              
              {/* Cross connections */}
              <motion.line x1="40" y1="45" x2="50" y2="30" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.line x1="65" y1="30" x2="75" y2="45" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
              <motion.line x1="40" y1="45" x2="45" y2="65" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} />
              <motion.line x1="75" y1="45" x2="75" y2="65" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, delay: 3 }} />
            </g>

            {/* Network Nodes with glow */}
            {[
              { cx: 85, cy: 20 },
              { cx: 25, cy: 90 },
              { cx: 25, cy: 45 },
              { cx: 40, cy: 45 },
              { cx: 50, cy: 30 },
              { cx: 65, cy: 30 },
              { cx: 75, cy: 45 },
              { cx: 90, cy: 45 },
              { cx: 45, cy: 65 },
              { cx: 75, cy: 65 },
            ].map((node, i) => (
              <g key={i}>
                <motion.circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="5" 
                  fill="url(#logoGradient)"
                  filter="url(#3d-depth)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                />
                <motion.circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="8" 
                  fill="#005F6B" 
                  fillOpacity="0.2"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              </g>
            ))}
          </svg>

          {/* Light reflection overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 transform translate-x-[-50%] translate-y-[-50%] animate-[shimmer_10s_infinite]" />
        </div>
      </div>

      {/* Message Overlay */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-[10px] uppercase tracking-[0.3em] font-mono text-primary font-bold"
        >
          Reliable System Control
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
