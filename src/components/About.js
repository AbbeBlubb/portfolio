import React from "react"
import text from "../assets/text"
import LanguageContext from '../contexts/LanguageContext'
import { aboutText } from '../assets/texts/aboutText'
import { contactText } from '../assets/texts/contactText'

export class About extends React.Component {
  static contextType = LanguageContext;
  
  render() {

    const language = this.context.language;

    return (
      <section className="about">

        <div className="about__text-section">

          <h2>{aboutText[language].header}</h2>
          {aboutText[language].parrafs.map(parraf => <p>{parraf}</p>)}

          <h2>{contactText[language].header}</h2>
          <ul>
            <li>
              <span className='bold'>
                {contactText[language].email}
              </span>
              </li>
            <li>
              <a href={contactText[language].linkedin} target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>

        </div>

        <div className="about__photo-section">
          <img className="about__photo"
            src={contactText[language].photo}
            alt="Profile" />
        </div>

      </section>
    )
  }
}
