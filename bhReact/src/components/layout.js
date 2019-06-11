import React from 'react' 
import '../components/base.css'
import styled from 'styled-components'
import Header from './header'

const Footer = styled.footer`
  grid-row: last-child;
  text-align: center;
  padding: 30px;
`;

const Layout = ({ children }) => (

  <div>
    <Header>
      <a className="btn-lg" href="/">Reload Site</a>
    </Header>
    {children}
    <Footer>
      © {new Date().getFullYear()} BHFOSDEV, Bluehost, calebmasters
    </Footer>
  </div> 
)

export default Layout