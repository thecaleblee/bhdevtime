import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 10vh;

  @media (min-width: 992px) {
    margin-top: 20vh;
  }
`
const Paragraph = styled.p`
  text-align: center;
  padding: 0 20vw;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>Purpose</Title>
    <Paragraph>
      To test the ability to use React and Contentful to create a static version of BH.components
      using components, with test coverage, while allowing editing from non-developers via
      Contentful.
    </Paragraph>
  </Layout>
)

export default IndexPage