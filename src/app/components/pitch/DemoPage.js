import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import SiteShell from "../site/SiteShell";
import { Title } from "../site/Site.styles";
import {
  DemoHead,
  Eyebrow,
  Problem,
  Facts,
  Media,
  Prototype,
  Frame,
  NextPanel,
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
    <SiteShell>
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

      <DemoHead>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <Title>{hero.title}</Title>
        <p>{hero.summary}</p>
      </DemoHead>

      <Problem>
        <h2>{problem.title}</h2>
        <div>
          {problem.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {problem.facts && (
            <Facts>
              {problem.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </Facts>
          )}
        </div>
      </Problem>

      {media && (
        <Media>
          <img src={media.src} alt={media.alt} />
        </Media>
      )}

      {prototype && (
        <Prototype>
          <h2>{prototype.title}</h2>
          <p>{prototype.description}</p>
          <Frame
            ref={frameRef}
            src={prototype.src}
            title={prototype.title}
            sandbox="allow-scripts"
            onLoad={requestFrameHeight}
            $height={frameHeight ?? prototype.height}
            $mobileHeight={frameHeight ?? prototype.mobileHeight}
          />
        </Prototype>
      )}

      {next && (
        <NextPanel>
          <h2>{next.title}</h2>
          <ul>
            {next.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {terms && <strong>{terms}</strong>}
        </NextPanel>
      )}
    </SiteShell>
  );
};

export default DemoPage;
