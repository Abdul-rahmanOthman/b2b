import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For small agencies getting started",
      features: [
        "Up to 20 listings per month",
        "Search all available seats",
        "Post seat requests",
        "Basic support"
      ]
    },
    {
      name: "Growth",
      description: "For growing agencies",
      features: [
        "Unlimited listings",
        "Priority in search results",
        "Advanced analytics",
        "Priority support",
        "Custom branding"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large operators",
      features: [
        "Everything in Growth",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-stone-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-stone-600 text-lg">
            Choose the plan that fits your agency's needs
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 space-y-6 ${
                plan.highlighted 
                  ? 'bg-emerald-700 text-white shadow-xl scale-105' 
                  : 'bg-white border border-stone-200 shadow-sm'
              }`}
            >
              <div className="space-y-2">
                <h3 className={plan.highlighted ? 'text-white' : 'text-stone-900'}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-emerald-100' : 'text-stone-600'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-emerald-200' : 'text-emerald-700'
                    }`} />
                    <span className={plan.highlighted ? 'text-emerald-50' : 'text-stone-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg transition-colors ${
                plan.highlighted
                  ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}>
                Contact Sales
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-stone-200 space-y-6">
          <h3 className="text-stone-900">Ready to optimize your seat inventory?</h3>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Join hundreds of travel agencies already using Tourism Seats Exchange to turn unsold seats into revenue.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="px-8 py-3.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors shadow-md">
              Get Started
            </button>
            <button className="px-8 py-3.5 border-2 border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-2">
              Talk to our team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
