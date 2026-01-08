import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { SeatsTable } from './components/SeatsTable';
import { ConfirmContactModal } from './components/ConfirmContactModal';
import { Toast } from './components/Toast';

export default function App() {
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [revealedContacts, setRevealedContacts] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleRequestContact = (listingId: string) => {
    setSelectedListingId(listingId);
  };

  const handleConfirmReveal = async (listingId: string) => {
    setSelectedListingId(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock phone number (in production, this would come from the API)
    const phoneNumber = '+962 7 9' + Math.floor(Math.random() * 90 + 10) + ' XXXX';
    
    setRevealedContacts(prev => ({
      ...prev,
      [listingId]: phoneNumber
    }));
    
    setToast({ message: 'Contact revealed', type: 'success' });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setToast({ message: 'Copied to clipboard', type: 'success' });
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#fafaf8]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-64">
        <TopBar />
        
        <main className="flex-1 p-8">
          <div className="max-w-[1440px] mx-auto">
            <SeatsTable
              revealedContacts={revealedContacts}
              onRequestContact={handleRequestContact}
              onCopyPhone={handleCopyPhone}
            />
          </div>
        </main>
      </div>

      {selectedListingId && (
        <ConfirmContactModal
          onConfirm={() => handleConfirmReveal(selectedListingId)}
          onCancel={() => setSelectedListingId(null)}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
