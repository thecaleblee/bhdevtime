import React from 'react' 
import PropTypes from 'prop-types' 
import '../components/base.css'
import styled from 'styled-components'
import Header from './header'

const Footer = styled.footer`
  grid-row: last-child;
  text-align: center;
  padding: 30px;
`

const Layout = ({ children }) => (

  <div>
    <Header></Header>
    {children}
    <Footer>
      © {new Date().getFullYear()} BHFOSDEV, Bluehost, calebmasters
    </Footer>
  </div> 
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout