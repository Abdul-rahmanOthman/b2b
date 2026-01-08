import { Building2, MapPin, Phone, Mail, User, Globe, Briefcase, Bell, Check } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-6">
      {/* Company Info Card */}
      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
        <h3 className="text-stone-900 mb-6">Company Information</h3>
        
        <div className="flex items-start gap-6 mb-8">
          {/* Company Logo */}
          <div className="w-24 h-24 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Building2 className="w-12 h-12 text-emerald-700" />
          </div>

          {/* Company Details */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-stone-600">Company Name</label>
              <p className="text-stone-900">Golden Days Travel & Tourism</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Registration Number</label>
              <p className="text-stone-900">JO-2019-5478</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Location</label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">Amman, Jordan</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Phone Number</label>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">+962 6 555 1234</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">info@goldendaystravel.com</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Website</label>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">www.goldendaystravel.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Sectors */}
        <div className="space-y-3">
          <label className="text-sm text-stone-600">Business Sectors</label>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Umrah & Hajj
            </span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Flight Tickets
            </span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Inbound Tourism
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end mt-6 pt-6 border-t border-stone-200">
          <button className="px-6 py-2.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors">
            Edit Company Info
          </button>
        </div>
      </div>

      {/* User Info Card */}
      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
        <h3 className="text-stone-900 mb-6">User Information</h3>
        
        <div className="flex items-start gap-6 mb-6">
          {/* User Avatar */}
          <div className="w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-emerald-800 text-2xl">AH</span>
          </div>

          {/* User Details */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-stone-600">Full Name</label>
              <p className="text-stone-900">Ahmad Hassan</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Role</label>
              <p className="text-stone-900">Company Admin</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">ahmad@goldendaystravel.com</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-stone-600">Phone</label>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400" />
                <p className="text-stone-900">+962 79 555 6789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end pt-6 border-t border-stone-200">
          <button className="px-6 py-2.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors">
            Edit User Info
          </button>
        </div>
      </div>

      {/* Notification Preferences Card */}
      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-5 h-5 text-emerald-700" />
          <h3 className="text-stone-900">Notification Preferences</h3>
        </div>

        <div className="space-y-4">
          {/* Email Notifications */}
          <div>
            <h4 className="text-stone-900 mb-3">Email Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">New contact requests</p>
                    <p className="text-xs text-stone-600">When someone requests your contact info for a listing</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">New update requests</p>
                    <p className="text-xs text-stone-600">When someone requests you to update a listing</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">New offers on seat requests</p>
                    <p className="text-xs text-stone-600">When agencies offer seats for your requests</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">Marketing updates</p>
                    <p className="text-xs text-stone-600">News, features, and platform updates</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Push Notifications */}
          <div className="pt-6 border-t border-stone-200">
            <h4 className="text-stone-900 mb-3">Push Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">Urgent notifications</p>
                    <p className="text-xs text-stone-600">Time-sensitive requests and updates</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-emerald-700 rounded" />
                  <div>
                    <p className="text-sm text-stone-900">All activity</p>
                    <p className="text-xs text-stone-600">Get notified for all platform activity</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6 pt-6 border-t border-stone-200">
          <button className="px-6 py-2.5 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2">
            <Check className="w-5 h-5" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
