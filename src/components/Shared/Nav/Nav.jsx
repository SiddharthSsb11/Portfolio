import React, { useState, useEffect } from "react";
import {
  NavWrapper,
  NavWrapperMobile,
  NavLinks,
  NavElements,
  NavSocialIcons,
  NavImage,
  NavMobile,
  NavMobileBar,
} from "./NavElements";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDev } from "@react-icons/all-files/fa/FaDev";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { animateScroll as scroll } from "react-scroll";

const toggleHome = () => {
  scroll.scrollToTop();
};
const Nav = () => {
  let [toggleNav, setToggleNav] = useState(false);

  const toggleNavItem = () => {
    if (window.screen.width <= 768) {
      setToggleNav(!toggleNav);
    } else {

    }
  }

  useEffect(() => {
    window.screen.width >= 768 ? setToggleNav(true) : setToggleNav(false);
  }, []);
  
  const showHide = {
    display: toggleNav ? "block" : "none",
    transition: "all 0.375s ease-in-out",
  };

  return (
    <React.Fragment>
      <NavWrapperMobile>
        <NavMobileBar>
          <AiOutlineMenu
            onClick={() => setToggleNav(!toggleNav)}
            size="2rem"
          ></AiOutlineMenu>
          <NavImage onClick={toggleHome} to="/">
            <NavSocialIcons >
              <a
                href="/"
                rel="noreferrer"
                aria-label="scroll-to-top"
              >
                <FaUserAstronaut  style = {{paddingTop : "16px"}} size="2rem"></FaUserAstronaut>
              </a>
            </NavSocialIcons>
          </NavImage>
        </NavMobileBar>
      </NavWrapperMobile>
      <NavWrapper style={showHide}>
        <NavElements>
          <NavMobile>
            <AiOutlineClose
              onClick={() => setToggleNav(!toggleNav)}
            ></AiOutlineClose>
          </NavMobile>
          <NavImage onClick={toggleHome} to="/">
            <NavSocialIcons>
              <a
                href="/"
                rel="noreferrer"
                aria-label="scroll-to-top"
              >
                <FaUserAstronaut style = {{paddingTop : "16px"}} size="2rem"></FaUserAstronaut>
              </a>
            </NavSocialIcons>
          </NavImage>
          <NavLinks onClick={() => toggleNavItem()} href="#about">
            About
          </NavLinks>
          <NavLinks onClick={() => toggleNavItem()} href="#skills">
            My Skill
          </NavLinks>
          <NavLinks onClick={() => toggleNavItem()} href="#projects">
            Projects
          </NavLinks>
          <NavLinks onClick={() => toggleNavItem()} href="#contact">
            Contact
          </NavLinks>
          <NavSocialIcons>
            <a
              href="https://github.com/SiddharthSsb11"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub size="1.5rem"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/siddharthsingh11"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size="1.5rem"></FaLinkedin>
            </a>
            <a
              href="https://dev.to/siddharthssb11"
              target="_blank"
              rel="noreferrer"
              aria-label="Dev-Blogs"
            >
              <FaDev size="1.5rem"></FaDev>
            </a>
            <a
              href="https://twitter.com/Siddharth_SSB"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size="1.5rem"></FaTwitter>
            </a>
          </NavSocialIcons>
        </NavElements>
      </NavWrapper>
    </React.Fragment>
  );
};

export default Nav;