import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <span id="bold-span">Alberto</span> Francisco Chávez Pérez
        </h1>
        <div className="header-button-scroll-down">Portfolio & me</div>
      </header>
    )
  }
}

export default Header