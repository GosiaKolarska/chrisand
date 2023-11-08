import React from "react";
import StyledLink from "../../common/link/StyledLink";
import homeData from "../../../data/home.json";
import {
  ColumnsSection,
  ColumnsSectionContainer,
  ColumnsSectionTitle,
  ColumnsSectionTitleList,
  ColumnsSectionTitleListItem,
  ColumnsSectionTitleListItemInner,
  ColumnsSectionTitleListItemWrapper,
  ColumnsSectionTitleListItemImage,
  ColumnsSectionTitleListItemInnerTitle,
  ColumnsSectionTitleListItemInnerParagraph,
} from "./HomeColumns.styles";

const HomeColumns = () => {
  const { title, columns } = homeData.stories;

  return (
    <ColumnsSection>
      <ColumnsSectionContainer className="container">
        <ColumnsSectionTitle>{title}</ColumnsSectionTitle>
        <ColumnsSectionTitleList>
          {columns.map((column, index) => (
            <ColumnsSectionTitleListItem key={column.headline + index}>
              <ColumnsSectionTitleListItemWrapper>
                <ColumnsSectionTitleListItemImage
                  src={`/assets/${column.image}`}
                  alt={`Story about ${column.headline}`}
                />
                <ColumnsSectionTitleListItemInner>
                  <ColumnsSectionTitleListItemInnerTitle>
                    {column.headline}
                  </ColumnsSectionTitleListItemInnerTitle>
                  <ColumnsSectionTitleListItemInnerParagraph>
                    {column.description}
                  </ColumnsSectionTitleListItemInnerParagraph>
                  <StyledLink
                    href={column.href}
                    type={column.type}
                    aria-label={`Read more about ${column.headline}`}
                  >
                    {column.text}
                  </StyledLink>
                </ColumnsSectionTitleListItemInner>
              </ColumnsSectionTitleListItemWrapper>
            </ColumnsSectionTitleListItem>
          ))}
        </ColumnsSectionTitleList>
      </ColumnsSectionContainer>
    </ColumnsSection>
  );
};

export default HomeColumns;
