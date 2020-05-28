import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { CircleImg } from '../components/CircleImg';

const AboutPageStyle = styled.section`
  .hero {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2rem;
    align-items: center;
    .image {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default function AboutPage({ data, pageContext, path }) {
  return (
    <AboutPageStyle>
      <Helmet>
        <title>About - Dylan Sheffer</title>
      </Helmet>
      <MarkdownHeading>About</MarkdownHeading>
      <div className="hero">
        <CircleImg className="image" image={data.me} />
        <Text large>
          My name is Dylan Sheffer and I am a full-stack developer, web
          accessibility advocate, and tea enthusiast living in beautiful
          Charlottesville, VA.
        </Text>
      </div>
      <H as="h2">A little about me</H>
      <Text>
        I have been{' '}
        <a href="https://web.archive.org/web/20160224114658/http://www.dylansheffer.com/">
          building websites for 8 years.
        </a>{' '}
        I use HTML, CSS, and Javascript for most of my projects, but I am also
        experienced using technologies such as .NET, relational databases, and
        serverless functions.
      </Text>
      <Text>
        My primary focus right now is building accessible applications with{' '}
        <strong>React.js</strong>, <strong>Gatsby</strong>,{' '}
        <strong>AWS Lambda functions</strong>.{' '}
      </Text>
      <Text>
        My full list of qualifications can be seen on my{' '}
        <a href="https://resume.dylansheffer.com">resume</a> 🤓.
      </Text>
      <Text>
        If you're interested in bringing me on to your project, please reach out
        on my <Link to="/contact">contact page</Link>!
      </Text>
      {/* <H as="h3">
        A little <em>more</em> about me
      </H>
      <Text></Text> */}
    </AboutPageStyle>
  );
}

export const query = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
