import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import IconGroup from "../components/IconGroup"
import "./wordpress-hosting.css"

const WordpressHostingPage = ({children}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<StaticQuery
    query={graphql`
      query wpHostingQuery {
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
        },
        contentfulContentfulTestIconGroup{
          iconTitles,
          iconText,
          iconImages{
            file {
              url
            }
            title
          }
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
            <IconGroup data={data}>

            </IconGroup>
            {children}
        </div>
      </div>
      </>
    )}
  />
  </Layout>
)

export default WordpressHostingPage