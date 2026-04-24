export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="6" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer broken circle */}
      <path d="M 25 90 A 45 45 0 1 1 85 20" strokeLinecap="round" />
      
      {/* Network Nodes */}
      <circle cx="85" cy="20" r="5" />
      <circle cx="25" cy="90" r="5" />
      
      <circle cx="25" cy="45" r="5" />
      <circle cx="40" cy="45" r="5" />
      
      <circle cx="50" cy="30" r="5" />
      <circle cx="65" cy="30" r="5" />
      
      <circle cx="75" cy="45" r="5" />
      <circle cx="90" cy="45" r="5" />
      
      <circle cx="45" cy="65" r="5" />
      <circle cx="75" cy="65" r="5" />
    </svg>
  );
}
