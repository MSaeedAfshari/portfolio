import React from "react";
import styles from "@/styles/navbar.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.menuIcon}>
        <HiOutlineMenuAlt1 size={36}/>
      </div>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.navigationContainer}>
        <span className={`${styles.vavItem} ${styles.active}`}>Home</span>
        <span className={styles.vavItem}>Services</span>
        <span className={styles.vavItem}>About me</span>
        <span className={styles.vavItem}>Portfolio</span>
        <span className={styles.vavItem}>Contact me</span>
      </div>
      <div className="hireContainer">
        <button className={styles.hireButton}>Hire Me</button>
      </div>
    </div>
  );
}
