import React from 'react';
import { graphql } from 'gatsby';
import { PostPageLayout } from '../components/styles/LayoutStyles';
import { PostCard } from '../components/PostCard';
import { ArticlesMetaTags } from '../components/MetaTags';

export default function PostsPage({
  data: { allMdx: posts },
  pageContext,
  path,
}) {
  return (
    <PostPageLayout
      currentPage={pageContext.currentPage}
      totalCount={posts.totalCount}
      pathPrefix="/posts/"
      title="Writing"
    >
      <ArticlesMetaTags pageContext={pageContext} />
      <div>
        {posts.edges.map(({ node: post }) => (
          <PostCard
            key={post.id}
            title={post.frontmatter.title}
            tags={post.frontmatter.tags}
            link={post.fields.slug}
            image={post.frontmatter.image}
            publishedDate={post.frontmatter.date}
          >
            {post.excerpt}
          </PostCard>
        ))}
      </div>
    </PostPageLayout>
  );
}

export const pageQuery = graphql`
  query Posts($skip: Int! = 0) {
    allMdx(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
              src {
                ...ImageFields
              }
              alt
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
