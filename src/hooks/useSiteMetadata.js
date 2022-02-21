import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `);
  return siteMetadata;
};
