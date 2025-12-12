'use client';

import { Sun, Moon, Cloud, Wind, Droplets, Thermometer } from 'lucide-react';
import { useState } from 'react';

const DailyTips = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      id: 1,
      title: 'Morning Energy Boost',
      time: 'Morning',
      icon: Sun,
      color: 'bg-yellow-100 text-yellow-700',
      tips: [
        'Start with a protein-rich breakfast',
        'Gentle stretching for 10 minutes',
        'Take prenatal vitamins with food',
        'Drink warm lemon water',
      ],
      weather: 'Sunny, 22°C',
    },
    {
      id: 2,
      title: 'Afternoon Rest',
      time: 'Afternoon',
      icon: Cloud,
      color: 'bg-blue-100 text-blue-700',
      tips: [
        'Take a 20-minute power nap',
        'Stay hydrated with herbal tea',
        'Eat small, frequent snacks',
        'Practice deep breathing',
      ],
      weather: 'Partly Cloudy, 24°C',
    },
    {
      id: 3,
      title: 'Evening Relaxation',
      time: 'Evening',
      icon: Moon,
      color: 'bg-purple-100 text-purple-700',
      tips: [
        'Warm bath with Epsom salt',
        'Read or listen to calming music',
        'Massage feet and legs',
        'Prepare for tomorrow',
      ],
      weather: 'Clear, 19°C',
    },
  ];

  const dailyReminders = [
    {
      icon: Droplets,
      text: 'Drink 8-10 glasses of water today',
      progress: 70,
      color: 'bg-blue-500',
    },
    {
      icon: Thermometer,
      text: 'Monitor body temperature',
      progress: 100,
      color: 'bg-red-500',
    },
    {
      icon: Wind,
      text: '30 minutes of gentle exercise',
      progress: 50,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Sun className="w-8 h-8 text-orange-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Today's Tips</h2>
          <p className="text-gray-600">Personalized advice for your day</p>
        </div>
        <div className="ml-auto text-right">
          <div className="text-lg font-bold text-gray-900">Week 12</div>
          <div className="text-sm text-gray-600">Wednesday, Dec 11</div>
        </div>
      </div>

      {/* Time-based Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <button
              key={tip.id}
              onClick={() => setActiveTip(index)}
              className={`p-5 rounded-xl border transition-all text-left ${
                activeTip === index
                  ? 'border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${tip.color.split(' ')[0]}`}>
                  <Icon className={`w-5 h-5 ${tip.color.split(' ')[1]}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.time}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{tip.weather}</span>
                {activeTip === index && (
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tip Details */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">{tips[activeTip].title}</h3>
          <div className={`px-3 py-1 rounded-full ${tips[activeTip].color.split(' ')[0]}`}>
            <span className={`text-sm font-medium ${tips[activeTip].color.split(' ')[1]}`}>
              {tips[activeTip].time}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
            <ul className="space-y-3">
              {tips[activeTip].tips.map((tipText, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{tipText}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Health Monitor</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Energy Level</span>
                  <span className="text-gray-600">Moderate</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Hydration</span>
                  <span className="text-gray-600">Good</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Comfort Level</span>
                  <span className="text-gray-600">High</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300">
          Mark as Completed
        </button>
      </div>

      {/* Daily Progress */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Daily Health Goals</h3>
        <div className="space-y-4">
          {dailyReminders.map((reminder, index) => {
            const Icon = reminder.icon;
            return (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className={`p-3 rounded-lg ${reminder.color.replace('bg-', 'bg-')} bg-opacity-20`}>
                  <Icon className={`w-5 h-5 ${reminder.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900">{reminder.text}</span>
                    <span className="text-sm font-medium text-gray-700">{reminder.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${reminder.color} rounded-full transition-all duration-500`}
                      style={{ width: `${reminder.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote of the Day */}
      <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💝</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Today's Inspiration</h4>
            <p className="text-gray-700 italic">
              "Your body is doing amazing things growing a human. Be gentle with yourself and celebrate each small victory."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTips;