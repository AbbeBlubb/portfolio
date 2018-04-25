import React from "react"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <footer className="about-main">
          <div className="container">
            <div className="about">
              <div className="about-header">
                <h2>About me</h2></div>
              <div className="about-text">
                <p>I'm a junior web developer. After eight years working with law I discovered frontend. At first I had the learning as a hobby, and soon I decided to go all-in. I love my new career path! </p>
                <p>My experience with relevance for web developement is: 12 week intensive bootcamp in web developement / 5-week full-time course in C# / webcourse in Android Developement / evening course in responsive web design / own studies. </p>
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

          <div className="box1">
            <div>Box1</div>
          </div>

        <div className="box2">
          <div>Box2</div>
        </div>

      </footer>
    )
  }

}

export default About