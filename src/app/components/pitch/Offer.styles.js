import styled from "styled-components";
import { Field, Packages, contentWidth, paper } from "../site/Site.styles";

// The offer scene is framed differently from the home scene, 1672 x 1315.
export const OfferField = styled(Field)`
  background-position: 50% 0, 0 0;
  color: ${paper};
  padding: calc(var(--art) * 0.27) 32px 56px;

  @media (max-width: 790px) {
    --art: 240vw;
    background-position: 30% 0, 0 0;
    padding: calc(var(--art) * 0.285) 8px 16px;
  }
`;

export const FieldHead = styled.h2`
  max-width: 900px;
  margin: 0 auto 48px;
  text-align: center;
  font-size: clamp(36px, 4.4vw, 68px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  scroll-margin-top: 104px;

  @media (max-width: 790px) {
    margin-bottom: 32px;
    padding: 0 8px;
  }
`;

export const OfferPackages = styled(Packages)`
  max-width: ${contentWidth};
  margin: 0 auto;
`;

export const PriceNote = styled.p`
  max-width: 640px;
  margin: 40px auto 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.45;

  @media (max-width: 790px) {
    margin-top: 28px;
    padding: 0 8px;
  }
`;
