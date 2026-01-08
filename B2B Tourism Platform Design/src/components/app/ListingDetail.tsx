import { Plane, Calendar, Users, DollarSign, Luggage, Building2, AlertTriangle, CheckCircle, Clock, ArrowLeft, MessageSquare } from "lucide-react";

interface ListingDetailProps {
  listingId: string;
  onBack: () => void;
}

export function ListingDetail({ listingId, onBack }: ListingDetailProps) {
  // Mock data - in real app this would be fetched based on listingId
  const listing = {
    id: listingId,
    airline: "Royal Jordanian",
    airlineCode: "RJ",
    logo: "🇯🇴",
    route: "AMM → JED",
    flightNumber: "RJ-215",
    date: "24 Mar 2025",
    time: "14:30",
    arrivalTime: "17:45",
    seats: 25,
    price: 210,
    luggage: "23kg checked baggage + 7kg cabin baggage",
    class: "Economy",
    lastUpdated: "15 min ago",
    status: "fresh",
    company: "Golden Wings Travel",
    contactMasked: true,
    notes: "Group discount available for 15+ seats. Refundable up to 24 hours before departure.",
  };

  const isFresh = listing.status === "fresh";

  const activityTimeline = [
    { action: "Listing created", time: "2 hours ago", type: "info" },
    { action: "Price updated to $210", time: "45 min ago", type: "info" },
    { action: "You viewed this listing", time: "Just now", type: "user" },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Search Results</span>
      </button>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Listing Details */}
        <div className="col-span-2 space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{listing.logo}</span>
                <div>
                  <h3 className="text-stone-900">{listing.airline}</h3>
                  <p className="text-stone-600">{listing.flightNumber}</p>
                </div>
              </div>
              {isFresh ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  Fresh Listing
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg">
                  <Clock className="w-5 h-5" />
                  May be Outdated
                </span>
              )}
            </div>

            {/* Route & Time */}
            <div className="flex items-center gap-8 py-6 border-y border-stone-200">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-center">
                    <p className="text-sm text-stone-600">From</p>
                    <p className="text-stone-900 text-2xl">AMM</p>
                    <p className="text-sm text-stone-600">{listing.time}</p>
                  </div>
                  <div className="flex-1 px-6">
                    <div className="flex items-center gap-2">
                      <div className="h-px bg-stone-300 flex-1"></div>
                      <Plane className="w-5 h-5 text-emerald-700" />
                      <div className="h-px bg-stone-300 flex-1"></div>
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-1">Direct Flight</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-stone-600">To</p>
                    <p className="text-stone-900 text-2xl">JED</p>
                    <p className="text-sm text-stone-600">{listing.arrivalTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Details Grid */}
            <div className="grid grid-cols-4 gap-6 mt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Date</span>
                </div>
                <p className="text-sm text-stone-900">{listing.date}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-600">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Seats Available</span>
                </div>
                <p className="text-sm text-stone-900">{listing.seats} seats</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xs">Price per Seat</span>
                </div>
                <p className="text-stone-900">${listing.price}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-600">
                  <Luggage className="w-4 h-4" />
                  <span className="text-xs">Class</span>
                </div>
                <p className="text-sm text-stone-900">{listing.class}</p>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-stone-900">Additional Information</h4>
            
            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm text-stone-600">Luggage Policy</label>
                <p className="text-sm text-stone-900">{listing.luggage}</p>
              </div>

              {listing.notes && (
                <div className="space-y-2">
                  <label className="text-sm text-stone-600">Notes from Seller</label>
                  <p className="text-sm text-stone-900">{listing.notes}</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm text-stone-600">Listed by</label>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-stone-400" />
                  <p className="text-sm text-stone-900">
                    {listing.contactMasked ? `${listing.company.slice(0, 10)}***` : listing.company}
                  </p>
                  {listing.contactMasked && (
                    <span className="text-xs text-stone-500">(Contact after request)</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-600">Last Updated</label>
                <p className="text-sm text-stone-600">{listing.lastUpdated}</p>
              </div>
            </div>
          </div>

          {/* Business Rule Info Box */}
          {isFresh ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-emerald-900">Fresh Listing Protection</h4>
                  <p className="text-sm text-emerald-800">
                    This listing was updated less than 1 hour ago. If the seats are unavailable when you contact the seller, 
                    you are entitled to a full refund, and the seller may be subject to penalties.
                  </p>
                  <p className="text-sm text-emerald-700">
                    You can proceed with confidence knowing you're protected.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-amber-900">Outdated Listing Warning</h4>
                  <p className="text-sm text-amber-800">
                    This listing was updated more than 1 hour ago and may be outdated. There is no refund guarantee if the 
                    seats are no longer available.
                  </p>
                  <p className="text-sm text-amber-700">
                    We recommend requesting an update from the seller before contacting them.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Action Card */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-stone-900">Actions</h4>
            
            {isFresh ? (
              <button className="w-full px-6 py-3.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md">
                Request Contact Info
              </button>
            ) : (
              <div className="space-y-3">
                <button className="w-full px-6 py-3.5 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors shadow-md">
                  Request Update First
                </button>
                <button className="w-full px-6 py-3.5 border-2 border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors">
                  Request Contact Anyway
                </button>
              </div>
            )}

            <p className="text-xs text-stone-500 text-center pt-2">
              {isFresh 
                ? "Contact info will be shared instantly"
                : "We'll notify you when the seller responds"
              }
            </p>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-stone-900">Activity</h4>
            
            <div className="space-y-3">
              {activityTimeline.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === "user" ? "bg-emerald-700" : "bg-stone-400"
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-stone-900">{activity.action}</p>
                    <p className="text-xs text-stone-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Listings */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-stone-900">Similar Listings</h4>
            
            <div className="space-y-3">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-900">AMM → JED</span>
                  <span className="text-sm text-emerald-700">$195</span>
                </div>
                <p className="text-xs text-stone-600">25 Mar • 18 seats • SV-325</p>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-900">AMM → JED</span>
                  <span className="text-sm text-emerald-700">$220</span>
                </div>
                <p className="text-xs text-stone-600">26 Mar • 12 seats • RJ-217</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
