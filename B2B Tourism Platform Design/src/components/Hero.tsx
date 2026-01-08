import { Search, Calendar, Plane, Users, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-stone-900">
              Turn unsold flight seats into new revenue.
            </h1>
            <p className="text-stone-600 text-xl">
              A B2B marketplace where travel agencies and tour operators buy and sell unsold flight seats, 
              post seat requests, and respond to other agencies' needs — turning empty seats into opportunities.
            </p>
            
            {/* CTAs */}
            <div className="flex items-center gap-4 pt-4">
              <button className="px-8 py-3.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md">
                Request a Demo
              </button>
              <button className="px-6 py-3.5 text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-2">
                View how it works
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Text */}
            <p className="text-stone-500 text-sm pt-2">
              Built for travel agencies and tour operators.
            </p>
          </div>

          {/* Right Side - Mockup Cards */}
          <div className="space-y-4">
            {/* Search Seats Panel */}
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2">
                <Search className="w-5 h-5 text-emerald-700" />
                <h4 className="text-stone-900">Search Seats</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-500">From</label>
                  <div className="px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700">
                    New York (JFK)
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-500">To</label>
                  <div className="px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700">
                    London (LHR)
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-500">Date</label>
                  <div className="px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    Dec 15, 2025
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-500">Seats</label>
                  <div className="px-3 py-2 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700">
                    4-8
                  </div>
                </div>
              </div>
              
              <button className="w-full px-4 py-2.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm">
                Search Available Seats
              </button>
            </div>

            {/* Seat Requests Panel */}
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-700" />
                  <h4 className="text-stone-900">Active Seat Requests</h4>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                  New
                </span>
              </div>

              <div className="space-y-3">
                {/* Request Item */}
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-stone-400" />
                        <span className="text-sm text-stone-900">Paris → Dubai</span>
                      </div>
                      <p className="text-xs text-stone-500">Dec 20-22 • 12 seats needed</p>
                    </div>
                    <button className="px-3 py-1.5 text-xs bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors">
                      Respond
                    </button>
                  </div>
                </div>

                {/* Request Item */}
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-stone-400" />
                        <span className="text-sm text-stone-900">Tokyo → Seoul</span>
                      </div>
                      <p className="text-xs text-stone-500">Jan 5 • 6 seats needed</p>
                    </div>
                    <button className="px-3 py-1.5 text-xs bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors">
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
