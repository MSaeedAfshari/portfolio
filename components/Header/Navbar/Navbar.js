import React, { useEffect, useState } from "react";
import styles from "@/styles/navbar.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { isMobile } from "@/Utils/isMobile";

export default function Navbar() {
  const [isDeviceMobile, setIsDeviceMobile] = useState();
  const [showMenu, setShowMenu] = useState("hide");

  useEffect(() => {
    setIsDeviceMobile(isMobile());
  });

  const changeMenu = () => {
    showMenu ? setShowMenu("") : setShowMenu("hide");
  };

  return (
    <div className={styles.navbar}>
      {isDeviceMobile ? (
        <div className={styles.menuIcon} onClick={changeMenu}>
          <HiOutlineMenuAlt1 size={36} />
        </div>
      ) : null}

      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
      </div>

      {isDeviceMobile ? (
        <div className={`${styles.menuOverlay} ${showMenu}`}>
          <IoClose size={36}  className={styles.closeMenu} onClick={changeMenu}/>
          <div className={styles.menuItems}>
            <span className={styles.vavItem}>Home</span>
            <span className={styles.vavItem}>Services</span>
            <span className={styles.vavItem}>About me</span>
            <span className={styles.vavItem}>Portfolio</span>
            <span className={styles.vavItem}>Contact me</span>
          </div>
        </div>
      ) : null}

      {!isDeviceMobile ? (
        <div className={styles.navigationContainer}>
          <span className={`${styles.vavItem} ${styles.active}`}>Home</span>
          <span className={styles.vavItem}>Services</span>
          <span className={styles.vavItem}>About me</span>
          <span className={styles.vavItem}>Portfolio</span>
          <span className={styles.vavItem}>Contact me</span>
        </div>
      ) : null}

      <div className="hireContainer">
        <button className={styles.hireButton}>Hire Me</button>
      </div>
    </div>
  );
}
