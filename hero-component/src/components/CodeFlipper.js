import React from 'react'
import './codeFlipper.css'
import styled from 'styled-components'
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx'
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism'
SyntaxHighlighter.registerLanguage('jsx', jsx)

/* To Use:

  Template
  <CodeFlipper
    jsxCode={`
        // jsx goes here 
      `}
      smDisplayHeight="515"
      smCodeHeight="1091"
      mdDisplayHeight="580"
      mdCodeHeight="780"
      lgDisplayHeight="595"
      lgCodeHeight="860"
    >
    // actual jsx goes here
  </CodeFlipper>

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
    min-height: ${props => props.smCodeHeight}px;
    margin-top: -8px;
    margin-bottom: -8px;

    .back {
      pre {
        overflow: scroll !important;
        height: 100% !important;
      }
    }
  }

  .back {
    height: ${props => props.smCodeHeight}px;
  }

  @media (min-width: 36rem) {
    min-height: ${props => props.mdDisplayHeight}px;

    &.flipped {
      min-height: ${props => props.mdCodeHeight}px;
    }

    .back {
      height: ${props => props.mdCodeHeight}px;
    }
  }

  @media (min-width: 48rem) {
    min-height: ${props => props.lgDisplayHeight}px;

    &.flipped {
      min-height: ${props => props.lgCodeHeight}px;

      .back {
        display: block;
      }
    }

    .back {
      height: ${props => props.lgCodeHeight}px;
    }
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
        <FlipContainer {...this.props} className={toggled ? 'flip-container flipped' : 'flip-container'}>
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
  smDisplayHeight: "110",
  smCodeHeight: "110",
  mdDisplayHeight: "110",
  mdCodeHeight: "110"
}

export default CodeFlipper