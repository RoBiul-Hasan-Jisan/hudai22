// pages/dashboard/DoctorDashboard.tsx
import { useState } from 'react';
import { 
  Stethoscope, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Users, 
  Video, 
  Clock, 
  AlertCircle, 
  Home,
  Pill,
  ClipboardList,
  FileSignature
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPatient, setSelectedPatient] = useState(1);
  const [prescriptionText, setPrescriptionText] = useState('');

  // Mock data
  const doctorData = {
    name: 'ডাঃ আহমেদ রহমান',
    hospital: 'সিলেট মেডিকেল কলেজ হাসপাতাল',
    bmdc: 'BMDC-12345',
    todayConsultations: 15,
    waitingPatients: 5,
    todayPrescriptions: 23,
    criticalCases: 3
  };

  const patients = [
    { id: 1, name: "ফাতিমা বেগম", month: 6, condition: "উচ্চ রক্তচাপ", time: "সকাল ৯:০০", status: "অপেক্ষমান" },
    { id: 2, name: "আয়েশা আক্তার", month: 8, condition: "গর্ভকালীন ডায়াবেটিস", time: "সকাল ১০:৩০", status: "উচ্চ প্রাধান্য" },
    { id: 3, name: "মরিয়ম খাতুন", month: 3, condition: "রুটিন চেকআপ", time: "দুপুর ১২:০০", status: "নির্ধারিত" },
    { id: 4, name: "জাহানারা বেগম", month: 7, condition: "টেলিমেডিসিন", time: "বিকাল ৩:০০", status: "অনলাইন" }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const startConsultation = (patient: any) => {
    setSelectedPatient(patient.id);
    setActiveTab('consultations');
    alert(`${patient.name} -এর সাথে কন্সালটেশন শুরু হচ্ছে...`);
  };

  const writePrescription = () => {
    const prescription = prompt("প্রেসক্রিপশন লিখুন:");
    if (prescription) {
      setPrescriptionText(prescription);
      alert(`প্রেসক্রিপশন সফলভাবে সংরক্ষণ করা হয়েছে:\n\n${prescription}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'আজকের কন্সালটেশন', value: doctorData.todayConsultations, icon: MessageSquare, color: 'blue' },
                { label: 'অপেক্ষারত রোগী', value: doctorData.waitingPatients, icon: Clock, color: 'orange' },
                { label: 'আজকের প্রেসক্রিপশন', value: doctorData.todayPrescriptions, icon: FileSignature, color: 'green' },
                { label: 'জটিল কেস', value: doctorData.criticalCases, icon: AlertCircle, color: 'red' },
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

            {/* Today's Appointments */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-6">আজকের অ্যাপয়েন্টমেন্ট</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {patients.map(patient => (
                  <div key={patient.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{patient.name}</h4>
                        <p className="text-sm text-gray-600">গর্ভাবস্থার মাস: {patient.month}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        patient.status === 'উচ্চ প্রাধান্য' ? 'bg-red-100 text-red-800' :
                        patient.status === 'অপেক্ষমান' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                    <p className="text-sm mb-4">{patient.condition}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">⏰ {patient.time}</span>
                      <button
                        onClick={() => startConsultation(patient)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                      >
                        শুরু করুন
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'consultations':
        return (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Patient List */}
              <div className="lg:col-span-1 border-r">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">আজকের কন্সালটেশন</h3>
                </div>
                <div className="divide-y">
                  {patients.map(patient => (
                    <div
                      key={patient.id}
                      onClick={() => setSelectedPatient(patient.id)}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedPatient === patient.id ? 'bg-green-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-600">মাস: {patient.month} | {patient.condition}</p>
                        </div>
                        {selectedPatient === patient.id && (
                          <span className="text-green-600">● সক্রিয়</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-2">
                <div className="p-4 border-b flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">কন্সালটেশন</h3>
                    <p className="text-sm text-gray-600">
                      {patients.find(p => p.id === selectedPatient)?.name} - 
                      গর্ভাবস্থার মাস: {patients.find(p => p.id === selectedPatient)?.month}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Video className="w-4 h-4 inline mr-2" />
                      ভিডিও কল
                    </button>
                    <button
                      onClick={writePrescription}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <FileSignature className="w-4 h-4 inline mr-2" />
                      প্রেসক্রিপশন
                    </button>
                  </div>
                </div>
                
                <div className="h-96 overflow-y-auto p-4">
                  {/* Chat messages would go here */}
                  <div className="text-center text-gray-500 mt-20">
                    কন্সালটেশন বার্তাগুলো এখানে প্রদর্শিত হবে
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="প্রেসক্রিপশন বা পরামর্শ লিখুন..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      পাঠান
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'prescriptions':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">প্রেসক্রিপশন ব্যবস্থাপনা</h3>
            {prescriptionText ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">সর্বশেষ প্রেসক্রিপশন:</h4>
                <p className="whitespace-pre-wrap">{prescriptionText}</p>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileSignature className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">কোনো প্রেসক্রিপশন তৈরি করা হয়নি</p>
                <button
                  onClick={writePrescription}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  নতুন প্রেসক্রিপশন তৈরি করুন
                </button>
              </div>
            )}
          </div>
        );

      case 'mypatients':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">আমার রোগী তালিকা</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">নাম</th>
                    <th className="px-4 py-3 text-left">গর্ভাবস্থার মাস</th>
                    <th className="px-4 py-3 text-left">অবস্থা</th>
                    <th className="px-4 py-3 text-left">পরবর্তী ভিজিট</th>
                    <th className="px-4 py-3 text-left">কার্যকলাপ</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {patients.map(patient => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{patient.name}</td>
                      <td className="px-4 py-3">{patient.month}</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {patient.condition}
                        </span>
                      </td>
                      <td className="px-4 py-3">{patient.time}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => startConsultation(patient)}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
                        >
                          কন্সালটেশন
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'telemedicine':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">টেলিমেডিসিন সেশন্স</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patients.filter(p => p.status === 'অনলাইন' || p.status === 'উচ্চ প্রাধান্য').map(patient => (
                <div key={patient.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{patient.name}</h4>
                      <p className="text-sm text-gray-600">অবস্থা: {patient.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      <Video className="w-4 h-4 inline mr-2" />
                      কল করুন
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      বার্তা
                    </button>
                  </div>
                </div>
              ))}
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{doctorData.name}</h1>
                <p className="flex items-center gap-2">
                  <span>🏥 {doctorData.hospital}</span>
                  <span className="ml-4">🆔 {doctorData.bmdc}</span>
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
              { id: 'appointments', label: 'অ্যাপয়েন্টমেন্ট', icon: Calendar },
              { id: 'consultations', label: 'কন্সালটেশন', icon: MessageSquare },
              { id: 'prescriptions', label: 'প্রেসক্রিপশন', icon: FileSignature },
              { id: 'mypatients', label: 'আমার রোগী', icon: Users },
              { id: 'telemedicine', label: 'টেলিমেডিসিন', icon: Video },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
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

export default DoctorDashboard;