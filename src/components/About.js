import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <section className="about-main-container">
        <div className="about-container-for-about">
          <div className="about-about-header">About me</div>
          <div className="about-about-text">Once up on a time...</div>
        </div>
        <div className="about-container-for-contact">
          <div className="about-contact-header">Contact</div>
          <div className="about-contact-text">
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