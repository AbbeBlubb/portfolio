import React from "react"
import data from "../assets/data"
import ListItem from "./ListItem"

export function List() {
  return (
    <div className="list">
      {data.map(element => (
        <ListItem
          key={element.id}
          id={element.id}
          name={element.name}
          short={element.short}
          description={element.description}
          link={element.link}
          img={element.imgFileName} />
      ))}
    </div>
  )
}
