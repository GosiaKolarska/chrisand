import styled from "styled-components";

export const SectionVideo = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 60px;

  @media (max-width: 790px) {
    padding: 0 32px 20px;
  }
`;

export const VideoTitle = styled.h2`
  color: white;
  text-align: left;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  max-width: 550px;
  margin: 0;
  padding: 110px 0;

  @media (max-width: 590px) {
    font-size: 32px;
    line-height: 40px;
    padding: 57px 0 83px;
  }
`;

export const VideoColumns = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 790px) {
    gap: 60px;
  }

  @media (max-width: 590px) {
    flex-direction: column-reverse;
    gap: 22px;
  }
`;

export const LeftColumn = styled.div`
  max-width: 440px;
  width: 100%;
`;

export const RightColumn = styled.div`
  width: 100%;
  margin-top: -26px;

  li {
    display: none;

    &.visible {
      display: block;
    }
  }

  iframe {
    max-height: 360px;
    border-radius: 12px 12px 12px 0px;
  }

  @media (max-width: 790px) {
    iframe {
      max-height: 290px;
    }
  }

  @media (max-width: 590px) {
    iframe {
      max-height: 270px;
    }
  }
`;

export const VideoTabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const VideoTabItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 24px;
  transition: 0.2s;

  @media (max-width: 768px) {
    padding: 7px 6px;
  }
`;

export const VideoTabItemContentTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const VideoTabItemContentParagraph = styled.h4`
  color: #6b7394;
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const VideoTabItemHr = styled.hr`
  border-color: #292f49;
`;

export const VideoTabItem = styled.li`
  padding: 0 10px;
  cursor: pointer;
  border-radius: 12px;
  color: #fff;
  background-color: unset;

  svg {
    margin-right: 23px;
    transition: 0.3s;
    circle {
      transition: 0.3s;
      fill: unset;
      stroke: #fff;
    }
    path {
      transition: 0.3s;
    }
  }

  &:hover {
    background-color: #292f49;

    & ${VideoTabItemInner} {
      transform: translateX(3px);
    }

    svg {
      circle {
        stroke: #213ed7;
        fill: unset;
      }
      path {
        fill: #213ed7;
      }
    }
  }

  &.active {
    background-color: #fff;

    ${VideoTabItemInner} {
      transform: translateX(3px);
    }

    ${VideoTabItemContentTitle} {
      color: #0c0e15;
    }

    ${VideoTabItemContentParagraph} {
      color: #0c0e15;
    }

    svg {
      circle {
        fill: #213ed7;
        stroke: #213ed7;
      }
      path {
        fill: #fff;
      }
    }

    ${VideoTabItemHr} {
      border-color: transparent;
    }
  }

  @media (max-width: 768px) {
    svg {
      margin-right: 12px;
    }
  }
`;

export const VideoTabItemContent = styled.div``;
