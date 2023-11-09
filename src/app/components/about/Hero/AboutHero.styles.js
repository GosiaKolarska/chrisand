import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  z-index: -1;

  video {
    width: 100%;
    height: auto;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      0deg,
      #0c0e15 35.07%,
      rgba(12, 14, 21, 0) 84.78%
    );
    pointer-events: none;
  }

  @media (max-width: 790px) {
    width: 100%;

    video {
      opacity: 0.4;
    }
  }
`;

export const LeftContent = styled.div`
  padding-top: 180px;

  @media (max-width: 590px) {
    padding-top: 145px;
  }
`;

export const FirstSection = styled.div`
  max-width: 700px;

  @media (max-width: 790px) {
    padding: 40px 32px 77px;
    max-width: 100%;
  }

  @media (max-width: 590px) {
    padding: 0px 32px 70px;
  }
`;

export const FirstSectionTtile = styled.h1`
  color: white;
  font-size: 62px;
  font-weight: 600;
  line-height: 70px;
  padding-bottom: 47px;

  @media (max-width: 590px) {
    font-size: 42px;
    padding-bottom: 19px;
  }
`;

export const FirstSectionParagraph = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (max-width: 590px) {
    font-size: 22px;
    line-height: 29px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 70px 0 75px;
  column-gap: 80px;
  color: white;

  a {
    text-decoration-line: underline;
  }

  @media (max-width: 790px) {
    padding: 0 32px 75px;
    column-gap: 40px;
  }

  @media (max-width: 590px) {
    padding: 0 32px 33px;
  }
`;

export const ListItem = styled.li`
  max-width: 440px;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  padding: 20px 24px 23px 0;
  align-items: flex-start;
  gap: 6px;
  border-top: 1px solid #292f49;

  &:nth-child(3),
  &:nth-child(4) {
    border-bottom: 1px solid #292f49;
  }

  @media (max-width: 790px) {
    max-width: 320px;
  }

  @media (max-width: 590px) {
    max-width: 100%;
    font-size: 18px;
    padding: 22px 24px 22px 0;
  }
`;

export const ButtonMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 98px;
  transition: all 0.3s;
  height: auto;

  &.hide {
    opacity: 0;
    padding: 0;
    height: 0;
  }

  @media (max-width: 790px) {
    padding-bottom: 50px;
  }
`;
