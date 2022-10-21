import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import BackToTop from "../components/subcomponents/BackToTop";
import Projects from "../components/Projects";
import Footer from "../components/Footer";


function HomeFr() {
  return (
    <>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
        <BackToTop />
    </>
  )
}

export default HomeFr