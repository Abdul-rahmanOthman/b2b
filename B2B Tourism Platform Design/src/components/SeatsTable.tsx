import React from 'react';
import { ContactActionButton } from './ContactActionButton';
import { StatusBadge } from './StatusBadge';
import { Briefcase } from 'lucide-react';

interface Listing {
  id: string;
  airline: string;
  route: string;
  flightNumber: string;
  date: string;
  time: string;
  seats: number;
  pricePerSeat: number;
  luggage: string;
  status: 'fresh' | 'outdated';
  postedTime: string;
}

interface SeatsTableProps {
  revealedContacts: Record<string, string>;
  onRequestContact: (listingId: string) => void;
  onCopyPhone: (phone: string) => void;
}

const mockListings: Listing[] = [
  {
    id: '1',
    airline: 'Royal Jordanian',
    route: 'AMM → DXB',
    flightNumber: 'RJ 901',
    date: 'Dec 28, 2024',
    time: '14:30',
    seats: 8,
    pricePerSeat: 145,
    luggage: '23kg',
    status: 'fresh',
    postedTime: '15 min ago',
  },
  {
    id: '2',
    airline: 'Emirates',
    route: 'DXB → LHR',
    flightNumber: 'EK 001',
    date: 'Dec 30, 2024',
    time: '08:45',
    seats: 12,
    pricePerSeat: 520,
    luggage: '30kg',
    status: 'fresh',
    postedTime: '32 min ago',
  },
  {
    id: '3',
    airline: 'Turkish Airlines',
    route: 'IST → JFK',
    flightNumber: 'TK 001',
    date: 'Jan 5, 2025',
    time: '11:15',
    seats: 6,
    pricePerSeat: 680,
    luggage: '2x23kg',
    status: 'outdated',
    postedTime: '2h ago',
  },
  {
    id: '4',
    airline: 'Qatar Airways',
    route: 'DOH → SYD',
    flightNumber: 'QR 908',
    date: 'Jan 8, 2025',
    time: '22:30',
    seats: 15,
    pricePerSeat: 890,
    luggage: '30kg',
    status: 'fresh',
    postedTime: '45 min ago',
  },
  {
    id: '5',
    airline: 'Lufthansa',
    route: 'FRA → LAX',
    flightNumber: 'LH 452',
    date: 'Jan 12, 2025',
    time: '16:00',
    seats: 10,
    pricePerSeat: 750,
    luggage: '2x23kg',
    status: 'fresh',
    postedTime: '1h ago',
  },
];

export function SeatsTable({ revealedContacts, onRequestContact, onCopyPhone }: SeatsTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200">
      {/* Header */}
      <div className="px-6 py-5 border-b border-stone-200">
        <h2 className="text-lg text-[#292524]">Available Seats ({mockListings.length} results)</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Airline
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Route & Flight
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Seats
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Price/Seat
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Luggage
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs text-stone-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {mockListings.map((listing) => (
              <tr key={listing.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm text-[#292524]">{listing.airline}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-[#292524]">{listing.route}</div>
                  <div className="text-xs text-stone-500 mt-1">{listing.flightNumber}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-[#292524]">{listing.date}</div>
                  <div className="text-xs text-stone-500 mt-1">{listing.time}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-[#292524]">{listing.seats}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-[#292524]">{listing.pricePerSeat} JOD</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Briefcase className="w-4 h-4" />
                    {listing.luggage}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={listing.status} time={listing.postedTime} />
                </td>
                <td className="px-6 py-4">
                  <ContactActionButton
                    listingId={listing.id}
                    status={listing.status}
                    revealedPhone={revealedContacts[listing.id]}
                    onRequestContact={onRequestContact}
                    onCopyPhone={onCopyPhone}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
