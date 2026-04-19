import styles from "./ServiceCard.module.css";
import type { Service } from "../../../types/service";

type Props = {
  service: Service;
};

function ServiceCard({ service }: Props) {
  return (
    <article className={styles.card}>
      {/* image */}
      <div className={styles.imageWrapper}>
        <img src={service.image} alt={service.name} />
      </div>

      {/* content */}
      <div className={styles.content}>
        <h3 className={styles.name}>{service.name}</h3>

        <p className={styles.category}>{service.category}</p>

        <p className={styles.location}>
          {service.city}, {service.country}
        </p>

        {/* actions */}
        <div className={styles.actions}>
          {service.phone && (
            <a href={`tel:${service.phone}`} className={styles.phone}>
              📞 {service.phone}
            </a>
          )}

          {service.website && (
            <a
              href={service.website}
              target="_blank"
              rel="noreferrer"
              className={styles.website}
            >
              🌐 Website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;