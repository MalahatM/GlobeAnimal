import { useMemo, useState } from "react";
import styles from "./PetInsurancePage.module.css";
import SearchBar from "../../components/shops/SearchBar/SearchBar";

const INITIAL_VISIBLE_COUNT = 4;
const LOAD_MORE_STEP = 2;

const shops = [
  {
    id: 1,
    name: "Settled",
    description: "Smart pet insurance with preventive care",
    price: "From 99 kr/month",
    image: "/src/assets/images/setteled.png",
  },
  {
    id: 2,
    name: "Lassie",
    description: "Traditional Swedish pet insurance",
    price: "From 109 kr/month",
    image: "/src/assets/images/lassie-logo.jpg",
  },
  {
    id: 3,
    name: "Sveland",
    description: "Modern pet insurance made simple",
    price: "From 129 kr/month",
    image: "/src/assets/images/sveland.webp",
  },
  {
    id: 4,
    name: "Agria",
    description: "Modern pet insurance made simple",
    price: "From 149 kr/month",
    image: "/src/assets/images/agria_ref1.png",
  },
  {
    id: 5,
    name: "Pet insurance",
    description: "Reliable pet insurance",
    price: "From 99 kr/month",
    image: "/src/assets/images/petinsur.png",
  },
  {
    id: 6,
    name: "Pets Best",
    description: "Flexible pet coverage",
    price: "From 129 kr/month",
    image: "/src/assets/images/linsur.png",
  },
];

function PetInsurancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // 🔍 فیلتر سرچ
  const filteredShops = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();

    if (!normalized) return shops;

    return shops.filter((shop) =>
      shop.name.toLowerCase().includes(normalized)
    );
  }, [searchTerm]);

  // 👇 فقط آیتم‌های قابل نمایش
  const visibleShops = filteredShops.slice(0, visibleCount);

  const hasMore = visibleCount < filteredShops.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_STEP);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Pet insurance</h1>

      {/* filters */}
      <div className={styles.filters}>
        <select>
          <option value="">Country</option>
          <option value="sweden">Sweden</option>
          <option value="brazil">Brazil</option>
          <option value="germany">Germany</option>
          <option value="ukraine">Ukraine</option>
          <option value="denmark">Denmark</option>
        </select>

        <select>
          <option>City</option>
        </select>
      </div>

     <SearchBar
  value={searchTerm}
  onChange={handleSearchChange}
  placeholder="Search by insurance name"
/>

      {/* cards */}
      <div className={styles.cards}>
        {visibleShops.length > 0 ? (
          visibleShops.map((shop) => (
            <div key={shop.id} className={styles.card}>
              <div className={styles.topRow}>
                <div className={styles.imageBox}>
                  <img src={shop.image} alt={shop.name} />
                </div>

                <div className={styles.info}>
                  <h3>{shop.name}</h3>
                  <p className={styles.desc}>{shop.description}</p>
                  <p className={styles.price}>{shop.price}</p>
                </div>
              </div>

              <button className={styles.button}>Visit site</button>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>
            No matching insurance found.
          </p>
        )}
      </div>

      {/* load more */}
      {hasMore && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </main>
  );
}

export default PetInsurancePage;