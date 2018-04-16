import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <span className="bold-span">Alberto</span> Francisco Chávez Pérez
        </h1>
        <a href="#project-list-main-container"><div className="header-button-scroll-down">Portfolio & me</div></a>
      </header>
    )
  }
}

export default Header