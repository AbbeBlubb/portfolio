import React from "react"
import data from "../data"
import "./list.css"
import ListItem from "./ListItem";


class List extends React.Component {

  render() {
    return (
      <div className="list-main">
        <div className="empty"></div>
        {data.map((element) => (
          <ListItem
            key={element.id}
            id={element.id}
            name={element.name}
            short={element.short}
            description={element.description}
            img={element.imgFileName}
          />
        ))}
        <div className="empty"></div>
      </div>
    )
  }
}

export default List