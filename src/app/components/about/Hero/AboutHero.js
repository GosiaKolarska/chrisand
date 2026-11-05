import React from "react";
import { useContent } from "../../../i18n/content";
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
  const { about: aboutContent, global: globalData } = useContent();
  const { abouthero } = aboutContent;
  const { ui } = globalData;

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
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label={ui.speakingVideo}
            role="img"
            poster={`/assets/${abouthero.heroVideoPoster}`}
          >
            <source src={`/assets/${abouthero.heroVideo}`} type="video/mp4" />
          </video>
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
              {ui.showBio}
            </StyledButton>
          </ButtonMore>
        </LeftContent>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;
