import React from "react";
import aboutContent from "../../../data/about.json";
import StyledButton from "../../common/button/StyledButton";
import {
  HeroSection,
  Container,
  VideoContainer,
  LeftContent,
  FirstSection,
  FirstSectionTtile,
  FirstSectionParagraph,
  List,
  ListItem,
  ButtonMore,
} from "./AboutHero.styles";

const AboutHero = ({ isBioVisible, setIsBioVisible }) => {
  const { abouthero } = aboutContent;

  const toggleBio = () => {
    setIsBioVisible(!isBioVisible);
  };

  function convertMarkdownLinksToHTML(text) {
    const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    return text.replace(
      markdownLinkRegex,
      (match, label, url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
    );
  }

  return (
    <HeroSection className="scrollHero">
      <Container className="container">
        <VideoContainer onClick={(e) => e.preventDefault()}>
          <img
            src={`/assets/${abouthero.heroVideoPoster}`}
            alt="Background image"
          />
        </VideoContainer>
        <LeftContent>
          <FirstSection>
            <FirstSectionTtile>{abouthero.title}</FirstSectionTtile>
            <FirstSectionParagraph>
              {abouthero.description}
            </FirstSectionParagraph>
          </FirstSection>
          <List>
            {abouthero.list.map((item, index) => (
              <ListItem
                key={index}
                dangerouslySetInnerHTML={{
                  __html: convertMarkdownLinksToHTML(item),
                }}
              />
            ))}
          </List>
          <ButtonMore
            className={`button-transition ${isBioVisible ? "hide" : "show"}`}
          >
            <StyledButton onClick={toggleBio} color="light">
              Show full bio
            </StyledButton>
          </ButtonMore>
        </LeftContent>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;
