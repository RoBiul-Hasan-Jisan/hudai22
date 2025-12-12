'use client';

import { Phone, Ambulance, Shield, Users, Home, Heart } from 'lucide-react';
import { ruralHealthTips } from '@/data/ruralTips';

const RuralHealthInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Home className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Rural Health Essentials</h2>
          <p className="text-gray-600">Special guidance for rural maternal healthcare</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emergency Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Ambulance className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-gray-900">Emergency Preparedness</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Contacts</h4>
                <div className="space-y-3">
                  {ruralHealthTips.emergency.contacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-red-500" />
                        <span className="font-medium text-gray-700">{contact.name}</span>
                      </div>
                      <span className="font-bold text-red-600">{contact.number}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Preparation Checklist</h4>
                <div className="space-y-2">
                  {ruralHealthTips.emergency.preparations.map((prep, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-sm text-gray-700">{prep}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full mt-6 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Save Emergency Numbers
            </button>
          </div>

          {/* Government Schemes */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Government Schemes</h3>
            </div>
            
            <div className="space-y-4">
              {ruralHealthTips.governmentSchemes.map((scheme, index) => (
                <div key={index} className="p-4 bg-white/80 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{scheme.name}</h4>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {scheme.eligibility}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{scheme.benefit}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Contact:</span>
                    <span className="font-medium text-blue-700">{scheme.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traditional Practices & Seasonal Advice */}
        <div className="space-y-6">
          {/* Traditional Practices */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Traditional Practices</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✓ Recommended</h4>
                <div className="space-y-2">
                  {ruralHealthTips.traditionalPractices.beneficial.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✗ Avoid</h4>
                <div className="space-y-2">
                  {ruralHealthTips.traditionalPractices.avoid.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Advice */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-orange-600" />
              <h3 className="font-bold text-gray-900">Seasonal Advice</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(ruralHealthTips.seasonalAdvice).map(([season, tips]) => (
                <div key={season} className="p-4 bg-white/80 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 capitalize">{season}</h4>
                  <div className="space-y-2">
                    {tips.slice(0, 3).map((tip, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          season === 'summer' ? 'bg-red-500' :
                          season === 'monsoon' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`} />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Support */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Community Support Tips</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Form pregnancy support group with neighbors</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                <Heart className="w-5 h-5 text-pink-600" />
                <span className="text-sm text-gray-700">Share responsibilities among family members</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg">
                <Home className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">Organize collective visits to health camps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuralHealthInfo;