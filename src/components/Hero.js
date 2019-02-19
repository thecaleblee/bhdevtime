import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`
const HeroDiv = styled.div`
  background-image: url(${props => props.imagexs}) !important;

  @media (min-width: 36rem) {
    background-image: url(${props => props.imagemd}) !important;
  }

  @media (min-width: 62rem) {
    background-image: url(${props => props.imagelg}) !important;
  }
`

const Hero = ({data, children}) => (
  <HeroDiv className="hero tertiary vat-disc lazyloaded" id="hero"
    imagexs={data.contentfulTestHero.heroBackgroundMobile.file.url}
    imagemd={data.contentfulTestHero.heroBackgroundTablet.file.url}
    imagelg={data.contentfulTestHero.heroBackgroundDesktop.file.url}
  >
    <Container className="container lazyloaded">
      <div className="row txt-color-tertiary">
        <div className="col-xs-12 col-md-7">
          <h1>{data.contentfulTestHero.title}</h1>
          <h3>{data.contentfulTestHero.subtitle}</h3>
          <ul>
          {data.contentfulTestHero.featuresList.map(feature => (
            <li>{feature}</li>
          ))}
          </ul>
          <p class="hero-price">
            {data.contentfulTestHero.marketingSlang} <s>{data.contentfulTestHero.startingPriceUsd}</s> <strong>{data.contentfulTestHero.monthlyPriceUsd}*</strong>
            <span class="vat-disclaimer txt-size-secondary">
              {children}
            </span>
          </p>
          <div class="hero-buttons">
            <a class="btn-lg" data-scroll-to={data.contentfulTestHero.linkHref} href={data.contentfulTestHero.linkHref} data-element-location="hero" data-element-type="link" data-element-label="choose_plan">
              {data.contentfulTestHero.linkText}
            </a>
          </div>
        </div>
      </div>
    </Container>
  </HeroDiv> 
)

export default Hero