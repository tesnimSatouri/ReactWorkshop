import { createContext, useState, useContext } from "react";

// 1️⃣ Creating the context
const LanguageContext = createContext();

// 2️⃣ Language dictionary
const translations = {
  en: { greeting: "Hello, welcome!", button: "Switch to French" },
  fr: { greeting: "Bonjour, bienvenue!", button: "Passer à l'anglais" }
};

// 3️⃣ Context Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default: English

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4️⃣ Custom Hook for easy access
export const useLanguage = () => useContext(LanguageContext);
