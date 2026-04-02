import { useMemo, useState } from "react";
import styles from "./ShopsPage.module.css";
import SearchBar from "../../components/shops/SearchBar/SearchBar";
import ShopCard from "../../components/ShopCard/ShopCard";
import { mockShops } from "../../data/mockShops";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

function ShopsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredShops = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return mockShops;
    }

    return mockShops.filter((shop) => {
      const companyName = shop.company_name.toLowerCase();
      const address = shop.address.toLowerCase();

      return (
        companyName.includes(normalizedSearch) ||
        address.includes(normalizedSearch)
      );
    });
  }, [searchTerm]);

  const visibleShops = filteredShops.slice(0, visibleCount);
  const hasMoreShops = visibleCount < filteredShops.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shops</h1>

        <div className={styles.searchSection}>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </div>

        <div className={styles.cards}>
          {visibleShops.length > 0 ? (
            visibleShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
          ) : (
            <p className={styles.noResults}>No matching shops found.</p>
          )}
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