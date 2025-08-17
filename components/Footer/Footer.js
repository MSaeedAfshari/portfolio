import React from "react";
import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.navigationContainer}>
        <span className={styles.vavItem}>Home</span>
        <span className={styles.vavItem}>Services</span>
        <span className={styles.vavItem}>About me</span>
        <span className={styles.vavItem}>Portfolio</span>
        <span className={styles.vavItem}>Contact me</span>
      </div>
      <div className={styles.iconContainer}>
        <span className="github">
          <a href="https://github.com/MSaeedAfshari">
            <FaGithub />
          </a>
        </span>
        <span className="telegram">
          <a href="https://web.telegram.org/k/#@MsaeedAfshari">
            <FaTelegram />
          </a>
        </span>
        <span className="instagram">
          <a href="https://www.instagram.com/MSaeedAfshari">
            <FaInstagram />
          </a>
        </span>
        <span className="twitter">
          <a href="https://x.com/MSaeedAfshari">
            <FaXTwitter />
          </a>
        </span>
      </div>
      <hr className={styles.line} />
      <div className={styles.copyRight}>Developed by Mohammad Saeed Afshari</div>
    </div>
  );
}
