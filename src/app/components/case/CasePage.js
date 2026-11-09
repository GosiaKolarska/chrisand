import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Link from "next/link";
import SiteShell from "../site/SiteShell";
import { LevelTag, Title } from "../site/Site.styles";
import cases, { casePath } from "../../data/cases";
import { homePath } from "../../i18n/locale";
import {
  Head as CaseHead,
  BackLink,
  Facts,
  Cover,
  Problem,
  Steps,
  Walkthrough,
  Decisions,
  Results,
  Quote,
  Lesson,
  Next,
  Zoom,
} from "./CasePage.styles";

const labels = {
  en: {
    back: "All work",
    next: "Next project",
    read: "Read the case study",
    suffix: "Chris Piskorz",
    before: "Before",
    after: "After",
    close: "Close",
  },
  pl: {
    back: "Wszystkie realizacje",
    next: "Następny projekt",
    read: "Przeczytaj case study",
    suffix: "Chris Piskorz",
    before: "Przed",
    after: "Po",
    close: "Zamknij",
  },
};

const ZoomContext = createContext(() => {});

// A screenshot that opens full size, so the interface text can be read.
const Shot = ({ src, alt }) => {
  const open = useContext(ZoomContext);
  const show = (event) => open({ src, alt, trigger: event.currentTarget });

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      data-zoom=""
      role="button"
      tabIndex={0}
      onClick={show}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          show(event);
        }
      }}
    />
  );
};

const ZoomView = ({ image, onClose, label }) => {
  useEffect(() => {
    if (!image) return undefined;
    const onKey = (event) => event.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      image.trigger?.focus({ preventScroll: true });
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <Zoom
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button type="button" aria-label={label} autoFocus>
        ×
      </button>
      <img src={image.src} alt={image.alt} />
    </Zoom>
  );
};

const OutLink = ({ link }) => (
  <a href={link.href} target="_blank" rel="noopener noreferrer">
    {link.text} →
  </a>
);

const Sections = ({ list }) => (
  <Steps>
    {list.map((section) =>
      section.image ? (
        <article key={section.title} data-media="">
          <div>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <Shot src={section.image} alt={section.imageAlt} />
        </article>
      ) : (
        <article key={section.title}>
          <h2>{section.title}</h2>
          <div>
            <p>{section.text}</p>
          </div>
        </article>
      ),
    )}
  </Steps>
);

const CasePage = ({ slug, locale }) => {
  const list = cases[locale];
  const index = list.findIndex((item) => item.slug === slug);
  const item = list[index];
  const next = list[(index + 1) % list.length];
  const text = labels[locale];
  const pageTitle = `${item.title} – ${text.suffix}`;
  const [open, close] = locale === "pl" ? ["„", "”"] : ["“", "”"];
  const count = item.decisions?.length || 0;
  const [zoom, setZoom] = useState(null);
  const closeZoom = useCallback(() => setZoom(null), []);

  // Four cards read better as a 2 × 2 grid than as 3 + 1.
  const decisions = count > 0 && (
    <Decisions style={{ "--cols": count === 4 ? 2 : Math.min(count, 3) }}>
      <h2>{item.decisionsTitle}</h2>
      <div>
        {item.decisions.map((decision) => (
          <article key={decision.title}>
            {decision.image.includes("/cases/") ? (
              <Shot src={decision.image} alt={decision.title} />
            ) : (
              <img src={decision.image} alt="" loading="lazy" />
            )}
            <h3>{decision.title}</h3>
            <p>{decision.text}</p>
          </article>
        ))}
      </div>
    </Decisions>
  );

  return (
    <ZoomContext.Provider value={setZoom}>
      <SiteShell cta={item.cta}>
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

        <CaseHead>
          <BackLink as={Link} href={`${homePath(locale)}#voltiq`}>
            ← {text.back}
          </BackLink>
          {item.level && (
            <LevelTag as={Link} href={`${homePath(locale)}#wspolpraca`}>
              {item.level}
            </LevelTag>
          )}
          <Title>{item.title}</Title>
          <p>{item.summary}</p>
        </CaseHead>

        <Cover style={{ background: item.tone }}>
          <img src={item.cover} alt={item.coverAlt} />
        {item.coverNote && <figcaption>{item.coverNote}</figcaption>}
        </Cover>

        <Facts>
          {item.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </Facts>

        <Problem>
          <small>{item.problem.title}</small>
          <p>{item.problem.text}</p>
        </Problem>

        <Sections list={item.sections} />

        {item.walkthrough && (
          <Walkthrough>
            <header>
              <h2>{item.walkthrough.title}</h2>
              <p>{item.walkthrough.intro}</p>
              <blockquote>{item.walkthrough.task}</blockquote>
            </header>
            <ol>
              {item.walkthrough.steps.map((step, index) => (
                <li key={step.title}>
                  <h3>
                    <span>{index + 1}</span>
                    {step.title}
                  </h3>
                  <div>
                    <figure>
                      <figcaption>{text.before}</figcaption>
                      {step.before.map((src) => (
                        <Shot
                          key={src}
                          src={src}
                          alt={`${step.title}: ${text.before}`}
                        />
                      ))}
                      <p>{step.problem}</p>
                    </figure>
                    <figure>
                      <figcaption>{text.after}</figcaption>
                      {step.after.map((src) => (
                        <Shot
                          key={src}
                          src={src}
                          alt={`${step.title}: ${text.after}`}
                        />
                      ))}
                      <p>{step.solution}</p>
                    </figure>
                  </div>
                </li>
              ))}
            </ol>
          </Walkthrough>
        )}

        {item.decisionsBefore && decisions}
        {item.afterSections && <Sections list={item.afterSections} />}
        {!item.decisionsBefore && decisions}

        <Results>
          <h2>{item.resultsTitle}</h2>
          <dl>
            {item.results.map((result) => (
              <div key={result.label}>
                <dt>{result.value}</dt>
                <dd>{result.label}</dd>
              </div>
            ))}
          </dl>
        </Results>

        {item.quote && (
          <Quote>
            <img src={item.quote.image} alt="" loading="lazy" />
            <blockquote>
              {open}
              {item.quote.text}
              {close}
            </blockquote>
            <p>
              <strong>{item.quote.name}</strong> · {item.quote.role}
            </p>
            <a
              href={item.quote.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.quote.videoLabel}
            </a>
          </Quote>
        )}

        {item.lesson ? (
          <Lesson>
            <h2>{item.lessonTitle}</h2>
            <div>
              <p>{item.lesson}</p>
              {item.link && <OutLink link={item.link} />}
            </div>
          </Lesson>
        ) : (
          item.link && (
            <Lesson as="div" data-link-only="">
              <OutLink link={item.link} />
            </Lesson>
          )
        )}

        <Next as={Link} href={casePath(next.slug, locale)}>
          <div>
            <small>{text.next}</small>
            <h2>{next.title}</h2>
            <span>{text.read} →</span>
          </div>
          <figure style={{ background: next.tone }}>
            <img src={next.cover} alt="" loading="lazy" />
          </figure>
        </Next>
        <ZoomView image={zoom} onClose={closeZoom} label={text.close} />
      </SiteShell>
    </ZoomContext.Provider>
  );
};

export default CasePage;
