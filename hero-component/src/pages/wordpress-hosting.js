import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import IconGroup from "../components/IconGroup"
import "./wordpress-hosting.css"
import PricingCard from "../components/pricingCards";
import FeatureGrid from "../components/featureGrid";

const WordpressHostingPage = ({data, children}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="site-wrapper">
      <div className="site-canvas">
          <Hero data={data}>
            <small>vat disclaimer text</small> 
          </Hero>
          <IconGroup data={data} />
          <PricingCard />
          <FeatureGrid data={data} />
          {children}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query wpHostingQuery {
    contentfulTestHero {
      title
      subtitle
      featuresList
      marketingSlang
      linkText
      linkHref
      startingPriceUsd
      monthlyPriceUsd
      heroBackgroundMobile {
        file {
          url
        }
      }
      heroBackgroundTablet {
        file {
          url
        }
      }
      heroBackgroundDesktop {
        file {
          url
        }
      }
    }
    contentfulContentfulTestIconGroup {
      iconTitles
      iconText
      iconImages{
        file {
          url
        }
        title
      }
    }
    contentfulFeatureGrid {
      featureGridTitle
      featureIcon1 {
        file {
          url
        }
      }
      featureHeading1
      featureText1
      featureIcon2 {
        file {
          url
        }
      }
      featureHeading2
      featureText2
      featureIcon3 {
        file {
          url
        }
      }
      featureHeading3
      featureText3
      featureIcon4 {
        file {
          url
        }
      }
      featureHeading4
      featureText4
      featureIcon5 {
        file {
          url
        }
      }
      featureHeading5
      featureText5
      featureIcon6 {
        file {
          url
        }
      }
      featureHeading6
      featureText6
    }
  }
`

export default WordpressHostingPage