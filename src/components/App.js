import React from "react"
//import { BrowserRouter, Route } from "react-router-dom"
import { Header } from "./Header"
import { ProjectList } from "./ProjectList"
import { About } from "./About"
import '../assets/waves'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(); //Polyfill needs to be called in order to make scrollTo.behavior work in all browsers

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.refForScroll = React.createRef() //Ref object is created
  }

  handleScrollToRef = () => {
    window.scrollTo({
      left: 0, 
      top: this.refForScroll.current.offsetTop,
      behavior: "smooth" 
    })
  }

  render() {
    return (
      <div className="app">
        <Header
          handleScrollToRef={this.handleScrollToRef} />
        <ProjectList 
          refProp={this.refForScroll} /> {/*Send the ref through props in order to attatch it in child */}
        <About />
      </div>
    )
  }
}
