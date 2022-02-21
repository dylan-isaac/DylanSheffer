import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { AboutMetaTags } from '../components/MetaTags';
import { MyImg } from '../components/MyImg';

const AboutPageStyle = styled.div`
  h1 {
    margin-top: 0;
  }
`;

export default function AboutPage({ data, pageContext, path }) {
  return (
    <AboutPageStyle>
      <AboutMetaTags />
      <MarkdownHeading>About</MarkdownHeading>
      <section className="hero">
        <MyImg className="image" image={data.me} alt="Dylan widely smiling." />
        <Text large>
          My name is Dylan Sheffer and I am a full-stack developer, web
          accessibility advocate, and tea enthusiast living in beautiful
          Charlottesville, VA.
        </Text>
      </section>
      <section>
        <H as="h2">A little bit about me</H>
        <Text>
          I have been{' '}
          <a href="https://web.archive.org/web/20160224114658/http://www.dylansheffer.com/">
            building websites for 10 years.
          </a>{' '}
          I use HTML, CSS, and JavaScript for most of my projects, but I am also
          experienced using technologies such as .NET, relational databases, and
          serverless functions.
        </Text>
        <Text>
          I have a degree from Christopher Newport University in Information
          Science, but most of my education has been self-taught. I feel very
          fortunate to be in an industry that is always changing, so I can keep
          learning and improving.
        </Text>
        <Text>
          My primary focus right now is building modern{' '}
          <strong>JavaScript</strong> applications using inclusive and{' '}
          <strong>accessible</strong> practices.
        </Text>
        <Text>
          My full list of qualifications can be seen on my{' '}
          <a href="https://resume.dylansheffer.com">resume</a> 🤓.
        </Text>
        {/* <Text>
          If you're interested in bringing me on to your project,{' '}
          <Link to="/contact">please reach out to me</Link>!
        </Text> */}
      </section>
      {/* <H as="h3">
        A little bit <em>more</em> about me
      </H>
      <Text></Text> */}
    </AboutPageStyle>
  );
}

export const query = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "dylan-smiling.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
