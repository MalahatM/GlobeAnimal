import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.png";

function Header() {
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
        <button type="button" className={styles.languageButton}>
          Language
        </button>

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