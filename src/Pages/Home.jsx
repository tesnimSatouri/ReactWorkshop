
import DarkModeDetector from "../Components/darkModeDetector";
import { useLanguage } from "../Context/LanguageContextt";

const Home = () => {
  const { translations } = useLanguage(); // Get the translated text from context

  return (
    <div>
      <DarkModeDetector />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        {translations.greeting} {/* Display the translated greeting */}
      </h1>
    </div>
  );
};

export default Home; 
