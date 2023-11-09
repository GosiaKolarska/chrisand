"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import debounce from "lodash/debounce";
import { useRouter } from "next/router";
import StyledLink from "../../common/link/StyledLink";
import {
  StyledHeader,
  Container,
  Logo,
  Nav,
  NavList,
  NavItem,
} from "./Header.styles";
import globalData from "../../../data/global.json";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { header } = globalData;
  const router = useRouter();

  const handleScroll = debounce(() => {

    const heroSection = document.querySelector(".scrollHero");

    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 150;
      setIsScrolled(window.pageYOffset > heroBottom);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <StyledHeader $isScrolled={isScrolled}>
      <Container className="container">
        <a href="#main-content" onClick={skipToContent} className="skip-link">
          Skip to content
        </a>
        <Link href="/" passHref>
          <Logo aria-label="Chris Piskorz Home">
            <span className="logo-first">chris </span>
            <span className="logo-second">piskorz</span>
          </Logo>
        </Link>
        <Nav aria-label="Main navigation">
          <NavList>
            {header.map((link) => {
              const isActiveLink = router.pathname === link.href;

              return (
                <NavItem key={link.text}>
                  <StyledLink
                    href={link.href}
                    type={link.type}
                    isActive={isActiveLink}
                    aria-label={link.text}
                  >
                    {link.text}
                  </StyledLink>
                </NavItem>
              );
            })}
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
