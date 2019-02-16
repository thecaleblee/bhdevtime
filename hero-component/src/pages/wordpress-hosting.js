import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero";
import "./wordpress-hosting.css"

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
        <div className="site-canvas">
            <Hero data={data}>
              <small>vat disclaimer text</small> 
            </Hero>
            {children}
        </div>
      </div>
      </>
    )}
  />
  </Layout>
)

export default WordpressHostingPage