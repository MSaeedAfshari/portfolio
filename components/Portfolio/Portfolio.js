import React from "react";
import styles from "@/styles/portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.header}>Portfolio</h2>
      <div className={styles.catContainer}>
        <button className={`${styles.button} ${styles.active}`}>All</button>
        <button className={`${styles.button}`}>Embedded</button>
        <button className={`${styles.button}`}>Web Design</button>
        <button className={`${styles.button}`}>Electronics</button>
        <button className={`${styles.button}`}>Mechanical Design</button>
        <button className={`${styles.button}`}>3D printing</button>
      </div>
      <div className="projContainer"></div>
    </div>
  );
}
