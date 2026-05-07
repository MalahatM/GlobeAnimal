import { useParams } from "react-router-dom";
import styles from "./SupplierOfferDetailsPage.module.css";
import { mockSupplierOffers } from "../../data/mockSupplierOffers";

function SupplierOfferDetailsPage() {
  const { id } = useParams();

  const offer = mockSupplierOffers.find((item) => item.id === Number(id));

  if (!offer) {
    return <div className={styles.loading}>Offer not found</div>;
  }

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <img src={offer.image} alt={offer.supplierName} className={styles.heroImage} />
      </div>

      <div className={styles.card}>
        <div className={styles.topRow}>
          <div>
            <h1 className={styles.name}>{offer.supplierName}</h1>
            <p className={styles.address}>{offer.address}</p>
          </div>

          <div className={styles.distance}>{offer.distance}</div>
        </div>

        <div className={styles.discountRow}>
          <span className={styles.discountIcon}>🏷️</span>
          <p className={styles.discount}>{offer.price.text}</p>
        </div>

        <div className={styles.divider}></div>

        <h2 className={styles.subtitle}>About {offer.supplierName}</h2>

        <p className={styles.description}>
          {offer.description}
        </p>

        <a
          href={offer.website}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Visit the site for more info
        </a>
      </div>
    </section>
  );
}

export default SupplierOfferDetailsPage;