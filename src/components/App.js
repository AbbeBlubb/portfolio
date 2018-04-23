import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./Header"
import List from "./List"
import Description from "./Description";
import About from "./About";
import "./app.css"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.divProjects = React.createRef()
    this.state = {
      pixel: 0
    }
  }

  componentDidMount () {
    this.state.pixel = this.divProjects.current.getBoundingClientRect().y
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
            handleScrollButtonClick={this.handleScrollButtonClick}
          />
          <div
            ref={this.divProjects}>
            <Route
              path="/"
              component={List}
            />
          </div>
          <div>
            <Route path="/:projectId" component={Description} />
          </div>
          <About />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
