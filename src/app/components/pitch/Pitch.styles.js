import styled from "styled-components";
import { brick, contentWidth, moss, muted, paper, peach } from "../site/Site.styles";

const wide = `calc(${contentWidth} + 64px)`;

export const DemoHead = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: min(7vh, 72px) 24px 72px;
  text-align: center;

  > p:last-child {
    margin: 20px auto 0;
    max-width: 780px;
    text-wrap: balance;
    font-size: clamp(18px, 1.5vw, 22px);
    line-height: 1.4;
    color: ${muted};
  }

  @media (max-width: 790px) {
    padding: 20px 16px 40px;
  }
`;

export const Eyebrow = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${brick};
`;

export const Problem = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
  gap: 20px clamp(32px, 6vw, 96px);
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: clamp(32px, 5vw, 72px);
  border-radius: 28px;
  background: ${moss};
  color: ${paper};

  h2 {
    font-size: clamp(32px, 3.6vw, 56px);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  p {
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.45;
  }

  p + p {
    margin-top: 16px;
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);
    width: calc(100% - 16px);
    padding: 40px 20px;
    border-radius: 20px;
  }
`;

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 32px;
  margin: 36px 0 0;

  > div {
    padding-top: 16px;
    border-top: 1px solid rgba(245, 241, 232, 0.35);
  }

  dt {
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(34px, 3.4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  dd {
    margin: 8px 0 0;
    font-size: 16px;
    line-height: 1.35;
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Media = styled.figure`
  max-width: ${wide};
  margin: 0 auto;
  padding: 72px 32px 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 8px 36px rgba(34, 33, 29, 0.14);
  }

  @media (max-width: 790px) {
    padding: 48px 16px 0;
  }
`;

export const Prototype = styled.section`
  max-width: ${wide};
  margin: 0 auto;
  padding: 110px 32px 0;
  text-align: center;

  h2 {
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  > p {
    margin: 16px auto 40px;
    max-width: 720px;
    text-wrap: balance;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.42;
    color: ${muted};
  }

  @media (max-width: 790px) {
    padding: 72px 16px 0;
  }
`;

export const Frame = styled.iframe`
  display: block;
  width: 100%;
  height: ${({ $height }) => $height}px;
  border: 1px solid rgba(34, 33, 29, 0.16);
  border-radius: 20px;
  background: #fff;

  @media (max-width: 590px) {
    height: ${({ $mobileHeight }) => $mobileHeight}px;
  }
`;

export const NextPanel = styled.section`
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 110px auto 0;
  padding: clamp(32px, 5vw, 72px);
  border-radius: 28px;
  background: ${peach};

  h2 {
    margin-bottom: 28px;
    font-size: clamp(32px, 3.6vw, 56px);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.45;
  }

  li + li {
    margin-top: 8px;
  }

  strong {
    display: block;
    margin-top: 24px;
    font-size: 19px;
    font-weight: 600;
  }

  @media (max-width: 790px) {
    width: calc(100% - 16px);
    margin-top: 72px;
    padding: 40px 20px;
    border-radius: 20px;
  }
`;
