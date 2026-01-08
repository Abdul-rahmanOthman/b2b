import React from 'react';
import { Phone, Copy, Loader2 } from 'lucide-react';

/**
 * This component demonstrates all the different states of the Contact Action Button
 * for design reference and documentation purposes
 */
export function DemoStates() {
  return (
    <div className="p-8 bg-stone-50 space-y-8">
      <h2 className="text-2xl text-[#292524] mb-4">Contact Action Button States</h2>

      <div className="space-y-4">
        {/* Default State */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-stone-500 mb-3">Default State (Fresh Listing)</h3>
          <button className="px-4 py-2 bg-[#047857] text-white rounded-lg text-sm hover:bg-[#059669] transition-colors min-w-[140px]">
            Request Contact
          </button>
        </div>

        {/* Loading State */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-stone-500 mb-3">Loading State</h3>
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#047857] text-white rounded-lg min-w-[200px]">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Processing...</span>
          </div>
        </div>

        {/* Revealed State */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-stone-500 mb-3">Revealed State (Contact Shown)</h3>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#047857] text-white rounded-lg min-w-[200px]">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm flex-1">+962 7 923 XXXX</span>
            <button className="p-1 hover:bg-[#059669] rounded transition-colors" title="Copy">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Outdated Listing State */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-stone-500 mb-3">Outdated Listing</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#d97706] text-white rounded-lg text-sm hover:bg-[#b45309] transition-colors">
              Request Update
            </button>
            <button className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg text-sm hover:bg-stone-50 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm text-stone-500 mb-3">Status Badges</h3>
        <div className="flex gap-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-[#10b981] bg-opacity-10 text-[#047857]">
            Fresh
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-[#d97706] bg-opacity-10 text-[#d97706]">
            Outdated
          </span>
        </div>
      </div>
    </div>
  );
}
