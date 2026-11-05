import React from "react";
import Link from "next/link";
import { useContent, useLocale } from "../../i18n/content";
import { homePath } from "../../i18n/locale";
import {
  Page,
  Wrap,
  TopBar,
  TopBarInner,
  Brand,
  TopLink,
  TopLinks,
  SectionTitle,
  ContactSection,
  ContactActions,
  PrimaryAction,
  SecondaryAction,
  HeroSummary,
  Foot,
} from "./Pitch.styles";

const PitchShell = ({ children, topLink, alternateHref, wide = false }) => {
  const { pitch } = useContent();
  const locale = useLocale();
  const { person, contact, ui } = pitch;

  return (
    <Page>
      <TopBar>
        <TopBarInner $wide={wide}>
          <Brand as={Link} href={homePath(locale)}>
            {person.name.toLowerCase()}
          </Brand>
          <TopLinks>
            <TopLink as={Link} href={topLink.href}>
              {topLink.text}
            </TopLink>
            {alternateHref && (
              <TopLink
                as={Link}
                href={alternateHref}
                aria-label={ui.switchLanguage}
              >
                {ui.switchLabel}
              </TopLink>
            )}
          </TopLinks>
        </TopBarInner>
      </TopBar>
      <main id="main-content">{children}</main>
      <ContactSection aria-labelledby="contact-title">
        <Wrap $wide={wide}>
          <SectionTitle id="contact-title">{contact.title}</SectionTitle>
          <HeroSummary>{contact.description}</HeroSummary>
          <ContactActions>
            <PrimaryAction href={`mailto:${contact.email}`}>
              {contact.email}
            </PrimaryAction>
            {contact.phone && (
              <SecondaryAction href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </SecondaryAction>
            )}
            {contact.calendarUrl && (
              <SecondaryAction href={contact.calendarUrl}>
                {contact.calendarText}
              </SecondaryAction>
            )}
          </ContactActions>
        </Wrap>
      </ContactSection>
      <Foot>
        <Wrap $wide={wide}>
          {person.name}. {person.role}
        </Wrap>
      </Foot>
    </Page>
  );
};

export default PitchShell;
