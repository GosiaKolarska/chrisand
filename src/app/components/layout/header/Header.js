import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolledPast200px, setIsScrolledPast200px] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const { header } = globalData;
  const router = useRouter();

  useEffect(() => {
    // Ignore small scroll jitter (e.g. trackpad momentum) when deciding direction
    const DIRECTION_THRESHOLD = 10;

    const update = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      setIsAtTop(currentScrollY < 140);
      setIsScrolledPast200px(currentScrollY > 200);

      if (currentScrollY <= 140) {
        setIsScrolled(false);
        lastScrollY.current = currentScrollY;
      } else if (Math.abs(delta) >= DIRECTION_THRESHOLD) {
        setIsScrolled(delta > 0);
        lastScrollY.current = currentScrollY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <StyledHeader
      $isScrolled={isScrolled}
      className={`${isScrolledPast200px ? "background-black" : ""} ${
        isAtTop ? "top0" : ""
      }`}
    >
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
