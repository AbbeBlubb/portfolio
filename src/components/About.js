import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <section className="about-main">
        <div className="about">
          <div className="about-header">About me</div>
          <div className="about-text">Once up on a time...</div>
        </div>
        <div className="contact">
          <div className="contact-header">Contact</div>
          <div className="contact-text">
            <ul>
              <li>My@email.yes</li>
              <li>Maby LinkedIn</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

}

export default About