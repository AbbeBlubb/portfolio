import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Hero from "../components/Hero"
import { ProjectList } from "../components/ProjectList"
import { About } from "../components/About"
import '../assets/waves'

export function AppRouter() {
  return (

    <div className="app">
      <Hero/>
      <ProjectList/>
      <About/>
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
