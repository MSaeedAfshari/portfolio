// SkillCircle.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircle = ({ percentage, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-white">
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#f97316", // Tailwind orange-500
            textColor: "#f97316",
            trailColor: "#2a2a2a",
            textSize: "22px",
          })}
        />
      </div>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default SkillCircle;
