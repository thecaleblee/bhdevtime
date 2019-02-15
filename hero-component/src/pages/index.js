import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import propTypes from 'prop-types'
import { graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {HeroContentQuery.contentfulTestHero.title}
  </Layout>
)

Layout.propTypes = {
  children: propTypes.func,
}

export const query = graphql`
  query HeroContentQuery {
    contentfulTestHero {
      title,
      subtitle,
      featuresList,
      marketingSlang,
      linkText,
      linkHref
    }
  }
`

export default IndexPage
