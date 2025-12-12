import { useState } from 'react';
import { Menu, X, User, LogIn, UserPlus, Bell, Search, Heart, Stethoscope, Users } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'patient' | 'nurse' | 'doctor'>('patient');
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [language, setLanguage] = useState<'bn' | 'en' | 'syl'>('bn');
  
  // Form states
  const [patientPhone, setPatientPhone] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [nurseId, setNurseId] = useState('');
  const [nursePassword, setNursePassword] = useState('');
  const [doctorBmdc, setDoctorBmdc] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');
  
  // Registration states
  const [fullName, setFullName] = useState('');
  const [regPatientPhone, setRegPatientPhone] = useState('');
  const [regPatientPassword, setRegPatientPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pregnancyMonth, setPregnancyMonth] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [hospitalName, setHospitalName] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pregnancy Tracker', path: '#pregnancy-tracker' },
    { name: 'Nutrition', path: '#nutrition' },
    { name: 'Care Guide', path: '#care' },
    { name: 'Rural Health', path: '#rural-health' },
    { name: 'Q&A', path: '#quick-questions' },
  ];

  const languageLabels = {
    bn: 'বাংলা',
    en: 'English',
    syl: 'ꠍꠤꠟꠐꠤ'
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/${sectionId}`);
    } else {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleAuthModal = (mode: 'login' | 'register', type?: 'patient' | 'nurse' | 'doctor') => {
    setAuthMode(mode);
    if (type) setUserType(type);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    let isValid = false;
    
    switch(userType) {
      case 'patient':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(patientPhone && patientPhone.length === 11 && patientPassword);
        if (isValid) {
          // Store user data
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'patient');
          localStorage.setItem('userData', JSON.stringify({
            name: 'ফাতিমা বেগম',
            phone: patientPhone,
            pregnancyMonth: 6,
            location: 'সিলেট'
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/patient/dashboard');
        } else {
          alert('দয়া করে সঠিক মোবাইল নম্বর এবং পাসওয়ার্ড দিন');
        }
        break;

      case 'nurse':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(nurseId && nurseId.startsWith('HWC-') && nursePassword);
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'nurse');
          localStorage.setItem('userData', JSON.stringify({
            name: 'আয়শা খাতুন',
            id: nurseId,
            facility: 'সিলেট কমিউনিটি ক্লিনিক'
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/nurse/dashboard');
        } else {
          alert('দয়া করে সঠিক স্বাস্থ্যকর্মী আইডি এবং পাসওয়ার্ড দিন');
        }
        break;

      case 'doctor':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(doctorBmdc && doctorBmdc.startsWith('BMDC-') && doctorPassword);
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'doctor');
          localStorage.setItem('userData', JSON.stringify({
            name: 'ডাঃ আহমেদ রহমান',
            bmdc: doctorBmdc,
            hospital: 'সিলেট মেডিকেল কলেজ হাসপাতাল'
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/doctor/dashboard');
        } else {
          alert('দয়া করে সঠিক BMDC রেজিস্ট্রেশন এবং পাসওয়ার্ড দিন');
        }
        break;
    }
  };

  const handleRegister = () => {
    let isValid = false;
    
    switch(userType) {
      case 'patient':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(fullName && regPatientPhone && regPatientPhone.length === 11 && 
                  regPatientPassword && confirmPassword && regPatientPassword === confirmPassword &&
                  pregnancyMonth && parseInt(pregnancyMonth) >= 1 && parseInt(pregnancyMonth) <= 9);
        
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'patient');
          localStorage.setItem('userData', JSON.stringify({
            name: fullName,
            phone: regPatientPhone,
            pregnancyMonth: parseInt(pregnancyMonth),
            location: 'সিলেট'
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/patient/dashboard');
          
          // Reset form
          setFullName('');
          setRegPatientPhone('');
          setRegPatientPassword('');
          setConfirmPassword('');
          setPregnancyMonth('');
        } else {
          alert('দয়া করে সমস্ত তথ্য সঠিকভাবে পূরণ করুন');
        }
        break;

      case 'nurse':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(fullName && nurseId && nurseId.startsWith('HWC-') && 
                  nursePassword && confirmPassword && nursePassword === confirmPassword &&
                  facilityName);
        
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'nurse');
          localStorage.setItem('userData', JSON.stringify({
            name: fullName,
            id: nurseId,
            facility: facilityName
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/nurse/dashboard');
          
          // Reset form
          setFullName('');
          setNurseId('');
          setNursePassword('');
          setConfirmPassword('');
          setFacilityName('');
        } else {
          alert('দয়া করে সমস্ত তথ্য সঠিকভাবে পূরণ করুন');
        }
        break;

      case 'doctor':
        // FIXED: Use Boolean() to ensure boolean return
        isValid = Boolean(fullName && doctorBmdc && doctorBmdc.startsWith('BMDC-') && 
                  doctorPassword && confirmPassword && doctorPassword === confirmPassword &&
                  hospitalName);
        
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'doctor');
          localStorage.setItem('userData', JSON.stringify({
            name: fullName,
            bmdc: doctorBmdc,
            hospital: hospitalName
          }));
          
          setIsLoggedIn(true);
          setShowAuthModal(false);
          navigate('/doctor/dashboard');
          
          // Reset form
          setFullName('');
          setDoctorBmdc('');
          setDoctorPassword('');
          setConfirmPassword('');
          setHospitalName('');
        } else {
          alert('দয়া করে সমস্ত তথ্য সঠিকভাবে পূরণ করুন');
        }
        break;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const changeLanguage = (lang: 'bn' | 'en' | 'syl') => {
    setLanguage(lang);
    setShowLanguageSelector(false);
    // Implement language change logic here
  };

  // Reset form when switching user type
  const handleUserTypeChange = (type: 'patient' | 'nurse' | 'doctor') => {
    setUserType(type);
    // Reset all form fields
    setPatientPhone('');
    setPatientPassword('');
    setNurseId('');
    setNursePassword('');
    setDoctorBmdc('');
    setDoctorPassword('');
    setFullName('');
    setRegPatientPhone('');
    setRegPatientPassword('');
    setConfirmPassword('');
    setPregnancyMonth('');
    setFacilityName('');
    setHospitalName('');
  };

  // Calculate button disabled states - FIXED VERSION
  const isLoginDisabled = (): boolean => {
    switch(userType) {
      case 'patient':
        return !Boolean(patientPhone && patientPhone.length === 11 && patientPassword);
      case 'nurse':
        return !Boolean(nurseId && nurseId.startsWith('HWC-') && nursePassword);
      case 'doctor':
        return !Boolean(doctorBmdc && doctorBmdc.startsWith('BMDC-') && doctorPassword);
      default:
        return true;
    }
  };

  const isRegisterDisabled = (): boolean => {
    switch(userType) {
      case 'patient':
        return !Boolean(fullName && regPatientPhone && regPatientPhone.length === 11 && 
                regPatientPassword && confirmPassword && regPatientPassword === confirmPassword &&
                pregnancyMonth && parseInt(pregnancyMonth) >= 1 && parseInt(pregnancyMonth) <= 9);
      case 'nurse':
        return !Boolean(fullName && nurseId && nurseId.startsWith('HWC-') && 
                nursePassword && confirmPassword && nursePassword === confirmPassword &&
                facilityName);
      case 'doctor':
        return !Boolean(fullName && doctorBmdc && doctorBmdc.startsWith('BMDC-') && 
                doctorPassword && confirmPassword && doctorPassword === confirmPassword &&
                hospitalName);
      default:
        return true;
    }
  };

  // Remove this line if not used
  // const isSubmitDisabled = authMode === 'login' ? isLoginDisabled() : isRegisterDisabled();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MatraCare
                </h1>
                <p className="text-xs text-gray-500">Mother & Child Wellness</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    location.hash === item.path ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-purple-600 border border-gray-200 rounded-lg"
                >
                  <span>{languageLabels[language]}</span>
                </button>
                {showLanguageSelector && (
                  <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50">
                    <button
                      onClick={() => changeLanguage('bn')}
                      className={`w-full px-4 py-2 text-left text-sm ${language === 'bn' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
                    >
                      বাংলা
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full px-4 py-2 text-left text-sm ${language === 'en' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('syl')}
                      className={`w-full px-4 py-2 text-left text-sm ${language === 'syl' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
                    >
                      ꠍꠤꠟꠐꠤ
                    </button>
                  </div>
                )}
              </div>

              {/* Search */}
              <button className="hidden md:flex p-2 text-gray-600 hover:text-purple-600">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="hidden md:flex relative p-2 text-gray-600 hover:text-purple-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center gap-3">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all">
                      <User className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">My Profile</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleAuthModal('login')}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      Sign In
                    </button>
                    <button
                      onClick={() => handleAuthModal('register')}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.path)}
                    className={`px-4 py-2 rounded-lg transition-colors text-left ${
                      location.hash === item.path
                        ? 'bg-purple-50 text-purple-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Language Selector Mobile */}
                <div className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => changeLanguage('bn')}
                      className={`flex-1 py-2 rounded-lg text-sm ${language === 'bn' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
                    >
                      বাংলা
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`flex-1 py-2 rounded-lg text-sm ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('syl')}
                      className={`flex-1 py-2 rounded-lg text-sm ${language === 'syl' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
                    >
                      ꠍꠤꠟꠐꠤ
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 px-4 py-4 border-t border-gray-200">
                  {isLoggedIn ? (
                    <>
                      <button className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <User className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">My Profile</span>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="px-4 py-3 text-left text-red-600 font-medium"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAuthModal('login')}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg"
                      >
                        <LogIn className="w-5 h-5" />
                        Sign In
                      </button>
                      <button
                        onClick={() => handleAuthModal('register')}
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
                      >
                        <UserPlus className="w-5 h-5" />
                        Sign Up Free
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {authMode === 'login' ? 'Sign In' : 'Register'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Type Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">I am a</h3>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleUserTypeChange('patient')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    userType === 'patient'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="p-3 bg-purple-100 rounded-full mb-2">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-xs font-medium">Pregnant Mother</span>
                </button>
                <button
                  onClick={() => handleUserTypeChange('nurse')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    userType === 'nurse'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="p-3 bg-blue-100 rounded-full mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Nurse/Health Worker</span>
                </button>
                <button
                  onClick={() => handleUserTypeChange('doctor')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    userType === 'doctor'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="p-3 bg-green-100 rounded-full mb-2">
                    <Stethoscope className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-xs font-medium">Doctor</span>
                </button>
              </div>
            </div>

            {/* Login Form */}
            {authMode === 'login' && (
              <div className="space-y-4">
                {userType === 'patient' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        maxLength={11}
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        value={patientPassword}
                        onChange={(e) => setPatientPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {userType === 'nurse' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Health Worker ID
                      </label>
                      <input
                        type="text"
                        placeholder="HWC-XXXXX"
                        value={nurseId}
                        onChange={(e) => setNurseId(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        value={nursePassword}
                        onChange={(e) => setNursePassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {userType === 'doctor' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        BMDC Registration Number
                      </label>
                      <input
                        type="text"
                        placeholder="BMDC-XXXXX"
                        value={doctorBmdc}
                        onChange={(e) => setDoctorBmdc(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        value={doctorPassword}
                        onChange={(e) => setDoctorPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                <button
                  onClick={handleLogin}
                  disabled={isLoginDisabled()}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    userType === 'patient'
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : userType === 'nurse'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  Sign In
                </button>

                <div className="text-center mt-4">
                  <button
                    onClick={() => setAuthMode('register')}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Don't have an account? Register now
                  </button>
                </div>
              </div>
            )}

            {/* Register Form */}
            {authMode === 'register' && (
              <div className="space-y-4">
                {/* Common field for all users */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {userType === 'patient' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        maxLength={11}
                        value={regPatientPhone}
                        onChange={(e) => setRegPatientPhone(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create password"
                        value={regPatientPassword}
                        onChange={(e) => setRegPatientPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pregnancy Month (1-9)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="9"
                        placeholder="Enter month"
                        value={pregnancyMonth}
                        onChange={(e) => setPregnancyMonth(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {userType === 'nurse' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Health Worker ID
                      </label>
                      <input
                        type="text"
                        placeholder="HWC-XXXXX"
                        value={nurseId}
                        onChange={(e) => setNurseId(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create password"
                        value={nursePassword}
                        onChange={(e) => setNursePassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Facility/Clinic Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter clinic name"
                        value={facilityName}
                        onChange={(e) => setFacilityName(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {userType === 'doctor' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        BMDC Registration Number
                      </label>
                      <input
                        type="text"
                        placeholder="BMDC-XXXXX"
                        value={doctorBmdc}
                        onChange={(e) => setDoctorBmdc(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Create password"
                        value={doctorPassword}
                        onChange={(e) => setDoctorPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hospital/Clinic Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter hospital name"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                <button
                  onClick={handleRegister}
                  disabled={isRegisterDisabled()}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    userType === 'patient'
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : userType === 'nurse'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  Register
                </button>

                <div className="text-center mt-4">
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Already have an account? Sign in
                  </button>
                </div>

                {userType === 'nurse' && (
                  <div className="text-center mt-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Government health worker? Verify here
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;