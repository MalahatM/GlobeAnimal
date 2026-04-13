 import styles from "./ShopCard.module.css";
import type { Shop } from "../../types/shop";

type ShopCardProps = {
  shop: Shop;
};

function ShopCard({ shop }: ShopCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.companyName}>{shop.company_name}</h2>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src={shop.imageUrl}
            alt={shop.company_name}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.contactPerson}>{shop.email}</p>
          <p className={styles.infoItem}>{shop.phone}</p>
          <p className={styles.infoItem}>{shop.address}</p>

          <button className={styles.button} type="button">
            View details
          </button>
        </div>
      </div>
    </article>
  );
}

export default ShopCard;