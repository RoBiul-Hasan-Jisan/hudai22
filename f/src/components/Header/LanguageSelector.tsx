import React from 'react';
import { Language } from './types';
import { LANGUAGE_LABELS } from './constants';

interface LanguageSelectorProps {
  language: Language;
  showLanguageSelector: boolean;
  setShowLanguageSelector: (show: boolean) => void;
  changeLanguage: (lang: Language) => void;
  isMobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  showLanguageSelector,
  setShowLanguageSelector,
  changeLanguage,
  isMobile = false
}) => {
  if (isMobile) {
    return (
      <div className="px-4 py-2">
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage('bn')}
            className={`flex-1 py-2 rounded-lg text-sm ${language === 'bn' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          >
            {LANGUAGE_LABELS.bn}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`flex-1 py-2 rounded-lg text-sm ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          >
            {LANGUAGE_LABELS.en}
          </button>
          <button
            onClick={() => changeLanguage('syl')}
            className={`flex-1 py-2 rounded-lg text-sm ${language === 'syl' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          >
            {LANGUAGE_LABELS.syl}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowLanguageSelector(!showLanguageSelector)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-purple-600 border border-gray-200 rounded-lg"
      >
        <span>{LANGUAGE_LABELS[language]}</span>
      </button>
      {showLanguageSelector && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50">
          <button
            onClick={() => changeLanguage('bn')}
            className={`w-full px-4 py-2 text-left text-sm ${language === 'bn' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            {LANGUAGE_LABELS.bn}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full px-4 py-2 text-left text-sm ${language === 'en' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            {LANGUAGE_LABELS.en}
          </button>
          <button
            onClick={() => changeLanguage('syl')}
            className={`w-full px-4 py-2 text-left text-sm ${language === 'syl' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            {LANGUAGE_LABELS.syl}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;