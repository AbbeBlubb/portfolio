import React from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

export class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      languageSelectorIsHidden: false
    };
  }

  handleScroll = () => {

    if (document.body.classList.contains('user-is-tabbing')) {
      const currentScrollPos = window.pageYOffset;
      this.setState({
        prevScrollPos: currentScrollPos,
        languageSelectorIsHidden: false
      });
      return;
    }

    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const languageSelectorIsHidden = prevScrollPos < currentScrollPos; 
    // current increases when scroll down, and decreases when scroll up. If previous Y is less than current Y = true. If previous Y is greater then current Y = false.

    this.setState({
      prevScrollPos: currentScrollPos,
      languageSelectorIsHidden
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <ul className={`language-selector ${this.state.languageSelectorIsHidden && 'language-selector--hidden'}`}>

        <li className="language-selector__list-item">
          <button 
            className={`language-selector__button ${this.context.language === 'en' && 'language-selector--selected-language'}`}
            onClick={() => this.context.handleLanguageChange('en')}
            >
              English
          </button>
        </li>

        <li className="language-selector__list-item">
          <button 
            className={`language-selector__button ${this.context.language === 'es' && 'language-selector--selected-language'}`}
            onClick={() => this.context.handleLanguageChange('es')}
            >
              Español
          </button>
        </li>

        <li className="language-selector__list-item">
          <button 
            className={`language-selector__button ${this.context.language === 'ru' && 'language-selector--selected-language'}`}
            onClick={() => this.context.handleLanguageChange('ru')}
            >
              Русский
          </button>
        </li>

        <li className="language-selector__list-item">
          <button 
            className={`language-selector__button ${this.context.language === 'sv' && 'language-selector--selected-language'}`}
            onClick={() => this.context.handleLanguageChange('sv')}
            >
              Svenska
          </button>
        </li>
        
      </ul>
    );
  }
}
