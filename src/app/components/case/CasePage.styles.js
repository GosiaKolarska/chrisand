import styled from "styled-components";
import { brick, contentWidth, moss, muted, paper, peach } from "../site/Site.styles";

const wide = `calc(${contentWidth} + 64px)`;
const line = "rgba(34, 33, 29, 0.16)";

// Screenshots open full size on click; the text in them is unreadable at card width.
const zoomable = `
  img[data-zoom] {
    cursor: zoom-in;
    transition: transform 0.2s ease;
  }

  img[data-zoom]:hover {
    transform: scale(1.01);
  }

  img[data-zoom]:focus-visible {
    outline: 3px solid ${brick};
    outline-offset: 3px;
  }
`;

export const Head = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: min(7vh, 72px) 24px 56px;
  text-align: center;

  > mark {
    display: table;
    margin: 0 auto 18px;
  }

  > p {
    margin: 20px auto 0;
    max-width: 780px;
    text-wrap: balance;
    font-size: clamp(18px, 1.5vw, 22px);
    line-height: 1.4;
    color: ${muted};
  }

  @media (max-width: 790px) {
    padding: 20px 16px 32px;
  }
`;

export const BackLink = styled.a`
  display: table;
  margin: 0 auto 28px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${brick};
  }
`;

export const Cover = styled.figure`
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: clamp(24px, 5vw, 72px);
  border-radius: 28px;

  img {
    display: block;
    max-width: 100%;
    max-height: 720px;
    margin: 0 auto;
    border-radius: 14px;
    box-shadow: 0 12px 44px rgba(34, 33, 29, 0.2);
  }

  @media (max-width: 790px) {
    width: calc(100% - 16px);
    padding: 16px;
    border-radius: 20px;
  }
`;

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px 32px;
  max-width: ${wide};
  margin: 0 auto;
  padding: 44px 32px 0;

  dt {
    font-size: 15px;
    font-weight: 500;
    color: ${muted};
  }

  dd {
    margin: 6px 0 0;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(22px, 1.9vw, 28px);
    line-height: 1.18;
    letter-spacing: -0.012em;
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 32px 16px 0;
  }
`;

export const Problem = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 110px 32px;
  text-align: center;

  small {
    display: block;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    color: ${brick};
  }

  p {
    text-wrap: balance;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(30px, 3.6vw, 54px);
    line-height: 1.16;
    letter-spacing: -0.02em;
  }

  @media (max-width: 790px) {
    padding: 72px 16px;
  }
`;

export const Steps = styled.section`
  ${zoomable}

  max-width: ${wide};
  margin: 0 auto;
  padding: 0 32px;

  article {
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
    gap: 20px clamp(32px, 6vw, 96px);
    padding: 44px 0 72px;
    border-top: 1px solid ${line};
  }

  article[data-media] {
    grid-template-columns: minmax(0, 5fr) minmax(0, 8fr);
    align-items: center;
    gap: clamp(32px, 5vw, 80px);
    margin-bottom: 32px;
    padding: clamp(32px, 5vw, 72px);
    border-top: 0;
    border-radius: 28px;
    background: #cdd8df;
  }

  article[data-media]:nth-child(2) {
    background: #d3d9bd;
  }

  article[data-media]:nth-child(3) {
    background: #f1d3b6;
  }

  article[data-media]:nth-child(even) > div {
    order: 2;
  }

  article[data-media]:nth-child(even) {
    grid-template-columns: minmax(0, 8fr) minmax(0, 5fr);
  }

  h2 {
    font-size: clamp(30px, 3.2vw, 50px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p {
    max-width: 720px;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.45;
  }

  article[data-media] p {
    margin-top: 20px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 12px 44px rgba(34, 33, 29, 0.16);
  }

  @media (max-width: 900px) {
    padding: 0 16px;

    article {
      grid-template-columns: minmax(0, 1fr);
      padding: 32px 0 48px;
    }

    article[data-media],
    article[data-media]:nth-child(even) {
      grid-template-columns: minmax(0, 1fr);
      gap: 24px;
      margin-bottom: 16px;
      padding: 28px 16px 16px;
      border-radius: 20px;
    }

    article[data-media]:nth-child(even) > div {
      order: 0;
    }

    article[data-media] > div {
      padding: 0 4px;
    }

    img {
      border-radius: 12px;
    }
  }
`;

export const Walkthrough = styled.section`
  ${zoomable}

  max-width: ${wide};
  margin: 0 auto 72px;
  padding: 72px 32px 0;

  header {
    max-width: 860px;
    margin: 0 auto 56px;
    text-align: center;
  }

  h2 {
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  header p {
    margin-top: 20px;
    font-size: clamp(18px, 1.5vw, 21px);
    color: ${muted};
  }

  blockquote {
    margin: 16px 0 0;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(22px, 2vw, 30px);
    line-height: 1.25;
    letter-spacing: -0.012em;
  }

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 40px 0 56px;
    border-top: 1px solid ${line};
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
    font-size: clamp(24px, 2.2vw, 34px);
    line-height: 1.12;
    letter-spacing: -0.02em;
  }

  h3 span {
    display: grid;
    place-items: center;
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${peach};
    font-family: var(--font-sans), sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0;
  }

  li > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  figure {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 20px;
    border-radius: 20px;
    background: #ece6da;
  }

  figure + figure {
    background: #cdd8df;
  }

  figcaption {
    font-size: 15px;
    font-weight: 600;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 8px 28px rgba(34, 33, 29, 0.14);
  }

  figure p {
    margin-top: 6px;
    font-size: 17px;
    line-height: 1.45;
  }

  @media (max-width: 900px) {
    padding: 48px 16px 0;

    li > div {
      grid-template-columns: minmax(0, 1fr);
      gap: 12px;
    }

    figure {
      padding: 14px;
      border-radius: 16px;
    }
  }
`;

export const Decisions = styled.section`
  ${zoomable}

  max-width: min(${wide}, calc(var(--cols, 3) * 520px + 64px));
  margin: 0 auto 72px;
  padding: 44px 32px 0;

  h2 {
    margin-bottom: 40px;
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(var(--cols, 3), minmax(0, 1fr));
    gap: 32px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1448 / 1086;
    object-fit: contain;
    border-radius: 14px;
    background: rgba(34, 33, 29, 0.06);
  }

  h3 {
    margin: 20px 0 10px;
    font-size: clamp(24px, 2.2vw, 32px);
    line-height: 1.12;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.42;
  }

  @media (max-width: 900px) {
    padding: 28px 16px 0;

    > div {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;

export const Results = styled.section`
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: 72px clamp(24px, 4vw, 64px);
  border-radius: 28px;
  background: ${moss};
  color: ${paper};

  h2 {
    margin-bottom: 44px;
    text-align: center;
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin: 0;
  }

  dl > div {
    flex: 1 1 220px;
    max-width: 320px;
    padding-top: 18px;
    border-top: 1px solid rgba(245, 241, 232, 0.35);
  }

  dt {
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(40px, 4.4vw, 68px);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  dd {
    margin: 10px 0 0;
    font-size: 17px;
    line-height: 1.35;
  }

  @media (max-width: 790px) {
    width: calc(100% - 16px);
    padding: 48px 20px;
    border-radius: 20px;
  }
`;

export const Quote = styled.figure`
  max-width: 980px;
  margin: 0 auto;
  padding: 110px 32px 0;
  text-align: center;

  img {
    display: block;
    width: 120px;
    height: auto;
    margin: 0 auto 28px;
  }

  blockquote {
    margin: 0;
    text-wrap: balance;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(28px, 3.2vw, 46px);
    line-height: 1.18;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 24px;
    font-size: 17px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a:hover {
    color: ${brick};
  }

  @media (max-width: 790px) {
    padding: 72px 16px 0;
  }
`;

export const Lesson = styled.section`
  &[data-link-only] {
    display: block;
    padding-bottom: 72px;
    text-align: center;
  }

  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
  gap: 20px clamp(32px, 6vw, 96px);
  max-width: ${wide};
  margin: 0 auto;
  padding: 110px 32px;

  h2 {
    font-size: clamp(30px, 3.2vw, 50px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p {
    max-width: 720px;
    font-size: clamp(19px, 1.7vw, 24px);
    line-height: 1.4;
  }

  a {
    margin-top: 24px;
    font-size: 17px;
    font-weight: 600;
  }

  a:hover {
    color: ${brick};
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 72px 16px;
  }
`;

export const Next = styled.a`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 16px;
  align-items: stretch;
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: 12px;
  border-radius: 28px;
  background: ${peach};
  transition: transform 0.25s ease-out;

  &:hover {
    transform: translateY(-4px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    padding: clamp(20px, 4vw, 56px);
  }

  small {
    font-size: 15px;
    font-weight: 500;
  }

  h2 {
    font-size: clamp(30px, 3.2vw, 50px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  span {
    font-size: 17px;
    font-weight: 600;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 28px;
    border-radius: 18px;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 400px;
    border-radius: 10px;
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);
    width: calc(100% - 16px);
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const Zoom = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  overflow: auto;
  padding: 56px 24px 24px;
  background: rgba(20, 19, 16, 0.9);
  cursor: zoom-out;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  button {
    position: fixed;
    top: 14px;
    right: 18px;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: ${paper};
    color: #22211d;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding: 56px 8px 8px;
  }
`;
