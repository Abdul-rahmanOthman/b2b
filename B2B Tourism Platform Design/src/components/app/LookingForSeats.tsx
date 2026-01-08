import { Search, Calendar, Users, DollarSign, AlertTriangle, CheckCircle, Clock, Plane } from "lucide-react";

interface LookingForSeatsProps {
  onViewListing: (listingId: string) => void;
}

export function LookingForSeats({ onViewListing }: LookingForSeatsProps) {
  const searchResults = [
    {
      id: "1",
      airline: "Royal Jordanian",
      airlineCode: "RJ",
      logo: "🇯🇴",
      route: "AMM → JED",
      flightNumber: "RJ-215",
      date: "24 Mar 2025",
      time: "14:30",
      seats: 25,
      price: 210,
      luggage: "23kg checked + cabin",
      lastUpdated: "15 min ago",
      status: "fresh",
      company: "Golden Wings Travel"
    },
    {
      id: "2",
      airline: "Turkish Airlines",
      airlineCode: "TK",
      logo: "🇹🇷",
      route: "AMM → IST → FRA",
      flightNumber: "TK-811",
      date: "26 Mar 2025",
      time: "08:45",
      seats: 10,
      price: 350,
      luggage: "30kg checked + cabin",
      lastUpdated: "2h ago",
      status: "outdated",
      company: "SkyWay Tours"
    },
    {
      id: "3",
      airline: "Saudi Airlines",
      airlineCode: "SV",
      logo: "🇸🇦",
      route: "AMM → JED",
      flightNumber: "SV-325",
      date: "25 Mar 2025",
      time: "10:15",
      seats: 18,
      price: 195,
      luggage: "23kg checked + cabin",
      lastUpdated: "45 min ago",
      status: "fresh",
      company: "Al Salam Tours"
    },
    {
      id: "4",
      airline: "EgyptAir",
      airlineCode: "MS",
      logo: "🇪🇬",
      route: "AMM → CAI",
      flightNumber: "MS-612",
      date: "27 Mar 2025",
      time: "16:20",
      seats: 15,
      price: 180,
      luggage: "23kg checked + cabin",
      lastUpdated: "3h ago",
      status: "outdated",
      company: "Nile Travel Agency"
    },
    {
      id: "5",
      airline: "Royal Jordanian",
      airlineCode: "RJ",
      logo: "🇯🇴",
      route: "AMM → DXB",
      flightNumber: "RJ-901",
      date: "28 Mar 2025",
      time: "22:30",
      seats: 12,
      price: 280,
      luggage: "23kg checked + cabin",
      lastUpdated: "30 min ago",
      status: "fresh",
      company: "Desert Star Holidays"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Search Panel */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-emerald-700" />
          <h3 className="text-stone-900">Search Available Seats</h3>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {/* From */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600">From</label>
            <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Amman (AMM)</option>
              <option>Istanbul (IST)</option>
              <option>Cairo (CAI)</option>
              <option>Dubai (DXB)</option>
            </select>
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600">To</label>
            <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Jeddah (JED)</option>
              <option>Paris (CDG)</option>
              <option>Dubai (DXB)</option>
              <option>Frankfurt (FRA)</option>
            </select>
          </div>

          {/* Departure Date */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600">Departure Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="date"
                defaultValue="2025-03-24"
                className="w-full pl-10 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600">Return Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Seats Needed */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600">Seats Needed</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="number"
                defaultValue="10"
                min="1"
                className="w-full pl-10 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <label className="text-sm text-stone-600 invisible">Search</label>
            <button className="w-full px-4 py-2.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-stone-200">
          <div className="space-y-2">
            <label className="text-sm text-stone-600">Airline</label>
            <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Airlines</option>
              <option>Royal Jordanian</option>
              <option>Turkish Airlines</option>
              <option>Saudi Airlines</option>
              <option>EgyptAir</option>
            </select>
          </div>

          <div className="space-y-2 col-span-2">
            <label className="text-sm text-stone-600">Price Range (USD per seat)</label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="500"
                defaultValue="300"
                className="flex-1"
              />
              <span className="text-sm text-stone-700 w-16">$0-$300</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-stone-600 invisible">Filter</label>
            <button className="w-full px-4 py-2.5 border border-stone-200 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors text-sm">
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm text-blue-900">
            <strong>Listing Freshness:</strong> Listings updated within the last hour are marked as "Fresh" and come with refund protection if seats are unavailable.
          </p>
          <p className="text-sm text-blue-800">
            Older listings may be outdated. You can request an update before contacting the seller.
          </p>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-stone-200">
          <h3 className="text-stone-900">Available Seats ({searchResults.length} results)</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Airline</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Route & Flight</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Seats</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Price/Seat</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Luggage</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Status</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {searchResults.map((result) => (
                <tr key={result.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{result.logo}</span>
                      <div>
                        <div className="text-sm text-stone-900">{result.airline}</div>
                        <div className="text-xs text-stone-500">{result.airlineCode}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900 flex items-center gap-1">
                        <Plane className="w-4 h-4 text-stone-400" />
                        {result.route}
                      </div>
                      <div className="text-xs text-stone-500">{result.flightNumber}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900">{result.date}</div>
                      <div className="text-xs text-stone-500">{result.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-stone-900">{result.seats}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-stone-400" />
                      <span className="text-sm text-stone-900">{result.price}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-stone-600">{result.luggage}</span>
                  </td>
                  <td className="px-6 py-4">
                    {result.status === "fresh" ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                          <CheckCircle className="w-3 h-3" />
                          Fresh
                        </span>
                        <div className="text-xs text-stone-500">{result.lastUpdated}</div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                          <Clock className="w-3 h-3" />
                          Outdated
                        </span>
                        <div className="text-xs text-stone-500">{result.lastUpdated}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                      {result.status === "fresh" ? (
                        <button 
                          onClick={() => onViewListing(result.id)}
                          className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-xs"
                        >
                          Request Contact
                        </button>
                      ) : (
                        <>
                          <button className="px-3 py-1.5 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors text-xs">
                            Request Update
                          </button>
                          <button 
                            onClick={() => onViewListing(result.id)}
                            className="px-3 py-1.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors text-xs"
                          >
                            View Details
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
