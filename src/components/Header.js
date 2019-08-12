import React from "react"
import text from "../assets/text"

export class Header extends React.Component {

  constructor(props){
    super(props)
    this.refForTitleContainer = React.createRef() // The ref is created, see the JSX <header> element attributes
    this.state={
      headerOffsetX: 0,
      headerOffsetY: 0,
    }
  }
  
  _onMouseMove = (e) => {
    /* Get the width and height of the Header component (Header element) */
    const width = this.refForTitleContainer.current.clientWidth // The properties of the ref are in the .current
    const height = this.refForTitleContainer.current.clientHeight
    
    /* Get the cursors position in relation to the Header: cursors position divided with the Hero's dimensions, then x100 to get percentage */
    const offsetX = e.nativeEvent.offsetX / width * 100
    const offsetY = e.nativeEvent.offsetY / height * 100
    
    this.setState({
      headerOffsetX: offsetX,
      headerOffsetY: offsetY,
    })
  }
  
  _onMouseOut = () => {
    this.setState({
      heroOffsetX: 0,
      heroOffsetY: 0,
    })
  }
  
  render() {
 
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
          <div><span>{text.hero.a}</span> {text.hero.fcp}</div>
        </h1>
        <h1 className='header__header-clone'>
          <span>{text.hero.a}</span> {text.hero.fcp}
        </h1>
        
        {/* Position the button-wrapper in absolute, so the button inside the wrapper don't need to have the absolute positioning */}
        <div className="header__button-wrapper">
              {/* The button has the styling, and the wave-effect that requires relative positioning */}
              <div
                  className="header__button
                             waves-effect
                             waves-light"
                  onClick={() => this.props.handleScrollToRef()}
              >
                {text.hero.button}
              </div>
        </div>
        
      </header>
    )
  }
}
