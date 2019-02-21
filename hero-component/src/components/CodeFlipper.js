import React from 'react'
import './codeFlipper.css'
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

*/

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
    console.log(this.state.toggled)
  }


  render() { 
    const toggled = this.state.toggled;

    return (
    <div class="flip-controls-container">
      <button onClick={this.handleClick}>
        {toggled ? 'Hide Code' : 'Show Code'}
      </button>
      <div className={toggled ? 'flip-container flipped' : 'flip-container'}>
        <div className="flipper">
          <div className="front">
            {this.props.children}
          </div>
          <div className="back">
            <SyntaxHighlighter language='jsx' showLineNumbers='1' wrapLines='false' style={hopscotch}>{this.props.jsxCode}}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CodeFlipper