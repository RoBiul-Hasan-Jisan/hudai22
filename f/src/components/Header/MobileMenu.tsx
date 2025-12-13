import React from 'react';
import { User, LogIn, UserPlus } from 'lucide-react';
import { NavItem } from './types';
import { NAV_ITEMS } from './constants';
import LanguageSelector from './LanguageSelector';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
  scrollToSection: (sectionId: string) => void;
  location: any;
  language: any;
  showLanguageSelector: boolean;
  setShowLanguageSelector: (show: boolean) => void;
  changeLanguage: (lang: any) => void;
  handleAuthModal: (mode: 'login' | 'register', type?: any) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isLoggedIn,
  handleLogout,
  scrollToSection,
  location,
  language,
  showLanguageSelector,
  setShowLanguageSelector,
  changeLanguage,
  handleAuthModal
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
      <div className="flex flex-col gap-4">
        {NAV_ITEMS.map((item: NavItem) => (
          <button
            key={item.name}
            onClick={() => {
              scrollToSection(item.path);
              setIsMenuOpen(false);
            }}
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
        <LanguageSelector
          language={language}
          showLanguageSelector={showLanguageSelector}
          setShowLanguageSelector={setShowLanguageSelector}
          changeLanguage={changeLanguage}
          isMobile={true}
        />

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
  );
};

export default MobileMenu;