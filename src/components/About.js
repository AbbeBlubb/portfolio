import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <section className="about-main">
        <div className="container">
          <div className="about">
            <div className="about-header">
              <h2>About me</h2></div>
            <div className="about-text">
              <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
              <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-header">
              <h2>Contact</h2>
            </div>
            <div className="contact-text">
              <ul>
                <li><span>My@email.yes</span></li>
                <li>Maby LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="photo">
          <div>Photo</div>
        </div>
      </section>
    )
  }

}

export default About