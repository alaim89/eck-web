import { LogoIcon } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white text-gray-400 text-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
          <LogoIcon className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
          <span className="font-semibold text-gray-500 text-base">Ecksolution-IT</span>
        </a>
        <p className="text-center md:text-left">© {new Date().getFullYear()} Ecksolution-IT Managed Services.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors font-medium">Privacy</a>
          <a href="#" className="hover:text-black transition-colors font-medium">Terms</a>
        </div>
      </div>
    </footer>
  );
}
