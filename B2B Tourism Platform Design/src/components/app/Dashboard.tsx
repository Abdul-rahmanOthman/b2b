import { PlaneTakeoff, MessageSquare, AlertCircle, Phone, TrendingUp, Clock } from "lucide-react";

export function Dashboard() {
  const summaryCards = [
    { label: "Active Listings", value: "24", icon: PlaneTakeoff, color: "emerald" },
    { label: "Open Seat Requests", value: "9", icon: MessageSquare, color: "blue" },
    { label: "Incoming Update Requests", value: "3", icon: AlertCircle, color: "amber" },
    { label: "Pending Contact Requests", value: "5", icon: Phone, color: "purple" },
  ];

  const recentActivity = [
    {
      company: "Al Quds Travel",
      action: "requested contact info on",
      listing: "RJ-215 AMM → JED",
      time: "15 min ago",
    },
    {
      company: "SkyWay Tours",
      action: "updated listing",
      listing: "IST → PAR",
      time: "1h ago",
    },
    {
      company: "Al Salam Tours",
      action: "requested seat availability update on",
      listing: "TK-811 AMM → IST",
      time: "2h ago",
    },
    {
      company: "Horizon Travel",
      action: "posted new seat request",
      listing: "CAI → JED (12 seats)",
      time: "3h ago",
    },
  ];

  const expiringListings = [
    { route: "RJ-215 AMM → JED", date: "24 Mar 2025", seats: 25, expires: "12h" },
    { route: "TK-455 IST → DXB", date: "25 Mar 2025", seats: 8, expires: "36h" },
    { route: "MS-612 CAI → AMM", date: "26 Mar 2025", seats: 15, expires: "42h" },
  ];

  const latestRequests = [
    { route: "AMM → JED", seats: 15, date: "24 Mar", company: "Al Quds Travel" },
    { route: "IST → CAI", seats: 8, date: "27 Mar", company: "Desert Star" },
    { route: "DXB → AMM", seats: 20, date: "30 Mar", company: "Global Wings" },
  ];

  const chartData = [
    { month: "Nov", seats: 45 },
    { month: "Dec", seats: 62 },
    { month: "Jan", seats: 78 },
    { month: "Feb", seats: 95 },
    { month: "Mar", seats: 110 },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-600">{card.label}</span>
                <Icon className={`w-5 h-5 text-${card.color}-600`} />
              </div>
              <div className="text-stone-900">{card.value}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Chart */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h3 className="text-stone-900">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-xs">
                    {activity.company.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-stone-900">
                    <span className="text-emerald-700">{activity.company}</span>{" "}
                    {activity.action}{" "}
                    <span>{activity.listing}</span>
                  </p>
                  <p className="text-xs text-stone-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-700" />
            <h3 className="text-stone-900">Seats Traded This Month</h3>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 pt-4">
            {chartData.map((data, index) => {
              const heightPercent = (data.seats / 120) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-emerald-100 rounded-t-lg relative group cursor-pointer hover:bg-emerald-200 transition-colors" style={{ height: `${heightPercent}%` }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.seats}
                    </div>
                  </div>
                  <span className="text-xs text-stone-600">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expiring Listings & Latest Requests */}
      <div className="grid grid-cols-2 gap-6">
        {/* Expiring Soon */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-700" />
            <h3 className="text-stone-900">Expiring Soon (next 48h)</h3>
          </div>
          <div className="space-y-3">
            {expiringListings.map((listing, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="space-y-1">
                  <p className="text-sm text-stone-900">{listing.route}</p>
                  <p className="text-xs text-stone-600">{listing.date} • {listing.seats} seats</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                  {listing.expires}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Seat Requests */}
        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h3 className="text-stone-900">Latest Seat Requests</h3>
          <div className="space-y-3">
            {latestRequests.map((request, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="space-y-1">
                  <p className="text-sm text-stone-900">{request.route}</p>
                  <p className="text-xs text-stone-600">{request.seats} seats • {request.date}</p>
                  <p className="text-xs text-emerald-700">{request.company}</p>
                </div>
                <button className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-xs">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
