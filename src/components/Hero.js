import React from "react"
import text from "../assets/text"

export default class Hero extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <span>{text.header.a}</span> {text.header.fcp}
        </h1>
        <div className="header-button">
          {text.header.button}
        </div>
      </header>
    )
  }
}

