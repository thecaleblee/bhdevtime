import React from "react"
import {render} from 'react-testing-library'
import renderer from 'react-test-renderer'
import { StaticQuery } from "gatsby"
import Index from "../pages/index"
import {toBeInTheDocument} from 'jest-dom'
expect.extend({toBeInTheDocument})

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `BHFOSDEV Caleb Masters`,
        },
      },
    })
  )
})

describe(`Index`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`contains a greating`, () => {
    const { getByText } = render(<Index />)
    const greeting = getByText(`Purpose`)
    expect(greeting).toBeInTheDocument()
  })
})