import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MdWeb } from 'react-icons/md';
import { FaHandsHelping, FaUniversalAccess } from 'react-icons/fa';

import { ContentContainer } from '../components/styles/LayoutStyles';
import { Dot } from '../components/Dot';
import { Button } from '../components/Button';
import { H, MarkdownHeading } from '../components/mdxComponents/Headings';
import { MiniPostCard } from '../components/PostCard';
import { Text } from '../components/mdxComponents/Text';
import { CircleImg } from '../components/CircleImg';
import { HomeMetaTags } from '../components/MetaTags';
import { SemanticList } from '../components/SemanticList';
import { ServiceCard } from '../components/ServiceCard';

const StatusStyle = styled.p`
  font-weight: bold;
  .dot {
    margin-right: 1rem;
  }
`;

const Status = ({ available }) => (
  <>
    <StatusStyle>
      <Dot className="dot" color={available ? 'green' : 'red'} />
      {available ? `Is Available for Clients 🎉` : `Currently Booked 😅`}
    </StatusStyle>
    <Button as={Link} to="/contact">
      {available ? `Hire Me` : `Schedule a Time`}
    </Button>
  </>
);

const Hero = styled.header`
  background-color: var(--surface-light);
  width: 100%;
  text-align: center;
  /* top padding is less because the page content already has 2rem margin */
  padding: 1rem 3rem 3rem;
  .content-container {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    .hero-content {
      display: grid;
      grid-gap: 2rem;
      align-items: center;
      h1 {
        margin: 0;
      }
      p {
        line-height: 1.75;
        margin: 0;
      }
      a {
        margin: 0 auto;
      }
    }
    @media (min-width: 675px) {
      justify-items: left;
      grid-template-columns: 32rem 1fr;
      grid-gap: 3rem;
      .hero-content {
        grid-gap: 3rem;
        justify-items: left;
        align-items: unset;
        h1,
        p,
        a {
          text-align: left;
          margin: unset;
        }
      }
    }
  }
`;

const ServicesSection = styled.section`
  background-color: var(--surface-medium);
  h1 {
    text-align: center;
    @media (min-width: 675px) {
      text-align: left;
    }
  }
  li {
    width: 100%;
    margin: 2.5rem 0;
  }
  li:first-child {
    margin-top: 0;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

const ProjectsSection = styled.section`
  background-color: var(--surface-medium);
  h1 {
    text-align: center;
    @media (min-width: 675px) {
      text-align: left;
    }
  }
  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 30rem;
    }
  }
  .view-all {
    margin: 3rem 0 2rem;
    display: block;
    width: fit-content;
  }
`;

const CTASection = styled.section`
  padding: 8rem 0;
  background-color: var(--surface-dark);
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
      margin: 0;
    }
    p {
      line-height: 2;
    }
  }
`;

const Site = ({ data: { me, projects }, ...props }) => (
  <>
    <Hero>
      <HomeMetaTags />
      <ContentContainer>
        <CircleImg image={me} alt="Dylan squinting at the camera." />
        <div className="hero-content">
          <H>Dylan Sheffer</H>
          <p>
            Senior Front-end Engineer committed to building performant and
            inclusive web applications.
          </p>
          <Button as={Link} to="/contact">
            Let's Chat!
          </Button>
        </div>
      </ContentContainer>
    </Hero>
    {/* <ServicesSection>
      <ContentContainer>
        <MarkdownHeading>
          <Link to="/services/">What I Do</Link>
        </MarkdownHeading>
        <SemanticList>
          <li>
            <ServiceCard
              icon={FaUniversalAccess}
              title="Accessibility Services"
            >
              <Text>
                Worried about section 508 compliance? Don't know what the WCAG
                is?
              </Text>
              <Text>
                Bring me for accessibility auditing, remediation services, and
                tailored workshops for your organization!
              </Text>
            </ServiceCard>
          </li>
          <li>
            <ServiceCard icon={MdWeb} title="Custom Web App Development">
              <Text>
                Whether you have an idea you're looking to bring to life or need
                some help with an existing project, I'm here to help!
              </Text>
            </ServiceCard>
          </li>
          <li>
            <ServiceCard icon={FaHandsHelping} title="Help out your team">
              <Text>
                Have an important deadline looming and not enough team bandwidth
                to get the job done?
              </Text>
              <Text>
                I'm available as a developer for hire to add additional
                resources, so you can meet you company's goals on time.
              </Text>
            </ServiceCard>
          </li>
        </SemanticList>
        <Link to="/services">
          More Details{' '}
          <span className="visually-hidden">about my services.</span>
        </Link>
      </ContentContainer>
    </ServicesSection> */}
    <ProjectsSection>
      <ContentContainer>
        <MarkdownHeading>
          <Link to="/projects/">Personal Projects</Link>
        </MarkdownHeading>
        <div className="projects-container">
          {projects.nodes.map(
            ({ excerpt, frontmatter, id, fields: { slug } }) => (
              <MiniPostCard
                key={id}
                title={frontmatter.title}
                link={slug}
                tags={frontmatter.tags.slice(0, 3)}
              >
                {excerpt}
              </MiniPostCard>
            )
          )}
        </div>
        <Link className="view-all" to="/projects">
          View All Projects
        </Link>
      </ContentContainer>
    </ProjectsSection>
    {/* <CTASection>
      <ContentContainer>
        <H>Let's Work Together</H>
        <Text>
          Whether you need someone to help you launch an idea, make your
          application more accessible, or just provide some assistance on
          finishing a project, I am here to help! 😄
        </Text>
        <Button as={Link} to="/contact">
          Contact Me
        </Button>
      </ContentContainer>
    </CTASection> */}
  </>
);

export default Site;

export const query = graphql`
  query SITE_INDEX_QUERY {
    projects: allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      nodes {
        excerpt(pruneLength: 80)
        id
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
      }
    }
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
