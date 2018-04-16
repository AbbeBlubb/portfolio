import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <span>Alberto</span> Francisco Chávez Pérez
        </h1>
        <a href="#pl-main"><div className="header-button">Portfolio & me</div></a>
      </header>
    )
  }
}

export default Header