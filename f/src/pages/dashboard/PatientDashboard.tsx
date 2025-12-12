// pages/dashboard/PatientDashboard.tsx
import { useState } from 'react';
import { Calendar, Heart, Baby, Pill, Activity, Bell, MessageSquare, Users, FileText, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [currentMonth, setCurrentMonth] = useState(6);

  // Mock data
  const patientData = {
    name: 'ফাতিমা বেগম',
    pregnancyMonth: 6,
    location: 'সিলেট',
    weight: '58 কেজি',
    bloodPressure: '128/84',
    nextAppointments: 3,
    progress: 55
  };

  const monthlyTasks = {
    6: [
      'অ্যানিমিয়া টেস্ট করুন',
      'বেবি কিক কাউন্ট করা শিখুন',
      'হাসপাতাল ভিজিট করুন',
      'আয়রন ট্যাবলেট নিয়মিত খান'
    ]
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Baby className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">গর্ভাবস্থার মাস</p>
                    <p className="text-2xl font-bold text-gray-800">{patientData.pregnancyMonth}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">রক্তচাপ (গড়)</p>
                    <p className="text-2xl font-bold text-gray-800">{patientData.bloodPressure}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">বর্তমান ওজন</p>
                    <p className="text-2xl font-bold text-gray-800">{patientData.weight}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">পরবর্তী অ্যাপয়েন্টমেন্ট</p>
                    <p className="text-2xl font-bold text-gray-800">{patientData.nextAppointments}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pregnancy Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">গর্ভাবস্থার অগ্রগতি</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>মাস ১</span>
                  <span>মাস ৯</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${patientData.progress}%` }}
                  ></div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  মাস {patientData.pregnancyMonth} (বর্তমান) • {patientData.progress}% সম্পন্ন
                </p>
              </div>
            </div>

            {/* Today's Reminders */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-600" />
                আজকের রিমাইন্ডার
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Pill className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">সকাল ১০:০০ - আয়রন ট্যাবলেট</p>
                    <p className="text-sm text-gray-600">খাবার পর সাথে সাথে খান</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Heart className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">বিকাল ৪:০০ - রক্তচাপ চেক</p>
                    <p className="text-sm text-gray-600">বিশ্রাম নিয়ে মাপুন</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Activity className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">সন্ধ্যা ৬:০০ - ৩০ মিনিট হাঁটাহাঁটি</p>
                    <p className="text-sm text-gray-600">হালকা গতিতে হাঁটুন</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tracker':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <h3 className="text-lg font-semibold">গর্ভাবস্থা ট্র্যাকার - মাস {currentMonth}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentMonth(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  পূর্ববর্তী মাস
                </button>
                <button
                  onClick={() => setCurrentMonth(prev => Math.min(9, prev + 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  পরবর্তী মাস
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4">এই মাসের করণীয়</h4>
                <div className="space-y-3">
                  {(monthlyTasks[currentMonth as keyof typeof monthlyTasks] || []).map((task, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <input type="checkbox" className="mt-1" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">ভিডিও গাইড</h4>
                <div className="bg-black aspect-video rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                    </div>
                    <p className="text-sm">মাস {currentMonth} এর গাইডেন্স ভিডিও</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">ডাঃ রহমান</h3>
                    <p className="text-sm text-gray-600">কার্ডিওলজিস্ট</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  ● অনলাইন
                </span>
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {/* Chat messages would go here */}
              <div className="text-center text-gray-500">
                Chat messages will appear here
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="আপনার বার্তা লিখুন..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  পাঠান
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{patientData.name}</h1>
                <p className="flex items-center gap-2">
                  <Baby className="w-4 h-4" />
                  গর্ভাবস্থার মাস: {patientData.pregnancyMonth} | 
                  <span className="ml-2">📍 {patientData.location}</span>
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              লগআউট
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6 overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            {[
              { id: 'home', label: 'হোম', icon: Home },
              { id: 'tracker', label: 'গর্ভাবস্থা ট্র্যাকার', icon: Calendar },
              { id: 'medical', label: 'মেডিকেল চেকআপ', icon: Activity },
              { id: 'chat', label: 'ডাক্তারের সাথে চ্যাট', icon: MessageSquare },
              { id: 'appointments', label: 'অ্যাপয়েন্টমেন্ট', icon: Calendar },
              { id: 'nutrition', label: 'পুষ্টি পরামর্শ', icon: FileText },
              { id: 'medicines', label: 'ওষুধ রিমাইন্ডার', icon: Pill },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;