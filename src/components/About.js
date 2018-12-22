import React from "react"
import text from "../assets/text"
//import photo from "../img/profilephoto.jpg"

export function About() {
    return (
      <footer>
        <div className="container-1">
          <div>
            <div>
              <div >
                <h2>{text.about.header}</h2>
              </div>
              <div>
                <p>{text.about.parraf1}</p>
                <p>{text.about.parraf2}</p>
              </div>
            </div>
            <div className="contact">

              <div>
                <h2>{text.contact.header}</h2>
              </div>
              <div>
                <ul>
                  <li><span>{text.contact.email}</span></li>
                  <li><a href={text.contact.linkedin} target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-2">
          <div>
            <img
              src={text.contact.photo}
              alt="Profile" />
          </div>
        </div>

      </footer>
    )

}
