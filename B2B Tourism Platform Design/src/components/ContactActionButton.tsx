import React, { useState } from 'react';
import { Phone, Copy, Loader2 } from 'lucide-react';

interface ContactActionButtonProps {
  listingId: string;
  status: 'fresh' | 'outdated';
  revealedPhone?: string;
  onRequestContact: (listingId: string) => void;
  onCopyPhone: (phone: string) => void;
}

export function ContactActionButton({
  listingId,
  status,
  revealedPhone,
  onRequestContact,
  onCopyPhone,
}: ContactActionButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRequestContact = async () => {
    onRequestContact(listingId);
    setIsProcessing(true);
    
    // Reset processing state after contact is revealed
    setTimeout(() => setIsProcessing(false), 2000);
  };

  // For outdated listings, show different buttons
  if (status === 'outdated') {
    return (
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-[#d97706] text-white rounded-lg text-sm hover:bg-[#b45309] transition-colors">
          Request Update
        </button>
        <button className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg text-sm hover:bg-stone-50 transition-colors">
          View Details
        </button>
      </div>
    );
  }

  // If contact is revealed, show phone number with copy button
  if (revealedPhone && !isProcessing) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-[#047857] text-white rounded-lg min-w-[200px]">
        <Phone className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm flex-1">{revealedPhone}</span>
        <button
          onClick={() => onCopyPhone(revealedPhone)}
          className="p-1 hover:bg-[#059669] rounded transition-colors"
          title="Copy"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // If processing, show loading state
  if (isProcessing) {
    return (
      <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#047857] text-white rounded-lg min-w-[200px]">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm">Processing...</span>
      </div>
    );
  }

  // Default state: show "Request Contact" button
  return (
    <button
      onClick={handleRequestContact}
      className="px-4 py-2 bg-[#047857] text-white rounded-lg text-sm hover:bg-[#059669] transition-colors min-w-[140px]"
    >
      Request Contact
    </button>
  );
}
