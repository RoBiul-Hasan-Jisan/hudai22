'use client';

import { 
  Phone, 
  Ambulance, 
  Shield, 
  Users, 
  Heart, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Leaf, 
  Cloud, 
  Sun, 
  Droplets,
  Download,
  MapPin,
  Clock,
  FileText
} from 'lucide-react';
import { useState } from 'react';
import { ruralHealthTips } from '@/data/ruralTips';

const RuralHealthInfo = () => {
  const [activeTab, setActiveTab] = useState('emergency');

  const sections = [
    { id: 'emergency', label: 'Emergency', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'schemes', label: 'Schemes', icon: <Shield className="w-4 h-4" /> },
    { id: 'traditions', label: 'Traditions', icon: <Leaf className="w-4 h-4" /> },
    { id: 'seasonal', label: 'Seasonal', icon: <Cloud className="w-4 h-4" /> },
    { id: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rural Maternal <span className="text-emerald-600">Healthcare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guidance and resources tailored for rural community healthcare needs
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto px-6 scrollbar-hide">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                    activeTab === section.id
                      ? 'border-b-2 border-emerald-600 text-emerald-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Emergency Section */}
            {activeTab === 'emergency' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  {/* Emergency Contacts Card */}
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-100 rounded-xl">
                        <Ambulance className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Emergency Contacts</h3>
                        <p className="text-red-600 font-medium">Immediate assistance required</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {ruralHealthTips.emergency.contacts.map((contact, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${index === 0 ? 'bg-red-100' : 'bg-gray-100'}`}>
                              <Phone className={`w-4 h-4 ${index === 0 ? 'text-red-600' : 'text-gray-600'}`} />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{contact.name}</div>
                              {/* Check if contact has description property instead of type */}
                              
                            </div>
                          </div>
                          <a
                            href={`tel:${contact.number}`}
                            className="text-lg font-bold text-red-700 hover:text-red-800"
                          >
                            {contact.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-600" />
                      Quick Actions
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 bg-red-50 text-red-700 rounded-xl font-medium hover:bg-red-100 transition-colors">
                        Call Nearest ASHA
                      </button>
                      <button className="p-4 bg-orange-50 text-orange-700 rounded-xl font-medium hover:bg-orange-100 transition-colors">
                        Locate Health Center
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preparation Checklist */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Preparation Checklist</h3>
                    <div className="space-y-3">
                      {ruralHealthTips.emergency.preparations.map((prep, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className={`p-1 rounded ${index < 3 ? 'bg-emerald-100' : 'bg-blue-100'}`}>
                            {index < 3 ? (
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <FileText className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <span className="text-gray-700 flex-1">{prep}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Save Contacts Button */}
                  <button className="w-full p-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
                    <Phone className="w-5 h-5" />
                    Save All Emergency Contacts
                    <Download className="w-4 h-4 opacity-80" />
                  </button>
                </div>
              </div>
            )}

            {/* Government Schemes */}
            {activeTab === 'schemes' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ruralHealthTips.governmentSchemes.map((scheme, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {scheme.eligibility}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{scheme.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{scheme.benefit}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Contact:</span>
                        <span className="font-semibold text-blue-700">{scheme.contact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Traditional Practices */}
            {activeTab === 'traditions' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recommended Practices */}
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Recommended Practices</h3>
                      <p className="text-emerald-600 font-medium">Evidence-based traditional wisdom</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {ruralHealthTips.traditionalPractices.beneficial.map((practice, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-50">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practices to Avoid */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Practices to Avoid</h3>
                      <p className="text-red-600 font-medium">Potentially harmful traditions</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {ruralHealthTips.traditionalPractices.avoid.map((practice, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-red-50">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Seasonal Advice */}
            {activeTab === 'seasonal' && (
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(ruralHealthTips.seasonalAdvice).map(([season, tips]) => {
                  const seasonConfig = {
                    summer: { 
                      color: 'from-orange-50 to-amber-50', 
                      border: 'border-orange-200',
                      icon: <Sun className="w-6 h-6 text-orange-600" />
                    },
                    monsoon: { 
                      color: 'from-blue-50 to-cyan-50', 
                      border: 'border-blue-200',
                      icon: <Droplets className="w-6 h-6 text-blue-600" />
                    },
                    winter: { 
                      color: 'from-slate-50 to-gray-50', 
                      border: 'border-gray-200',
                      icon: <Cloud className="w-6 h-6 text-gray-600" />
                    }
                  };

                  const config = seasonConfig[season as keyof typeof seasonConfig] || {
                    color: 'from-gray-50 to-gray-100',
                    border: 'border-gray-200',
                    icon: <Cloud className="w-6 h-6 text-gray-600" />
                  };

                  return (
                    <div key={season} className={`bg-gradient-to-br ${config.color} rounded-2xl p-6 border ${config.border}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                          {config.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 capitalize">{season}</h3>
                          <p className="text-sm text-gray-600">Health considerations</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {tips.slice(0, 4).map((tip, index) => (
                          <div key={index} className="text-sm text-gray-700 p-2">
                            • {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Community Support */}
            {activeTab === 'community' && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                    <Users className="w-4 h-4" />
                    Collective Care Initiative
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Community Support Network
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4">
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Support Groups</h4>
                    <p className="text-gray-600">Form pregnancy support circles with neighboring families</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Shared Resources</h4>
                    <p className="text-gray-600">Coordinate transportation to health centers</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <div className="p-3 bg-purple-50 rounded-xl w-fit mb-4">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Knowledge Sharing</h4>
                    <p className="text-gray-600">Share traditional remedies and modern healthcare information</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">Medical Advisory:</span> Consult healthcare professionals for personalized advice
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Download Complete Guide
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <div className="text-2xl font-bold text-emerald-600">40%</div>
            <div className="text-sm text-gray-600">Improved Outcomes</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Emergency Support</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600">100+</div>
            <div className="text-sm text-gray-600">Communities</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-sm text-gray-600">Govt. Schemes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuralHealthInfo;