import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { ServicesMetaTags } from '../components/MetaTags';

const ServicesPageStyle = styled.section`
  h1 {
    margin-top: 0;
  }
`;

function ServicesPage({ data, pageContext, path }) {
  return (
    <ServicesPageStyle>
      <ServicesMetaTags />
      <MarkdownHeading>Services</MarkdownHeading>
      <section id="accessibility">
        <H as="h2">Accessibility Services</H>
        <Text>
          Dylan Sheffer Consulting's Accessibility Services uses a combination
          of industry leading accessibility tools and manual testing methods to
          ensure that our audits <strong>provide the visibility</strong> needed
          to address potential accessibility issues.
        </Text>
        <H as="h3">Services include:</H>
        <ul>
          <Text as="li">
            <strong>Advanced Audits</strong> performed using many of the
            industry's leading automated accessibility testing tools and proven
            manual testing methods against the latest{' '}
            <strong>WCAG 2.1 standard</strong>.
          </Text>
          <Text as="li">
            Audit results presented in a <strong>web based dashboard</strong>{' '}
            that can be easily shared and printed.
          </Text>
          <Text as="li">
            Going beyond the audit report and assist you all with writing,
            organizing, and prioritizing the work needed to reach the agreed
            upon goal.
          </Text>
          <Text as="li">
            Personally write the code needed to{' '}
            <strong>address specific issues</strong> and provide{' '}
            <strong>code reviews for accessibility-related</strong> tickets to
            verify that the issue has been addressed.
          </Text>
        </ul>
      </section>
      <section id="custom-app">
        <H as="h2">Custom Web App Development</H>
        <Text large>All of my work is, by default:</Text>
        <ul>
          <Text as="li">
            <strong>Optimized for mobile.</strong> All front-ends are fully
            responsive, and tested across many devices and browsers.
          </Text>
          <Text as="li">
            <strong>Accessible.</strong> The web is for everybody. There is no
            compromise for creating an inclusive experience. With the{' '}
            <a href="https://www.adatitleiii.com/2019/01/number-of-federal-website-accessibility-lawsuits-nearly-triple-exceeding-2250-in-2018/">
              increasing number of accessibility lawsuits
            </a>{' '}
            each year, you can thank me later 😜.
          </Text>
          <Text as="li">
            <strong>Written with Modern code.</strong> All my front-end code is
            crafted semantic HTML, styled with modern CSS practices, and brought
            to life with the latest JavaScript features. (<strong>Note:</strong>{' '}
            All shiny and new pieces of code come with appropriate fall backs,
            so they can still be run on older browsers.)
          </Text>
          <Text as="li">
            <strong>Optimized for performance.</strong> My experiences feel
            lightweight and fast.
          </Text>
        </ul>
      </section>
      <section id="help">
        <H as="h2">Help out your team</H>
        <Text>
          I am a <strong>Full-Stack Engineer</strong> with a passion for{' '}
          <strong>User Experience</strong> and{' '}
          <strong>Web Accessibility</strong>. I have worked for many companies
          and I am able to easily drop into an existing codebase or to start a
          project from scratch.
        </Text>
        <Text>
          My greatest strength is my ability to <strong>collaborate</strong>{' '}
          with product owners, designers, and developers and{' '}
          <strong>translate each party's requirements and constraints</strong>{' '}
          into something that ultimately works for the end user.
        </Text>
        <Text>
          I am the happiest when I am working on user-facing features, but I am
          also able to get my hands dirty and write the <strong>APIs</strong>,
          and <strong>database schemas</strong> needed to turn an idea into a
          reality.
        </Text>
      </section>
    </ServicesPageStyle>
  );
}

export const query = graphql`
  query SERVICES_PAGE_QUERY {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
