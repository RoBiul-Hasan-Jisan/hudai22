'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Baby, 
  Heart, 
  ChevronRight, 
  MapPin, 
  Users, 
  TrendingUp,
  Ruler,
  Weight,
  Activity,
  
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  BarChart,
  Bar
} from 'recharts';
import { weekDetails, trimesterData, getWeekData, WeekDetail } from '@/data/pregnancyData';
import { realGrowthData } from '@/data/realGrowthData';

interface ChartDataPoint {
  week: number;
  babyLength: number;
  weight: number;
  heartRate: number;
}



const PregnancyTracker = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(12);
  const [activeTab, setActiveTab] = useState<'overview' | 'growth' | 'timeline'>('overview');
  const [deviceView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Prepare real growth data starting from week 4
  const growthData: ChartDataPoint[] = realGrowthData.map(data => ({
    week: data.week,
    babyLength: data.babyLength,
    weight: data.weight,
    heartRate: data.heartRate
  }));

  // Filter weeks for display (4-40)
  const displayWeeks = Array.from({ length: 37 }, (_, i) => i + 4); // Weeks 4-40

  // Device views for responsive preview - REMOVED UNNECESSARY LABELS
  

  // Get current week details
  const currentWeekDetails: WeekDetail = getWeekData(selectedWeek) || weekDetails[12];
  const currentTrimesterEvent = trimesterData.find(t => t.week === selectedWeek);
  
  // Get growth data for current week
  const currentGrowthData = growthData.find(data => data.week === selectedWeek);
  
  // Calculate trimester with proper colors
  const getTrimester = (week: number) => {
    if (week <= 13) return { 
      name: 'First', 
      bgColor: 'bg-purple-500',
      lightBgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      fromColor: 'from-purple-500',
      toColor: 'to-pink-500'
    };
    if (week <= 27) return { 
      name: 'Second', 
      bgColor: 'bg-pink-500',
      lightBgColor: 'bg-pink-100',
      textColor: 'text-pink-600',
      fromColor: 'from-pink-500',
      toColor: 'to-rose-500'
    };
    return { 
      name: 'Third', 
      bgColor: 'bg-blue-500',
      lightBgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      fromColor: 'from-blue-500',
      toColor: 'to-cyan-500'
    };
  };

  const currentTrimester = getTrimester(selectedWeek);

  // Helper function to get color classes safely
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border' = 'bg') => {
    const colorMap: Record<string, string> = {
      'purple-bg': 'bg-purple-100',
      'purple-text': 'text-purple-600',
      'purple-border': 'border-purple-200',
      'blue-bg': 'bg-blue-100',
      'blue-text': 'text-blue-600',
      'blue-border': 'border-blue-200',
      'green-bg': 'bg-green-100',
      'green-text': 'text-green-600',
      'green-border': 'border-green-200',
    };
    return colorMap[`${color}-${type}`] || '';
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pregnancy Week Tracker</h1>
                  <p className="text-gray-600 mt-1">Professional tracking with real medical data</p>
                </div>
              </div>

            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* SIMPLIFIED Device Preview - Cleaner design */}
            
              
              {/* Current Week Display */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${currentTrimester.bgColor} bg-opacity-10`}>
                    <Baby className={`w-5 h-5 ${currentTrimester.textColor}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Current Week</div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">Week {selectedWeek}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${currentTrimester.bgColor} text-white`}>
                        {currentTrimester.name} Trimester
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`grid gap-6 ${
          deviceView === 'mobile' ? 'grid-cols-1' :
          deviceView === 'tablet' ? 'grid-cols-1 lg:grid-cols-2' :
          'grid-cols-1 lg:grid-cols-3'
        }`}>
          {/* Left Panel - Timeline & Controls */}
          <div className={`${
            deviceView === 'mobile' ? 'col-span-1' :
            deviceView === 'tablet' ? 'col-span-1 lg:col-span-1' :
            'col-span-1 lg:col-span-2'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
                {[
                  { key: 'overview', label: 'Overview' },
                  { key: 'growth', label: 'Growth Charts' },
                  { key: 'timeline', label: 'Timeline' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`px-4 py-3 font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.key
                        ? 'border-b-2 border-purple-600 text-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Week Selection */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <h3 className="font-semibold text-gray-900">Select Week</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="hidden sm:inline">Trimester 1</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                      <span className="hidden sm:inline">Trimester 2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <span className="hidden sm:inline">Trimester 3</span>
                    </div>
                  </div>
                </div>
                
                {/* Week Grid */}
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                  {displayWeeks.map(week => {
                    const trimester = getTrimester(week);
                    return (
                      <button
                        key={week}
                        onClick={() => setSelectedWeek(week)}
                        className={`
                          aspect-square flex flex-col items-center justify-center rounded-xl transition-all duration-300
                          ${selectedWeek === week
                            ? `bg-gradient-to-br ${trimester.fromColor} ${trimester.toColor} text-white shadow-lg transform scale-105`
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }
                        `}
                        aria-label={`Select week ${week}`}
                      >
                        <span className="text-lg font-bold">{week}</span>
                        <span className={`text-xs mt-1 ${
                          selectedWeek === week ? 'text-white' : trimester.textColor
                        }`}>
                          {trimester.name.charAt(0)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Charts - Only show when growth tab is active */}
              {activeTab === 'growth' && (
                <div className="space-y-8">
                  {/* Length Chart */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Ruler className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">Baby Length Growth</h4>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis 
                            dataKey="week" 
                            stroke="#6b7280"
                            label={{ value: 'Week', position: 'insideBottom', offset: -5 }}
                          />
                          <YAxis 
                            stroke="#6b7280"
                            label={{ value: 'Length (cm)', angle: -90, position: 'insideLeft' }}
                          />
                          <Tooltip 
                            formatter={(value) => [`${value} cm`, 'Length']}
                            labelFormatter={(week) => `Week ${week}`}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="babyLength" 
                            stroke="#8b5cf6" 
                            strokeWidth={3}
                            dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            name="Baby Length"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Weight Chart */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Weight className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Weight Progression</h4>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="week" stroke="#6b7280" />
                          <YAxis stroke="#6b7280" />
                          <Tooltip 
                            formatter={(value) => [`${value} g`, 'Weight']}
                            labelFormatter={(week) => `Week ${week}`}
                          />
                          <Bar 
                            dataKey="weight" 
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                            name="Weight"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Heart Rate Chart */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-gray-900">Heart Rate Monitoring</h4>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="week" stroke="#6b7280" />
                          <YAxis stroke="#6b7280" />
                          <Tooltip 
                            formatter={(value) => [`${value} bpm`, 'Heart Rate']}
                            labelFormatter={(week) => `Week ${week}`}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="heartRate" 
                            stroke="#ef4444" 
                            strokeWidth={2}
                            dot={{ stroke: '#ef4444', strokeWidth: 2, r: 3 }}
                            activeDot={{ r: 5, strokeWidth: 0 }}
                            name="Heart Rate"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {/* Timeline View */}
              {activeTab === 'timeline' && (
                <div className="text-center py-12">
                  <div className="text-gray-500 mb-4">Timeline View Coming Soon</div>
                  <p className="text-gray-600">Interactive timeline with major milestones and events</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Week Details */}
          <div className="col-span-1">
            <div className="sticky top-6">
              {/* Week Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                {/* Week Header */}
                <div className={`bg-gradient-to-r ${currentTrimester.fromColor} ${currentTrimester.toColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{currentWeekDetails.title}</h2>
                      <p className="text-white/90 mt-1">Trimester: {currentTrimester.name}</p>
                    </div>
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Baby className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Baby Image */}
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-white">
                          Size: {currentWeekDetails.babySize}
                        </span>
                      </div>
                      <div className="text-sm text-white/90">
                        {currentWeekDetails.babyLength} • {currentWeekDetails.weight}
                      </div>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden bg-white">
                      {currentWeekDetails.image ? (
                        <img 
                          src={currentWeekDetails.image} 
                          alt={`Week ${selectedWeek}`}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-6xl">
                            {selectedWeek <= 4 ? "🌱" : 
                             selectedWeek <= 12 ? "🍑" : 
                             selectedWeek <= 20 ? "🍌" : 
                             selectedWeek <= 28 ? "🍆" : 
                             selectedWeek <= 36 ? "🎃" : "🍉"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rural Action */}
                  {currentTrimesterEvent && (
                    <div className="mb-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-emerald-800 mb-1">Rural Health Action</h4>
                          <p className="text-sm text-gray-700 mb-2">{currentTrimesterEvent.ruralAction}</p>
                          <p className="text-xs text-emerald-600">{currentTrimesterEvent.event}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Growth Stats */}
                  {currentGrowthData && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                        <Ruler className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">{currentGrowthData.babyLength}cm</div>
                        <div className="text-xs text-blue-600">Length</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-100">
                        <Weight className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">{currentGrowthData.weight}g</div>
                        <div className="text-xs text-purple-600">Weight</div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3 text-center border border-pink-100">
                        <Activity className="w-5 h-5 text-pink-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">{currentGrowthData.heartRate}bpm</div>
                        <div className="text-xs text-pink-600">Heart Rate</div>
                      </div>
                    </div>
                  )}

                  {/* Accordions */}
                  <Accordion.Root 
                    type="multiple" 
                    className="space-y-3"
                  >
                    {[
                      { 
                        key: 'milestones', 
                        title: 'Development Milestones', 
                        icon: <TrendingUp className="w-4 h-4" />,
                        items: currentWeekDetails.milestones,
                        color: 'purple'
                      },
                      { 
                        key: 'symptoms', 
                        title: 'Common Symptoms', 
                        icon: <Activity className="w-4 h-4" />,
                        items: currentWeekDetails.symptoms,
                        color: 'blue'
                      },
                      { 
                        key: 'tips', 
                        title: 'Health Tips', 
                        icon: <Heart className="w-4 h-4" />,
                        items: currentWeekDetails.tips,
                        color: 'green'
                      }
                    ].map((section) => (
                      <Accordion.Item 
                        key={section.key} 
                        value={section.key}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className={getColorClass(section.color, 'bg') + " p-2 rounded-lg"}>
                                <div className={getColorClass(section.color, 'text')}>
                                  {section.icon}
                                </div>
                              </div>
                              <span>{section.title}</span>
                            </div>
                            <ChevronRight 
                              className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" 
                            />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="px-4 pb-4 animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                          <ul className="space-y-2">
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <div className={`w-2 h-2 rounded-full mt-2 ${section.color === 'purple' ? 'bg-purple-500' : section.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`} />
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>

                  {/* Special Rural Tip */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-1">Rural Community Tip</h4>
                        <p className="text-sm text-gray-700">{currentWeekDetails.ruralTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-6 px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:from-purple-700 hover:to-pink-700">
                    <span>Get Week {selectedWeek} Insights</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyTracker;