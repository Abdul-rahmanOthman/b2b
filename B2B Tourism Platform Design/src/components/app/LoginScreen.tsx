import { Plane, Mail, Lock } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#fafaf8' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-stone-200 p-12 w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-stone-900">Tourism Seats Exchange</h1>
            <p className="text-stone-600">
              B2B platform for travel agencies to trade unsold flight seats.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm text-stone-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="email"
                placeholder="your.email@company.com"
                defaultValue="ahmad@goldendaystravel.com"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-stone-900"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-stone-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="password"
                placeholder="••••••••"
                defaultValue="password123"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-stone-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <div className="text-center pt-4">
          <p className="text-sm text-stone-500">
            Don't have an account?{" "}
            <a href="#" className="text-emerald-700 hover:text-emerald-800">
              Contact admin to get onboarded
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
