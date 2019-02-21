import React, { Component } from 'react'
//import CodeFlipper from './CodeFlipper';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 48em) {
    max-width: 73.8rem;
    padding: 6rem 1.5rem;
  }

  @media (min-width: 62em) {
    max-width: 96.2rem;
    padding: 7rem 1.5rem;
  }

  @media (min-width: 75em) {
    max-width: 117.0rem;
    padding: 8rem 1.5rem;
  }
`

const IconGroupTitle = styled.h2`
  font-family: "Open Sans",Arial,sans-serif;
  margin: 2.2rem 0 2.2rem 0;
  color: #5588d3;
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 3.6rem;
  text-align: center;

  @media (min-width: 62em) {
    font-size: 4rem;
    line-height: 5.5rem;
  }
`

const IconGroupSubtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-weight: 400;
  font-family: "Open Sans",Arial,sans-serif;
  color: #5b5b5b;
  -webkit-font-smoothing: antialiased;
  text-align: center;
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
// TODO: Rethink entire way this is handled... the CodeFlipper should contain all related 
// divs and classes... possibly converting strings into rendered code
// TODO: Convert to class and allow for 'flipped' to be added to the flip-container by
// updating the state and rerendering
//const IconGroup = ({data, children}) => (
class IconGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
    };
  }

  render() {
    const { toggled } = this.state

    return (
      <>
        {`<Container>
        {data.contentfulContentfulTestIconGroup.iconGroupTitle ? <IconGroupTitle>{data.contentfulContentfulTestIconGroup.iconGroupTitle}</IconGroupTitle>: '' }
        {data.contentfulContentfulTestIconGroup.iconGroupSubtitle ? <IconGroupSubtitle>{data.contentfulContentfulTestIconGroup.iconGroupSubtitle}</IconGroupSubtitle>: '' }
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
        </Container>`}
      </>
    )
  }
}

export default IconGroup