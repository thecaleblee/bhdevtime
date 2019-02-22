import React, { useState } from 'react'
import '../components/codeFlipper.css'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/dist/styles/prism'

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

  @media (min-width: 768px) {
    min-height: ${props => props.mdDisplayHeight}px;

    &.flipped {
      min-height: ${props => props.mdCodeHeight}px;
    }

    .back {
      height: ${props => props.mdCodeHeight}px;
    }
  }

  @media (min-width: 992px) {
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

function CodeFlipper(props) { 
  const [toggled, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggled)
  }

  return (
    <div class="flip-controls-container">
      <button onClick={handleClick}>
        {toggled ? 'Hide Code' : 'Show Code'}
      </button>
      <FlipContainer {...props} className={toggled ? 'flip-container flipped' : 'flip-container'}>
        <div className="flipper">
          <div className="front">
            {props.children}
          </div>
          <CodeContainer className="back">
            <SyntaxHighlighter language='jsx' showLineNumbers='1' wrapLines='false' style={hopscotch}>{props.jsxCode}}</SyntaxHighlighter>
          </CodeContainer>
        </div>
      </FlipContainer>
    </div>
  );
}

CodeFlipper.defaultProps = {
  smDisplayHeight: "110",
  smCodeHeight: "110",
  mdDisplayHeight: "810",
  mdCodeHeight: "110",
  lgDisplayHeight: "890"
}

export default CodeFlipper