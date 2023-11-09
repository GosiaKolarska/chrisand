import styled from "styled-components";

export const StyledHeader = styled.header`
  transition: all 0.1s ease-in-out;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: ${(props) => (props.$isScrolled ? "20px 0" : "40px 0")};
  background-color: ${(props) =>
    props.$isScrolled ? "#0C0E15" : "transparent"};

  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }

  @media (max-width: 790px) {
    padding: ;
    padding: ${(props) =>
      props.$isScrolled ? "23px 37px 23px 32px" : "36px 37px 20px 32px"};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  .logo-first {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }
  .logo-second {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
  }

  @media (max-width: 590px) {
    .logo-first {
      font-size: 18px;
    }

    .logo-second {
      font-size: 18px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  &:last-child {
    padding-right: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 9px;
  }

  &:last-child {
    a {
      margin-right: 0;
      span {
        padding-right: 0;
      }
    }
  }

  @media (max-width: 590px) {
    a span {
      font-size: 18px;
    }
  }
`;
