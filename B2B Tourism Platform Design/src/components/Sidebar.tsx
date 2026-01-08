import React from 'react';
import { Plane, LayoutDashboard, Search, Users, FileText, Bell, User, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Search, label: 'Looking for Seats', active: true },
    { icon: Users, label: 'Looking for Customers', active: false },
    { icon: FileText, label: 'Seat Requests', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: User, label: 'My Profile', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-stone-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#047857] rounded-lg flex items-center justify-center">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-[#292524]">Tourism Seats</div>
            <div className="text-sm text-stone-500">Exchange</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-[#047857] text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-stone-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
}
