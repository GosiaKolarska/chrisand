import styled from "styled-components";

export const Page = styled.div`
  background: #fff;
  color: #0c0e15;
  min-height: 100vh;
`;

export const Wrap = styled.div`
  max-width: ${({ $wide }) => ($wide ? 1240 : 960)}px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 590px) {
    padding: 0 16px;
  }
`;

export const TopBar = styled.header`
  background: #0c0e15;
  color: #fff;
`;

export const TopBarInner = styled(Wrap)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Brand = styled.a`
  font-size: 22px;
  font-weight: 500;
`;

export const TopLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const TopLink = styled.a`
  font-size: 16px;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
`;

export const Hero = styled.section`
  background: #0c0e15;
  color: #fff;
  padding: 72px 0 88px;

  @media (max-width: 590px) {
    padding: 40px 0 56px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9fb0ff;
`;

export const HeroTitle = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  font-weight: 500;
  max-width: 820px;

  @media (max-width: 590px) {
    font-size: 34px;
  }
`;

export const HeroSummary = styled.p`
  margin: 24px 0 0;
  font-size: 22px;
  line-height: 1.45;
  max-width: 720px;
  color: #d6d9e2;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const Section = styled.section`
  padding: 72px 0 0;

  &:last-of-type {
    padding-bottom: 72px;
  }

  @media (max-width: 590px) {
    padding-top: 48px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 24px;

  @media (max-width: 590px) {
    font-size: 28px;
  }
`;

export const Body = styled.p`
  margin: 0 0 16px;
  font-size: 18px;
  line-height: 1.55;
  max-width: 720px;
`;

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 32px 0 0;

  @media (max-width: 590px) {
    grid-template-columns: 1fr;
  }
`;

export const Fact = styled.div`
  border: 1px solid #d9dce5;
  border-radius: 12px;
  padding: 20px;

  dt {
    font-size: 36px;
    font-weight: 500;
    color: #213ed7;
  }

  dd {
    margin: 4px 0 0;
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const Shot = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid #d9dce5;
  border-radius: 12px;
`;

export const Frame = styled.iframe`
  display: block;
  width: 100%;
  height: ${({ $height }) => $height}px;
  margin-top: 8px;
  border: 1px solid #d9dce5;
  border-radius: 12px;

  @media (max-width: 590px) {
    height: ${({ $mobileHeight }) => $mobileHeight}px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style: disc;
  font-size: 18px;
  line-height: 1.55;

  li + li {
    margin-top: 8px;
  }
`;

export const Terms = styled.p`
  margin: 20px 0 0;
  font-size: 18px;
  font-weight: 600;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9dce5;
  border-radius: 12px;
  padding: 24px;

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    margin: 0 0 16px;
    font-size: 16px;
    line-height: 1.45;
  }

  ul {
    margin: 0 0 20px;
    padding-left: 18px;
    list-style: disc;
    font-size: 16px;
    line-height: 1.45;
    flex-grow: 1;
  }

  li + li {
    margin-top: 6px;
  }
`;

export const CardTerms = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  border-top: 1px solid #d9dce5;
  padding-top: 16px;
  font-weight: 600;
`;

export const ProofLink = styled.a`
  display: block;
  border: 1px solid #d9dce5;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: #213ed7;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.45;
  }
`;

export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.45;
  }
`;

export const ContactSection = styled.section`
  background: linear-gradient(110deg, #213ed7 0%, #4456d6 55%, #7d5fc0 100%);
  color: #fff;
  padding: 72px 0;

  @media (max-width: 590px) {
    padding: 48px 0;
  }
`;

export const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

export const PrimaryAction = styled.a`
  background: #fff;
  color: #0c0e15;
  border-radius: 999px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;
  overflow-wrap: anywhere;

  &:hover {
    background: #d6dcff;
  }
`;

export const SecondaryAction = styled.a`
  border: 1px solid #fff;
  border-radius: 999px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background: #1c2130;
  }
`;

export const Foot = styled.footer`
  background: #0c0e15;
  color: #9aa1b1;
  border-top: 1px solid #252a38;
  padding: 24px 0;
  font-size: 14px;
`;
