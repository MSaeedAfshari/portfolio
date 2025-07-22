import React from "react";
import styles from "@/styles/card.module.css";

export default function Card({icons, title, description}) {
  return (
    <div className={styles.card}>
      {icons}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.par}>
        {description}
      </p>
    </div>
  );
}
