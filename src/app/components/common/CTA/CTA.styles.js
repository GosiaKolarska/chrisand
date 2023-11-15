import styled from "styled-components";

export const SectionCTA = styled.div`
  margin-top: 223px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 790px) {
    padding: 0 32px;
  }

  @media (max-width: 590px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 125px 0 128px;
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
  align-items: center;
  width: 100%;

  .CTA-link {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    border-bottom: 2px solid #fff;
    padding-bottom: 8px;
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;

    svg path {
      fill: #fff;
    }

    &:hover {
      color: #213ed7;
      border-bottom: 2px solid #213ed7;

      svg path {
        fill: #213ed7;
        transition: fill 0.2s;
      }
    }
  }

  @media (max-width: 590px) {
    padding: 140px 0 170px;
    border-top: unset;

    a span {
      font-size: 18px;
    }
    .CTA-link {
      font-size: 18px;
    }
  }
`;

export const CtaTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  padding-bottom: 30px;

  @media (max-width: 590px) {
    font-size: 42px;
    padding-bottom: 10px;
  }
`;
