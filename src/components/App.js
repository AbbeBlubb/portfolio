import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./Header"
import List from "./List"
import Description from "./Description";
import About from "./About";
import "./app.css"


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app-main">
          <Header />
          <div>
            <Route path="/" component={List} />
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
