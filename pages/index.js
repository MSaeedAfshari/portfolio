import Aboutme from "@/components/Aboutme/Aboutme";
import Contactme from "@/components/Contactme/Contactme";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar/Navbar";
import PersonalCard from "@/components/Header/PersonalCard/PersonalCard";
import Portfolio from "@/components/Portfolio/Portfolio";
import ServiceContainer from "@/components/Services/SeviceContainer/ServiceContainer";
import React from "react";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mohammad Saeed Afshari</title>
      </Head>
      <Navbar />
      <PersonalCard />
      <ServiceContainer />
      <Aboutme />
      {/* <Portfolio /> */}
      <Contactme />
      <Footer />
    </>
  );
}
