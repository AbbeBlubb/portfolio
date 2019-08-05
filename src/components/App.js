import React from "react"
//import { BrowserRouter, Route } from "react-router-dom"
import { Hero } from "./Hero"
import { ProjectList } from "./ProjectList"
import { About } from "./About"
import '../assets/waves'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(); //Polyfill needs to 

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
        <Hero
          handleScrollToRef={this.handleScrollToRef} />
        <ProjectList 
          refProp={this.refForScroll} /> {/*Send the ref through props in order to attatch in child */}
        <About />
      </div>

      /*
      <BrowserRouter>
        <div className="app">
          <Route path='/' component={Hero} />
          <Route path='/' component={ProjectList} />
          <Route path='/' component={About} />
        </div>
      </BrowserRouter>*/
    )
  }
}
