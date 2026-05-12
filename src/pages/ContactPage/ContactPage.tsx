import styles from "./ContactPage.module.css";
import contactImage from "../../assets/images/contact/contact.jpg";

function ContactPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <img
          src={contactImage}
          alt="Contact GlobeAnimal"
          className={styles.contactImage}
        />

        <h1 className={styles.title}>Contact us</h1>

        <p className={styles.subtitle}>
          We’re here to help. Send us a message and we’ll get
          back to you.
        </p>

        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label>Your Details</label>

            <input
              type="text"
              placeholder="Name and surname"
            />

            <input
              type="email"
              placeholder="Email address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />
          </div>

          <div className={styles.aboutSection}>
            <span className={styles.sectionLabel}>
              About You:
            </span>

            <div className={styles.radioBox}>
              {[
                "Pet owner",
                "Veterinarian / Clinic",
                "Breeder",
                "Other",
              ].map((item) => (
                <label
                  key={item}
                  className={styles.radioOption}
                >
                  <input type="radio" name="about" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.locationSection}>
            <label>Location:</label>

            <div className={styles.locationRow}>
              <select>
                <option>🇸🇪 Country</option>
                <option>🇳🇴 Norway</option>
                <option>🇩🇰 Denmark</option>
              </select>

              <input type="text" placeholder="City" />
            </div>
          </div>

          <div className={styles.messageSection}>
            <label>Message</label>

            <textarea placeholder="Your message ..." />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Send message
          </button>

          <div className={styles.replyInfo}>
            <span className={styles.clock}>🕓</span>

            <p>
              we usually reply within 24-48 hours
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;