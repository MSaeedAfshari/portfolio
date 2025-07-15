import React from "react";
import styles from "@/styles/prsonalcard.module.css";
import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function PersonalCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <span>Hi I am</span>
        <h2>Mohammad Saeed Afshari</h2>
        <h1>Developer</h1>
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
        <div className={styles.buttonContainer}>
          <button className={styles.buttonHire}>Hire Me</button>
          <button className={styles.buttonCV}>Download CV</button>
        </div>
        <div className={styles.xpContainer}>
          <div className={styles.xpTextContainer}>
            <span className={styles.xpNum}>5+</span>
            <span>Experience</span>
          </div>
          <div className={styles.xpTextContainerMid}>
            <span className={styles.xpNum}>20+</span>
            <span>Projects done</span>
          </div>
          <div className={styles.xpTextContainer}>
            <span className={styles.xpNum}>80+</span>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="profileContainer">
        <img src="images/avatar.png" alt="profile" />
      </div>
    </div>
  );
}
