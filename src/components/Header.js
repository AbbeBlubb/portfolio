import React from "react"
import "./header.css"
import text from "../text"

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <span>{text.header.a}</span> {text.header.fcp}
        </h1>
        <div
          className="header-button"
          onClick={this.props.handleScrollButtonClick}>{text.header.button}</div>
      </header>
    )
  }
}

export default Header