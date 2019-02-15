import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 740px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1190px;
  }
`
const HeaderTitle = styled.h1`
  font-size: 8vw;
  text-align: center;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderTitle>
      <Link to="/">
        {siteTitle}
      </Link>
    </HeaderTitle>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
