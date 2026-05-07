import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SupplierOfferDetailsPage.module.css";

type AdDetails = {
  id: number;
  title: string;
  description: string;
  supplier: {
    name: string;
    homepage: string;
    logo_url: string;
  };
  price: {
    text: string;
  };
  validity: {
    from: string;
    to: string;
  };
};

function SupplierOfferDetailsPage() {
  const { id } = useParams();
  const [ad, setAd] = useState<AdDetails | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/?page=api_shop_ad&id=${id}`)
      .then((res) => res.json())
      .then((data) => setAd(data.ad))
      .catch((err) => console.error(err));
  }, [id]);

  if (!ad) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={ad.supplier.logo_url}
          alt={ad.supplier.name}
          className={styles.logo}
        />

        <h1 className={styles.title}>{ad.title}</h1>

        <p className={styles.price}>{ad.price.text}</p>

        <p className={styles.validity}>
          Valid: {ad.validity.from} → {ad.validity.to}
        </p>

        <h3 className={styles.subtitle}>About</h3>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <a
          href={ad.supplier.homepage}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Visit site
        </a>
      </div>
    </div>
  );
}

export default SupplierOfferDetailsPage;