import React from 'react';
import { X, Phone } from 'lucide-react';

interface ConfirmContactModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmContactModal({ onConfirm, onCancel }: ConfirmContactModalProps) {
  // Prevent background scrolling
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#292524] bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-1 text-stone-400 hover:text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 bg-[#047857] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
          <Phone className="w-6 h-6 text-[#047857]" />
        </div>

        {/* Title */}
        <h3 className="text-xl text-[#292524] mb-2">Get Contact Details</h3>

        {/* Body */}
        <p className="text-sm text-stone-600 mb-4">
          This will reveal the company phone number on this page.
        </p>

        {/* Fee note */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-stone-600">
            Service fee: <span className="text-[#292524]">2 JOD</span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 bg-[#047857] text-white rounded-lg hover:bg-[#059669] transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}