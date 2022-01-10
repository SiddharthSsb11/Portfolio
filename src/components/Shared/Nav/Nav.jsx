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
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
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
            <svg
              width="211"
              height="280"
              viewBox="0 0 211 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="211" height="280" />
              <path d="M0.5 101.5L20.5 122.009V263H0.5V101.5Z" />
              <path d="M60.1421 124L63.9592 156.101L173.5 265.642L201.563 265.421L60.1421 124Z" />
              <path d="M1.5 263L13.6551 243H101.5V263H1.5Z" />
              <path d="M83 173L103 183.94V263H83L83 173Z" />
              <path d="M210.063 179.063L190.063 158.554V17.5635H210.063V179.063Z" />
              <path d="M152.421 155.563L148.604 123.462L39.2843 14.1421H11L152.421 155.563Z" />
              <path d="M210 17.5L197.845 37L110 37V17L210 17.5Z" />
              <path d="M129.563 107.563L109.563 96.6239L110 17L129.563 17.5635L129.563 107.563Z" />
            </svg>
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
            <svg
              width="211"
              height="280"
              viewBox="0 0 211 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="211" height="280" />
              <path d="M0.5 101.5L20.5 122.009V263H0.5V101.5Z" />
              <path d="M60.1421 124L63.9592 156.101L173.5 265.642L201.563 265.421L60.1421 124Z" />
              <path d="M1.5 263L13.6551 243H101.5V263H1.5Z" />
              <path d="M83 173L103 183.94V263H83L83 173Z" />
              <path d="M210.063 179.063L190.063 158.554V17.5635H210.063V179.063Z" />
              <path d="M152.421 155.563L148.604 123.462L39.2843 14.1421H11L152.421 155.563Z" />
              <path d="M210 17.5L197.845 37L110 37V17L210 17.5Z" />
              <path d="M129.563 107.563L109.563 96.6239L110 17L129.563 17.5635L129.563 107.563Z" />
            </svg>
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
              href="https://github.com/nparashar150"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub size="1.5rem"></FaGithub>
            </a>
            <a
              href="https://instagram.com/nparashar150_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size="1.5rem"></FaInstagram>
            </a>
            <a
              href="https://t.me/nparashar150"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram size="1.5rem"></FaTelegram>
            </a>
          </NavSocialIcons>
        </NavElements>
      </NavWrapper>
    </React.Fragment>
  );
};

export default Nav;