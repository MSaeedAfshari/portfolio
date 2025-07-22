import React from "react";
import styles from "@/styles/card.module.css";
import { PiPark } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { HiChip } from "react-icons/hi";
import { LuMicrochip } from "react-icons/lu";
import { GiMechanicalArm } from "react-icons/gi";
import { BsBadge3dFill } from "react-icons/bs";

export default function Card() {
  return (
    <div className={styles.card}>
      <HiChip className={styles.icon} />
      <h3 className={styles.cardTitle}>Embedded systems</h3>
      <p className={styles.par}>
        Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet
        consectetur
      </p>
    </div>
  );
}
