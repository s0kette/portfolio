import React from 'react'
import NavbarEn from "../components/en/NavbarEn";
import HeaderEn from "../components/en/HeaderEn";
import AboutMeEn from "../components/en/AboutMeEn";
import SkillsEn from "../components/en/SkillsEn";
import BackToTop from "../components/subcomponents/BackToTop";
import ProjectsEn from "../components/en/ProjectsEn";
import FooterEn from "../components/en/FooterEn";


function HomeEn() {
  return (
    <>
        <NavbarEn />
        <HeaderEn />
        <AboutMeEn />
        <SkillsEn />
        <ProjectsEn />
        <FooterEn />
        <BackToTop />
    </>
  )
}

export default HomeEn