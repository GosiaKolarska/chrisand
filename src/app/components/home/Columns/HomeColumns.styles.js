import styled from "styled-components";

export const ColumnsSection = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 85px 0 76px;

  @media (max-width: 790px) {
    padding: 85px 32px 76px;
  }

  @media (max-width: 590px) {
    padding: 54px 32px 40px;
  }
`;

export const ColumnsSectionContainer = styled.div``;

export const ColumnsSectionTitle = styled.h2`
  color: #111827;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  margin-bottom: 22px;

  @media (max-width: 590px) {
    font-size: 32px;
  }
`;

export const ColumnsSectionTitleList = styled.ul`
  padding: 0 0 88px;

  @media (max-width: 590px) {
    padding: 0;
  }
`;

export const ColumnsSectionTitleListItem = styled.li`
  padding: 65px 0 50px;

  &:nth-child(odd) {
    article {
      flex-direction: row;
    }

    div {
      padding-left: 80px;
    }
  }

  &:nth-child(even) {
    article {
      flex-direction: row-reverse;
    }

    div {
      padding-right: 80px;
    }
  }

  @media (max-width: 590px) {
    padding: 24px 0 30px;

    &:nth-child(odd) {
      article {
        flex-direction: column;
      }
      div {
        padding-left: 0;
      }
    }

    &:nth-child(even) {
      article {
        flex-direction: column;
      }
      div {
        padding-right: 0;
      }
    }
  }
`;
export const ColumnsSectionTitleListItemWrapper = styled.article`
  display: flex;
  align-items: center;
`;
export const ColumnsSectionTitleListItemImage = styled.img`
  max-width: 480px;

  @media (max-width: 790px) {
    max-width: 50%;
  }

  @media (max-width: 590px) {
    max-width: 100%;
  }
`;

export const ColumnsSectionTitleListItemInner = styled.div`
  @media (max-width: 590px) {
    padding-top: 27px;
  }
`;

export const ColumnsSectionTitleListItemInnerTitle = styled.h3`
  color: #111;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 38px;

  @media (max-width: 590px) {
    flex-direction: column;
    font-size: 24px;
    padding-bottom: 29px;
    line-height: 30px;
  }
`;

export const ColumnsSectionTitleListItemInnerParagraph = styled.p`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 25px;

  @media (max-width: 590px) {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 10px;
  }
`;
