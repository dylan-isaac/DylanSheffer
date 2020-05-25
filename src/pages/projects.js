import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostPageLayout } from '../components/styles/LayoutStyles';
import { PostCard } from '../components/PostCard';

export default function ProjectsPage({
  data: { allMdx: projects },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      title="Projects"
      currentPage={pageContext.currentPage}
      totalCount={projects.totalCount}
      pathPrefix={path}
    >
      <div>
        {projects.edges.map(({ node: project }) => (
          <PostCard
            key={project.id}
            title={project.frontmatter.title}
            tags={project.frontmatter.tags}
            link={project.fields.slug}
            image={project.frontmatter.image}
            publishedDate={project.frontmatter.date}
          >
            {project.excerpt}
          </PostCard>
        ))}
      </div>
    </PostPageLayout>
  );
}

export const pageQuery = graphql`
  query Projects($skip: Int! = 0) {
    allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 350)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            image {
              ...ImageFields
            }
            date
          }
        }
      }
    }
  }
`;
