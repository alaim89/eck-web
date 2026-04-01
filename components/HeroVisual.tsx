'use client';

import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, Server, Shield, Cloud, 
  CheckCircle2, AlertCircle, Globe, 
  Cpu, Database, Lock, Zap 
} from "lucide-react";

interface HeroVisualProps {
  type?: 'monitoring' | 'architecture' | 'health' | 'cloud';
}

export function HeroVisual({ type = 'monitoring' }: HeroVisualProps) {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          {type === 'monitoring' && <MonitoringVisual />}
          {type === 'architecture' && <ArchitectureVisual />}
          {type === 'health' && <HealthVisual />}
          {type === 'cloud' && <CloudVisual />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <div className="w-full h-full bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-bold text-black">System Load</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Real-time Monitoring</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-50 text-[10px] font-bold text-green-600 border border-green-100">
          STABLE
        </div>
      </div>

      <div className="flex-grow flex items-end gap-2 h-32">
        {[40, 60, 45, 80, 55, 70, 90, 65, 50, 75, 85, 60].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.05, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="flex-grow bg-primary/20 rounded-t-lg relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-full opacity-50" />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Uptime</div>
          <div className="text-xl font-bold text-black">99.99%</div>
        </div>
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Latency</div>
          <div className="text-xl font-bold text-black">12ms</div>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}

function ArchitectureVisual() {
  return (
    <div className="w-full h-full bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col gap-8 overflow-hidden relative">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Globe className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="text-sm font-bold text-black">Cloud Architecture</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Scalable Infrastructure</div>
        </div>
      </div>

      <div className="flex-grow relative flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Node */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 rounded-3xl bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center z-10"
          >
            <Server className="w-10 h-10 text-white" />
          </motion.div>

          {/* Orbiting Nodes */}
          {[
            { icon: Database, angle: 0 },
            { icon: Shield, angle: 120 },
            { icon: Cpu, angle: 240 }
          ].map((node, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <motion.div 
                style={{ transform: `rotate(-${node.angle}deg) translateX(120px)` }}
                className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center"
              >
                <node.icon className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full -z-10">
            <circle cx="50%" cy="50%" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-100" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-2 h-2 rounded-full bg-primary/40" />
        <div className="w-2 h-2 rounded-full bg-primary/20" />
      </div>
    </div>
  );
}

function HealthVisual() {
  return (
    <div className="w-full h-full bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-bold text-black">Infrastructure Health</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Proactive Maintenance</div>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-4 py-4">
        {[
          { label: "Security Patches", status: "Updated", icon: Lock, color: "text-green-500" },
          { label: "Resource Usage", status: "Optimal", icon: Activity, color: "text-blue-500" },
          { label: "Backup Integrity", status: "Verified", icon: Database, color: "text-purple-500" },
          { label: "Network Traffic", status: "Normal", icon: Globe, color: "text-orange-500" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-[10px] font-bold text-gray-400 uppercase">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
        <AlertCircle className="w-5 h-5 text-primary" />
        <div className="text-xs text-gray-600">No critical issues detected in the last 24 hours.</div>
      </div>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="w-full h-full bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col gap-6 overflow-hidden relative">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Cloud className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="text-sm font-bold text-black">Microsoft Cloud</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Enterprise Solutions</div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center relative">
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            { label: "Azure Entra", icon: Lock, val: "Secure" },
            { label: "M365 Stack", icon: Zap, val: "Integrated" },
            { label: "Cloud SQL", icon: Database, val: "Scalable" },
            { label: "App Service", icon: Cpu, val: "High Perf" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-black">{item.label}</div>
                <div className="text-[10px] text-primary font-bold uppercase mt-1">{item.val}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Abstract "Cloud" elements */}
        <motion.div 
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" 
        />
      </div>

      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          animate={{ width: ["20%", "80%", "20%"] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="h-full bg-primary rounded-full" 
        />
      </div>
    </div>
  );
}
