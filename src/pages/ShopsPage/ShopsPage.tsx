import { useState } from "react";
import styles from "./ShopsPage.module.css";
import SearchBar from "../../components/shops/SearchBar/SearchBar";
import ShopCard from "../../components/ShopCard/ShopCard";
import { mockShops } from "../../data/mockShops";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

function ShopsPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleShops = mockShops.slice(0, visibleCount);
  const hasMoreShops = visibleCount < mockShops.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shops</h1>

        <div className={styles.searchSection}>
          <SearchBar />
        </div>

        <div className={styles.cards}>
          {visibleShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

        {hasMoreShops && (
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
      </div>
    </section>
  );
}

export default ShopsPage;