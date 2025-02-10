import { useLanguage } from "../Context/LanguageContextt";

const Navbar = () => {
  const context = useLanguage();
  console.log("Language context:", context); // Vérifier ce que retourne le hook

  return (
    <nav>
      <button>{context.translations.button}</button>
    </nav>
  );
};

export default Navbar;
