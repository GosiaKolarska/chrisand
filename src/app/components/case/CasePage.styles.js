import styled from "styled-components";

export const CaseHero = styled.section`
  background: #0c0e15;
  color: #fff;
  padding: 190px 0 0;

  @media (max-width: 590px) {
    padding-top: 130px;
  }
`;

export const Wrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 590px) {
    padding: 0 16px;
  }
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 24px;
  font-size: 16px;
  color: #c7ccda;

  &:hover {
    color: #fff;
  }
`;

export const Title = styled.h1`
  max-width: 860px;
  font-size: 60px;
  line-height: 1.08;
  font-weight: 500;
  letter-spacing: -0.015em;

  @media (max-width: 590px) {
    font-size: 36px;
  }
`;

export const Summary = styled.p`
  margin: 24px 0 0;
  max-width: 720px;
  font-size: 22px;
  line-height: 1.45;
  color: #d6d9e2;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 40px 0 0;
  padding: 24px 0 56px;
  border-top: 1px solid #292f49;

  dt {
    font-size: 14px;
    color: #9fb0ff;
    margin-bottom: 6px;
  }

  dd {
    margin: 0;
    font-size: 17px;
    line-height: 1.35;
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(0, 1fr);
    padding-bottom: 40px;
  }
`;

export const CoverBand = styled.div`
  background: linear-gradient(180deg, #0c0e15 0 50%, #fff 50% 100%);
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(12, 14, 21, 0.28);
`;

export const Body = styled.div`
  background: #fff;
  color: #0c0e15;
  padding-bottom: 96px;

  @media (max-width: 590px) {
    padding-bottom: 56px;
  }
`;

export const Block = styled.section`
  padding-top: 72px;

  @media (max-width: 590px) {
    padding-top: 48px;
  }
`;

export const BlockTitle = styled.h2`
  font-size: 36px;
  line-height: 1.18;
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: 590px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  margin: 0;
  max-width: 720px;
  font-size: 20px;
  line-height: 1.5;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const StepImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 28px;
  border: 1px solid #e3e5ec;
  border-radius: 16px;
`;

export const Results = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 16px;
  margin: 8px 0 0;
`;

export const Result = styled.div`
  padding: 24px;
  background: #f3f4fa;
  border-radius: 16px;

  dt {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 500;
    color: #213ed7;
  }

  dd {
    margin: 8px 0 0;
    font-size: 16px;
    line-height: 1.35;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 64px;
  padding-top: 28px;
  border-top: 1px solid #d9dce5;
  font-size: 18px;
  font-weight: 500;

  a {
    border-bottom: 2px solid currentColor;
    padding-bottom: 4px;
  }

  a:hover {
    color: #213ed7;
  }
`;
