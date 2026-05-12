import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/vet-min.webp";

function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Global care for animals.</h1>
          <p>Across borders</p>
        </div>

        <img src={heroImg} alt="vet" />
      </div>

      <div className={styles.grid}>
        <Link to="/clinics" className={styles.card}>
          <h3>Clinics</h3>
          <p>Veterinary care worldwide</p>
        </Link>

        <Link to="/supplier-offers" className={styles.card}>
          <h3>Supplier</h3>
          <p>Supplies goods or services</p>
        </Link>

        <Link to="/pet-insurance" className={styles.card}>
          <h3>Insurance</h3>
          <p>Pet coverage</p>
        </Link>

        <Link to="/shops" className={styles.card}>
          <h3>Shops</h3>
          <p>Pet food and products</p>
        </Link>
      </div>

      <div className={styles.support}>
        <p>Need help with your animal?</p>

        <Link to="/contact" className={styles.contactBtn}>
          Contact Support
        </Link>
      </div>
    </main>
  );
}

export default HomePage;