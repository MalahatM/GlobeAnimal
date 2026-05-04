import { useState, useMemo } from "react";
import styles from "./ClinicsPage.module.css";
import SearchBar from "../../components/shops/SearchBar/SearchBar";

const INITIAL_VISIBLE = 4;
const LOAD_STEP = 2;

const clinics = [
  {
    id: 1,
    name: "Dogman and friends",
    address: "Gamla tuvegatan 27",
    phone: "031-22 40 45",
    description:
      "Health check & vaccination in one visit. Book online or call us for advice.",
    website: "https://www.dogman.com",
  },
  {
    id: 2,
    name: "Blå Stjärnans Djursjukhus",
    address: "Bergfotsgatan 1 A",
    phone: "031-65 35 00",
    description:
      "Professional veterinary care and consultation for your pet.",
    website: "https://www.blastarjarnan.se",
  },
  {
    id: 3,
    name: "Göteborgs Djurklinik",
    address: "Backa strandgatan 10",
    phone: "031-724 17 40",
    description:
      "Complete pet care services with experienced veterinarians.",
    website: "https://www.goteborgsdjurklinik.se",
  },
  {
    id: 4,
    name: "AniCura Djursjukhuset",
    address: "August Barkgatan 8",
    phone: "031-45 07 00",
    description:
      "Emergency and routine care for all types of pets.",
    website: "https://www.anicura.se",
  },
  {
    id: 5,
    name: "Evidensia Djursjukvård",
    address: "Produktvägen 5",
    phone: "031-21 40 40",
    description:
      "Advanced veterinary treatments and diagnostics.",
    website: "https://evidensia.se",
  },
  {
    id: 6,
    name: "Tasarnas Djurklinik",
    address: "Djurgårdsgatan 43",
    phone: "031-24 02 00",
    description:
      "Friendly and reliable care for your beloved pets.",
    website: "https://www.tasarna.se",
  },
];

function ClinicsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredClinics = useMemo(() => {
    const value = searchTerm.toLowerCase().trim();
    if (!value) return clinics;

    return clinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(value)
    );
  }, [searchTerm]);

  const visibleClinics = filteredClinics.slice(0, visibleCount);
  const hasMore = visibleCount < filteredClinics.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_STEP);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Pets Clinics</h1>

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
  <option value="">City</option>
  <option value="gothenburg">Gothenburg</option>
  <option value="stockholm">Stockholm</option>
  <option value="malmo">Malmö</option>
  <option value="uppsala">Uppsala</option>
  <option value="linkoping">Linköping</option>
</select>
      </div>

      <div className={styles.search}>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search clinics"
        />
      </div>

      <div className={styles.cards}>
        {visibleClinics.map((clinic) => (
          <div key={clinic.id} className={styles.card}>
            <h3>{clinic.name}</h3>

            <p>📍 {clinic.address}</p>
            <p>📞 {clinic.phone}</p>

            {/* open status */}
            <p>
              <span className={styles.open}>Open</span> · Closes at 17:00
            </p>

            <p className={styles.desc}>{clinic.description}</p>

            <a
              href={clinic.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              Website
            </a>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <button
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </main>
  );
}

export default ClinicsPage;