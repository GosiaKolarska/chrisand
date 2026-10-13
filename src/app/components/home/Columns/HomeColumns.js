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
  ColumnsSectionTitleListItemInnerMeta,
} from "./HomeColumns.styles";
import Image from "next/image";

const HomeColumns = () => {
  const { title, columns } = homeData.stories;

  return (
    <ColumnsSection id="case-studies">
      <ColumnsSectionContainer className="container">
        <ColumnsSectionTitle>{title}</ColumnsSectionTitle>
        <ColumnsSectionTitleList>
          {columns.map((column, index) => (
            <ColumnsSectionTitleListItem key={column.headline + index}>
              <ColumnsSectionTitleListItemWrapper>
                <Image
                  src={`/assets/${column.image}`}
                  alt={column.headline}
                  width={column.width || 480}
                  height={column.height || 430}
                />
                <ColumnsSectionTitleListItemInner>
                  {column.meta && (
                    <ColumnsSectionTitleListItemInnerMeta>
                      {column.meta}
                    </ColumnsSectionTitleListItemInnerMeta>
                  )}
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
