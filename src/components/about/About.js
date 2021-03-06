import React from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { aboutJSXText } from "./aboutJSXText";
import { contactText } from "./aboutContactText";

export class About extends React.Component {
    static contextType = LanguageContext;

    copyToClipboard = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText("alberto@francisco.nu");
        }
    };

    render() {
        const language = this.context.language;

        return (
            <section className="about">
                <div className="about__container">
                    <div className="about__text">
                        <h2>{aboutJSXText[language].aboutHeader}</h2>
                        {aboutJSXText[language].aboutParrafs.map((parraf, index) => (
                            <p key={index}>{parraf}</p>
                        ))}

                        <h2>{aboutJSXText[language].competencesHeader}</h2>
                        {aboutJSXText[language].competencesParrafs.map((parraf, index) => (
                            <div key={index}>{parraf}</div>
                        ))}

                        <h2>{contactText[language].header}</h2>
                        <ul>
                            <li>
                                <span
                                    className="semi-bold"
                                    tabIndex={0}
                                    onKeyDown={() => this.copyToClipboard()}
                                    title={
                                        "Click on this image to copy the e-mail to the clipboard"
                                    }
                                >
                                    {contactText[language].email}
                                </span>
                            </li>
                            <li>
                                <a
                                    href={contactText[language].linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="about__photo-wrapper">
                        <img
                            className="about__photo"
                            src={contactText[language].photo}
                            alt="Profile photo"
                        />
                    </div>
                </div>
            </section>
        );
    }
}
