import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.png";

const languages = ["English", "Swedish", "Spanish"];

const navItems = [
  { label: "Shops", path: "/shops" },
  { label: "Service", path: "/service" },
  { label: "Insurance", path: "/insurance" },
];

function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
        {/* language */}
        <div className={styles.languageMenu}>
          <button
            type="button"
            className={styles.languageButton}
            onClick={() => setIsLanguageMenuOpen((p) => !p)}
          >
            Language
          </button>

          {isLanguageMenuOpen && (
            <div className={styles.languageDropdown}>
              {languages.map((language) => (
                <button key={language} className={styles.languageOption}>
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* hamburger */}
        <div className={styles.navWrapper}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsNavOpen((p) => !p)}
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
                  onClick={() => setIsNavOpen(false)}
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