import { Plus, Edit, Eye, AlertCircle, CheckCircle, Plane, Calendar, DollarSign, Users } from "lucide-react";
import { useState } from "react";

export function LookingForCustomers() {
  const [selectedListing, setSelectedListing] = useState<string | null>("1");

  const myListings = [
    {
      id: "1",
      route: "AMM → JED",
      roundTrip: false,
      airline: "Royal Jordanian",
      flightNumber: "RJ-215",
      date: "24 Mar 2025",
      time: "14:30",
      returnDate: null,
      returnTime: null,
      seats: 25,
      price: 210,
      luggage: "23kg checked + cabin",
      notes: "Group discount available for 15+ seats",
      lastUpdated: "20 min ago",
      status: "active",
      updateRequests: [
        {
          company: "Al Salam Tours",
          seats: 20,
          time: "10 min ago",
        },
        {
          company: "Desert Wings",
          seats: 15,
          time: "25 min ago",
        },
      ],
    },
    {
      id: "2",
      route: "AMM → IST → AMM",
      roundTrip: true,
      airline: "Turkish Airlines",
      flightNumber: "TK-811 / TK-812",
      date: "26 Mar 2025",
      time: "08:45",
      returnDate: "02 Apr 2025",
      returnTime: "16:30",
      seats: 10,
      price: 350,
      luggage: "30kg checked + cabin",
      notes: "Round-trip package deal",
      lastUpdated: "2h ago",
      status: "active",
      updateRequests: [],
    },
    {
      id: "3",
      route: "AMM → CAI",
      roundTrip: false,
      airline: "EgyptAir",
      flightNumber: "MS-612",
      date: "27 Mar 2025",
      time: "16:20",
      returnDate: null,
      returnTime: null,
      seats: 15,
      price: 180,
      luggage: "23kg checked + cabin",
      notes: "",
      lastUpdated: "5h ago",
      status: "active",
      updateRequests: [
        {
          company: "Nile Voyages",
          seats: 15,
          time: "1h ago",
        },
      ],
    },
    {
      id: "4",
      route: "AMM → DXB",
      roundTrip: false,
      airline: "Royal Jordanian",
      flightNumber: "RJ-901",
      date: "15 Mar 2025",
      time: "22:30",
      returnDate: null,
      returnTime: null,
      seats: 8,
      price: 280,
      luggage: "23kg checked + cabin",
      notes: "",
      lastUpdated: "3 days ago",
      status: "expired",
      updateRequests: [],
    },
  ];

  const selected = myListings.find((l) => l.id === selectedListing);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-stone-900">My Listings</h3>
          <p className="text-sm text-stone-600 mt-1">Manage your flight seat listings and update requests</p>
        </div>
        <button className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add New Flight Seat
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Listings Table */}
        <div className="col-span-2 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Route & Airline</th>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Flight Date</th>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Seats</th>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Price</th>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Status</th>
                <th className="px-4 py-3 text-left text-xs text-stone-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {myListings.map((listing) => (
                <tr
                  key={listing.id}
                  onClick={() => setSelectedListing(listing.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedListing === listing.id ? "bg-emerald-50" : "hover:bg-stone-50"
                  }`}
                >
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900 flex items-center gap-1">
                        <Plane className="w-4 h-4 text-stone-400" />
                        {listing.route}
                      </div>
                      <div className="text-xs text-stone-500">{listing.airline}</div>
                      <div className="text-xs text-stone-500">{listing.flightNumber}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900">{listing.date}</div>
                      <div className="text-xs text-stone-500">{listing.time}</div>
                      {listing.roundTrip && (
                        <div className="text-xs text-emerald-700">Return: {listing.returnDate}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-stone-900">{listing.seats}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-stone-400" />
                      <span className="text-sm text-stone-900">{listing.price}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {listing.status === "active" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-200 text-stone-600 rounded-full text-xs">
                        Expired
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-stone-100 rounded transition-colors">
                        <Edit className="w-4 h-4 text-stone-600" />
                      </button>
                      <button className="p-1.5 hover:bg-stone-100 rounded transition-colors">
                        <Eye className="w-4 h-4 text-stone-600" />
                      </button>
                      {listing.updateRequests.length > 0 && (
                        <span className="ml-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
                          {listing.updateRequests.length}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-6">
          {selected ? (
            <>
              <div>
                <h4 className="text-stone-900 mb-4">Listing Details</h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs text-stone-500">Route</label>
                    <p className="text-sm text-stone-900">{selected.route}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-stone-500">Airline & Flight</label>
                    <p className="text-sm text-stone-900">{selected.airline}</p>
                    <p className="text-xs text-stone-600">{selected.flightNumber}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-stone-500">Seats Available</label>
                      <p className="text-sm text-stone-900">{selected.seats}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-stone-500">Price per Seat</label>
                      <p className="text-sm text-stone-900">${selected.price}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-stone-500">Luggage Policy</label>
                    <p className="text-sm text-stone-900">{selected.luggage}</p>
                  </div>

                  {selected.notes && (
                    <div className="space-y-2">
                      <label className="text-xs text-stone-500">Notes</label>
                      <p className="text-sm text-stone-900">{selected.notes}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs text-stone-500">Last Updated</label>
                    <p className="text-sm text-stone-600">{selected.lastUpdated}</p>
                  </div>
                </div>
              </div>

              {/* Update Requests */}
              {selected.updateRequests.length > 0 && (
                <div className="pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                    <h4 className="text-stone-900">Update Requests ({selected.updateRequests.length})</h4>
                  </div>

                  <div className="space-y-3">
                    {selected.updateRequests.map((request, index) => (
                      <div key={index} className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-3">
                        <div className="space-y-1">
                          <p className="text-sm text-stone-900">{request.company}</p>
                          <p className="text-xs text-stone-600">
                            Requested {request.seats} seats availability update
                          </p>
                          <p className="text-xs text-stone-500">{request.time}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 px-3 py-1.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-xs">
                            Mark as Updated
                          </button>
                          <button className="flex-1 px-3 py-1.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors text-xs">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-stone-500 py-12">
              <Eye className="w-12 h-12 mx-auto mb-3 text-stone-300" />
              <p className="text-sm">Select a listing to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
