import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "We've recovered over $50K in revenue from seats that would have gone empty. The platform is intuitive and connects us with agencies we'd never have reached otherwise.",
      author: "Maria Santos",
      role: "Operations Director",
      company: "Global Travel Solutions"
    },
    {
      quote: "During peak season, we often need extra seats fast. This platform has become our go-to for finding inventory from trusted agencies in minutes, not days.",
      author: "James Chen",
      role: "Senior Account Manager",
      company: "Horizon Tours & Travel"
    },
    {
      quote: "The request feature is a game-changer. We post what we need, and agencies with surplus reach out. It's saved us countless hours of manual searching.",
      author: "Fatima Al-Rashid",
      role: "Group Travel Coordinator",
      company: "Desert Star Holidays"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="text-center text-stone-900 mb-16">Trusted by travel agencies</h2>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-stone-50 rounded-xl p-8 space-y-6 border border-stone-200"
            >
              <Quote className="w-8 h-8 text-emerald-700" />
              
              <p className="text-stone-700">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-800">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-stone-900">{testimonial.author}</div>
                  <div className="text-sm text-stone-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
