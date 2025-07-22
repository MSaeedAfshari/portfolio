import Navbar from "@/components/Header/Navbar/Navbar";
import PersonalCard from "@/components/Header/PersonalCard/PersonalCard";
import ServiceContainer from "@/components/Services/SeviceContainer/ServiceContainer";
import React from "react";

export default function index() {
  return (
    <>
      <Navbar />
      <PersonalCard />
      <ServiceContainer />
    </>
  );
}
