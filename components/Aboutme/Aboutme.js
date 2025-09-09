import React from "react";
import styles from "@/styles/aboutMe.module.css";
import { MdOutlineFileDownload } from "react-icons/md";
import SkillCircle from "../Progressbar/Progressbar";

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
      <div className={styles.progressBar}>
        <SkillCircle percentage={40} label={"ESP-IDF"}/>
        <SkillCircle percentage={100} label={"Arduino"}/>
        <SkillCircle percentage={70} label={"Next-JS"}/>
        <SkillCircle percentage={90} label={"React"}/>
        <SkillCircle percentage={80} label={"Solidworks"}/>
        <SkillCircle percentage={80} label={"Electronics"}/>
      </div>
    </div>
  );
}
