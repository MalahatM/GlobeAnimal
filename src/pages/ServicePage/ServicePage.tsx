import { useMemo, useState } from "react";
import styles from "./ServicePage.module.css";
import { mockServices } from "../../data/mockServices";
import ServiceCard from "../../components/service/ServiceCard/ServiceCard";
import type { Animal } from "../../types/service";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

function ServicePage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | "">("");
  const [appliedServiceType, setAppliedServiceType] = useState("");
  const [appliedAnimal, setAppliedAnimal] = useState<Animal | "">("");

  const serviceTypes = useMemo(() => {
    return [...new Set(mockServices.map((service) => service.category))];
  }, []);

  const filteredServices = useMemo(() => {
    return mockServices.filter((service) => {
      const matchesServiceType =
        !appliedServiceType || service.category === appliedServiceType;

      const matchesAnimal =
        !appliedAnimal || service.animals.includes(appliedAnimal);

      return matchesServiceType && matchesAnimal;
    });
  }, [appliedServiceType, appliedAnimal]);

  const visibleServices = filteredServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < filteredServices.length;

  const handleApplyFilters = () => {
    setAppliedServiceType(selectedServiceType);
    setAppliedAnimal(selectedAnimal);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Find Trusted Animal Service Near You
          </h1>

          <p className={styles.heroText}>
            Browse local groomers, dog walkers, daycares and other pet services.
          </p>

          <div className={styles.filters}>
  <div className={styles.filterBox}>
    <span className={styles.filterBoxIcon} aria-hidden="true">
      ✂
    </span>
    <select
      id="serviceType"
      className={styles.filterSelect}
      value={selectedServiceType}
      onChange={(event) => setSelectedServiceType(event.target.value)}
    >
      <option value="">Service type</option>
      {serviceTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className={styles.filterChevron} aria-hidden="true" />
  </div>

  <div className={styles.filterBox}>
    <span className={styles.filterBoxIcon} aria-hidden="true">
      🐶
    </span>
    <select
      id="animalType"
      className={styles.filterSelect}
      value={selectedAnimal}
      onChange={(event) =>
        setSelectedAnimal(event.target.value as Animal | "")
      }
    >
      <option value="">Animal</option>
      <option value="Dog">Dog</option>
      <option value="Cat">Cat</option>
      <option value="Horse">Horse</option>
      <option value="Pig">Pig</option>
      <option value="Bird">Bird</option>
    </select>
    <span className={styles.filterChevron} aria-hidden="true" />
  </div>

  <div className={styles.filterBox}>
    <span className={styles.filterBoxIcon} aria-hidden="true">
      🇸🇪
    </span>
    <select
      id="country"
      className={styles.filterSelect}
      defaultValue=""
      disabled
    >
      <option value="">Country</option>
    </select>
    <span className={styles.filterChevron} aria-hidden="true" />
  </div>

  <div className={styles.filterBox}>
    <span className={styles.filterBoxIcon} aria-hidden="true">
      📍
    </span>
    <select
      id="city"
      className={styles.filterSelect}
      defaultValue=""
      disabled
    >
      <option value="">City</option>
    </select>
    <span className={styles.filterChevron} aria-hidden="true" />
  </div>
</div>

          <div className={styles.applyFiltersWrapper}>
            <button
              type="button"
              className={styles.applyFiltersButton}
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>

        <div className={styles.cards}>
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <p className={styles.emptyState}>No services match these filters.</p>
        )}

        {hasMoreServices && (
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

export default ServicePage;