import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.. bummer</p>
      <br />
    </Container>
  </Layout>
)

export default NotFoundPage
