import { useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/vet-min.webp";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });
    setIsSent(false);
  };

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    
    if (message.trim().length < 15) {
      newErrors.message = "Message must be at least 50 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSend = () => {
    if (!validate()) return;
    setIsSent(true);
  };

  return (
    <main className={styles.container}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Global care for animals.</h1>
          <p>Across borders</p>
        </div>

        <img src={heroImg} alt="vet" />
      </div>

      {/* CARDS */}
      <div className={styles.grid}>
        <Link to="/clinics" className={styles.card}>
          <h3>Clinics</h3>
          <p>Veterinary care worldwide</p>
        </Link>

        <Link to="/suppliers" className={styles.card}>
          <h3>Supplier</h3>
          <p>Supplies goods or services</p>
        </Link>

        <Link to="/pet-insurance" className={styles.card}>
          <h3>Insurance</h3>
          <p>Pet coverage</p>
        </Link>

        <Link to="/shops" className={styles.card}>
          <h3>Shops</h3>
          <p>Pet food and products</p>
        </Link>
      </div>

      
      <div className={styles.support}>
        <p>Need help with your animal?</p>

        <button
          className={styles.contactBtn}
          onClick={() => {
            resetForm();            
            setIsModalOpen(true);
          }}
        >
          Contact Support
        </button>
      </div>

      
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            {!isSent ? (
              <>
                <h2>Contact Support</h2>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}

                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email}</p>
                )}

                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}

                <div className={styles.actions}>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();   
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    className={styles.sendBtn}
                    onClick={handleSend}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>✅ Message received</h2>
                <p>We have received your message and will contact you soon.</p>

                <button
                  className={styles.sendBtn}
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();   
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;