import styles from "./Footer.module.css";
import footerLogo from "../../../assets/images/HEVC.png";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        {/* LEFT - LOGO */}
        <div className={styles.logoWrapper}>
          <img
            src={footerLogo}
            alt="GlobeAnimal footer logo"
            className={styles.logo}
          />
        </div>

        {/* RIGHT - SOCIALS */}
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>
            <FaFacebookF />
          </a>

          <a href="#" className={styles.socialLink}>
            <FaXTwitter />
          </a>

          <a href="#" className={styles.socialLink}>
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* LINKS */}
      <div className={styles.linksRow}>
        <a href="#" className={styles.footerLink}>
          Privacy Policy
        </a>

        <span className={styles.dot}>·</span>

        <a href="#" className={styles.footerLink}>
          Terms of Service
        </a>
      </div>

      {/* LINE */}
      <div className={styles.divider}></div>

      {/* COPYRIGHT */}
      <p className={styles.copy}>2026 GlobeAnimal</p>
    </footer>
  );
}

export default Footer;