'use client';

import { motion } from 'motion/react';

const modelStates = [
  'Unklare IT',
  'Diagnose',
  'Entscheidung',
  'Verantwortung',
  'Umsetzung',
] as const;

export function CentralITModel() {
  return (
    <div className="mx-auto max-w-xl py-6">
      <div className="flex flex-col items-center">
        {modelStates.map((state, index) => {
          const isDecision = state === 'Entscheidung';
          const isLast = index === modelStates.length - 1;

          return (
            <div key={state} className="flex w-full flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <span
                  className={
                    isDecision
                      ? 'relative block text-2xl md:text-3xl font-semibold tracking-tight text-primary'
                      : 'block text-2xl md:text-3xl font-medium tracking-tight text-slate-800'
                  }
                >
                  {state}
                  {isDecision && (
                    <motion.span
                      aria-hidden
                      className="absolute -inset-x-4 -inset-y-2 rounded-full bg-primary/10 -z-10"
                      animate={{ opacity: [0.35, 0.7, 0.35] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </span>
              </motion.div>

              {!isLast && (
                <motion.div
                  aria-hidden
                  className="h-14 md:h-16 w-px bg-slate-300 my-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  style={{ originY: 0 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
