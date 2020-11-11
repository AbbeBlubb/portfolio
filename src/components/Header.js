import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { headerText } from '../assets/texts/headerText';


export class Header extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.refForTitleContainer = React.createRef();
  }

  render() {
    const language = this.context.language;

    return (
      <header
        className='header'
        ref={this.refForTitleContainer}>

        <h1 className='header__heading'>
          <span className="bold">{headerText[language].a}</span> {headerText[language].fcp}
        </h1>

        {/* Position the button-wrapper in absolute, so the button inside the wrapper don't need to have the absolute positioning */}
        <div className="header__button-wrapper">
          {/* The button has the styling, and the wave-effect that requires relative positioning */}
          <button
            className="header__button waves-effect waves-light"
            onClick={() => this.props.handleScrollToRef()}
          >
            {headerText[language].button}
          </button>
        </div>
      </header>
    );
  }
}
