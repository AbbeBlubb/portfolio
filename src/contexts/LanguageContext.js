import React from "react";
import { docCookies } from "../assets/docCookies"

const Context = React.createContext();

export class LanguageStore extends React.Component {
  state={ 
    language: docCookies.getItem('lang') || 'en' 
  };

  handleLanguageChange = language => {
    if (language !== this.state.language) {
      this.setState({ language });

      docCookies.setItem('lang', language, this._maxAgeToGMT(Infinity));
    }
  }

  // Convert relative time to absolute time in order to be compatible with IE, se docCookies.js
  _maxAgeToGMT = nMaxAge => {
    return nMaxAge === Infinity ? "Fri, 31 Dec 9999 23:59:59 GMT" : (new Date(nMaxAge * 1e3 + Date.now())).toUTCString();
  }

  render() {
    return(
      <Context.Provider value={{ ...this.state, handleLanguageChange: this.handleLanguageChange }}> {/* The prop name must be 'value' and contain the object wanted as context object */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
