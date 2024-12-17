import React from "react";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Rafinhaa, te amoo!!</h1>
      <div className={styles.heartsContainer}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.heart}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Welcome;
