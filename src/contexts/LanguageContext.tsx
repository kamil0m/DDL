import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (newLang: string) => void;
  isLanguageChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  const changeLanguage = async (newLang: string) => {
    setIsLanguageChanging(true);
    try {
      await i18n.changeLanguage(newLang);
      setCurrentLanguage(newLang);
      console.log('Language changed to:', newLang);
      
      // TO DO:
      // - Save to localStorage
      
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLanguageChanging(false);
    }
  };

  // Listen for language changes from i18next
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    isLanguageChanging,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
