import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import PitchShell from "./PitchShell";
import {
  Wrap,
  Hero,
  Eyebrow,
  HeroTitle,
  HeroSummary,
  Section,
  SectionTitle,
  Body,
  Facts,
  Fact,
  Shot,
  Frame,
  List,
  Terms,
} from "./Pitch.styles";

const DemoPage = ({ demo }) => {
  const { meta, hero, problem, media, prototype, next } = demo;
  const terms = next && [next.duration, next.price].filter(Boolean).join(" · ");
  const frameRef = useRef(null);
  const [frameHeight, setFrameHeight] = useState(null);

  // A prototype can report its height with postMessage({ demoHeight: number }, "*").
  useEffect(() => {
    const onMessage = (event) => {
      const isOwnFrame = event.source === frameRef.current?.contentWindow;
      const height = event.data?.demoHeight;
      if (isOwnFrame && Number.isFinite(height) && height > 0) {
        setFrameHeight(Math.min(Math.ceil(height), 4000));
      }
    };
    window.addEventListener("message", onMessage);
    requestFrameHeight();
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function requestFrameHeight() {
    frameRef.current?.contentWindow?.postMessage("demo:height?", "*");
  }

  return (
    <PitchShell topLink={{ href: "/zlecenia", text: "O współpracy" }}>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="robots" name="robots" content="noindex, nofollow" />
        <meta key="description" name="description" content={hero.summary} />
        <meta key="og:title" property="og:title" content={meta.title} />
        <meta
          key="og:description"
          property="og:description"
          content={hero.summary}
        />
      </Head>
      <Hero>
        <Wrap>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <HeroTitle>{hero.title}</HeroTitle>
          <HeroSummary>{hero.summary}</HeroSummary>
        </Wrap>
      </Hero>
      <Section>
        <Wrap>
          <SectionTitle>{problem.title}</SectionTitle>
          {problem.paragraphs.map((text) => (
            <Body key={text}>{text}</Body>
          ))}
          {problem.facts && (
            <Facts>
              {problem.facts.map((fact) => (
                <Fact key={fact.label}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </Fact>
              ))}
            </Facts>
          )}
        </Wrap>
      </Section>
      {media && (
        <Section>
          <Wrap>
            <Shot src={media.src} alt={media.alt} />
          </Wrap>
        </Section>
      )}
      {prototype && (
        <Section>
          <Wrap>
            <SectionTitle>{prototype.title}</SectionTitle>
            <Body>{prototype.description}</Body>
            <Frame
              ref={frameRef}
              src={prototype.src}
              title={prototype.title}
              sandbox="allow-scripts"
              onLoad={requestFrameHeight}
              $height={frameHeight ?? prototype.height}
              $mobileHeight={frameHeight ?? prototype.mobileHeight}
            />
          </Wrap>
        </Section>
      )}
      {next && (
        <Section>
          <Wrap>
            <SectionTitle>{next.title}</SectionTitle>
            <List>
              {next.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </List>
            {terms && <Terms>{terms}</Terms>}
          </Wrap>
        </Section>
      )}
    </PitchShell>
  );
};

export default DemoPage;
