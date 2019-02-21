import React from 'react'
import './codeFlipper.css'
import styled from 'styled-components'
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

/* To Use:

  Call <CodeFlipper> with your regular JSX as a child
  e.g. 
    <CodeFlipper>
      <MyButton color="blue" shadowSize={2}>
        Click Me
      </MyButton>
    </CodeFlipper>

  Then pass the same code as a prop to CodeFlipper through the jsxCode Prop
   e.g. 
    <CodeFlipper
      jsxCode={`
        <MyButton color="blue" shadowSize={2}>
          Click Me
        </MyButton>
      `}
      <MyButton color="blue" shadowSize={2}>
        Click Me
      </MyButton>
    </CodeFlipper> 

    TODO: Make this not need to have explicit height
    The main container will need to have its sizes set at this time for mobile, tablet, desktop
    <Code Flipper
      smDisplayHeight=
      mdDisplayHeight=
      lgDisplayHeight=
*/

const FlipContainer = styled.div`
  min-height: ${props => props.smDisplayHeight}px;

  &.flipped {
    min-height: ${props => props.smDisplayHeight}px;
    margin-top: -8px;
    margin-bottom: -8px;
  }
  .back {
    height: ${props => props.smDisplayHeight}px;
  }
`

const CodeContainer = styled.div`
`

class CodeFlipper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
    };

    this.handleClick = this.handleClick.bind(this);
    console.log(this.props.smDisplayHeight);
  }

  handleClick() {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }

  render() { 
    const toggled = this.state.toggled;

    return (
      <div class="flip-controls-container">
        <button onClick={this.handleClick}>
          {toggled ? 'Hide Code' : 'Show Code'}
        </button>
        <FlipContainer smDisplayHeight={this.props.smDisplayHeight} className={toggled ? 'flip-container flipped' : 'flip-container'}>
          <div className="flipper">
            <div className="front">
              {this.props.children}
            </div>
            <CodeContainer className="back">
              <SyntaxHighlighter language='jsx' showLineNumbers='1' wrapLines='false' style={hopscotch}>{this.props.jsxCode}}</SyntaxHighlighter>
            </CodeContainer>
          </div>
        </FlipContainer>
      </div>
    )
  }
}

CodeFlipper.defaultProps = {
  smDisplayHeight: "500"
}

export default CodeFlipper