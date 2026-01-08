import { Plane } from "lucide-react";

interface NavigationProps {
  onLoginClick?: () => void;
}

export function Navigation({ onLoginClick }: NavigationProps = {}) {
  return (
    <nav className="bg-white border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-stone-900">Tourism Seats Exchange</span>
          </div>

          {/* Center Menu */}
          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors">
              How it works
            </a>
            <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors">
              Pricing
            </a>
            <a href="#agencies" className="text-stone-600 hover:text-stone-900 transition-colors">
              For Agencies
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onLoginClick}
              className="px-5 py-2.5 text-stone-700 hover:text-stone-900 transition-colors"
            >
              Login
            </button>
            <button className="px-6 py-2.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}