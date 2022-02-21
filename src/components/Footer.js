import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ContentContainer } from './styles/LayoutStyles';
import { SemanticList } from './SemanticList';

const SocialLinks = styled.nav`
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    color: var(--white);
    font-size: 4.5rem;
    margin: 0 2rem;
    box-shadow: none;
    :hover,
    :focus {
      box-shadow: none;
      color: var(--white);
    }
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  .small-text {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  &:focus,
  :hover {
    .small-text {
      font-weight: bold;
    }
  }
`;

const FooterStyles = styled.footer`
  background-color: var(--black);
  color: var(--white);
  .copyright {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Footer = () => (
  <FooterStyles>
    <ContentContainer>
      <SocialLinks aria-label="Social Links">
        <h2 className="visually-hidden">Social Links</h2>
        <SemanticList>
          <li>
            <SocialLink
              href="http://github.com/dylansheffer"
              aria-label="Dylan Sheffer's GitHub"
            >
              <FaGithub />
              <span className="small-text" aria-hidden="true">
                GitHub
              </span>
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="http://twitter.com/dylansheffer"
              aria-label="Dylan Sheffer's Twitter"
            >
              <FaTwitter />
              <span className="small-text" aria-hidden="true">
                Twitter
              </span>
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/dylansheffer/"
              aria-label="Dylan Sheffer's LinkedIn"
            >
              <FaLinkedin />
              <span className="small-text" aria-hidden="true">
                LinkedIn
              </span>
            </SocialLink>
          </li>
        </SemanticList>
      </SocialLinks>
      <div className="copyright">
        &copy;{new Date().getFullYear()} - Dylan Sheffer
      </div>
    </ContentContainer>
  </FooterStyles>
);
