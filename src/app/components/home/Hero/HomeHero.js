import React from "react";
import StyledLink from "../../common/link/StyledLink";
import homeData from "../../../data/home.json";
import {
  HeroSection,
  VideoContainer,
  Container,
  Title,
  WhiteLine,
  HeroContent,
  LinksWrapper,
  CompaniesWrapper,
  HeroSectionContentWrapper,
  CompaniesTitle,
  CompaniesList,
  CompanyItem,
} from "./HomeHero.styles";

const HomeHero = () => {
  const { title, description, links, trusted, companies, heroVideo } =
    homeData.hero;

  return (
    <HeroSection id="main-content">
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={`/assets/${heroVideo}`} type="video/mp4" />
        </video>
      </VideoContainer>
      <Container className="container">
        <HeroSectionContentWrapper>
          <Title>{title}</Title>
          <WhiteLine />
          <HeroContent>{description}</HeroContent>
          <LinksWrapper>
            {links.map((link) => {
              const isAnchorLink = link.href.startsWith("#");
              const targetId = isAnchorLink ? link.href.slice(1) : null;
              return (
                <StyledLink
                  key={link.text}
                  href={link.href}
                  type={link.type}
                  onClick={
                    isAnchorLink
                      ? (e) => handleSmoothScroll(e, targetId)
                      : undefined
                  }
                >
                  {link.text}
                </StyledLink>
              );
            })}
          </LinksWrapper>
        </HeroSectionContentWrapper>
        <CompaniesWrapper>
          <CompaniesTitle>{trusted}</CompaniesTitle>
          <CompaniesList>
            {companies.map((logo) => (
              <CompanyItem key={logo}>
                <img
                  src={`/assets/companies-logo/${logo}`}
                  alt={`Logo of ${logo.split(".")[0]}`}
                />
              </CompanyItem>
            ))}
          </CompaniesList>
        </CompaniesWrapper>
      </Container>
    </HeroSection>
  );
};

export default HomeHero;
