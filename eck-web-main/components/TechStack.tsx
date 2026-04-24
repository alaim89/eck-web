'use client';

import { motion } from "motion/react";
import { 
  Cpu, Database, Globe, Lock, 
  Settings, Terminal, Cloud, Shield,
  Server, Code, Layout, Layers,
  Activity, MessageSquare, Building2, 
  TrendingUp, Users, AlertTriangle, Mail
} from "lucide-react";

interface TechStackProps {
  technologies: string[];
  title?: string;
}

const techIcons: Record<string, any> = {
  'Linux': Terminal,
  'RHEL': Server,
  'Ubuntu': Server,
  'Middleware': Layers,
  'MySQL': Database,
  'PostgreSQL': Database,
  'Apache': Globe,
  'Nginx': Globe,
  'BSI IT-Grundschutz': Shield,
  'Shell Scripting': Code,
  'Monitoring Tools': Activity,
  'Microsoft 365': Cloud,
  'Azure': Cloud,
  'Entra ID': Lock,
  'SharePoint': Layout,
  'Teams': Globe,
  'Compliance': Shield,
  'Governance': Settings,
  'Security': Lock,
  'Backup': Database,
  'Disaster Recovery': Activity,
  'Veeam': Database,
  'Bacula': Database,
  'Sophos': Shield,
  'Firewall': Lock,
  'Endpoint Protection': Shield,
  'Cloud Migration': Cloud,
  'Infrastructure': Cpu,
  'Automation': Settings,
  'PowerShell': Terminal,
  'Docker': Layers,
  'Kubernetes': Layers,
  'Proxmox VE': Server,
  'Ansible': Settings,
  'Proxmox Backup Server': Database,
  'Debian': Terminal,
  'Git': Code,
  'KVM': Cpu,
  'Hyper-V': Server,
  'GitLab': Code,
  'Jira': Settings,
  'Confluence': Layout,
  'Mattermost': MessageSquare,
  'Active Directory': Lock,
  'DNS': Globe,
  'DHCP': Globe,
  'pfSense': Shield,
  'Azure Virtual Desktop': Cloud,
  'AVD': Cloud,
  'Exchange Online': Mail,
  'Microsoft Intune': Shield,
  'MDM': Shield,
  'Hybrid IT': Layers,
  'Enterprise IT': Building2,
  'IT-Strategie': TrendingUp,
  'IT-Leitung': Users,
  'Google Workspace': Globe,
  'MFA': Lock,
  'Conditional Access': Lock,
  'SUSE': Server,
  'Isilon': Database,
  'RabbitMQ': Layers,
  'WildFly': Layers,
  'JBoss': Layers,
  'Tomcat': Layers,
  'Fortinet': Shield,
  'IT-Automatisierung': Settings,
  'GAP-Analyse': Activity,
  'Risikomanagement': AlertTriangle,
  'Security Strategy': Shield,
  'Backup Strategy': Database,
  'OpnSense': Shield,
};

export function TechStack({ technologies, title = "Technologien" }: TechStackProps) {
  return (
    <section className="relative group">
      <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
        <Cpu className="w-6 h-6 text-primary" /> {title}
      </h2>
      
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-md p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)', 
               backgroundSize: '24px 24px' 
             }} />
        
        {/* Soft Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-wrap gap-3">
          {technologies.map((tech, i) => {
            const Icon = techIcons[tech] || Code;
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.9)"
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group/item cursor-default"
              >
                <div className="p-1.5 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-800 group-hover/item:text-black transition-colors">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
