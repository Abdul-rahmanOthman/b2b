import { PlaneTakeoff, Search, MessageSquare, ListChecks, Settings, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: PlaneTakeoff,
      title: "Post unsold flight seats",
      description: "List your available seats with all details: route, date, airline, class, and pricing. Update anytime."
    },
    {
      icon: Search,
      title: "Search and filter intelligently",
      description: "Find exactly what you need by filtering routes, dates, airlines, seat count, and price ranges."
    },
    {
      icon: MessageSquare,
      title: "Post seat requests",
      description: "Need seats urgently? Post a request with your requirements and let agencies with surplus respond to you."
    },
    {
      icon: ListChecks,
      title: "Respond to requests",
      description: "Browse active seat requests from other agencies and offer your surplus seats to fulfill their needs."
    },
    {
      icon: Settings,
      title: "Easy listing management",
      description: "Update, pause, or remove your listings anytime. Track views, responses, and deal status in one dashboard."
    },
    {
      icon: Shield,
      title: "Smart risk & refund rules",
      description: "Built-in policies for fresh listings ensure transparency. Handle cancellations and refunds with clear guidelines."
    }
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-stone-900 mb-4">Built for tourism professionals</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Everything you need to optimize seat inventory and connect with other travel agencies.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg hover:border-emerald-200 transition-all space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>
                <h4 className="text-stone-900">{feature.title}</h4>
                <p className="text-stone-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
