import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { HeaderBlade } from '../components/HeaderBlade/HeaderBlade.component';
import { BackButton } from '../components/BackButton/BackButton.component';

import './404.styles.scss';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <header className="not-found-header page-header">
        <HeaderBlade className="page-title">
          <BackButton />
          <h1>Error</h1>
        </HeaderBlade>
      </header>
      <Layout location={location} title={siteTitle} className="not-found">
        <Seo title="404: Not Found" />
        <section className="not-found-content page-section">
          <h1>404: Not Found</h1>
          <p>There's nothing here.</p>
        </section>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
