import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./Header"
import ProjectList from "./Project-list"
import ProjectDescription from "./Project-description";
import About from "./About";
import "./app.css"


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app-main-container">
          <Header />
          <div>
            <Route path="/" component={ProjectList} />
          </div>
          <div>
            <Route path="/:projectId" component={ProjectDescription} />
          </div>
          <About />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
