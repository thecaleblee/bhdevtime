import React from 'react' 
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 48em) {
    max-width: 73.8rem;
  }

  @media (min-width: 62em) {
    max-width: 96.2rem;
  }

  @media (min-width: 75em) {
    max-width: 117.0rem;
  }
`
const IconGroupTitle = styled.h2`
`

const IconGroupSubtitle = styled.p`
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.3rem;
  position: relative;
  padding: 5rem 0;

  @media (min-width: 36em) {
    padding: 6.3rem 0;
    grid-column-gap: 2.3rem;
  }
`

const IconTitle = styled.h4`
  color: #5588d3;
  font-family: "Open Sans",Arial,sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1.1rem 0;
  line-height: 2.2rem;
  text-align: center;

  @media (min-width: 62em) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`

const ImgContainer = styled.div`
  text-align: center;
  transition-delay: .5s;

  img {
    max-width: 100%;
    height: 50px;
  }

  @media (min-width: 62em) {
    img {
      height: 60px;
    }
  }
`

const IconText = styled.p`
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-weight: 400;
  font-family: "Open Sans",Arial,sans-serif;
  color: #5b5b5b;
  -webkit-font-smoothing: antialiased;
  text-align: center;
`

const IconGroup = ({data, children}) => (
  <Container>
    {data.contentfulContentfulTestIconGroup.iconGroupTitle ? `<IconTitle>${data.contentfulContentfulTestIconGroup.iconGroupTitle}</IconTitle>`: '' }
    {data.contentfulContentfulTestIconGroup.iconGroupSubtitle ? `<IconText>${data.contentfulContentfulTestIconGroup.iconGroupSubtitle}</IconText>`: '' }
    <Content>
      {data.contentfulContentfulTestIconGroup.iconImages.map(icon => (
        <ImgContainer>
          <img src={icon.file.url} alt={icon.title} />
        </ImgContainer>
      ))}
      {data.contentfulContentfulTestIconGroup.iconTitles.map(title => (
        <IconTitle>{title}</IconTitle>
      ))}
      {data.contentfulContentfulTestIconGroup.iconText.map(text => (
        <IconText>{text}</IconText>
      ))}
    </Content>
  </Container>
)

export default IconGroup