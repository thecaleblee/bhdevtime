import React from 'react'
import './codeFlipper.css'
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const CodeFlipper = ({ children }) => (
  <div className="back">
    <SyntaxHighlighter language='jsx' showLineNumbers='1' wrapLines='true' style={hopscotch}>{children}</SyntaxHighlighter>
  </div>
)

export default CodeFlipper