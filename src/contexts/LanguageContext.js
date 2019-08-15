import React from "react";

const Context = React.createContext('en');

export class LanguageStore extends React.Component {
  state={ language: 'en' };

handleLanguageChange = language => {
  this.setState({ language });
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
