import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <ul className="language-selector">
        <li onClick={() => this.context.handleLanguageChange('en')}>English</li>
        <li onClick={() => this.context.handleLanguageChange('es')}>Español</li>
        <li onClick={() => this.context.handleLanguageChange('ru')}>Russki</li>
        <li onClick={() => this.context.handleLanguageChange('sv')}>Svenska</li>
      </ul>
    );
  }
}
