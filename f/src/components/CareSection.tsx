'use client';

import { Heart, Activity, Moon, Users, Calendar, Shield, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface SelfCareItem {
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  frequency: string;
  color: string;
}

interface EmergencyItem {
  title: string;
  action: string;
  contact: string;
  color: string;
}

type CareItem = SelfCareItem | EmergencyItem;

const CareSection = () => {
  const [activeTab, setActiveTab] = useState<'self' | 'medical' | 'emergency'>('self');

  const carePlans: Record<'self' | 'medical' | 'emergency', CareItem[]> = {
    self: [
      {
        icon: Activity,
        title: 'Daily Exercise',
        duration: '30 mins',
        description: 'Gentle prenatal yoga or walking',
        frequency: 'Daily',
        color: 'bg-blue-100 text-blue-700',
      },
      {
        icon: Moon,
        title: 'Rest & Sleep',
        duration: '8-10 hours',
        description: 'Essential for hormone regulation',
        frequency: 'Nightly',
        color: 'bg-purple-100 text-purple-700',
      },
      {
        icon: Heart,
        title: 'Meditation',
        duration: '15 mins',
        description: 'Stress reduction and mindfulness',
        frequency: 'Daily',
        color: 'bg-pink-100 text-pink-700',
      },
    ],
    medical: [
      {
        icon: Calendar,
        title: 'Prenatal Checkups',
        duration: 'Monthly',
        description: 'Regular monitoring of vital signs',
        frequency: 'Monthly',
        color: 'bg-green-100 text-green-700',
      },
      {
        icon: Shield,
        title: 'Vaccinations',
        duration: 'As scheduled',
        description: 'TDAP, Flu shot, COVID-19',
        frequency: 'As needed',
        color: 'bg-orange-100 text-orange-700',
      },
      {
        icon: Users,
        title: 'Ultrasound Scans',
        duration: '30-60 mins',
        description: 'Monitor baby development',
        frequency: 'Trimester-wise',
        color: 'bg-indigo-100 text-indigo-700',
      },
    ],
    emergency: [
      {
        title: 'Severe abdominal pain',
        action: 'Go to ER immediately',
        contact: 'Emergency: 911',
        color: 'bg-red-50',
      },
      {
        title: 'Vaginal bleeding',
        action: 'Contact doctor immediately',
        contact: 'OB-GYN: (555) 123-4567',
        color: 'bg-red-50',
      },
      {
        title: 'Severe headaches',
        action: 'Check blood pressure',
        contact: 'Urgent Care',
        color: 'bg-red-50',
      },
    ],
  };

  const milestones = [
    { week: 8, task: 'First prenatal visit', status: 'completed' as const },
    { week: 12, task: 'First trimester screening', status: 'current' as const },
    { week: 20, task: 'Anatomy scan', status: 'upcoming' as const },
    { week: 24, task: 'Glucose test', status: 'upcoming' as const },
    { week: 28, task: 'Rhogam shot', status: 'upcoming' as const },
  ];

  // Helper function to check if item has icon property
  const hasIcon = (item: CareItem): item is SelfCareItem => {
    return 'icon' in item;
  };

  // Helper function to check if item has description property
  const hasDescription = (item: CareItem): item is SelfCareItem => {
    return 'description' in item;
  };

  // Helper function to check if item has duration property
  const hasDuration = (item: CareItem): item is SelfCareItem => {
    return 'duration' in item;
  };

  // Helper function to check if item has frequency property
  const hasFrequency = (item: CareItem): item is SelfCareItem => {
    return 'frequency' in item;
  };

  // Helper function to check if item has contact property
  const hasContact = (item: CareItem): item is EmergencyItem => {
    return 'contact' in item;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-red-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pregnancy Care</h2>
          <p className="text-gray-600">Complete care plan for you and your baby</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8">
        {[
          { id: 'self' as const, label: 'Self Care', icon: Heart },
          { id: 'medical' as const, label: 'Medical Care', icon: Activity },
          { id: 'emergency' as const, label: 'Emergency', icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all flex-1 ${
                activeTab === tab.id
                  ? 'bg-white shadow-md text-purple-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Care Plans */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {activeTab === 'self' && 'Self Care Routine'}
            {activeTab === 'medical' && 'Medical Schedule'}
            {activeTab === 'emergency' && 'Emergency Protocols'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {carePlans[activeTab].map((item, index) => {
              const colorParts = item.color.split(' ');
              const bgColor = colorParts[0];
              const textColor = colorParts[1] || '';
              
              return (
                <div
                  key={index}
                  className={`${bgColor} rounded-xl p-6 border border-gray-200`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {hasIcon(item) && (
                        <item.icon className={`w-6 h-6 ${textColor}`} />
                      )}
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        {hasDescription(item) && (
                          <p className="text-sm text-gray-600">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {hasDuration(item) && (
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className={`font-semibold ${textColor}`}>
                          {item.duration}
                        </span>
                      </div>
                    )}
                    {hasFrequency(item) && (
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Frequency:</span>
                        <span className="font-medium text-gray-900">{item.frequency}</span>
                      </div>
                    )}
                    {hasContact(item) && (
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Contact:</span>
                        <span className="font-medium text-red-600">{item.contact}</span>
                      </div>
                    )}
                  </div>

                  <button className={`w-full mt-4 px-4 py-2 ${
                    activeTab === 'emergency' 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700'
                  } font-semibold rounded-lg border border-gray-200 transition-colors`}>
                    {activeTab === 'emergency' ? 'Call Now' : 'Mark as Done'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Progress Tracker */}
          {activeTab === 'medical' && (
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Checkup Progress</h4>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.week} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'current' ? 'bg-yellow-500 animate-pulse' :
                      'bg-gray-300'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Week {milestone.week}</span>
                        <span className={`text-sm font-medium ${
                          milestone.status === 'completed' ? 'text-green-600' :
                          milestone.status === 'current' ? 'text-yellow-600' :
                          'text-gray-500'
                        }`}>
                          {milestone.status === 'completed' ? '✓ Completed' :
                           milestone.status === 'current' ? '● Current' :
                           '○ Upcoming'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{milestone.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Tips & Reminders */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Daily Reminders</h3>
            <div className="space-y-4">
              {[
                'Take prenatal vitamins',
                'Drink 8-10 glasses of water',
                'Track baby movements',
                'Practice breathing exercises',
                'Eat protein-rich snacks',
              ].map((reminder, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-700">{reminder}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Set Custom Reminders
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Quick Tips</h3>
            <div className="space-y-4">
              {[
                'Sleep on your left side for better circulation',
                'Avoid hot baths and saunas',
                'Wear comfortable, supportive shoes',
                'Practice good posture',
                'Stay hydrated throughout the day',
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-lg">💡</span>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Doctor's Note</h3>
            <p className="text-gray-600 mb-4">
              "Remember to listen to your body. If something doesn't feel right, don't hesitate to contact us. Your comfort and baby's safety are our top priorities."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                DR
              </div>
              <div>
                <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">OB-GYN Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareSection;