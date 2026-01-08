import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-stone-200 px-8 flex items-center justify-between">
      <h1 className="text-2xl text-[#292524]">Looking for Seats</h1>

      <div className="flex items-center gap-6">
        {/* Company Selector */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-300 hover:border-stone-400 transition-colors bg-white">
          <span className="text-sm text-[#292524]">Golden Days Travel</span>
          <ChevronDown className="w-4 h-4 text-stone-500" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-stone-100 transition-colors">
          <Bell className="w-5 h-5 text-stone-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#d97706] rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#047857] flex items-center justify-center text-white">
            AM
          </div>
          <div className="text-left">
            <div className="text-sm text-[#292524]">Ahmed Mansour</div>
            <div className="text-xs text-stone-500">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
}
