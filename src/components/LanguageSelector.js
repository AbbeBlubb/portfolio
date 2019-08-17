import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <ul className="language-selector">
        <li 
          className={`language-selector__list-item ${this.context.language === 'en' && 'language-selector--selected-language'}`}
          onClick={() => this.context.handleLanguageChange('en')}
          >
            English
        </li>
        <li 
          className={`language-selector__list-item ${this.context.language === 'es' && 'language-selector--selected-language'}`}
          onClick={() => this.context.handleLanguageChange('es')}
        >
          Español
        </li>
        <li
          className={`language-selector__list-item ${this.context.language === 'ru' && 'language-selector--selected-language'}`}
          onClick={() => this.context.handleLanguageChange('ru')}
        >
          Russki
        </li>
        <li
          className={`language-selector__list-item ${this.context.language === 'sv' && 'language-selector--selected-language'}`}
          onClick={() => this.context.handleLanguageChange('sv')}
        >
          Svenska
        </li>
      </ul>
    );
  }
}
