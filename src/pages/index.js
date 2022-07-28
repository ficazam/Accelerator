import React from "react";
import { Header } from "../components/Header";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";
import { Footer } from "../components/Footer";

import './CSS/all.css';

const index = () => (
  <>
    <Header />
    <main>
    <SectionOne />
    <SectionTwo />
    </main>
    <Footer />
  </>
);

export default index;
