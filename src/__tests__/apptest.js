import React from 'react'
import { render } from "@testing-library/react"
import App from '../components/App'


const AppComponent = () => {
  return render(<App />)
}
describe("APP", () => {
  it("should render the component", () => {
      const { asFragment } = AppComponent();
      expect(asFragment(<App />)).toMatchSnapshot()
  })
}) 
