import React from "react";
import styles from '@/styles/navbar.module.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src="/images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="navigationContainer">
        <span className="vavItem">Home</span>
        <span className="vavItem">Services</span>
        <span className="vavItem">About me</span>
        <span className="vavItem">Portfolio</span>
        <span className="vavItem">Contact me</span>
      </div>
      <div className="hireContainer">
        <button>Hire me</button>
      </div>
    </div>
  );
}
