import styled, { css, keyframes } from "styled-components";

const drift = keyframes`
  0%, 100% { transform: translateY(0) rotate(var(--tilt)); }
  50% { transform: translateY(-8px) rotate(var(--tilt)); }
`;

export const OfferHero = styled.section`
  position: relative;
  overflow: hidden;
  background: #0c0e15;
  color: #fff;
  padding: 56px 0 104px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -180px;
    width: 780px;
    height: 780px;
    background: radial-gradient(
      circle,
      rgba(68, 86, 214, 0.55) 0%,
      rgba(229, 134, 111, 0.16) 45%,
      rgba(12, 14, 21, 0) 70%
    );
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 32px 0 64px;
  }
`;

export const HeroWide = styled.div`
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }

  @media (max-width: 590px) {
    padding: 0 16px;
  }
`;

export const HeroEyebrow = styled.p`
  display: inline-block;
  margin: 0 0 24px;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
`;

export const HeroHeading = styled.h1`
  font-size: 60px;
  line-height: 1.06;
  font-weight: 500;
  letter-spacing: -0.015em;

  em {
    font-style: normal;
    background: linear-gradient(95deg, #8fa0ff 0%, #f2a48f 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 1100px) {
    font-size: 48px;
  }

  @media (max-width: 590px) {
    font-size: 36px;
  }
`;

export const HeroLead = styled.p`
  margin: 24px 0 0;
  max-width: 520px;
  font-size: 20px;
  line-height: 1.45;
  color: #d6d9e2;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
`;

export const ButtonLight = styled.a`
  background: #fff;
  color: #0c0e15;
  border-radius: 999px;
  padding: 15px 28px;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.2s ease-out, background 0.2s ease-out;

  &:hover {
    background: #d6dcff;
    transform: translateY(-2px);
  }
`;

export const TextLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid currentColor;
  padding-bottom: 3px;

  &:hover {
    color: #9fb0ff;
  }
`;

export const Stage = styled.div`
  position: relative;
  padding: 44px 0 96px 76px;

  @media (max-width: 590px) {
    padding: 56px 0 104px 20px;
  }
`;

export const Screen = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55);
`;

const fragment = css`
  position: absolute;
  z-index: 1;
  --tilt: 0deg;
  transform: rotate(var(--tilt));
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.42);
  animation: ${drift} 7s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const SheetBit = styled.div`
  ${fragment}
  --tilt: -6deg;
  top: 0;
  left: 0;
  width: 232px;
  background: #fff;
  color: #0c0e15;
  border-radius: 8px;
  overflow: hidden;
  font-size: 12px;

  strong {
    display: block;
    padding: 7px 10px;
    background: #1d6f42;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 590px) {
    width: 176px;
  }
`;

export const SheetGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  font-variant-numeric: tabular-nums;

  span {
    padding: 5px 8px;
    border-right: 1px solid #dfe3e8;
    border-bottom: 1px solid #dfe3e8;
    min-height: 26px;
  }

  .bad {
    background: #ffe3df;
    color: #b42318;
    font-weight: 600;
  }
`;

export const ChatBit = styled.div`
  ${fragment}
  --tilt: 4deg;
  animation-delay: -2.3s;
  left: 0;
  bottom: 0;
  display: grid;
  gap: 6px;
  width: 196px;
  padding: 10px;
  background: #e8ded2;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.3;
  color: #17202e;

  span {
    padding: 7px 10px;
    border-radius: 8px;
    background: #fff;
  }

  span:last-child {
    justify-self: end;
    background: #d4f4c4;
  }

  @media (max-width: 590px) {
    left: 0;
    bottom: 0;
    width: 164px;
    font-size: 12px;
  }
`;

export const NoteBit = styled.div`
  ${fragment}
  --tilt: -3deg;
  animation-delay: -4.4s;
  right: 28px;
  bottom: 26px;
  width: 148px;
  padding: 14px;
  background: #ffe873;
  color: #3a3000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;

  @media (max-width: 590px) {
    right: 8px;
    bottom: 16px;
    width: 124px;
    font-size: 13px;
  }
`;

export const Band = styled.section`
  padding: 96px 0 0;

  @media (max-width: 590px) {
    padding: 56px 0 0;
  }
`;

export const BandTitle = styled.h2`
  font-size: 44px;
  line-height: 1.12;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 40px;
  max-width: 720px;

  @media (max-width: 590px) {
    font-size: 30px;
    margin-bottom: 28px;
  }
`;

export const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PackageCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ $dark }) => ($dark ? "#0c0e15" : "#d9dce5")};
  background: ${({ $dark }) => ($dark ? "#0c0e15" : "#fff")};
  color: ${({ $dark }) => ($dark ? "#fff" : "#0c0e15")};
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 44px rgba(12, 14, 21, 0.14);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const Illustration = styled.div`
  height: 168px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $tone }) =>
    ({
      blue: "#e9ecff",
      gradient: "linear-gradient(120deg, #4456d6 0%, #a877a8 60%, #e5866f 100%)",
      peach: "#fdeee9",
    })[$tone]};
`;

export const PackageBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 1.45;
    opacity: 0.8;
  }

  ul {
    list-style: none;
    margin: 0 0 24px;
    padding: 0;
    flex-grow: 1;
    font-size: 16px;
    line-height: 1.4;
  }

  li {
    position: relative;
    padding-left: 24px;
  }

  li + li {
    margin-top: 10px;
  }

  li::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 5px;
    width: 10px;
    height: 6px;
    border-left: 2px solid ${({ $dark }) => ($dark ? "#9fb0ff" : "#213ed7")};
    border-bottom: 2px solid ${({ $dark }) => ($dark ? "#9fb0ff" : "#213ed7")};
    transform: rotate(-45deg);
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 18px;
  border-top: 1px solid ${({ $dark }) => ($dark ? "#333847" : "#d9dce5")};

  strong {
    font-size: 24px;
    font-weight: 600;
  }

  span {
    font-size: 16px;
    opacity: 0.8;
  }
`;

export const Wire = styled.div`
  width: 170px;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 8px;
  transform: rotate(-3deg);

  i {
    display: block;
    border: 2px dashed #4456d6;
    border-radius: 6px;
    min-height: 26px;
  }

  i:first-child {
    grid-row: span 3;
  }

  i:last-child {
    background: #4456d6;
    border-style: solid;
    width: 60%;
    min-height: 22px;
  }
`;

export const MiniApp = styled.div`
  width: 196px;
  background: #fff;
  color: #17202e;
  border-radius: 10px;
  padding: 10px;
  font-size: 11px;
  box-shadow: 0 14px 30px rgba(12, 14, 21, 0.32);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 4px;
    border-bottom: 1px solid #e7e9f0;
  }

  div:last-child {
    border-bottom: 0;
  }

  b {
    font-weight: 600;
    color: #1f8a4c;
  }

  b.wait {
    color: #b56a00;
  }
`;

export const Days = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, 34px);
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  font-weight: 600;
  color: #7a3a26;
  text-align: center;

  span {
    display: block;
    height: var(--bar);
    margin-bottom: 6px;
    border-radius: 6px;
    background: #e5866f;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 104px;
  }

  li:last-child span {
    background: #213ed7;
  }
`;

export const StepBand = styled.section`
  margin-top: 96px;
  padding: 80px 0;
  background: #f3f4fa;

  @media (max-width: 590px) {
    margin-top: 56px;
    padding: 56px 0;
  }
`;

export const StepList = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 22px;
    right: 22px;
    height: 2px;
    background: linear-gradient(90deg, #4456d6 0%, #e5866f 100%);
  }

  li {
    position: relative;
    counter-increment: step;
  }

  li::before {
    content: counter(step);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    margin-bottom: 18px;
    border-radius: 50%;
    background: #0c0e15;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.45;
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);

    &::before {
      top: 22px;
      bottom: 22px;
      left: 22px;
      right: auto;
      width: 2px;
      height: auto;
      background: linear-gradient(180deg, #4456d6 0%, #e5866f 100%);
    }

    li {
      padding-left: 66px;
      min-height: 46px;
    }

    li::before {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
    }
  }
`;

export const CaseRow = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;

  & + & {
    margin-top: 80px;
  }

  &:nth-of-type(even) > img {
    order: 2;
  }

  @media (max-width: 790px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;

    & + & {
      margin-top: 56px;
    }

    &:nth-of-type(even) > img {
      order: 0;
    }
  }
`;

export const CaseImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;
  border: 1px solid #e3e5ec;
`;

export const CaseTag = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #213ed7;
`;

export const CaseHeading = styled.h3`
  font-size: 30px;
  line-height: 1.18;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const CaseText = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
`;

export const Stats = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  margin: 24px 0;

  dt {
    font-size: 34px;
    font-weight: 500;
    line-height: 1.1;
    color: #213ed7;
  }

  dd {
    margin: 4px 0 0;
    max-width: 130px;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const CaseLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid currentColor;
  padding-bottom: 4px;

  &:hover {
    color: #213ed7;
  }
`;

export const TestimonialsWrap = styled.div`
  margin-top: 96px;
  background: #0c0e15;
  padding-bottom: 72px;

  @media (max-width: 590px) {
    margin-top: 56px;
    padding-bottom: 48px;
  }
`;
