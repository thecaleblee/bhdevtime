import React from 'react'
import './codeFlipper.css'
import jsxToString from 'jsx-to-string'
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);


//const CodeFlipper = ({ children }) => (
class CodeFlipper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
    <div class="flip-controls-container">
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            {this.props.children}
          </div>
          <div className="back">
            <SyntaxHighlighter language='jsx' showLineNumbers='1' wrapLines='true' style={hopscotch}>{jsxToString(this.props.children)}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default CodeFlipper

// Todo: Convert to include all related fields

//{`const IconGroup = ({data, children}) => (
//  <Container>
//    {this.props.contentfulContentfulTestIconGroup.iconGroupTitle ? <IconGroupTitle>{this.props.contentfulContentfulTestIconGroup.iconGroupTitle}</IconGroupTitle>: '' }
//    {this.props.contentfulContentfulTestIconGroup.iconGroupSubtitle ? <IconGroupSubtitle>{this.props.contentfulContentfulTestIconGroup.iconGroupSubtitle}</IconGroupSubtitle>: '' }
//    <Content>
//      {this.props.contentfulContentfulTestIconGroup.iconImages.map(icon => (
//        <ImgContainer>
//          <img src={icon.file.url} alt={icon.title} />
//        </ImgContainer>
//      ))}
//      {this.props.contentfulContentfulTestIconGroup.iconTitles.map(title => (
//        <IconTitle>{title}</IconTitle>
//      ))}
//      {this.props.contentfulContentfulTestIconGroup.iconText.map(text => (
//        <IconText>{text}</IconText>
//      ))}
//      {children}
//    </Content>
//  </Container>
//)
//`}