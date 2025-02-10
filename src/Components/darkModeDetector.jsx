import { useState, useEffect } from "react";

const DarkModeDetector = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(darkModePreference);
    };

    checkDarkMode(); // Vérifie au premier rendu

    const darkModeListener = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeListener.addEventListener("change", checkDarkMode);

    return () => darkModeListener.removeEventListener("change", checkDarkMode);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h1>{isDarkMode ? "🌙 Dark Mode Activated" : "☀️ Light Mode Activated"}</h1>
    </div>
  );
};

export default DarkModeDetector;
