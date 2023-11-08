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

  return (
    <HeroSection>
      <Container className="container">
        <VideoContainer>
          <video autoPlay loop muted>
            <source src="/assets/about-video.mp4" type="video/mp4" />
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
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
          <ButtonMore>
            <StyledButton onClick={toggleBio} color="light">
              {isBioVisible ? "Hide full bio" : "Show full bio"}
            </StyledButton>
          </ButtonMore>
        </LeftContent>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;
