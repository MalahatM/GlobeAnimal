import { useState } from "react";
import styles from "./ServicePage.module.css";
import { mockServices } from "../../data/mockServices";
import ServiceCard from "../../components/service/ServiceCard/ServiceCard";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

function ServicePage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleServices = mockServices.slice(0, visibleCount);
  const hasMoreServices = visibleCount < mockServices.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>

        <div className={styles.cards}>
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

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