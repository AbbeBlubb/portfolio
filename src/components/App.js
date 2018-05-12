import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./Header"
import List from "./List"
import About from "./About"
import "./app.css"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.divProjects = React.createRef()
    this.state = {
      pixel: 0
    }
  }

  componentDidMount() {
    const pixel = this.divProjects.current.getBoundingClientRect().y
    this.setState({
      pixel
    })
  }

  handleScrollButtonClick = () => {
    window.scrollTo({
      top: this.state.pixel,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-main">
          <Header
            handleScrollButtonClick={this.handleScrollButtonClick} />
          <div
            ref={this.divProjects}>
            <Route
              path="/"
              component={List} />
          </div>

          <About />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
