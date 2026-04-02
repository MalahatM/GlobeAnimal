import styles from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchWrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Search by shop name or address"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;