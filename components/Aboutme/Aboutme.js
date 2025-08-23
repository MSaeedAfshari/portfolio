import React from "react";
import styles from "@/styles/aboutMe.module.css";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Aboutme() {
  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.header}>About Me</h2>
      <span className={styles.headerParagraph}>
        Embedded Systems and Electronics and Also Web Designing
      </span>
      <div className={styles.aboutMeDetail}>
        <img
          src="/Images/avatar.png"
          alt="avatar"
          className={styles.imgContainer}
        />
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>
            I'm Mohammad Saeed Afshari, an interdisciplinary engineer and
            developer with a strong background in Embedded Systems, Web
            Development, and Electronics. I specialize in building efficient,
            scalable, and real world solutions from low level hardware
            integrations to modern web applications. With hands on experience
            across multiple industries, I combine technical depth with creative
            problem solving to deliver high quality results. I’m always
            exploring new technologies and challenges to grow both
            professionally and personally.
          </p>
          <button className={styles.buttonHire}>
            <MdOutlineFileDownload size={32} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
}
