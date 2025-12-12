'use client';

import { TrendingUp, Scale, Heart, Brain, Baby, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from 'recharts';

const BodyChanges = () => {
  const [activeView, setActiveView] = useState('weight');

  const bodyData = [
    { week: 4, weight: 0.5, bump: 0, babyWeight: 0.1, energy: 80 },
    { week: 8, weight: 1.2, bump: 0.5, babyWeight: 1, energy: 60 },
    { week: 12, weight: 2.5, bump: 1.5, babyWeight: 14, energy: 70 },
    { week: 16, weight: 4, bump: 3, babyWeight: 100, energy: 75 },
    { week: 20, weight: 6, bump: 5, babyWeight: 300, energy: 80 },
    { week: 24, weight: 8, bump: 7, babyWeight: 600, energy: 70 },
    { week: 28, weight: 10, bump: 9, babyWeight: 1000, energy: 65 },
    { week: 32, weight: 12, bump: 11, babyWeight: 1700, energy: 60 },
    { week: 36, weight: 13, bump: 12, babyWeight: 2600, energy: 55 },
    { week: 40, weight: 14, bump: 13, babyWeight: 3400, energy: 50 },
  ];

  const currentWeek = 12;
  const currentData = bodyData.find(d => d.week === currentWeek) || bodyData[2];

  const bodyMetrics = [
    {
      title: 'Weight Gain',
      value: `${currentData.weight} kg`,
      change: '+2.5 kg',
      icon: Scale,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Baby Weight',
      value: `${currentData.babyWeight} g`,
      change: '+14 g',
      icon: Baby,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
    {
      title: 'Energy Level',
      value: `${currentData.energy}%`,
      change: '+10%',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Bump Size',
      value: `${currentData.bump} cm`,
      change: '+1.5 cm',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
  ];

  const commonChanges = [
    {
      week: '4-12',
      title: 'First Trimester',
      changes: ['Morning sickness', 'Fatigue', 'Breast tenderness', 'Food aversions'],
      color: 'border-l-4 border-purple-400',
    },
    {
      week: '13-27',
      title: 'Second Trimester',
      changes: ['Energy returns', 'Baby bump appears', 'Skin changes', 'Round ligament pain'],
      color: 'border-l-4 border-pink-400',
    },
    {
      week: '28-40',
      title: 'Third Trimester',
      changes: ['Back pain', 'Swelling', 'Shortness of breath', 'Braxton Hicks'],
      color: 'border-l-4 border-blue-400',
    },
  ];

  const tips = [
    'Wear comfortable, supportive shoes',
    'Sleep on your left side',
    'Use pregnancy pillows',
    'Stay hydrated',
    'Practice good posture',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <RefreshCw className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Body Changes</h2>
          <p className="text-gray-600">Track your physical changes week by week</p>
        </div>
      </div>

      {/* Current Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {bodyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <span className="text-sm font-medium text-green-600">{metric.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.title}</div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Progress Over Time</h3>
          <div className="flex gap-2">
            {['weight', 'babyWeight', 'energy'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  activeView === view
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {view === 'weight' ? 'Weight' : view === 'babyWeight' ? 'Baby' : 'Energy'}
              </button>
            ))}
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bodyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="week"
                label={{ value: 'Week', position: 'insideBottom', offset: -5 }}
                stroke="#8884d8"
              />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={activeView}
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey={activeView}
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.1}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trimester Changes */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Changes by Trimester</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonChanges.map((trimester, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-5 border border-gray-200 ${trimester.color}`}
              >
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-500">{trimester.week} weeks</div>
                  <h4 className="font-bold text-gray-900">{trimester.title}</h4>
                </div>
                <ul className="space-y-2">
                  {trimester.changes.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Current Week Focus */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-900">Week {currentWeek} Focus</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What's Happening</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Baby's reflexes are developing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Fingers and toes are separated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Morning sickness may improve</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Self-Care Tips</h4>
                <div className="space-y-2">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison & Tips */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Compare with Average</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Your Weight Gain</span>
                  <span className="font-bold text-purple-700">{currentData.weight} kg</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Average for Week {currentWeek}</span>
                  <span className="font-medium text-gray-600">2.8 kg</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-400 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-2 border-t border-gray-200">
                You're on track! Your weight gain is within the healthy range for this stage.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">When to Call Doctor</h3>
            <div className="space-y-3">
              {[
                'Severe abdominal pain',
                'Heavy bleeding',
                'Severe headaches',
                'Blurred vision',
                'Decreased fetal movement',
              ].map((warning, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{warning}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Emergency Contact
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Photo Journal</h3>
            <p className="text-gray-600 text-sm mb-4">
              Track your bump growth with weekly photos
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[8, 12, 16].map((week) => (
                <div
                  key={week}
                  className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold">Week {week}</span>
                </div>
              ))}
            </div>
            <button className="w-full px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
              Add This Week's Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyChanges;