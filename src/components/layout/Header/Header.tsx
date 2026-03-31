import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.png";

const languages = ["English", "Swedish","Spanish"];

function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prevState) => !prevState);
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

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;