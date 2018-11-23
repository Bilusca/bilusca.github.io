import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import { LayoutWrapper } from './ui/LayoutWrapper';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'title', content: 'VieiraDev' },
            { name: 'author', content: 'Lucas Assis Vieira' },
            { name: 'description', content: "I'm front-end developer. I build things in exchange of paçoquita." },
            { name: 'keywords', content: 'frontend, javascript, es6, react, react-native, css3' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
