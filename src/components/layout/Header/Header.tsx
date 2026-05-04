import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../assets/images/logonew.png";

const languages = ["English", "Swedish", "Spanish"];

const navItems = [
  { label: "Shops", path: "/shops" },
  { label: "Service", path: "/service" },
    { label: "Insurance", path: "/pet-insurance" },
	{ label: "Clinics", path: "/clinics" },
];

function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prevState) => !prevState);
  };

  const toggleNavMenu = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeNavMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="GlobeAnimal logo" className={styles.logo} />
      </div>

      <div className={styles.center}>
        <h1 className={styles.title}>GlobeAnimal</h1>
        <p className={styles.subtitle}>Beyond borders</p>
      </div>

      <div className={styles.right}>
        <div className={styles.languageMenu}>
          <button
            type="button"
            className={styles.languageButton}
            onClick={toggleLanguageMenu}
            aria-haspopup="true"
            aria-expanded={isLanguageMenuOpen}
          >
            Language
          </button>

          {isLanguageMenuOpen && (
            <div className={styles.languageDropdown}>
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  className={styles.languageOption}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.navWrapper}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            onClick={toggleNavMenu}
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>

          {isNavOpen && (
            <div className={styles.navMenu}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={styles.navItem}
                  onClick={closeNavMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;