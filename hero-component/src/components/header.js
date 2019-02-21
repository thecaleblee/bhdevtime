import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0 auto;

  a {
    padding: 10px;
    margin-right: 30px;
    margin: 10px 15px 10px 0;
  }

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

const Header = () => (
  <HeaderWrapper>
    <Link to="/" className="btn-lg">
      Home
    </Link>

  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
