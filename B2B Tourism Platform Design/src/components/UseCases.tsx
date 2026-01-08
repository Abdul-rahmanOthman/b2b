import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, TrendingDown } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-24" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="space-y-8">
          {/* Use Case 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <div className="grid grid-cols-2">
              <div className="p-12 flex flex-col justify-center space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-stone-900">Last-minute groups</h3>
                <p className="text-stone-600">
                  When agencies need urgent seats for group bookings, they can post requests and get instant responses 
                  from agencies with available inventory. Perfect for tour operators handling last-minute corporate groups 
                  or event travel.
                </p>
                <div className="pt-2">
                  <button className="text-emerald-700 hover:text-emerald-800 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760895794582-925d6f1d5762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRyYXZlbGVycyUyMHRvdXJpc218ZW58MXx8fHwxNzYzODM4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Group travelers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <div className="grid grid-cols-2">
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666065972478-d8eae578ec92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzgzODIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Airplane travel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-stone-900">Off-season optimization</h3>
                <p className="text-stone-600">
                  Turn low-season unsold seats into revenue by connecting with agencies serving different markets. 
                  Your off-season might be someone else's peak season — monetize every seat year-round.
                </p>
                <div className="pt-2">
                  <button className="text-emerald-700 hover:text-emerald-800 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
