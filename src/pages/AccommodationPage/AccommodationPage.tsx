import { mockAccommodations } from "../../data/mockAccommodations";
import styles from "./AccommodationPage.module.css";
import { Link } from "react-router-dom";

function AccommodationPage() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Pet friendly Accommodations</h1>

          <p>
            Find places across countries that welcome your animal.
          </p>

          <select
            className={styles.countrySelect}
            defaultValue="Sweden"
          >
            <option value="Sweden">Sweden 🇸🇪</option>
            <option value="Norway">Norway 🇳🇴</option>
            <option value="Denmark">Denmark 🇩🇰</option>
          </select>

          <button className={styles.searchButton}>
            ⌕ Search
          </button>
        </div>

        <img
          className={styles.heroImage}
          src="/src/assets/images/accommodation/pet-accommodation.jpg"
          alt="Dog and cat resting together"
        />
      </div>

      <div className={styles.cardsGrid}>
        {mockAccommodations.map((hotel, index) => (
          <article
            key={hotel.id}
            className={`${styles.card} ${
              index === 0 ? styles.featuredCard : ""
            }`}
          >
            <div className={styles.cardContent}>
              <h2>{hotel.name}</h2>

              <p className={styles.address}>
                {hotel.address}
              </p>

              <div className={styles.infoRow}>
                <span>📞</span>
                <span>{hotel.phone}</span>
              </div>

              <div className={styles.infoRow}>
                <span>✉️</span>
                <span>{hotel.email}</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.cardActions}>
                <button
                  type="button"
                  className={styles.mapButton}
                  disabled
                >
                  📍 View on map
                </button>

                <a
                  className={styles.detailsLink}
                  href={hotel.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Details &gt;
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.contactBox}>
        <h3>Didn’t find what you Need?</h3>

        <p>
          Contact us for personalized recommendations.
        </p>
<Link to="/contact" className={styles.contactButton}>
  Contact us
</Link>
      </div>
    </section>
  );
}

export default AccommodationPage;