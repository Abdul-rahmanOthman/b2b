import { Filter, Plus, Calendar, Users, Plane, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

export function SeatRequests() {
  const [activeTab, setActiveTab] = useState<"browse" | "my-requests">("browse");

  const browseRequests = [
    {
      id: "1",
      route: "AMM → JED",
      from: "Amman (AMM)",
      to: "Jeddah (JED)",
      seats: 15,
      preferredDate: "24 Mar 2025",
      dateFlexibility: "± 1 day",
      airline: "Any GCC carrier",
      postedBy: "Al Quds Travel",
      createdAt: "3h ago",
      urgent: true,
      offers: 2,
    },
    {
      id: "2",
      route: "IST → CAI",
      from: "Istanbul (IST)",
      to: "Cairo (CAI)",
      seats: 8,
      preferredDate: "27 Mar 2025",
      dateFlexibility: "Fixed",
      airline: "Turkish Airlines or EgyptAir",
      postedBy: "Desert Star",
      createdAt: "5h ago",
      urgent: false,
      offers: 0,
    },
    {
      id: "3",
      route: "DXB → AMM",
      from: "Dubai (DXB)",
      to: "Amman (AMM)",
      seats: 20,
      preferredDate: "30 Mar 2025",
      dateFlexibility: "± 2 days",
      airline: "Any",
      postedBy: "Global Wings",
      createdAt: "1 day ago",
      urgent: false,
      offers: 1,
    },
    {
      id: "4",
      route: "CAI → JED",
      from: "Cairo (CAI)",
      to: "Jeddah (JED)",
      seats: 12,
      preferredDate: "25 Mar 2025",
      dateFlexibility: "± 1 day",
      airline: "Saudi Airlines or EgyptAir",
      postedBy: "Nile Voyages",
      createdAt: "6h ago",
      urgent: true,
      offers: 3,
    },
  ];

  const myRequests = [
    {
      id: "1",
      route: "AMM → PAR",
      from: "Amman (AMM)",
      to: "Paris (CDG)",
      seats: 18,
      preferredDate: "28 Mar 2025",
      dateFlexibility: "± 1 day",
      airline: "Royal Jordanian or Turkish Airlines",
      createdAt: "2 days ago",
      status: "open",
      offers: 4,
    },
    {
      id: "2",
      route: "IST → DXB",
      from: "Istanbul (IST)",
      to: "Dubai (DXB)",
      seats: 10,
      preferredDate: "02 Apr 2025",
      dateFlexibility: "Fixed",
      airline: "Turkish Airlines",
      createdAt: "4 days ago",
      status: "matched",
      offers: 2,
    },
    {
      id: "3",
      route: "AMM → LHR",
      from: "Amman (AMM)",
      to: "London (LHR)",
      seats: 25,
      preferredDate: "15 Apr 2025",
      dateFlexibility: "± 3 days",
      airline: "Any European carrier",
      createdAt: "1 week ago",
      status: "closed",
      offers: 5,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("browse")}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === "browse"
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            Browse Requests
          </button>
          <button
            onClick={() => setActiveTab("my-requests")}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === "my-requests"
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            My Requests
          </button>
        </div>

        {activeTab === "my-requests" && (
          <button className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Post New Request
          </button>
        )}
      </div>

      {/* Browse Requests View */}
      {activeTab === "browse" && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-emerald-700" />
              <h3 className="text-stone-900">Filter Requests</h3>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-stone-600">From</label>
                <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Any City</option>
                  <option>Amman (AMM)</option>
                  <option>Istanbul (IST)</option>
                  <option>Cairo (CAI)</option>
                  <option>Dubai (DXB)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-600">To</label>
                <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Any City</option>
                  <option>Jeddah (JED)</option>
                  <option>Paris (CDG)</option>
                  <option>Dubai (DXB)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-600">Min Seats</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-600">Airline</label>
                <select className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Any</option>
                  <option>Royal Jordanian</option>
                  <option>Turkish Airlines</option>
                  <option>Saudi Airlines</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-600">Date Flexibility</label>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" className="w-4 h-4 text-emerald-700" />
                  <span className="text-sm text-stone-700">Flexible only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Request Cards */}
          <div className="grid grid-cols-2 gap-6">
            {browseRequests.map((request) => (
              <div
                key={request.id}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Plane className="w-5 h-5 text-emerald-700" />
                      <h4 className="text-stone-900">{request.route}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <Users className="w-4 h-4" />
                      <span>{request.seats} seats needed</span>
                    </div>
                  </div>
                  {request.urgent && (
                    <span className="px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    <span className="text-stone-700">
                      {request.preferredDate}
                      {request.dateFlexibility !== "Fixed" && (
                        <span className="text-emerald-700 ml-2">({request.dateFlexibility})</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Plane className="w-4 h-4 text-stone-400 mt-0.5" />
                    <span className="text-stone-700">{request.airline}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-stone-500">Posted by</p>
                    <p className="text-sm text-emerald-700">{request.postedBy}</p>
                    <p className="text-xs text-stone-500">{request.createdAt}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {request.offers > 0 && (
                      <div className="flex items-center gap-1 text-xs text-stone-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{request.offers} offers</span>
                      </div>
                    )}
                    <button className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm">
                      Offer Seats
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Requests View */}
      {activeTab === "my-requests" && (
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Route</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Seats Needed</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Preferred Date</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Airline</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Status</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Offers</th>
                <th className="px-6 py-3 text-left text-xs text-stone-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {myRequests.map((request) => (
                <tr key={request.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900 flex items-center gap-1">
                        <Plane className="w-4 h-4 text-stone-400" />
                        {request.route}
                      </div>
                      <div className="text-xs text-stone-500">Posted {request.createdAt}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-stone-900">{request.seats}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-stone-900">{request.preferredDate}</div>
                      {request.dateFlexibility !== "Fixed" && (
                        <div className="text-xs text-emerald-700">{request.dateFlexibility}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-stone-700">{request.airline}</span>
                  </td>
                  <td className="px-6 py-4">
                    {request.status === "open" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        <Clock className="w-3 h-3" />
                        Open
                      </span>
                    )}
                    {request.status === "matched" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Matched
                      </span>
                    )}
                    {request.status === "closed" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-200 text-stone-600 rounded-full text-xs">
                        Closed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-stone-400" />
                      <span className="text-sm text-stone-900">{request.offers}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-xs">
                      View Offers
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
