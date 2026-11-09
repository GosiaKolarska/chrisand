import React, { useEffect, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { useContent, useLocale } from "../../i18n/content";
import { alternatePath, cleanPath, homePath } from "../../i18n/locale";
import {
  Root,
  Bar,
  Logo,
  Nav,
  NavLinks,
  MenuButton,
  Pill,
  Foot,
  FootScene,
  FootRow,
  FootNote,
  FootBase,
  FootNav,
  SkipLink,
} from "./Site.styles";

const sentient = localFont({
  src: "../../fonts/sentient-400.woff2",
  weight: "400",
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
});

const generalSans = localFont({
  src: [
    { path: "../../fonts/general-sans-400.woff2", weight: "400" },
    { path: "../../fonts/general-sans-500.woff2", weight: "500" },
    { path: "../../fonts/general-sans-600.woff2", weight: "600" },
  ],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

const EMAIL = "hello@chrisand.design";

const SiteShell = ({ children }) => {
  const { global: site } = useContent();
  const locale = useLocale();
  const router = useRouter();
  const path = cleanPath(router.asPath);
  const alternate = alternatePath(path);
  const { header, footer, cta, ui } = site;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [router.asPath]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <Root className={`${sentient.variable} ${generalSans.variable}`}>
      <SkipLink href="#main-content">{ui.skip}</SkipLink>
      <Bar>
        <Logo href={homePath(locale)} aria-label={ui.home}>
          chris piskorz
        </Logo>
        <Nav aria-label={ui.nav}>
          <NavLinks
            id="site-menu"
            $open={menuOpen}
            onClick={() => setMenuOpen(false)}
          >
            {header.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={path === link.href ? "page" : undefined}
              >
                {link.text}
              </Link>
            ))}
            {alternate && (
              <Link href={alternate} aria-label={ui.switchLanguage}>
                {ui.switchLabel}
              </Link>
            )}
          </NavLinks>
          <Pill href={`mailto:${EMAIL}`} data-pill="">
            {cta.write}
          </Pill>
          <MenuButton
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {ui.menu}
          </MenuButton>
        </Nav>
      </Bar>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Foot>
        <FootScene>
          <img src="/assets/art/footer-scene.webp" alt="" loading="lazy" />
        </FootScene>
        <FootRow>
          <h2>
            {cta.title} <br />
            {cta.titleAction}
          </h2>
          <FootNote>{cta.note}</FootNote>
          <Pill href={`mailto:${EMAIL}`}>{EMAIL}</Pill>
        </FootRow>
        <FootBase>
          <span>{footer.copy}</span>
          <FootNav aria-label={ui.footerNav}>
            {header.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.text}
              </Link>
            ))}
            <a href="https://www.linkedin.com/in/krzysztofpisk/">LinkedIn</a>
          </FootNav>
        </FootBase>
      </Foot>
    </Root>
  );
};

export default SiteShell;
