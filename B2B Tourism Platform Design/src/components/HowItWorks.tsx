import { Upload, ArrowLeftRight, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "List your unsold seats",
      description: "Post available seats with flight details, dates, airline, and pricing. Keep your inventory updated in real-time."
    },
    {
      number: "02",
      icon: ArrowLeftRight,
      title: "Match requests & offers",
      description: "Other agencies search your listings or post seat requests. You can also browse what others need and respond with your surplus."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Close deals in minutes",
      description: "Contact details are shared instantly. Confirm the deal, coordinate the transfer, and both parties benefit from the transaction."
    }
  ];

  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="text-center text-stone-900 mb-16">How it works</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <span className="text-emerald-700">{step.number}</span>
                </div>
                
                <h3 className="text-stone-900">{step.title}</h3>
                <p className="text-stone-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
