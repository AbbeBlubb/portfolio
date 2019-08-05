import React from "react"
import text from "../assets/text"

export function About() {
    return (
      <section className="about">

        <div className="about__text-section">

          <h2>{text.about.header}</h2>
          {text.about.parrafs.map(parraf => <p>{parraf}</p>)}

          <h2>{text.contact.header}</h2>
          <ul>
            <li>
              <span className='bold'>
                {text.contact.email}
              </span>
              </li>
            <li>
              <a href={text.contact.linkedin} target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>

        </div>

        <div className="about__photo-section">
          <img className="about__photo"
            src={text.contact.photo}
            alt="Profile" />
        </div>

      </section>
    )
}
