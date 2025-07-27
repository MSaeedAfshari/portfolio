import Aboutme from "@/components/Aboutme/Aboutme";
import Navbar from "@/components/Header/Navbar/Navbar";
import PersonalCard from "@/components/Header/PersonalCard/PersonalCard";
import Portfolio from "@/components/Portfolio/Portfolio";
import ServiceContainer from "@/components/Services/SeviceContainer/ServiceContainer";
import React from "react";

export default function index() {
  return (
    <>
      <Navbar />
      <PersonalCard />
      <ServiceContainer />
      <Aboutme />
      <Portfolio />
    </>
  );
}
