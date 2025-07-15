import React from "react";
import Card from "../Card/Card";
import styles from "@/styles/servicecontainer.module.css";

export default function ServiceContainer() {
  return (
    <div className={styles.serviceContainer}>
      <h2 className={styles.header}>Services</h2>
      <p>
        Turning complex problems into elegant, working solutions across the
        world of engineering
      </p>
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  );
}
