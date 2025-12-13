import { useState } from 'react';
import { Menu, X, User, LogIn, UserPlus, Bell, Search, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserType, AuthMode, LoginCredentials, RegisterCredentials } from './types';
import { NAV_ITEMS, LANGUAGE_LABELS } from './constants';
import { scrollToSection, validateLogin, validateRegister, getUserData, resetFormFields } from './utils';
import AuthModal from './AuthModal';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [userType, setUserType] = useState<UserType>('patient');
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [language, setLanguage] = useState<'bn' | 'en' | 'syl'>('bn');
  
  // Form states
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    patientPhone: '',
    patientPassword: '',
    nurseId: '',
    nursePassword: '',
    doctorBmdc: '',
    doctorPassword: ''
  });

  const [registerCredentials, setRegisterCredentials] = useState<RegisterCredentials>({
    fullName: '',
    regPatientPhone: '',
    regPatientPassword: '',
    confirmPassword: '',
    pregnancyMonth: '',
    facilityName: '',
    hospitalName: '',
    nurseId: '',
    nursePassword: '',
    doctorBmdc: '',
    doctorPassword: ''
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId, location.pathname, navigate);
    setIsMenuOpen(false);
  };

  const handleAuthModal = (mode: AuthMode, type?: UserType) => {
    setAuthMode(mode);
    if (type) setUserType(type);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  const handleAuth = (mode: AuthMode) => {
    let isValid = false;
    
    if (mode === 'login') {
      isValid = validateLogin(userType, loginCredentials);
    } else {
      isValid = validateRegister(userType, registerCredentials);
    }

    if (isValid) {
      const userData = getUserData(
        userType,
        mode === 'login' ? loginCredentials : registerCredentials,
        mode
      );

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', userType);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsLoggedIn(true);
      setShowAuthModal(false);
      
      // Navigate to appropriate dashboard
      navigate(`/${userType}/dashboard`);
      
      // Reset forms
      if (mode === 'login') {
        setLoginCredentials(resetFormFields() as LoginCredentials);
      } else {
        setRegisterCredentials(resetFormFields() as RegisterCredentials);
      }
    } else {
      alert(`Please provide valid ${mode === 'login' ? 'login' : 'registration'} credentials`);
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

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    // Reset all form fields
    setLoginCredentials(resetFormFields() as LoginCredentials);
    setRegisterCredentials(resetFormFields() as RegisterCredentials);
  };

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
            <Navigation location={location} scrollToSection={handleScrollToSection} />

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <LanguageSelector
                language={language}
                showLanguageSelector={showLanguageSelector}
                setShowLanguageSelector={setShowLanguageSelector}
                changeLanguage={changeLanguage}
              />

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
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            scrollToSection={handleScrollToSection}
            location={location}
            language={language}
            showLanguageSelector={showLanguageSelector}
            setShowLanguageSelector={setShowLanguageSelector}
            changeLanguage={changeLanguage}
            handleAuthModal={handleAuthModal}
          />
        </div>
      </header>

      {/* Authentication Modal */}
      <AuthModal
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
        authMode={authMode}
        setAuthMode={setAuthMode}
        userType={userType}
        handleUserTypeChange={handleUserTypeChange}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        registerCredentials={registerCredentials}
        setRegisterCredentials={setRegisterCredentials}
        handleAuth={handleAuth}
        resetFormFields={resetFormFields}
      />
    </>
  );
};

export default Header;