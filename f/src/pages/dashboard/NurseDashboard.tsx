// pages/dashboard/NurseDashboard.tsx
import { useState } from 'react';
import { Users, AlertTriangle, Calendar, ClipboardCheck, Bell, ChartBar, Map, Home, Phone, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NurseDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const nurseData = {
    name: 'আয়শা খাতুন',
    facility: 'সিলেট কমিউনিটি ক্লিনিক',
    id: 'HWC-45321',
    totalPatients: 47,
    highRiskPatients: 8,
    todayAppointments: 12,
    pendingAlerts: 3
  };

  const patients = [
    { id: 1, name: "ফাতিমা বেগম", month: 6, risk: "medium", lastCheckup: "২০২৪-০৩-১৫", phone: "০১৭১২৩৪৫৬৭৮" },
    { id: 2, name: "আয়েশা আক্তার", month: 8, risk: "high", lastCheckup: "২০২৪-০৩-১৪", phone: "০১৭২৩৪৫৬৭৮৯" },
    { id: 3, name: "মরিয়ম খাতুন", month: 3, risk: "low", lastCheckup: "২০২৪-০৩-১০", phone: "০১৭৩৪৫৬৭৮৯০" },
    { id: 4, name: "জাহানারা বেগম", month: 7, risk: "medium", lastCheckup: "২০২৪-০৩-১২", phone: "০১৭৪৫৬৭৮৯০১" },
    { id: 5, name: "নাজমা আক্তার", month: 5, risk: "low", lastCheckup: "২০২৪-০৩-১১", phone: "০১৭৫৬৭৮৯০১২" }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const addNewPatient = () => {
    const name = prompt("রোগীর নাম দিন:");
    if (name) {
      alert(`${name} - নতুন রোগী যোগ করা হবে`);
    }
  };

  const contactPatient = (patient: any) => {
    alert(`${patient.name} -এর সাথে কল করা হচ্ছে: ${patient.phone}`);
  };

  const viewPatientDetails = (patient: any) => {
    alert(`রোগী বিবরণ:\n\nনাম: ${patient.name}\nগর্ভাবস্থার মাস: ${patient.month}\nঝুঁকি: ${patient.risk}\nশেষ চেকআপ: ${patient.lastCheckup}`);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'মোট রোগী', value: nurseData.totalPatients, icon: Users, color: 'blue' },
                { label: 'উচ্চ ঝুঁকির রোগী', value: nurseData.highRiskPatients, icon: AlertTriangle, color: 'red' },
                { label: 'আজকের অ্যাপয়েন্টমেন্ট', value: nurseData.todayAppointments, icon: Calendar, color: 'green' },
                { label: 'বিবেচনাধীন এলার্ট', value: nurseData.pendingAlerts, icon: Bell, color: 'orange' },
              ].map((stat, index) => (
                <div key={index} className={`bg-gradient-to-r from-${stat.color}-50 to-${stat.color}-100 p-6 rounded-xl`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* High Risk Patients */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  উচ্চ ঝুঁকির রোগী
                </h3>
                <div className="space-y-3">
                  {patients.filter(p => p.risk === 'high').map(patient => (
                    <div key={patient.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-600">মাস: {patient.month} | শেষ চেকআপ: {patient.lastCheckup}</p>
                      </div>
                      <button
                        onClick={() => contactPatient(patient)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Checkups */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  আজকের চেকআপ
                </h3>
                <div className="space-y-3">
                  {patients.slice(0, 3).map(patient => (
                    <div key={patient.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-600">সময়: সকাল ১০:০০</p>
                      </div>
                      <button
                        onClick={() => viewPatientDetails(patient)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                      >
                        শুরু করুন
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'patients':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3 className="text-lg font-semibold">রোগী ব্যবস্থাপনা</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="রোগী খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={addNewPatient}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  নতুন রোগী যোগ করুন
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">নাম</th>
                    <th className="px-4 py-3 text-left">গর্ভাবস্থার মাস</th>
                    <th className="px-4 py-3 text-left">ঝুঁকি</th>
                    <th className="px-4 py-3 text-left">শেষ চেকআপ</th>
                    <th className="px-4 py-3 text-left">কার্যকলাপ</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredPatients.map(patient => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{patient.name}</td>
                      <td className="px-4 py-3">{patient.month}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          patient.risk === 'high' ? 'bg-red-100 text-red-800' :
                          patient.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {patient.risk === 'high' ? 'উচ্চ' : patient.risk === 'medium' ? 'মধ্যম' : 'নিম্ন'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{patient.lastCheckup}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => viewPatientDetails(patient)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="দেখুন"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => contactPatient(patient)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                            title="কল করুন"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{activeTab} ট্যাব</h3>
            <p className="text-gray-600">এই ট্যাবের কন্টেন্ট শীঘ্রই আসছে...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{nurseData.name}</h1>
                <p className="flex items-center gap-2">
                  <span>🏥 {nurseData.facility}</span>
                  <span className="ml-4">🆔 {nurseData.id}</span>
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
              { id: 'patients', label: 'রোগী তালিকা', icon: Users },
              { id: 'checkup', label: 'চেকআপ রেকর্ড', icon: ClipboardCheck },
              { id: 'alerts', label: 'জরুরি এলার্ট', icon: Bell },
              { id: 'reports', label: 'রিপোর্ট', icon: ChartBar },
              { id: 'community', label: 'কমিউনিটি ম্যাপ', icon: Map },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
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

export default NurseDashboard;