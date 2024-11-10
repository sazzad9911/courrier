'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the context
interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    // Check localStorage on initial load
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'; // Example toggling between English and Spanish
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
