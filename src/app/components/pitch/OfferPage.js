import React from "react";
import Head from "next/head";
import PitchShell from "./PitchShell";
import VideoSection from "../common/video/VideoSection";
import { useContent, useLocale } from "../../i18n/content";
import { alternatePath, homePath } from "../../i18n/locale";
import { Wrap } from "./Pitch.styles";
import {
  OfferHero,
  HeroWide,
  HeroEyebrow,
  HeroHeading,
  HeroLead,
  HeroActions,
  ButtonLight,
  TextLink,
  Stage,
  Screen,
  SheetBit,
  SheetGrid,
  ChatBit,
  NoteBit,
  Band,
  BandTitle,
  PackageGrid,
  PackageCard,
  Illustration,
  PackageBody,
  PriceRow,
  Wire,
  MiniApp,
  Days,
  StepBand,
  StepList,
  CaseRow,
  CaseImage,
  CaseTag,
  CaseHeading,
  CaseText,
  Stats,
  CaseLink,
  TestimonialsWrap,
} from "./Offer.styles";

const packageArt = (art) => ({
  diagnosis: {
    tone: "blue",
    art: (
      <Wire aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </Wire>
    ),
  },
  tool: {
    tone: "gradient",
    art: (
      <MiniApp aria-hidden="true">
        {art.tool.map((row) => (
          <div key={row.label}>
            {row.label} <b className={row.waiting ? "wait" : ""}>{row.status}</b>
          </div>
        ))}
      </MiniApp>
    ),
  },
  sprint: {
    tone: "peach",
    art: (
      <Days aria-hidden="true">
        {art.days.map((day, index) => (
          <li key={day}>
            <span style={{ "--bar": `${24 + index * 14}px` }} />
            {day}
          </li>
        ))}
      </Days>
    ),
  },
});

const OfferPage = () => {
  const { offer, pitch } = useContent();
  const locale = useLocale();
  const pagePath = locale === "pl" ? "/zlecenia" : "/work-with-me";
  const {
    meta,
    hero,
    packagesTitle,
    packages,
    stepsTitle,
    steps,
    casesTitle,
    cases,
    testimonialsTitle,
    art,
  } = offer;
  const artByPackage = packageArt(art);

  return (
    <PitchShell
      wide
      topLink={{ href: homePath(locale), text: "Portfolio" }}
      alternateHref={alternatePath(pagePath)}
    >
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta key="og:title" property="og:title" content={meta.title} />
        <meta
          key="og:description"
          property="og:description"
          content={meta.description}
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://chrisand.design${pagePath}`}
        />
      </Head>

      <OfferHero>
        <HeroWide>
          <div>
            <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
            <HeroHeading>
              {hero.title} <em>{hero.titleAccent}</em>
            </HeroHeading>
            <HeroLead>{hero.summary}</HeroLead>
            <HeroActions>
              <ButtonLight href={`mailto:${pitch.contact.email}`}>
                {hero.primary}
              </ButtonLight>
              <TextLink href="#realizacje">{hero.secondary}</TextLink>
            </HeroActions>
          </div>
          <Stage>
            <Screen src={hero.image} alt={hero.imageAlt} />
            <SheetBit aria-hidden="true">
              <strong>{hero.sheetName}</strong>
              <SheetGrid>
                {hero.sheet.map((cell) => (
                  <span key={cell} className={cell === "#REF!" ? "bad" : ""}>
                    {cell}
                  </span>
                ))}
              </SheetGrid>
            </SheetBit>
            <ChatBit aria-hidden="true">
              {hero.chat.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </ChatBit>
            <NoteBit aria-hidden="true">{hero.note}</NoteBit>
          </Stage>
        </HeroWide>
      </OfferHero>

      <Band>
        <Wrap $wide>
          <BandTitle>{packagesTitle}</BandTitle>
          <PackageGrid>
            {packages.map((item) => {
              const dark = item.id === "tool";
              const { tone, art } = artByPackage[item.id];
              return (
                <PackageCard key={item.id} $dark={dark}>
                  <Illustration $tone={tone}>{art}</Illustration>
                  <PackageBody $dark={dark}>
                    <h3>{item.name}</h3>
                    <p>{item.forWhom}</p>
                    <ul>
                      {item.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <PriceRow $dark={dark}>
                      <strong>{item.price}</strong>
                      <span>{item.duration}</span>
                    </PriceRow>
                  </PackageBody>
                </PackageCard>
              );
            })}
          </PackageGrid>
        </Wrap>
      </Band>

      <StepBand>
        <Wrap $wide>
          <BandTitle>{stepsTitle}</BandTitle>
          <StepList>
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </StepList>
        </Wrap>
      </StepBand>

      <Band id="realizacje">
        <Wrap $wide>
          <BandTitle>{casesTitle}</BandTitle>
          {cases.map((item) => (
            <CaseRow key={item.title}>
              <CaseImage src={item.image} alt={item.imageAlt} loading="lazy" />
              <div>
                <CaseTag>{item.tag}</CaseTag>
                <CaseHeading>{item.title}</CaseHeading>
                <CaseText>{item.text}</CaseText>
                <Stats>
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{stat.label}</dd>
                    </div>
                  ))}
                </Stats>
                <CaseLink href={item.href}>{item.link}</CaseLink>
              </div>
            </CaseRow>
          ))}
        </Wrap>
      </Band>

      <TestimonialsWrap>
        <VideoSection title={testimonialsTitle} />
      </TestimonialsWrap>
    </PitchShell>
  );
};

export default OfferPage;
