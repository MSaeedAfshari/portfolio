import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "@/styles/servicecontainer.module.css";
import { PiPark } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { HiChip } from "react-icons/hi";
import { LuMicrochip } from "react-icons/lu";
import { GiMechanicalArm } from "react-icons/gi";
import { BsBadge3dFill } from "react-icons/bs";
import { isMobile } from "@/Utils/isMobile";

export default function ServiceContainer() {
  const [isDeviceMobile, setIsDeviceMobile] = useState(isMobile());
  const [iconSize, setIconSize] = useState();

  useEffect(() => {
    setIsDeviceMobile(isMobile());
    isDeviceMobile ? setIconSize(50) : setIconSize(100);
  });


  return (
    <div className={styles.serviceContainer}>
      <h2 className={styles.header}>Services</h2>
      <p className={styles.par}>
        Turning complex problems into elegant, working solutions across the
        world of engineering
      </p>
      <div className={styles.cardContainer}>
        <Card
          icons={<HiChip size={iconSize} color="#C02C27" />}
          title="Embedded systems"
          description="Crafting low-level solutions that drive performance, precision, and control."
        />
        <Card
          icons={<CgWebsite size={iconSize} color="#C02C27" />}
          title="Web development"
          description="Creating clean, user-friendly interfaces that bring ideas to life online."
        />
        <Card
          icons={<LuMicrochip size={iconSize} color="#C02C27" />}
          title="Electronics"
          description="Designing and developing reliable electronic circuits for real-world applications."
        />
        <Card
          icons={<GiMechanicalArm size={iconSize} color="#C02C27" />}
          title="Mechanical design"
          description="Transforming ideas into precise, manufacturable mechanical designs."
        />
        <Card
          icons={<BsBadge3dFill size={iconSize} color="#C02C27" />}
          title="3D printing"
          description="From prototype to product — fast, accurate, and reliable 3D printing solutions."
        />
        <Card
          icons={<PiPark size={iconSize} color="#C02C27" />}
          title="Chill...?"
          description="Not everything has to be code and circuits. sometimes, we just chill :)"
        />
      </div>
    </div>
  );
}
