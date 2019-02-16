import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero";
import styled from 'styled-components'
import "./wordpress-hosting.css"

const MainContainer = styled.div`
`
const Container = styled.div`
`
const HeroDivBg = styled.div`
`

const HeroTitle = styled.h1`
`

const HeroSubtitle = styled.h3`:weight
`

const Button = styled.a`
`

const Disclaimer = styled.small`
  margin-top: 20px;
  display: block;
`

const Price = styled.div`
`
const WordpressHostingPage = ({children}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulTestHero {
          title,
          subtitle,
          featuresList,
          marketingSlang,
          linkText,
          linkHref,
          startingPriceUsd,
          monthlyPriceUsd,
          heroBackgroundMobile {
            file {
              url
            }
          },
          heroBackgroundTablet {
            file {
              url
            }
          },
          heroBackgroundDesktop {
            file {
              url
            }
          },
        }
      }
    `}
    render={data => (
      <>
      <div className="site-wrapper">
        <MainContainer className="site-canvas">
            <Hero data={data}>
              <small>vat disclaimer text</small> 
            </Hero>
            {children}
          
        </MainContainer>
      </div>
      </>
    )}
  />
  </Layout>

)

export default WordpressHostingPage
