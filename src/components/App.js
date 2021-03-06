import React from "react"
import '../helpers/waves'
import '../helpers/interactionListeners';
import smoothscroll from 'smoothscroll-polyfill'
import { LanguageStore } from '../contexts/LanguageStore'
import { LanguageSelector } from './language/LanguageSelector'
import { Header } from "./header/Header"
import { ProjectList } from "./projects/ProjectList"
import { About } from "./about/About"

smoothscroll.polyfill() //Polyfill needs to be called in order to make scrollTo.behavior work in all browsers

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
        <LanguageStore> {/* Wraps the whole app so all children will have axess to the context object */}
          <LanguageSelector />
          <Header
            handleScrollToRef={this.handleScrollToRef} />
          <ProjectList 
            refProp={this.refForScroll} /> {/*Send the ref through props in order to attatch it in child */}
          <About />
        </LanguageStore>
      </div>
    )
  }
}
