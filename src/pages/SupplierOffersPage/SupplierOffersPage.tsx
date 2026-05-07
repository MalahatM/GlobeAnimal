import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SupplierOffersPage.module.css";
import { mockSupplierOffers } from "../../data/mockSupplierOffers";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

function SupplierOffersPage() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleOffers = mockSupplierOffers.slice(0, visibleCount);
  const hasMoreOffers = visibleCount < mockSupplierOffers.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  return (
    <section className={styles.page}>
      <div className={styles.actionsBar}>
        <button type="button" className={styles.actionButton}>
          <span className={styles.actionIcon}>≡</span>
          Sort by
        </button>

        <button type="button" className={styles.actionButton}>
          <span className={styles.actionIcon}>🔽</span>
          Filter
        </button>

        <button type="button" className={styles.actionButton}>
          <span className={styles.actionIcon}>📍</span>
          Maps
        </button>
      </div>

      <div className={styles.cards}>
        {visibleOffers.map((offer) => (
          <button
            type="button"
            key={offer.id}
            className={styles.card}
            onClick={() => navigate(`/supplier-offers/${offer.id}`)}
          >
            <img
              src={offer.image}
              alt={offer.supplierName}
              className={styles.image}
            />

            <div className={styles.info}>
              <h2 className={styles.name}>{offer.supplierName}</h2>

              <p className={styles.address}>{offer.address}</p>

              <div className={styles.distance}>
                <span className={styles.locationIcon}>📍</span>
                <span>{offer.distance}</span>
              </div>

              <div className={styles.divider} />

              <div className={styles.discount}>
                <span className={styles.discountIcon}>🏷️</span>
                <span>{offer.price.text}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {hasMoreOffers && (
        <div className={styles.loadMoreWrapper}>
          <button
            type="button"
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}

export default SupplierOffersPage;