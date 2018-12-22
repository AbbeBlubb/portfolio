import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Hero from "../components/Hero"
import { ProjectList } from "../components/ProjectList"
import { About } from "../components/About"

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path='/' component={Hero} />
        <Route path="/" component={ProjectList} />
        <Route path='/' component={About} />
      </div>
    </BrowserRouter>
  )
}
