import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import Hero from "./Hero";
import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  grid-template-column: 5px auto 5px;

  @media (min-width: 768px) {
    grid-template-column: auto 760px auto;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulTestHero {
          title,
          subtitle,
          featuresList,
          marketingSlang,
          linkText,
          linkHref
        }
      }
    `}
    render={data => (
      <>
        <MainContainer>
            <Hero data={data}>
              <small>vat disclaimer text</small> 
            </Hero>
            {children}
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </MainContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
