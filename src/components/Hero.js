import React from "react"
import text from "../assets/text"

export default class Hero extends React.Component {

  constructor(props){
    super(props)
    this.state={
      windowInnerHeight: window.innerHeight,
    }
  }
  
  componentDidMount() {
    console.log(`Inner height when componentDidMount: ${this.state.windowInnerHeight} px`)
    window.addEventListener('resize', this.getNewInnerHeight)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.table({
      'componentDidUpdate. Previous state of inner height': `${prevState.windowInnerHeight} px`,
      'componentDidUpdate. New inner height': `${this.state.windowInnerHeight} px`})
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.getNewInnerHeight)
  }
  
  handleScrollButtonClick = () => {
    window.scrollTo({
      top: this.state.windowInnerHeight + 1,
      behavior: "smooth"
    })
  }

  getNewInnerHeight = () => {
    this.setState({ windowInnerHeight: window.innerHeight})
  }
  
  render() {
    return (
      <header>
        <h1>
          <span>{text.header.a}</span> {text.header.fcp}
        </h1>
        <div
            className="header-button"
            onClick={() => this.handleScrollButtonClick()}>
          {text.header.button}
        </div>
      </header>
    )
  }
}

