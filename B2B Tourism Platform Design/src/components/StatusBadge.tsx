import React from 'react';
import { Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'fresh' | 'outdated';
  time: string;
}

export function StatusBadge({ status, time }: StatusBadgeProps) {
  const isFresh = status === 'fresh';

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
          isFresh
            ? 'bg-[#10b981] bg-opacity-10 text-[#047857]'
            : 'bg-[#d97706] bg-opacity-10 text-[#d97706]'
        }`}
      >
        {isFresh ? 'Fresh' : 'Outdated'}
      </span>
      <div className="flex items-center gap-1 text-xs text-stone-500">
        <Clock className="w-3.5 h-3.5" />
        {time}
      </div>
    </div>
  );
}
