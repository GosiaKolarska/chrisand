import React from "react";
import Head from "next/head";
import Link from "next/link";
import cases, { casePath } from "../../data/cases";
import { homePath } from "../../i18n/locale";
import {
  CaseHero,
  Wrap,
  BackLink,
  Title,
  Summary,
  Facts,
  CoverBand,
  Cover,
  Body,
  Block,
  BlockTitle,
  Text,
  StepImage,
  Results,
  Result,
  Links,
} from "./CasePage.styles";

const labels = {
  en: { back: "All work", next: "Next project", suffix: "Chris Piskorz" },
  pl: { back: "Wszystkie realizacje", next: "Następny projekt", suffix: "Chris Piskorz" },
};

const CasePage = ({ slug, locale }) => {
  const list = cases[locale];
  const index = list.findIndex((item) => item.slug === slug);
  const item = list[index];
  const next = list[(index + 1) % list.length];
  const text = labels[locale];
  const pageTitle = `${item.title} – ${text.suffix}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta key="description" name="description" content={item.summary} />
        <meta key="og:title" property="og:title" content={pageTitle} />
        <meta
          key="og:description"
          property="og:description"
          content={item.summary}
        />
      </Head>
      <CaseHero id="main-content" className="scrollHero">
        <Wrap>
          <BackLink as={Link} href={`${homePath(locale)}#case-studies`}>
            ← {text.back}
          </BackLink>
          <Title>{item.title}</Title>
          <Summary>{item.summary}</Summary>
          <Facts>
            {item.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </Facts>
        </Wrap>
      </CaseHero>
      <CoverBand>
        <Wrap>
          <Cover src={item.cover} alt={item.coverAlt} />
        </Wrap>
      </CoverBand>
      <Body>
        <Wrap>
          <Block>
            <BlockTitle>{item.problem.title}</BlockTitle>
            <Text>{item.problem.text}</Text>
          </Block>
          {item.sections.map((section) => (
            <Block key={section.title}>
              <BlockTitle>{section.title}</BlockTitle>
              <Text>{section.text}</Text>
              {section.image && (
                <StepImage
                  src={section.image}
                  alt={section.imageAlt}
                  loading="lazy"
                />
              )}
            </Block>
          ))}
          <Block>
            <BlockTitle>{item.resultsTitle}</BlockTitle>
            <Results>
              {item.results.map((result) => (
                <Result key={result.label}>
                  <dt>{result.value}</dt>
                  <dd>{result.label}</dd>
                </Result>
              ))}
            </Results>
          </Block>
          <Block>
            <BlockTitle>{item.lessonTitle}</BlockTitle>
            <Text>{item.lesson}</Text>
          </Block>
          <Links>
            <a href={item.link.href} target="_blank" rel="noopener noreferrer">
              {item.link.text}
            </a>
            <Link href={casePath(next.slug, locale)}>
              {text.next}: {next.title}
            </Link>
          </Links>
        </Wrap>
      </Body>
    </>
  );
};

export default CasePage;
