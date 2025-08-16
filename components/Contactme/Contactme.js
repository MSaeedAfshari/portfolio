import React from "react";
import styles from "@/styles/contactme.module.css";

export default function Contactme() {
  return (
    <div className={styles.contactMe}>
      <form className={styles.form}>
        <h2 className={styles.formHeader}>Contact me</h2>
        <span className={styles.formDesc}>
          Cultivating Connections: Reach Out and Connect with Me
        </span>
        <div className={styles.formContainer}>
          <input name="Name" placeholder="Name" value={""} />
          <input name="Email" placeholder="Email" value={""} />
          <input name="Phone Number" placeholder="Phone Number" value={""} />
          <select name="Service of Interest">
            <option value={"none"} selected>
              Service of Interest...
            </option>
            <option value={"Embedded systems"}>Embedded systems</option>
            <option value={"Web Developments"}>Web Developments</option>
            <option value={"Electronics"}>Electronics</option>
            <option value={"Mechanical Design"}>Mechanical Design</option>
            <option value={"3d Design"}>3d Design</option>
            <option value={"Chill"}>Chill</option>
          </select>
          <input name="Timeline" placeholder="Timeline" value={""} />
          <input
            name="Project detail"
            placeholder="Project detail"
            value={""}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
