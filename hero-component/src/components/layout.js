import React from "react"
import PropTypes from "prop-types"
import "./base.css"
import styled from 'styled-components'
const Footer = styled.footer`
  grid-row: last-child;
  text-align: center;
`

const Layout = ({ children }) => (
  <div>
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
