import styled from "styled-components";
import Link from "next/link";

export const ink = "#22211d";
export const paper = "#f5f1e8";
export const peach = "#f1c6a0";
export const brick = "#b5583d";
export const muted = "#6c675c";
export const moss = "#30564a";
export const contentWidth = "1400px";

export const Root = styled.div`
  background: ${paper};
  color: ${ink};
  font-family: var(--font-sans), "Helvetica Neue", Arial, sans-serif;

  a:focus-visible {
    outline: 2px solid ${brick};
    outline-offset: 3px;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-serif), Georgia, serif;
    font-weight: 400;
  }
`;

export const Hero = styled.section`
  position: relative;

  > div {
    padding-top: min(7vh, 70px);
    padding-bottom: 24px;
  }

  @media (max-width: 790px) {
    > div {
      padding-top: 16px;
    }
  }
`;

export const Field = styled.div`
  --art: 100vw;
  background-image: url("${({ $scene }) => $scene}"),
    linear-gradient(
      ${paper} calc(var(--art) * 0.2),
      ${moss} calc(var(--art) * 0.2)
    );
  background-repeat: no-repeat;
  background-size: var(--art) auto, 100% 100%;
  background-position: 50% 0, 0 0;
  border-radius: 0 0 28px 28px;

  @media (max-width: 790px) {
    --art: 210vw;
  }
`;

export const Intro = styled.div`
  padding: min(12.5vh, 124px) 24px 8px;
  text-align: center;

  p {
    margin: 14px auto 0;
    max-width: 560px;
    text-wrap: balance;
    font-size: clamp(17px, 1.35vw, 21px);
    line-height: 1.35;
    color: ${muted};
  }

  @media (max-width: 1000px) {
    padding-top: min(6.5vh, 64px);
  }

  @media (max-width: 790px) {
    padding: 16px 16px 20px;
  }
`;

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 14px 28px;
  background: rgba(245, 241, 232, 0.92);
  backdrop-filter: blur(10px);

  @media (max-width: 790px) {
    padding: 14px 16px;
  }
`;

export const Logo = styled(Link)`
  font-family: var(--font-serif), Georgia, serif;
  font-size: 26px;
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media (max-width: 790px) {
    font-size: 21px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  font-weight: 500;

  a:not([data-pill]):hover,
  a[aria-current="page"] {
    color: ${brick};
  }

  @media (max-width: 790px) {
    gap: 12px;
    font-size: 15px;
  }
`;

// Inline next to the button on desktop, a panel under the bar on a phone.
export const NavLinks = styled.div`
  display: contents;

  @media (max-width: 790px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    padding: 4px 16px 16px;
    background: ${paper};
    border-bottom: 1px solid rgba(34, 33, 29, 0.16);
    font-size: 19px;

    a {
      padding: 12px 0;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  padding: 8px 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${brick};
    outline-offset: 3px;
  }

  @media (max-width: 790px) {
    display: block;
  }
`;

export const Pill = styled.a`
  background: ${ink};
  color: ${paper};
  border-radius: 999px;
  padding: 12px 22px;
  font-weight: 500;
  white-space: nowrap;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${brick};
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(40px, min(4.6vw, 8.8vh), 84px);
  line-height: 1.06;
  letter-spacing: -0.025em;
`;

export const HeroCta = styled(Pill)`
  display: inline-block;
  margin-top: 26px;
  padding: 15px 28px;
  font-size: 18px;
`;

export const Credentials = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  margin: 0;
  padding: 40px 0;
  border-bottom: 1px solid rgba(34, 33, 29, 0.16);

  dt {
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(28px, 2.7vw, 42px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  dd {
    margin: 8px 0 0;
    font-size: 17px;
    line-height: 1.3;
    color: ${muted};
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Panel = styled.section`
  padding: calc(var(--art) * 0.415) 32px 40px;
  border-radius: 0 0 28px 28px;
  color: ${paper};

  @media (max-width: 790px) {
    padding: calc(var(--art) * 0.415) 8px 8px;
  }
`;

// One Voltiq story: a single box under the clients' problems.
export const VoltiqBox = styled.article`
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: clamp(32px, 4vw, 64px) clamp(16px, 3vw, 48px);
  border-radius: 28px;
  background: ${paper};
  color: ${ink};
  scroll-margin-top: 84px;

  @media (max-width: 790px) {
    padding: 28px 12px 20px;
    border-radius: 20px;
  }
`;

export const BoxFoot = styled.div`
  margin-top: 44px;
  text-align: center;

  @media (max-width: 790px) {
    margin-top: 32px;
  }
`;

export const PanelHead = styled.div`
  text-align: center;
  margin-bottom: 40px;

  small {
    display: block;
    margin-bottom: 14px;
    font-size: 15px;
    font-weight: 500;
    color: ${brick};
  }

  h2 {
    font-size: clamp(30px, 3.2vw, 50px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  @media (max-width: 790px) {
    margin-bottom: 24px;
    padding: 0 4px;

    h2 br {
      display: none;
    }
  }
`;

export const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Stage = styled.div`
  display: flex;
  align-items: center;
  padding: clamp(16px, 2.5vw, 36px);
  overflow: hidden;
  border-radius: 14px;
  background: url("/assets/art/paint-sky.webp") center / cover;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 12px 44px rgba(34, 33, 29, 0.28);
  }
`;

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 32px clamp(16px, 3vw, 48px);

  small {
    font-size: 15px;
    font-weight: 500;
    color: ${muted};
  }

  h3 {
    font-size: clamp(32px, 3.2vw, 50px);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.45;
  }
`;

export const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 10px 0;

  dt {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 38px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  dd {
    margin: 4px 0 0;
    font-size: 15px;
    line-height: 1.3;
    color: ${muted};
  }
`;

export const Foot = styled.footer`
  position: relative;
  overflow: hidden;
  margin-top: 56px;
  background: ${moss};
  color: ${paper};

  @media (max-width: 790px) {
    margin-top: 32px;
  }
`;

// The painting fades into the page colour at the top and into moss at the bottom.
export const FootScene = styled.div`
  overflow: hidden;
  background: ${paper};

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 790px) {
    img {
      width: 240vw;
      max-width: none;
      margin-left: -9vw;
    }
  }
`;

export const FootRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px 110px;
  text-align: center;

  h2 {
    max-width: 960px;
    text-wrap: balance;
    font-size: clamp(36px, min(4.6vw, 8.8vh), 76px);
    line-height: 1.06;
    letter-spacing: -0.025em;
  }

  > a {
    margin-top: 32px;
    padding: 16px 30px;
    background: ${paper};
    color: ${ink};
    font-size: 19px;
  }

  > a:hover {
    background: ${peach};
  }

  @media (max-width: 790px) {
    padding: 24px 16px 64px;

    > a {
      font-size: 17px;
    }
  }
`;

export const FootBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  align-items: center;
  padding: 20px 28px 24px;
  border-top: 1px solid rgba(245, 241, 232, 0.2);
  font-size: 15px;

  > span {
    color: rgba(245, 241, 232, 0.72);
  }

  @media (max-width: 790px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
    padding: 20px 16px 24px;
  }
`;

export const FootNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 28px;
  font-weight: 500;

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Logos = styled.div`
  padding: 56px 16px 24px;
  text-align: center;

  small {
    display: block;
    margin-bottom: 24px;
    font-size: 15px;
    font-weight: 500;
    opacity: 0.8;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px 56px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    height: auto;
    max-height: 24px;
    width: auto;
    filter: brightness(0) invert(1);
    opacity: 0.85;
  }
`;

export const Section = styled.section`
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 790px) {
    padding: 0 16px;
  }
`;

export const SectionHead = styled.h2`
  max-width: 900px;
  margin: 0 auto 56px;
  text-align: center;
  font-size: clamp(34px, 4vw, 60px);
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 790px) {
    margin-bottom: 36px;
  }
`;

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  > :first-child {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(24px, 4vw, 64px);
    align-items: center;
  }

  > :first-child h3 {
    font-size: clamp(32px, 3.2vw, 50px);
  }

  @media (max-width: 960px) {
    > :first-child {
      display: flex;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Shot = styled.figure`
  display: flex;
  align-items: center;
  margin: 0;
  overflow: hidden;
  border-radius: 14px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

// Which offer level a project is an example of.
export const LevelTag = styled.mark`
  display: inline-block;
  align-self: flex-start;
  width: fit-content;
  margin: 0 0 8px;
  padding: 4px 11px;
  border-radius: 999px;
  background: ${peach};
  color: ${ink};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
`;

export const WorkCard = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 22px;
  background: #fbf8f1;
  transition: transform 0.25s ease-out;

  &:hover {
    transform: translateY(-4px);
  }

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 12px 12px;
  }

  small {
    font-size: 14px;
    font-weight: 500;
    color: ${muted};
  }

  h3 {
    margin: 10px 0 12px;
    font-size: clamp(27px, 2.3vw, 34px);
    line-height: 1.12;
    letter-spacing: -0.018em;
  }

  p {
    margin: 0 0 20px;
    flex-grow: 1;
    font-size: 17px;
    line-height: 1.45;
  }

  span {
    font-weight: 600;
    font-size: 17px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const Packages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Package = styled.article`
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 20px;
  background: ${paper};
  color: ${ink};

  h3 {
    font-size: clamp(28px, 2.5vw, 36px);
    line-height: 1.1;
    letter-spacing: -0.018em;
  }

  p {
    margin: 12px 0 20px;
    font-size: 18px;
    line-height: 1.4;
  }

  ul {
    margin: 0 0 24px;
    padding: 0 0 0 18px;
    flex-grow: 1;
    list-style: disc;
    font-size: 17px;
    line-height: 1.45;
    color: ${muted};
  }

  li + li {
    margin-top: 6px;
  }

  > img {
    display: block;
    width: 100%;
    height: clamp(190px, 18vw, 270px);
    object-fit: contain;
    margin-bottom: 20px;
  }

  strong {
    font-size: 20px;
    font-weight: 600;
  }

  span {
    font-size: 16px;
    color: ${muted};
  }
`;

// Steps of working together, read left to right: a line leads from each icon to the next.
export const Timeline = styled.ol`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    text-align: center;
  }

  li:not(:last-child)::before {
    content: "";
    position: absolute;
    top: 44px;
    left: calc(50% + 60px);
    right: calc(28px - 50%);
    border-top: 2px dotted rgba(34, 33, 29, 0.32);
  }

  img {
    display: block;
    width: 88px;
    height: 88px;
    object-fit: contain;
    margin: 0 auto 20px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: clamp(25px, 2vw, 30px);
    line-height: 1.12;
    letter-spacing: -0.015em;
  }

  p {
    max-width: 380px;
    margin-inline: auto;
    text-wrap: balance;
    font-size: 17px;
    line-height: 1.4;
  }

  @media (max-width: 900px) {
    grid-auto-flow: row;
    gap: 24px;

    li {
      display: grid;
      grid-template-columns: 72px minmax(0, 1fr);
      column-gap: 16px;
      text-align: left;
    }

    li:not(:last-child)::before {
      display: none;
    }

    img {
      grid-row: 1 / span 2;
      width: 72px;
      height: 72px;
      margin: 0;
    }

    p {
      max-width: none;
      margin-inline: 0;
      text-wrap: wrap;
    }
  }
`;

export const StepsSection = styled.section`
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 110px 32px;

  @media (max-width: 790px) {
    padding: 72px 16px;
  }
`;

export const VoiceSection = styled.section`
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 110px 32px;

  @media (max-width: 790px) {
    padding: 72px 16px;
  }
`;

export const VoiceLabel = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0;
  color: ${muted};

  && {
    font-family: var(--font-sans), "Helvetica Neue", Arial, sans-serif;
  }

  @media (max-width: 790px) {
    margin-bottom: 28px;
  }
`;

export const VoiceTrack = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  outline-offset: 4px;

  &::-webkit-scrollbar {
    display: none;
  }

  article {
    flex: 0 0 100%;
    min-width: 0;
    padding: 0 clamp(0px, 6vw, 120px);
    scroll-snap-align: center;
    scroll-snap-stop: always;
    text-align: center;
  }

  img {
    display: block;
    height: clamp(130px, 12vw, 180px);
    width: auto;
    margin: 0 auto 32px;
  }

  blockquote {
    margin: 0 auto 28px;
    max-width: 1100px;
    text-wrap: balance;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(32px, 4.2vw, 64px);
    line-height: 1.12;
    letter-spacing: -0.02em;
  }

  p {
    margin-bottom: 12px;
    font-size: 17px;
    line-height: 1.35;
    color: ${muted};
  }

  strong {
    font-weight: 600;
    color: ${ink};
  }

  a {
    padding-bottom: 2px;
    border-bottom: 1px solid currentColor;
    font-size: 16px;
    font-weight: 500;
  }

  a:hover {
    color: ${brick};
  }
`;

export const VoiceNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 44px;

  > button {
    width: 48px;
    height: 48px;
    border: 1px solid rgba(34, 33, 29, 0.24);
    border-radius: 50%;
    background: none;
    color: ${ink};
    font: inherit;
    font-size: 19px;
    cursor: pointer;
    transition: background 0.2s ease-out, color 0.2s ease-out;
  }

  > button:hover:not(:disabled) {
    background: ${ink};
    color: ${paper};
  }

  > button:disabled {
    opacity: 0.3;
    cursor: default;
  }

  span {
    display: flex;
  }

  span button {
    padding: 8px 6px;
    border: 0;
    background: none;
    cursor: pointer;
  }

  span button::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(34, 33, 29, 0.24);
  }

  span button[aria-current="true"]::before {
    background: ${brick};
  }
`;

export const Symptoms = styled.section`
  max-width: ${contentWidth};
  margin: 0 auto 110px;
  padding-top: 40px;

  > div {
    text-align: center;
  }

  h2 {
    font-size: clamp(36px, 4.4vw, 68px);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  > div > p {
    margin: 16px auto 52px;
    max-width: 560px;
    text-wrap: balance;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.4;
  }

  @media (max-width: 900px) {
    margin-bottom: 64px;
    padding: 24px 8px 0;

    > div > p {
      margin-bottom: 32px;
    }
  }
`;

// Four equal painted bubbles read left to right as one conversation. The text
// stays live and the art stretches a little to fit.
export const ProblemLines = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0 0 64px;
  list-style: none;
  color: ${ink};

  li {
    padding: 32px 30px 68px;
    background: 0 0 / 100% 100% no-repeat;
  }

  li:nth-child(1) {
    background-image: url("/assets/art/bubble-1.webp");
  }

  li:nth-child(2) {
    background-image: url("/assets/art/bubble-2.webp");
    transform: translateY(48px);
  }

  li:nth-child(3) {
    background-image: url("/assets/art/bubble-3.webp");
    transform: translateY(14px);
  }

  li:nth-child(4) {
    background-image: url("/assets/art/bubble-4.webp");
    transform: translateY(62px);
  }

  small {
    display: block;
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 500;
    color: ${muted};
  }

  p {
    margin: 0;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(21px, 1.75vw, 27px);
    line-height: 1.2;
    letter-spacing: -0.012em;
    text-wrap: balance;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-bottom: 32px;

    li:nth-child(n) {
      transform: none;
    }

    li:nth-child(even) {
      transform: translateY(28px);
    }
  }

  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 0;

    li {
      width: 92%;
      padding: 24px 28px 52px;
    }

    li:nth-child(even) {
      align-self: flex-end;
      transform: none;
    }
  }
`;

export const Compare = styled.section`
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: clamp(110px, 11vw, 170px) 32px;

  h2 {
    margin-bottom: clamp(56px, 5.5vw, 84px);
  }

  @media (max-width: 790px) {
    padding: 80px 16px;

    h2 {
      margin-bottom: 36px;
    }
  }
`;

// Every row is two lines tall, so a line break does not change its height.
export const CompareTable = styled.div`
  --row-size: clamp(19px, 1.55vw, 23px);
  --row-pad: clamp(32px, 3vw, 44px);

  overflow: hidden;
  border-radius: 24px;

  > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  > div > * {
    margin: 0;
    padding: var(--row-pad) clamp(24px, 4vw, 64px);
    border-top: 1px solid rgba(34, 33, 29, 0.1);
    font-size: var(--row-size);
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  p {
    display: flex;
    align-items: center;
    gap: 22px;
    min-height: calc(var(--row-size) * 2.6 + var(--row-pad) * 2);
    text-wrap: balance;
  }

  p img {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    object-fit: contain;
  }

  > div > :first-child {
    background: #e9e4d8;
    color: ${muted};
  }

  > div > :last-child {
    background: ${moss};
    color: ${paper};
    border-top-color: rgba(245, 241, 232, 0.16);
  }

  [data-head] > * {
    padding-top: 28px;
    padding-bottom: 28px;
    border-top: 0;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0;
  }

  @media (max-width: 590px) {
    > div {
      grid-template-columns: minmax(0, 1fr);
    }

    > div > * {
      padding: 24px 20px;
    }

    p {
      min-height: 0;
    }

    [data-head] {
      display: none;
    }
  }
`;

export const About = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 5fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  max-width: calc(${contentWidth} + 64px);
  margin: 0 auto;
  padding: 0 32px;
  scroll-margin-top: 104px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 16px;
  }
`;

export const Portrait = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 24px;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  small {
    font-size: 15px;
    font-weight: 500;
    color: ${muted};
  }

  h2 {
    font-size: clamp(34px, 4vw, 60px);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  > p {
    margin: 0;
    max-width: 620px;
    font-size: clamp(18px, 1.5vw, 21px);
    line-height: 1.42;
  }
`;

export const AboutCredentials = styled(Credentials)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 24px;
  width: 100%;
  padding: 24px 0;
  border-top: 1px solid rgba(34, 33, 29, 0.16);
  border-bottom: 1px solid rgba(34, 33, 29, 0.16);

  dt {
    font-size: clamp(24px, 2vw, 30px);
  }

  dd {
    font-size: 15px;
  }
`;

export const Questions = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 110px 32px 0;

  details {
    border-top: 1px solid rgba(34, 33, 29, 0.18);
  }

  details:last-child {
    border-bottom: 1px solid rgba(34, 33, 29, 0.18);
  }

  summary {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 24px 4px;
    list-style: none;
    cursor: pointer;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(23px, 2.1vw, 31px);
    line-height: 1.18;
    letter-spacing: -0.012em;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    flex-shrink: 0;
    font-family: var(--font-sans), sans-serif;
  }

  details[open] summary::after {
    content: "–";
  }

  summary:hover {
    color: ${brick};
  }

  summary:focus-visible {
    outline: 2px solid ${brick};
    outline-offset: 2px;
  }

  p {
    margin: -6px 4px 26px;
    max-width: 760px;
    font-size: 18px;
    line-height: 1.45;
    color: ${muted};
  }

  @media (max-width: 790px) {
    padding: 72px 16px 0;
  }
`;

export const FootNote = styled.p`
  margin: 20px 0 0;
  max-width: 620px;
  text-wrap: balance;
  font-size: clamp(18px, 1.5vw, 21px);
  line-height: 1.4;
  color: rgba(245, 241, 232, 0.82);
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -60px;
  left: 16px;
  z-index: 30;
  padding: 10px 16px;
  border-radius: 8px;
  background: ${ink};
  color: ${paper};

  &:focus {
    top: 10px;
  }
`;
