import React from 'react'
import styled from 'styled-components'

const HeroDiv = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  grid-column: span 3;
`

const HeroTitle = styled.h1`
  font-size: 20px;
  grid-column: 2;
`
const HeroSubtitle = styled.h3`
  font-size: 16px;
  grid-column: 2;
`

const Button = styled.button`
  font-weight: 300;
`
const Disclaimer = styled.small`
  margin-top: 20px;
  display: block;
`
const Price = styled.div`
  font-weight: 100d
`
const Hero = ({data, children}) => (
  <HeroDiv>
    <HeroTitle>{data.contentfulTestHero.title}</HeroTitle>
    <HeroSubtitle>{data.contentfulTestHero.subtitle}</HeroSubtitle>
    <ul>
    {data.contentfulTestHero.featuresList.map(feature => (
      <li>{feature}</li>
    ))}
    </ul>
    <Price>
      {data.contentfulTestHero.marketingSlang}
      <s>{data.contentfulTestHero.price.startingPrice}</s>
    </Price>
    <Button src={data.contentfulTestHero.linkHref}>
      {data.contentfulTestHero.linkText}
    </Button>
    <Disclaimer>
      {children}
    </Disclaimer>
  </HeroDiv>
)

export default Hero