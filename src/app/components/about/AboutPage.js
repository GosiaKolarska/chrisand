import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteShell from "../site/SiteShell";
import { Portrait, Section, SectionHead, Title } from "../site/Site.styles";
import {
  HeroGrid,
  HeroText,
  Facts,
  HistoryPanel,
  PanelTitle,
  Jobs,
  Awards,
  StageGrid,
  StageText,
  StagePhotos,
  ProcessPanel,
  Process,
  Skills,
} from "./AboutPage.styles";

// List items in the content files can hold one markdown link: "Founder of [Calenday](/work/calenday)".
const LINK = /^(.*)\[(.+)\]\((.+)\)(.*)$/;

const FactText = ({ text }) => {
  const match = text.match(LINK);
  if (!match) return text;
  const [, before, label, href, after] = match;
  return (
    <>
      {before}
      {href.startsWith("/") ? (
        <Link href={href}>{label}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )}
      {after}
    </>
  );
};

const AboutPage = ({ about }) => {
  const { meta, abouthero, experience, aboutlinkedin, work, skillset } = about;
  const { awards } = experience;
  const stageTitle = [
    aboutlinkedin.titleFirstRow,
    aboutlinkedin.titleMiddleRowBlue,
    aboutlinkedin.titleLastRow,
  ].join(" ");

  return (
    <SiteShell>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta key="og:title" property="og:title" content={meta.title} />
        <meta
          key="og:description"
          property="og:description"
          content={meta.description}
        />
      </Head>

      <HeroGrid>
        <HeroText>
          <Title>{abouthero.title}</Title>
          <p>{abouthero.description}</p>
          <Facts>
            {abouthero.list.map((item) => (
              <li key={item}>
                <FactText text={item} />
              </li>
            ))}
          </Facts>
        </HeroText>
        <Portrait src="/assets/art/portrait-2.webp" alt="Chris Piskorz" />
      </HeroGrid>

      <HistoryPanel aria-labelledby="experience">
        <PanelTitle id="experience">{experience.title}</PanelTitle>
        <Jobs>
          {experience.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <div>
                <p>{item.description}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </Jobs>
        <PanelTitle as="h3" id="awards">
          {awards.title}
        </PanelTitle>
        <Awards>
          {awards.items.map((item) => (
            <article key={item.title}>
              <small>{item.position}</small>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </Awards>
      </HistoryPanel>

      <StageGrid aria-labelledby="stage">
        <StageText>
          <h2 id="stage">{stageTitle}</h2>
          {aboutlinkedin.description.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <a href={aboutlinkedin.linkedinLink}>{aboutlinkedin.linkedinText} →</a>
        </StageText>
        <StagePhotos>
          {aboutlinkedin.linkedinPhotos.map((photo) => (
            <img
              key={photo.imageSrc}
              src={photo.imageSrc}
              alt={photo.imageAlt}
              loading="lazy"
            />
          ))}
        </StagePhotos>
      </StageGrid>

      <ProcessPanel aria-labelledby="process">
        <SectionHead id="process">
          {work.title} {work.titleBlue}
        </SectionHead>
        <Process>
          {work.steps.map((step) => (
            <li key={step.title}>
              <small>{step.title}</small>
              <h3>{step.contentTitle}</h3>
              <p>{step.content}</p>
            </li>
          ))}
        </Process>
      </ProcessPanel>

      <Section aria-labelledby="skills" style={{ paddingTop: 110 }}>
        <SectionHead id="skills">{skillset.title}</SectionHead>
        <Skills>
          {skillset.skills.map((skill) => (
            <article key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </Skills>
      </Section>
    </SiteShell>
  );
};

export default AboutPage;
