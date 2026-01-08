import { ReactNode } from "react";
import { LayoutDashboard, Search, Megaphone, MessageSquare, Bell, Settings, User, Plane, ChevronDown } from "lucide-react";

interface SharedLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function SharedLayout({ children, currentPage, onNavigate, onLogout }: SharedLayoutProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "looking-for-seats", label: "Looking for Seats", icon: Search },
    { id: "looking-for-customers", label: "Looking for Customers", icon: Megaphone },
    { id: "seat-requests", label: "Seat Requests", icon: MessageSquare },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "My Profile", icon: User },
  ];

  const pageTitles: Record<string, string> = {
    "dashboard": "Dashboard",
    "looking-for-seats": "Looking for Seats",
    "looking-for-customers": "Looking for Customers",
    "seat-requests": "Seat Requests",
    "notifications": "Notifications",
    "profile": "My Profile & Company",
    "listing-detail": "Listing Details",
  };

  return (
    <div className="flex h-screen bg-stone-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-stone-900 text-sm">Tourism Seats Exchange</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Settings at bottom */}
        <div className="p-4 border-t border-stone-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors text-left">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-stone-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Page Title */}
            <h2 className="text-stone-900">{pageTitles[currentPage] || "Dashboard"}</h2>

            {/* Right Side: Company Switcher + User Avatar + Notifications */}
            <div className="flex items-center gap-4">
              {/* Company Switcher */}
              <button className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors border border-stone-200">
                <span className="text-sm text-stone-700">Golden Days Travel</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </button>

              {/* Notification Bell */}
              <button className="relative p-2 hover:bg-stone-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-stone-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-amber-700 rounded-full"></span>
              </button>

              {/* User Avatar */}
              <button 
                onClick={onLogout}
                className="flex items-center gap-3 hover:bg-stone-50 rounded-lg px-3 py-2 transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-800 text-sm">AH</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-stone-900">Ahmad Hassan</div>
                  <div className="text-xs text-stone-500">Admin</div>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8" style={{ backgroundColor: '#fafaf8' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
