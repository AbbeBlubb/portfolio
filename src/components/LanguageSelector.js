import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <ul className="language-selector">

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
