import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Search here"
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;