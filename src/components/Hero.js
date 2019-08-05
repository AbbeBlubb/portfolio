import React from "react"
import text from "../assets/text"

export default class Hero extends React.Component {

  constructor(props){
    super(props)
    this.titleContainer = React.createRef() // The ref is created, see the JSX <header> element attributes
    this.state={
      heroOffsetX: 0,
      heroOffsetY: 0,
    }
  }
  
  handleScroll = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth"
    })
  }
  
  _onMouseMove = (e) => {
    /* Get the width and height of the Hero component (Header element) */
    const width = this.titleContainer.current.clientWidth // The properties of the ref are in the .current
    const height = this.titleContainer.current.clientHeight
    
    /* Get the cursors position in relation to the Hero: cursors position divided with the Hero's dimensions, then x100 to get percentage */
    const offsetX = e.nativeEvent.offsetX / width * 100
    const offsetY = e.nativeEvent.offsetY / height * 100
    
    this.setState({
      heroOffsetX: offsetX,
      heroOffsetY: offsetY,
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
      '--maskX': this.state.heroOffsetX,
      '--maskY': this.state.heroOffsetY,
    };
    
    return (
      <header
          className='hero'
          onMouseMove={this._onMouseMove}
          onMouseOut={this._onMouseOut}
          ref={this.titleContainer}
          style={maskStyle}>
        
        <h1 className='hero__header'>
          <div><span>{text.hero.a}</span> {text.hero.fcp}</div>
        </h1>
        <h1 className='hero__header-clone'>
          <span>{text.hero.a}</span> {text.hero.fcp}
        </h1>
        
        {/* Position the button-wrapper in absolute, so the button inside the wrapper don't need to have the absolute positioning */}
        <div className="hero__button-wrapper">
              {/* The button has the styling, and the wave-effect that requires relative positioning */}
              <div
                  className="hero__button
                             waves-effect
                             waves-light"
                  onClick={() => this.handleScroll()}
              >
                {text.hero.button}
              </div>
        </div>
        
      </header>
    )
  }
}

