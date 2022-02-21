import React from 'react';
import { Helmet } from 'react-helmet';
import { pathJoin } from '../utilities';

import ogHomeImage from '../../static/og-images/OG-Home.png';
import ogArticleImage from '../../static/og-images/OG-Articles.png';
import ogAboutImage from '../../static/og-images/OG-About.png';
import ogWorkImage from '../../static/og-images/OG-Work.png';
import ogContactImage from '../../static/og-images/OG-Hire-Me.png';

function getBaseURL() {
  const url = process.env.GATSBY_URL;
  if (!url || url === 'undefined') {
    return `http://localhost:8000`;
  }
  return url;
}

const baseURL = getBaseURL();

export function DefaultMetaTags() {
  return (
    <Helmet>
      <html lang="en-US" />
      <meta name="generator" content="Dylan Sheffer on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dylansheffer" />
      <meta name="twitter:creator" content="@dylansheffer" />
      <meta
        property="og:site_name"
        content="Dylan Sheffer - Front-end Engineer and Accessibility Advocate"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
}

export function PostMetaTags({ post }) {
  const url = pathJoin(baseURL, post.fields.slug);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta name="twitter:url" content={url} />
        <meta
          name="twitter:title"
          content={`${post.frontmatter.title} - Dylan Sheffer`}
        />
        <meta name="twitter:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${post.frontmatter.title} - Dylan Sheffer`}
        />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={post.excerpt} />
        {post.frontmatter.date ? (
          <meta
            property="article:published_time"
            content={new Date(post.frontmatter.date).toISOString()}
          />
        ) : null}
      </Helmet>
    </>
  );
}

const metaDescription =
  'A collection of articles written by Dylan Sheffer; a senior front-end engineer, accessibility advocate, and speaker.';

export function ArticleMetaTags({ post }) {
  const ogImageURL = pathJoin(baseURL, ogArticleImage);
  return (
    <>
      <DefaultMetaTags />
      <PostMetaTags post={post} />
      <Helmet>
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>{post.frontmatter.title} - Articles - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}
export function ArticlesMetaTags({ pageContext }) {
  const url = pathJoin(baseURL, 'posts');
  const ogImageURL = pathJoin(baseURL, ogArticleImage);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Articles - Dylan Sheffer`}
        </title>
      </Helmet>
    </>
  );
}

export function WorkMetaTags({ pageContext }) {
  const url = pathJoin(baseURL, 'projects');
  const ogImageURL = pathJoin(baseURL, ogWorkImage);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <title>
          {`Page ${
            pageContext.currentPage ? pageContext.currentPage : 1
          } - Work - Dylan Sheffer`}
        </title>
      </Helmet>
    </>
  );
}
export function ProjectMetaTags({ project }) {
  const ogImageURL = pathJoin(baseURL, ogWorkImage);
  return (
    <>
      <DefaultMetaTags />
      <PostMetaTags post={project} />
      <Helmet>
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>{project.frontmatter.title} - Project - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}
const ogDescription =
  'Dylan Sheffer; a senior front-end engineer, accessibility advocate, and speaker living in Charlottesville, VA.';
export function HomeMetaTags() {
  const url = pathJoin(baseURL);
  const ogImageURL = pathJoin(baseURL, ogHomeImage);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta name="description" content={ogDescription} />
        <meta property="og:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>
          Dylan Sheffer - Front-end Engineer and Accessibility Advocate
        </title>
      </Helmet>
    </>
  );
}

export function AboutMetaTags() {
  const url = pathJoin(baseURL, 'about');
  const ogImageURL = pathJoin(baseURL, ogAboutImage);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta name="description" content={ogDescription} />
        <meta property="og:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>About - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}

export function ContactMetaTags() {
  const url = pathJoin(baseURL, 'contact');
  const ogImageURL = pathJoin(baseURL, ogContactImage);
  return (
    <>
      <DefaultMetaTags />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta name="description" content={ogDescription} />
        <meta property="og:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImageURL} />
        <meta property="og:image" content={ogImageURL} />
        <title>Contact - Dylan Sheffer</title>
      </Helmet>
    </>
  );
}
