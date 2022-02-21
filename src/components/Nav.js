import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LogoImage from '../../static/logo.svg';
import { ContentContainer } from './styles/LayoutStyles';
import { Button } from './Button';
import { SemanticList } from './SemanticList';
import { A11yMenu } from './A11yMenu';

const NavStyles = styled.nav`
  background-color: var(--surface-dark);
  box-shadow: var(--shadow);
  .content-container {
    display: flex;
    align-items: center;
    .logo {
      margin-top: 1rem;
      box-shadow: none;
    }
  }
  @media (min-width: 675px) {
    z-index: 10;
    height: 7rem;
    position: sticky;
    top: 0;
    .content-container {
      flex-direction: row;
      .logo {
        margin-top: 0;
        position: absolute;
        top: 5%;
      }
    }
  }
`;

const Logo = styled.div`
  background-image: url(${LogoImage});
  background-size: contain;
  width: 9rem;
  height: 9rem;
`;

const LinkContainer = styled(SemanticList)`
  align-items: center;
  justify-content: center;
`;

const LinkItem = styled.li`
  margin: 1.5rem;
  color: var(--yellow);
  a {
    font-family: 'Hack', monospace;
    text-decoration: none;
    box-shadow: none;
    &:focus,
    :hover,
    &[aria-current='page'] {
      color: var(--yellow);
      box-shadow: var(--link-underline);
    }
  }
  a.cta {
    &:focus,
    :hover,
    &[aria-current='page'] {
      background: var(--white);
      color: var(--black);
      box-shadow: none;
    }
  }
`;

const Spacer = styled.div`
  flex: 1 1 0;
`;

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { 'aria-current': 'page' } : {};

const PartialNavLink = props => (
  <Link getProps={isPartiallyActive} {...props} />
);

const NavLinks = ({ children }) => (
  <LinkContainer>
    <LinkItem>
      <PartialNavLink to="/about">About</PartialNavLink>
    </LinkItem>
    {/* <LinkItem>
      <PartialNavLink to="/services">Services</PartialNavLink>
    </LinkItem> */}
    <LinkItem>
      <PartialNavLink to="/projects">Projects</PartialNavLink>
    </LinkItem>
    <LinkItem>
      <PartialNavLink to="/posts">Writing</PartialNavLink>
    </LinkItem>
    <LinkItem>
      <Button className="cta" as={PartialNavLink} to="/contact">
        Contact
      </Button>
    </LinkItem>
  </LinkContainer>
);

export const Nav = () => (
  <NavStyles>
    <A11yMenu />
    <ContentContainer>
      <Link className="logo" to="/" aria-label="Home">
        <Logo />
      </Link>
      <Spacer />
      <NavLinks />
    </ContentContainer>
  </NavStyles>
);
