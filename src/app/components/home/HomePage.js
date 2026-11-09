import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteShell from "../site/SiteShell";
import { useContent, useLocale } from "../../i18n/content";
import {
  Hero,
  HeroCta,
  Field,
  Intro,
  Title,
  Pill,
  Panel,
  VoltiqBox,
  PanelHead,
  BoxFoot,
  Card,
  Stage,
  Story,
  Stats,
  Logos,
  Section,
  SectionHead,
  WorkGrid,
  Shot,
  WorkCard,
  Package,
  Timeline,
  StepsSection,
  VoiceSection,
  VoiceLabel,
  VoiceTrack,
  VoiceNav,
  Symptoms,
  ProblemLines,
  Compare,
  CompareTable,
  About,
  Portrait,
  AboutText,
  AboutCredentials,
  Questions,
  LevelTag,
} from "../site/Site.styles";
import {
  OfferField,
  FieldHead,
  OfferPackages,
  PriceNote,
} from "../pitch/Offer.styles";

const Voices = ({ voices }) => {
  const [open, close] = useLocale() === "pl" ? ["„", "”"] : ["“", "”"];
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const count = voices.items.length;

  const onScroll = () => {
    const track = trackRef.current;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const goTo = (index) => {
    const track = trackRef.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: index * track.clientWidth,
      behavior: still ? "auto" : "smooth",
    });
  };

  return (
    <VoiceSection aria-labelledby="opinie">
      <VoiceLabel id="opinie">{voices.title}</VoiceLabel>
      <VoiceTrack
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        aria-label={voices.trackLabel}
      >
        {voices.items.map((item) => (
          <article key={item.name}>
            <img src={item.image} alt="" loading="lazy" />
            <blockquote>
              {open}
              {item.quote}
              {close}
            </blockquote>
            <p>
              <strong>{item.name}</strong> · {item.role}
            </p>
            <a href={item.video} target="_blank" rel="noopener noreferrer">
              {voices.video}
            </a>
          </article>
        ))}
      </VoiceTrack>
      <VoiceNav>
        <button
          type="button"
          aria-label={voices.prev}
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          ←
        </button>
        <span>
          {voices.items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`${voices.dot} ${index + 1} / ${count}`}
              aria-current={active === index}
              onClick={() => goTo(index)}
            />
          ))}
        </span>
        <button
          type="button"
          aria-label={voices.next}
          disabled={active === count - 1}
          onClick={() => goTo(active + 1)}
        >
          →
        </button>
      </VoiceNav>
    </VoiceSection>
  );
};

const HomePage = () => {
  const { home, offer } = useContent();
  const { meta, hero, problem, voltiq, compare, work, about, faq } = home;

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

      <Hero>
        <Intro>
          <Title>
            {hero.titleTop} <br />
            {hero.titleBottom}
          </Title>
          <p>{hero.summary}</p>
          <HeroCta href={hero.ctaHref}>{hero.cta}</HeroCta>
        </Intro>
      </Hero>

      <Field $scene="/assets/art/field-scene-window.webp">
        <Panel>
          <Symptoms aria-labelledby="problem">
            <div>
              <h2 id="problem">{problem.title}</h2>
              <p>{problem.lead}</p>
            </div>
            <ProblemLines aria-label={problem.threadLabel}>
              {problem.chat.map((item) => (
                <li key={item.text}>
                  <small>{item.who}</small>
                  <p>{item.text}</p>
                </li>
              ))}
            </ProblemLines>
          </Symptoms>
          <VoltiqBox id="voltiq" aria-labelledby="voltiq-title">
            <PanelHead>
              <small>{voltiq.eyebrow}</small>
              <h2 id="voltiq-title">
                {voltiq.titleTop} <br />
                {voltiq.titleBottom}
              </h2>
            </PanelHead>
            <Card>
              <Stage>
                <img
                  src="/assets/cases/voltiq-zadania.jpg"
                  alt={voltiq.imageAlt}
                />
              </Stage>
              <Story>
                <LevelTag>{voltiq.level}</LevelTag>
                <small>{voltiq.tag}</small>
                <h3>{voltiq.title}</h3>
                <p>{voltiq.text}</p>
                <Stats>
                  {voltiq.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{stat.label}</dd>
                    </div>
                  ))}
                </Stats>
              </Story>
            </Card>
            <BoxFoot>
              <Pill as={Link} href={voltiq.caseHref}>
                {voltiq.caseLabel}
              </Pill>
            </BoxFoot>
          </VoltiqBox>
          <Logos>
            <small>{home.trusted}</small>
            <ul>
              {home.companies.map((company) => (
                <li key={company}>
                  <img
                    src={`/assets/companies-logo/logo-${company}.svg`}
                    alt={company}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </Logos>
        </Panel>
      </Field>

      <Compare aria-labelledby="przed-po">
        <SectionHead id="przed-po">{compare.title}</SectionHead>
        <CompareTable>
          <div data-head="">
            <span>{compare.before}</span>
            <span>{compare.after}</span>
          </div>
          {compare.rows.map((row) => (
            <div key={row.before}>
              <p>
                <img src="/assets/art/icon-cross.webp" alt="" loading="lazy" />
                {row.before}
              </p>
              <p>
                <img src="/assets/art/icon-check.webp" alt="" loading="lazy" />
                {row.after}
              </p>
            </div>
          ))}
        </CompareTable>
      </Compare>

      <OfferField
        as="section"
        $scene="/assets/art/offer-scene.webp"
        aria-labelledby="wspolpraca"
      >
        <FieldHead id="wspolpraca">{offer.packagesTitle}</FieldHead>
        <OfferPackages>
          {offer.packages.map((item) => (
            <Package key={item.name}>
              <img src={item.image} alt="" loading="lazy" />
              <h3>{item.name}</h3>
              <p>{item.forWhom}</p>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Package>
          ))}
        </OfferPackages>
        <PriceNote>{offer.priceNote}</PriceNote>
      </OfferField>

      <StepsSection aria-labelledby="kroki">
        <SectionHead id="kroki">{offer.stepsTitle}</SectionHead>
        <Timeline>
          {offer.steps.map((step) => (
            <li key={step.title}>
              <img src={step.icon} alt="" loading="lazy" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </Timeline>
      </StepsSection>

      <Section aria-labelledby="inne-realizacje">
        <SectionHead id="inne-realizacje">{work.title}</SectionHead>
        <WorkGrid>
          {work.items.map((item) => (
            <WorkCard key={item.title} href={item.href}>
              <Shot style={{ background: item.tone }}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </Shot>
              <div>
                {item.level && <LevelTag>{item.level}</LevelTag>}
                <small>{item.meta}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.link} →</span>
              </div>
            </WorkCard>
          ))}
        </WorkGrid>
      </Section>

      <Voices voices={home.voices} />

      <About id="o-mnie" aria-labelledby="kto">
        <Portrait
          src="/assets/art/portrait-2.webp"
          alt="Chris Piskorz"
          width="1198"
          height="1313"
          loading="lazy"
        />
        <AboutText>
          <small>{about.eyebrow}</small>
          <h2 id="kto">{about.title}</h2>
          <p>{about.text}</p>
          <AboutCredentials>
            {about.credentials.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </AboutCredentials>
          <Pill as={Link} href={about.href}>
            {about.more}
          </Pill>
        </AboutText>
      </About>

      <Questions aria-labelledby="pytania">
        <SectionHead id="pytania">{faq.title}</SectionHead>
        <div>
          {faq.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Questions>
    </SiteShell>
  );
};

export default HomePage;
