import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { headerText } from '../assets/texts/headerText';

export class Header extends React.Component {
  static contextType = LanguageContext;

  constructor(props){
    super(props);
    // The ref is created, see the JSX <header> element attributes
    this.refForTitleContainer = React.createRef();
    this.state={
      headerOffsetX: 0,
      headerOffsetY: 0,
    };
  }

  _onMouseMove = (e) => {
    /* Get the width and height of the Header component (Header element) */
    // The properties of the ref are in the .current
    const width = this.refForTitleContainer.current.clientWidth;
    const height = this.refForTitleContainer.current.clientHeight;

    /* Get the cursors position in relation to the Header: cursors position divided with the Hero's dimensions, then x100 to get percentage */
    const offsetX = e.nativeEvent.offsetX / width * 100;
    const offsetY = e.nativeEvent.offsetY / height * 100;

    this.setState({
      headerOffsetX: offsetX,
      headerOffsetY: offsetY
    });
  }

  _onMouseOut = () => {
    this.setState({
      heroOffsetX: 0,
      heroOffsetY: 0,
    });
  }

  render() {

    const language = this.context.language;

    const maskStyle = {
      '--maskX': this.state.headerOffsetX,
      '--maskY': this.state.headerOffsetY,
    };

    return (
      <header
          className='header'
          onMouseMove={this._onMouseMove}
          onMouseOut={this._onMouseOut}
          ref={this.refForTitleContainer}
          style={maskStyle}>

        <h1 className='header__header'>
          <span>{headerText[language].a}</span> {headerText[language].fcp}
        </h1>
        <h1 className='header__header-clone'>
          <span>{headerText[language].a}</span> {headerText[language].fcp}
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
