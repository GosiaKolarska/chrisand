import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";
import { useContent } from "../../../i18n/content";

const Footer = () => {
  const { global: globalData } = useContent();
  const { copy } = globalData.footer;
  return (
    <FooterContainer>
      <FooterText>{copy}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
