import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import style from "@/styles/skillCircle.module.css";

const SkillCircle = ({ percentage, label }) => {
  return (
    <div className={style.circleContainer}>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: "#C02C27"
          })}
        />
      </div>
      <p className={style.percentage}>{percentage}%</p>
      <p className={style.label}>{label}</p>
    </div>
  );
};

export default SkillCircle;
