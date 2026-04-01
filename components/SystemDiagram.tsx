'use client';

import { motion } from "motion/react";

export function SystemDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
      
      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
        {/* Central Node */}
        <motion.circle
          cx="200"
          cy="200"
          r="40"
          className="fill-primary/10 stroke-primary stroke-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="15"
          className="fill-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Outer Nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 200 + 140 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 140 * Math.sin((angle * Math.PI) / 180);
          
          return (
            <g key={i}>
              {/* Connection Line */}
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                className="stroke-primary/20 stroke-2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
              
              {/* Node */}
              <motion.circle
                cx={x}
                cy={y}
                r="20"
                className="fill-white stroke-gray-200 stroke-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
              
              {/* Pulsing Dot */}
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                className="fill-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />

              {/* Data Packets */}
              <motion.circle
                r="3"
                className="fill-primary"
                animate={{
                  cx: [200, x],
                  cy: [200, y],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}

        {/* Floating Labels (Abstract) */}
        <motion.rect
          x="260"
          y="80"
          width="60"
          height="8"
          rx="4"
          className="fill-gray-100"
          animate={{ y: [80, 75, 80] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.rect
          x="80"
          y="280"
          width="80"
          height="8"
          rx="4"
          className="fill-gray-100"
          animate={{ y: [280, 285, 280] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </svg>

      {/* Stats Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute top-0 right-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Uptime</div>
        <div className="text-xl font-bold text-primary">99.99%</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Latency</div>
        <div className="text-xl font-bold text-black">12ms</div>
      </motion.div>
    </div>
  );
}
