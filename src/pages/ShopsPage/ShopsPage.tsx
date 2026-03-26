import styles from "./ShopsPage.module.css";
import SearchBar from "../../components/shops/SearchBar/SearchBar";
import ShopCard from "../../components/shops/ShopCard/ShopCard";
import { mockShops } from "../../data/mockShops";

function ShopsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shops</h1>

        <div className={styles.searchSection}>
          <SearchBar />
        </div>

        <div className={styles.cards}>
          {mockShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopsPage;