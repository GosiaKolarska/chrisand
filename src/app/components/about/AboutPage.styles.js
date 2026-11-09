import styled from "styled-components";
import { brick, contentWidth, moss, muted, paper, peach } from "../site/Site.styles";

const line = "rgba(34, 33, 29, 0.16)";

export const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 6fr) minmax(0, 4fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 56px 32px 110px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 24px 16px 72px;
  }
`;

export const HeroText = styled.div`
  > p {
    margin-top: 24px;
    max-width: 680px;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.42;
  }
`;

export const Facts = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 32px;
  margin-top: 32px;

  li {
    padding: 14px 0;
    border-top: 1px solid ${line};
    font-size: 17px;
    line-height: 1.35;
  }

  a {
    display: inline;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  a:hover {
    color: ${brick};
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const HistoryPanel = styled.section`
  padding: 88px 32px 56px;
  border-radius: 28px;
  background: ${moss};
  color: ${paper};

  @media (max-width: 790px) {
    padding: 56px 8px 8px;
    border-radius: 20px;
  }
`;

export const PanelTitle = styled.h2`
  margin-bottom: 48px;
  text-align: center;
  font-size: clamp(36px, 4.4vw, 68px);
  line-height: 1.08;
  letter-spacing: -0.02em;

  &#awards {
    margin: 88px 0 40px;
    font-size: clamp(32px, 3.6vw, 56px);
  }

  @media (max-width: 790px) {
    margin-bottom: 32px;

    &#awards {
      margin: 56px 0 28px;
    }
  }
`;

export const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: ${contentWidth};
  margin: 0 auto;

  article {
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
    gap: 16px clamp(24px, 5vw, 80px);
    padding: clamp(24px, 3vw, 44px);
    border-radius: 24px;
    background: ${paper};
    color: #22211d;
  }

  h3 {
    font-size: clamp(28px, 2.6vw, 40px);
    line-height: 1.12;
    letter-spacing: -0.018em;
  }

  p {
    font-size: 18px;
    line-height: 1.45;
  }

  ul {
    margin-top: 16px;
    padding-left: 18px;
    list-style: disc;
    font-size: 17px;
    line-height: 1.45;
    color: ${muted};
  }

  li + li {
    margin-top: 8px;
  }

  @media (max-width: 790px) {
    article {
      grid-template-columns: minmax(0, 1fr);
      padding: 20px 16px;
    }
  }
`;

export const Awards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  max-width: ${contentWidth};
  margin: 0 auto;

  article {
    padding-top: 18px;
    border-top: 1px solid rgba(245, 241, 232, 0.35);
  }

  small {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.8;
  }

  h4 {
    margin: 6px 0 10px;
    font-family: var(--font-serif), Georgia, serif;
    font-size: 27px;
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.015em;
  }

  p {
    font-size: 17px;
    line-height: 1.4;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 790px) {
    padding: 0 8px 24px;
  }

  @media (max-width: 500px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const StageGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 110px 32px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 72px 16px;
  }
`;

export const StageText = styled.div`
  h2 {
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.45;
  }

  a {
    margin-top: 24px;
    font-size: 17px;
    font-weight: 600;
  }

  a:hover {
    color: ${brick};
  }
`;

export const StagePhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const ProcessPanel = styled.section`
  width: calc(100% - 64px);
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: 88px clamp(16px, 3vw, 48px) 56px;
  border-radius: 28px;
  background: ${peach};

  @media (max-width: 790px) {
    width: calc(100% - 16px);
    padding: 56px 16px 24px;
    border-radius: 20px;
  }
`;

export const Process = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding-top: 18px;
    border-top: 1px solid rgba(34, 33, 29, 0.35);
  }

  small {
    font-size: 15px;
    font-weight: 500;
  }

  h3 {
    margin: 8px 0 12px;
    font-size: 27px;
    line-height: 1.12;
    letter-spacing: -0.015em;
  }

  p {
    font-size: 17px;
    line-height: 1.4;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 44px 32px;

  article {
    padding-top: 18px;
    border-top: 1px solid ${line};
  }

  h3 {
    margin-bottom: 10px;
    font-size: 25px;
    line-height: 1.14;
    letter-spacing: -0.012em;
  }

  p {
    font-size: 16px;
    line-height: 1.45;
    color: ${muted};
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
`;
